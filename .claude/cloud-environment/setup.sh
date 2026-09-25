#!/bin/bash
# Setup script for a Claude Code cloud environment for mlscript.
#
# Paste this file into the "Setup script" field of the cloud environment, and variables.env
# (next to this file) into its "Environment variables" field.
# As described in https://code.claude.com/docs/en/cloud-environments#setup-scripts,
# the script runs as root on Ubuntu 24.04 when the environment's cache is built,
# must exit with status 0, and must finish within about five minutes.
#
# It provides what .github/workflows/copilot-setup-steps.yml sets up for GitHub's agent.
# The image already has a JDK (OpenJDK 21), Node.js (22) and npm, so this script installs sbt,
# Coursier (to launch the Metals MCP server of .mcp.json), and jvm-proxy-relay,
# and then pre-fetches dependencies into the environment cache.
#
# jvm-proxy-relay: cloud sessions reach the internet only through an HTTP proxy whose URL,
# given in HTTPS_PROXY, embeds credentials. curl and npm use it, but JVMs ignore proxy
# environment variables, and even when given the proxy as system properties they do not send
# credentials when opening HTTPS tunnels (CONNECT requests). The relay listens on
# 127.0.0.1:$RELAY_PORT without authentication and forwards requests to the session's proxy,
# adding its credentials; JAVA_TOOL_OPTIONS in variables.env points every JVM at the relay.
# Processes started by this script do not survive into sessions, so the sbt, cs and coursier
# commands installed here start the relay (`jvm-proxy-relay ensure`) whenever they run.
#
# Everything is downloaded from hosts on the default "Trusted" network allowlist:
# Maven Central, and raw.githubusercontent.com for scripts pinned by tag or commit and by checksum.
# GitHub release assets are avoided: the sessions' GitHub proxy only serves them for the
# repositories attached to the session.

set -uo pipefail

readonly SBT_VERSION=1.12.12
readonly SBT_LAUNCHER_SHA256=f31f25d7c5ec1b53787870f9b223434087dfb9e1f235219d7cfaf77dfbbcd754
# The `sbt` runner script at tag v$SBT_VERSION of github.com/sbt/sbt
readonly SBT_RUNNER_SHA256=d9ff24213ac4df2d10febf94098e5b634e01e8d179d13eeba47042624b3dfe16
# The JVM-based Coursier 2.1.25-M26 launcher; unlike the native `cs` binary, it honors JAVA_TOOL_OPTIONS.
# (The 2.1.25 JVM launchers crash: they put both the Scala 2.13 and Scala 3 builds of cats on the classpath.)
readonly COURSIER_LAUNCHERS_COMMIT=15f36c167c30be237105f923151adaf177e7ee61
readonly COURSIER_SHA256=c62c6feb15bf9cb9374dc61431c8f96f1d9cfd84ea79b40aa239b29f293623bf
# Only pre-fetched here: keep in sync with .claude/scripts/metals-mcp.sh, which launches it.
readonly METALS_VERSION=1.6.9
# Must match the proxy ports in JAVA_TOOL_OPTIONS in variables.env.
readonly RELAY_PORT=18080


step() { # description command...
  local description=$1
  shift
  echo "==> $description"
  "$@" || echo "WARNING: $description failed (exit status $?); continuing" >&2
}

fetch() { # url sha256 destination
  curl -fsSL --retry 3 "$1" -o "$3.part" &&
    echo "$2  $3.part" | sha256sum --check --quiet &&
    mv "$3.part" "$3"
}

write_wrapper() { # command target
  cat > "/usr/local/bin/$1" <<EOF
#!/bin/bash
# Installed by the mlscript cloud environment setup script (.claude/cloud-environment/setup.sh):
# starts jvm-proxy-relay, through which JAVA_TOOL_OPTIONS routes the JVM's network access.
jvm-proxy-relay ensure || true
exec $2 "\$@"
EOF
  chmod +x "/usr/local/bin/$1"
}


install_relay() (
  set -e
  cat > /usr/local/bin/jvm-proxy-relay <<'PYTHON'
#!/usr/bin/env python3
"""Unauthenticated local HTTP proxy that forwards to the session's proxy with its credentials.

Installed by the mlscript cloud environment setup script, which explains why JVMs need it.

  jvm-proxy-relay ensure   start the relay unless it is already serving the current proxy settings
  jvm-proxy-relay stop     stop the relay
  jvm-proxy-relay serve    run the relay in the foreground

The upstream proxy comes from HTTPS_PROXY (or https_proxy, HTTP_PROXY, http_proxy).
A running relay keeps the credentials of the environment it was started from,
so `ensure` restarts it when these settings change.
Nothing is written to stdout: `ensure` runs before the Metals MCP server starts,
and that server's stdout is its MCP channel.
"""

import asyncio
import base64
import fcntl
import hashlib
import os
import signal
import socket
import subprocess
import sys
import time
import urllib.parse

PORT = @RELAY_PORT@
STATE_DIR = "/tmp/jvm-proxy-relay"
PID_FILE = os.path.join(STATE_DIR, "pid")
LOG_FILE = os.path.join(STATE_DIR, "log")

# Headers that only apply to the client's connection, and client credentials (replaced by ours).
DROPPED_HEADERS = (b"connection:", b"proxy-connection:", b"keep-alive:", b"proxy-authorization:")


def log(message):
    print(f"jvm-proxy-relay: {message}", file=sys.stderr, flush=True)


def upstream_proxy():
    """Returns (host, port, Proxy-Authorization value or None), or None if no proxy is configured."""
    for var in ("HTTPS_PROXY", "https_proxy", "HTTP_PROXY", "http_proxy"):
        url = os.environ.get(var)
        if url:
            break
    else:
        return None
    parts = urllib.parse.urlsplit(url if "://" in url else "http://" + url)
    if parts.scheme != "http" or not parts.hostname:
        # Do not print the URL, which contains the credentials.
        sys.exit(f"jvm-proxy-relay: unsupported proxy URL in {var} (expected http://[user:password@]host:port)")
    auth = None
    if parts.username is not None:
        credentials = f"{urllib.parse.unquote(parts.username)}:{urllib.parse.unquote(parts.password or '')}"
        auth = b"Basic " + base64.b64encode(credentials.encode())
    return parts.hostname, parts.port or 80, auth


async def pipe(reader, writer):
    """Copies `reader` to `writer` until EOF, then half-closes `writer`.
    On errors, aborts `writer` so that the copy in the other direction ends too."""
    try:
        while data := await reader.read(1 << 16):
            writer.write(data)
            await writer.drain()
        if writer.can_write_eof():
            writer.write_eof()
    except OSError:
        writer.transport.abort()


async def reject(writer, status):
    try:
        writer.write(b"HTTP/1.1 " + status + b"\r\nContent-Length: 0\r\nConnection: close\r\n\r\n")
        await writer.drain()
    except OSError:
        pass
    writer.close()


async def handle(client_reader, client_writer, upstream):
    try:
        head = await client_reader.readuntil(b"\r\n\r\n")
    except (asyncio.IncompleteReadError, asyncio.LimitOverrunError, OSError):
        client_writer.close()
        return
    request_line, *headers = head[:-4].split(b"\r\n")
    if len(request_line.split(b" ")) != 3:
        return await reject(client_writer, b"400 Bad Request")
    headers = [h for h in headers if not h.lower().startswith(DROPPED_HEADERS)]
    if not request_line.upper().startswith(b"CONNECT "):
        # Forward a single request per connection: the relay copies whatever follows the first
        # request head without parsing it, so later requests would reach the proxy without credentials.
        headers.append(b"Connection: close")
    host, port, auth = upstream
    if auth:
        headers.append(b"Proxy-Authorization: " + auth)
    try:
        upstream_reader, upstream_writer = await asyncio.open_connection(host, port)
    except OSError as e:
        log(f"cannot connect to the upstream proxy: {e}")
        return await reject(client_writer, b"502 Bad Gateway")
    upstream_writer.write(b"\r\n".join([request_line, *headers]) + b"\r\n\r\n")
    await asyncio.gather(pipe(client_reader, upstream_writer), pipe(upstream_reader, client_writer))
    upstream_writer.close()
    client_writer.close()


def serve():
    upstream = upstream_proxy()
    if upstream is None:
        sys.exit("jvm-proxy-relay: no proxy configured in HTTPS_PROXY or HTTP_PROXY")

    async def main():
        server = await asyncio.start_server(lambda r, w: handle(r, w, upstream), "127.0.0.1", PORT)
        async with server:
            await server.serve_forever()

    asyncio.run(main())


def read_pid_file():
    """Returns the PID of the relay that was last started and a fingerprint of its proxy settings."""
    try:
        with open(PID_FILE) as f:
            pid, fingerprint = f.read().split()
        return int(pid), fingerprint
    except (OSError, ValueError):
        return None, None


def is_relay(pid):
    """Whether `pid` is a running relay; checking the command line guards against PID reuse."""
    if not os.path.isdir("/proc/self"):  # No procfs, e.g., when testing this script on macOS
        try:
            os.kill(pid, 0)
            return True
        except OSError:
            return False
    try:
        with open(f"/proc/{pid}/cmdline", "rb") as f:
            return b"jvm-proxy-relay" in f.read()
    except OSError:
        return False


def port_open():
    try:
        socket.create_connection(("127.0.0.1", PORT), timeout=1).close()
        return True
    except OSError:
        return False


def terminate(pid):
    os.kill(pid, signal.SIGTERM)
    for _ in range(50):
        if not is_relay(pid):
            return
        time.sleep(0.1)


def ensure():
    upstream = upstream_proxy()
    if upstream is None:
        log("no proxy configured in HTTPS_PROXY or HTTP_PROXY, so the relay is not started;"
            " if this environment has direct network access, remove JAVA_TOOL_OPTIONS from its environment variables")
        return 1
    if f"-Dhttps.proxyPort={PORT}" not in os.environ.get("JAVA_TOOL_OPTIONS", ""):
        log(f"warning: JAVA_TOOL_OPTIONS does not point JVMs at the relay (-Dhttps.proxyHost=127.0.0.1"
            f" -Dhttps.proxyPort={PORT}); add it to the environment variables")
    fingerprint = hashlib.sha256(repr(upstream).encode()).hexdigest()
    os.makedirs(STATE_DIR, mode=0o700, exist_ok=True)
    with open(os.path.join(STATE_DIR, "lock"), "w") as lock:
        # Concurrent callers (e.g., the Metals MCP server and sbt starting together) wait for each other.
        fcntl.flock(lock, fcntl.LOCK_EX)
        pid, running_fingerprint = read_pid_file()
        if pid is not None and is_relay(pid):
            if running_fingerprint == fingerprint and port_open():
                return 0
            terminate(pid)
        with open(LOG_FILE, "ab") as log_file:
            process = subprocess.Popen(
                [sys.executable, os.path.abspath(__file__), "serve"], cwd="/", stdin=subprocess.DEVNULL,
                stdout=log_file, stderr=log_file, start_new_session=True)
        with open(PID_FILE, "w") as f:
            f.write(f"{process.pid} {fingerprint}\n")
        for _ in range(100):
            if port_open():
                return 0
            if process.poll() is not None:
                break
            time.sleep(0.05)
        log(f"failed to start; see {LOG_FILE}")
        return 1


def stop():
    pid, _ = read_pid_file()
    if pid is not None and is_relay(pid):
        terminate(pid)
    try:
        os.remove(PID_FILE)
    except OSError:
        pass
    return 0


if __name__ == "__main__":
    commands = {"ensure": ensure, "stop": stop, "serve": serve}
    if len(sys.argv) != 2 or sys.argv[1] not in commands:
        sys.exit(__doc__)
    sys.exit(commands[sys.argv[1]]())
PYTHON
  sed -i "s/@RELAY_PORT@/$RELAY_PORT/" /usr/local/bin/jvm-proxy-relay
  chmod +x /usr/local/bin/jvm-proxy-relay
)

install_sbt() (
  set -e
  mkdir -p /opt/sbt/bin
  fetch "https://raw.githubusercontent.com/sbt/sbt/v$SBT_VERSION/sbt" "$SBT_RUNNER_SHA256" /opt/sbt/bin/sbt
  # sbt's release packages fill in the runner's version placeholder (shown by `sbt --script-version`).
  sed -i "s/^declare init_sbt_version=_to_be_replaced\$/declare init_sbt_version=$SBT_VERSION/" /opt/sbt/bin/sbt
  chmod +x /opt/sbt/bin/sbt
  # The runner looks for the launcher next to itself.
  fetch "https://repo1.maven.org/maven2/org/scala-sbt/sbt-launch/$SBT_VERSION/sbt-launch-$SBT_VERSION.jar" \
    "$SBT_LAUNCHER_SHA256" /opt/sbt/bin/sbt-launch.jar
  write_wrapper sbt /opt/sbt/bin/sbt
)

install_coursier() (
  set -e
  mkdir -p /opt/coursier
  fetch "https://raw.githubusercontent.com/coursier/launchers/$COURSIER_LAUNCHERS_COMMIT/coursier" \
    "$COURSIER_SHA256" /opt/coursier/coursier
  chmod +x /opt/coursier/coursier
  write_wrapper cs /opt/coursier/coursier
  write_wrapper coursier /opt/coursier/coursier
)


# The repository is normally cloned before this script runs, but its location is not documented.
find_checkout() {
  local dir
  for dir in "$(git rev-parse --show-toplevel 2>/dev/null)" /home/*/* /root/* /workspace*/*; do
    if [ -f "$dir/build.sbt" ] && [ -d "$dir/hkmc2" ]; then
      echo "$dir"
      return
    fi
  done
}

# The warm-up steps below run in parallel, each with a time limit, to stay within the time budget.
# They only speed up the first commands of each session, so it is fine if they time out.

warm_up_sbt() {
  if [ -n "$checkout" ]; then
    (cd "$checkout" && timeout 210 sbt -batch update)
  else
    local project
    project=$(mktemp -d)
    mkdir "$project/project"
    echo "sbt.version=$SBT_VERSION" > "$project/project/build.properties"
    (cd "$project" && timeout 210 sbt -batch about)
    rm -rf "$project"
  fi
}

warm_up_metals() {
  timeout 210 cs fetch "org.scalameta:metals-mcp_2.13:$METALS_VERSION" > /dev/null
}

warm_up_npm() {
  # Fills npm's cache; the SessionStart hook in .claude/settings.json runs `npm ci` in each session.
  [ -z "$checkout" ] || (cd "$checkout" && timeout 210 npm ci --no-audit --no-fund)
}


step "Install jvm-proxy-relay" install_relay
step "Install sbt $SBT_VERSION" install_sbt
step "Install Coursier" install_coursier

# Sessions get JAVA_TOOL_OPTIONS from variables.env, which may not be set for this script.
export JAVA_TOOL_OPTIONS="-Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=$RELAY_PORT -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=$RELAY_PORT"
step "Start jvm-proxy-relay" jvm-proxy-relay ensure

checkout=$(find_checkout)
echo "==> mlscript checkout: ${checkout:-not found, skipping its dependencies}"
step "Pre-fetch sbt and the build's dependencies" warm_up_sbt &
step "Pre-fetch Metals MCP $METALS_VERSION" warm_up_metals &
step "Pre-fetch npm packages" warm_up_npm &
wait

step "Stop jvm-proxy-relay" jvm-proxy-relay stop
exit 0
