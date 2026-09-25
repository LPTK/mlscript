#!/bin/bash
# Setup script for a Claude Code cloud environment for mlscript.
#
# Paste this file into the "Setup script" field of the cloud environment, and variables.env
# (next to this file) into its "Environment variables" field.
# As described in https://code.claude.com/docs/en/cloud-environments#setup-scripts,
# the script runs as root on Ubuntu 24.04 when the environment's cache is built,
# must exit with status 0, and must finish within about five minutes.
# Its output is also saved to $LOG_FILE, which outlives the setup run: the SessionStart hook
# (.claude/hooks/cloud-session-start.sh) tells each session's agent about the steps that failed.
#
# It provides what .github/workflows/copilot-setup-steps.yml sets up for GitHub's agent.
# The image already has a JDK (OpenJDK 21), Node.js (22) and npm, so this script installs sbt,
# Coursier (to launch the Metals MCP server of .mcp.json), and jvm-proxy-relay,
# points Coursier-based downloads at a mirror of Maven Central, and then fills the environment
# cache: it pre-fetches dependencies, compiles the compiler, and imports the build in Metals.
#
# jvm-proxy-relay: cloud sessions reach the internet only through an HTTP proxy given in
# HTTPS_PROXY, whose port differs between sessions and whose URL may embed credentials.
# curl and npm use it, but JVMs ignore proxy environment variables, and even when given the proxy
# as system properties they do not send credentials when opening HTTPS tunnels (CONNECT requests).
# The relay listens on the fixed address 127.0.0.1:$RELAY_PORT without authentication and forwards
# requests to the proxy of the environment it was started from, adding its credentials, if any;
# JAVA_TOOL_OPTIONS in variables.env points every JVM at the relay.
# Processes started by this script do not survive into sessions, so the sbt, cs and coursier
# commands installed here start the relay (`jvm-proxy-relay ensure`) whenever they run.
# Which proxy, if any, this script itself runs behind is not documented, so it only points its own
# JVMs at the relay when there is a proxy to relay to, and otherwise lets them connect directly;
# $LOG_FILE records which case applied.
#
# Maven Central mirror: repo1.maven.org, Maven Central's CDN, answers HTTP 429 (Too Many Requests)
# to a large share of concurrent downloads from cloud sessions (a quarter of 40 parallel requests
# for the same file, when measured), presumably because sessions share their egress addresses.
# Coursier-based tools (the Coursier launcher itself, the sbt launcher, sbt's dependency resolution,
# Metals and Bloop) give up on such files, so the first launch of each of them usually fails.
# Google's mirror of Maven Central answered all of the same 40 requests, so Coursier's mirror
# configuration, which all of these tools read, redirects Maven Central to it (see configure_maven_mirror).
#
# Everything is downloaded from Google's mirror of Maven Central and from raw.githubusercontent.com,
# for scripts pinned by tag or commit and by checksum; both are reachable with this environment's
# network access settings. GitHub release assets are avoided: the sessions' GitHub proxy only serves
# them for the repositories attached to the session.

set -uo pipefail

readonly SBT_VERSION=1.12.12
readonly SBT_LAUNCHER_SHA256=f31f25d7c5ec1b53787870f9b223434087dfb9e1f235219d7cfaf77dfbbcd754
# The `sbt` runner script at tag v$SBT_VERSION of github.com/sbt/sbt
readonly SBT_RUNNER_SHA256=d9ff24213ac4df2d10febf94098e5b634e01e8d179d13eeba47042624b3dfe16
# The JVM-based Coursier 2.1.25-M26 launcher; unlike the native `cs` binary, it honors JAVA_TOOL_OPTIONS.
# (The 2.1.25 JVM launchers crash: they put both the Scala 2.13 and Scala 3 builds of cats on the classpath.)
readonly COURSIER_LAUNCHERS_COMMIT=15f36c167c30be237105f923151adaf177e7ee61
readonly COURSIER_SHA256=c62c6feb15bf9cb9374dc61431c8f96f1d9cfd84ea79b40aa239b29f293623bf
# Keep in sync with .claude/scripts/metals-mcp.sh, which launches the same version in sessions.
readonly METALS_VERSION=1.6.9
# Must match the proxy ports in JAVA_TOOL_OPTIONS in variables.env.
readonly RELAY_PORT=18080
# Google's mirror of Maven Central; see "Maven Central mirror" above.
readonly MAVEN_CENTRAL_MIRROR=https://maven-central.storage-download.googleapis.com/maven2
# Read by .claude/hooks/cloud-session-start.sh, which looks for the $FAILED_STEP_PREFIX lines.
readonly LOG_FILE=/var/log/mlscript-cloud-setup.log
readonly FAILED_STEP_PREFIX="SETUP STEP FAILED:"
# The warm-up steps must be done this many seconds after the script starts, which leaves a margin
# before the time limit of about five minutes for the installation steps and the final cleanup.
readonly WARM_UP_DEADLINE=$((SECONDS + 270))


exec > >(tee "$LOG_FILE") 2>&1
echo "==> mlscript cloud environment setup, $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
# Steps may run in background subshells, so their failures are collected in a file.
failed_steps_file=$(mktemp)

step() { # description command...
  local description=$1 status
  shift
  echo "==> $description"
  "$@"
  status=$?
  if [ "$status" -ne 0 ]; then
    echo "$FAILED_STEP_PREFIX $description (exit status $status); continuing"
    echo "$description" >> "$failed_steps_file"
  fi
}

# Prints the number of seconds left before WARM_UP_DEADLINE, minus the argument, and fails if
# that is less than 30s, too little for any warm-up step to be useful.
time_left() { # margin
  local left=$((WARM_UP_DEADLINE - SECONDS - $1))
  if [ "$left" -lt 30 ]; then
    echo "not enough time left before the deadline (${left}s)" >&2
    return 1
  fi
  echo "$left"
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
  fetch "$MAVEN_CENTRAL_MIRROR/org/scala-sbt/sbt-launch/$SBT_VERSION/sbt-launch-$SBT_VERSION.jar" \
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

# Coursier-based tools read mirror.properties from Coursier's configuration directory.
# Each mirror redirects a single repository URL: the Coursier launcher does not understand
# the comma-separated lists of URLs that the `from` property of Coursier's library accepts.
configure_maven_mirror() (
  set -e
  local dir="${XDG_CONFIG_HOME:-$HOME/.config}/coursier"
  mkdir -p "$dir"
  cat > "$dir/mirror.properties" <<EOF
# Written by the mlscript cloud environment setup script (.claude/cloud-environment/setup.sh),
# whose "Maven Central mirror" comment explains it. If an artifact that is on Maven Central cannot
# be found (a mirror can lag behind), deleting this file makes downloads go to Maven Central again.
central.from=https://repo1.maven.org/maven2
central.to=$MAVEN_CENTRAL_MIRROR
apache.from=https://repo.maven.apache.org/maven2
apache.to=$MAVEN_CENTRAL_MIRROR
EOF
)

# Points the JVMs started by this script at jvm-proxy-relay if there is a proxy to relay to,
# and otherwise lets them connect directly (see "jvm-proxy-relay" above).
# JAVA_TOOL_OPTIONS may already hold the relay settings of variables.env, if these also apply
# to this script, so they are removed first: with no relay running, they make JVMs' connections fail.
configure_jvm_network() {
  local proxy=${HTTPS_PROXY:-${https_proxy:-${HTTP_PROXY:-${http_proxy:-}}}}
  JAVA_TOOL_OPTIONS=$(sed -E 's/(^| )-Dhttps?\.proxy(Host|Port)=[^ ]*//g; s/^ +//' <<< "${JAVA_TOOL_OPTIONS:-}")
  if [ -z "$proxy" ]; then
    echo "No proxy is configured: JVMs connect directly"
  else
    # The proxy URL may contain credentials, which must not be logged.
    echo "Proxy: $(sed -E 's#//[^@/]*@#//<credentials>@#' <<< "$proxy")"
    jvm-proxy-relay ensure || return
    JAVA_TOOL_OPTIONS+="${JAVA_TOOL_OPTIONS:+ }-Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=$RELAY_PORT"
    JAVA_TOOL_OPTIONS+=" -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=$RELAY_PORT"
  fi
  if [ -n "$JAVA_TOOL_OPTIONS" ]; then
    export JAVA_TOOL_OPTIONS
    echo "JAVA_TOOL_OPTIONS=$JAVA_TOOL_OPTIONS"
  else
    unset JAVA_TOOL_OPTIONS
  fi
}


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

# The warm-up steps below fill the environment cache so that sessions start faster.
# Each is bounded by WARM_UP_DEADLINE, to stay within the time limit of this script.

warm_up_npm() {
  # Fills npm's cache; the SessionStart hook runs `npm ci` in each session.
  local left
  left=$(time_left 0) && (cd "$checkout" && timeout "$left" npm ci --no-audit --no-fund)
}

fetch_metals() {
  local left
  left=$(time_left 0) && timeout "$left" cs fetch "org.scalameta:metals-mcp_2.13:$METALS_VERSION" > /dev/null
}

# Downloads sbt and the build's dependencies, and compiles the compiler (hkmc2JVM), so that
# import_build_in_metals, which runs next, fits in its time limit: Metals' build import runs
# `sbt bloopInstall`, which compiles hkmc2JVM when it is not already compiled.
warm_up_sbt() {
  local left
  # Leaves at least 100s for import_build_in_metals.
  left=$(time_left 100) && (cd "$checkout" && timeout "$left" sbt -batch update hkmc2JVM/compile)
}

# Without a checkout, at least downloads sbt itself, using an empty project.
warm_up_sbt_launcher() {
  local project left
  left=$(time_left 0) || return
  project=$(mktemp -d)
  mkdir "$project/project"
  echo "sbt.version=$SBT_VERSION" > "$project/project/build.properties"
  (cd "$project" && timeout "$left" sbt -batch about)
  local status=$?
  rm -rf "$project"
  return "$status"
}

# Metals imports the build when its MCP server starts: it runs `sbt bloopInstall`, then starts
# a Bloop server and connects to it. A server that has not finished importing within two minutes
# exits with a fatal error (see `start` in Metals' StandaloneMcpService), and the first import in
# a checkout takes about that long. Importing the build here leaves the Bloop configuration (.bloop),
# Metals' database (.metals) and the downloaded Bloop and Metals components in the environment cache,
# so that the Metals servers of sessions only need to start Bloop and connect to it.
import_build_in_metals() {
  local left
  left=$(time_left 0) || return
  (cd "$checkout" && python3 - "$left" cs launch "org.scalameta:metals-mcp_2.13:$METALS_VERSION" -- \
    --workspace "$checkout" --transport stdio) <<'PYTHON'
"""Starts the Metals MCP server whose command follows the time limit (in seconds) in the arguments,
waits until it has imported the build, and stops it."""

import json
import queue
import subprocess
import sys
import threading
import time

started = time.monotonic()
deadline = started + float(sys.argv[1])
server = subprocess.Popen(sys.argv[2:], stdin=subprocess.PIPE, stdout=subprocess.PIPE)
lines = queue.Queue()


def read_lines():
    for line in server.stdout:
        lines.put(line)
    lines.put(None)


threading.Thread(target=read_lines, daemon=True).start()
last_id = 0


def send(message):
    server.stdin.write(json.dumps({"jsonrpc": "2.0", **message}).encode() + b"\n")
    server.stdin.flush()


def request(method, params):
    """Returns the result of an MCP request; raises queue.Empty when the deadline passes."""
    global last_id
    last_id += 1
    send({"id": last_id, "method": method, "params": params})
    while True:
        line = lines.get(timeout=max(0.0, deadline - time.monotonic()))
        if line is None:
            raise EOFError(f"the server exited with status {server.wait()}")
        try:
            message = json.loads(line)
        except ValueError:
            continue  # Not an MCP message: stray output of the server
        if message.get("id") == last_id:
            if "error" in message:
                raise RuntimeError(f"{method} failed: {message['error']}")
            return message["result"]


status = 1
try:
    request("initialize", {"protocolVersion": "2025-06-18", "capabilities": {},
                           "clientInfo": {"name": "mlscript-cloud-setup", "version": "1"}})
    send({"method": "notifications/initialized"})
    while True:
        # Until the build is imported, list-modules answers "No modules (build targets) found".
        result = request("tools/call", {"name": "list-modules", "arguments": {}})
        text = "".join(item.get("text", "") for item in result.get("content", []))
        if text.startswith("Available modules"):
            print(f"Metals imported the build in {time.monotonic() - started:.0f}s")
            status = 0
            break
        time.sleep(5)
except queue.Empty:
    print("Metals did not finish importing the build before the deadline", file=sys.stderr)
except (EOFError, OSError, RuntimeError) as e:
    print(f"Metals failed to import the build: {e}", file=sys.stderr)
finally:
    server.terminate()  # Metals shuts down cleanly on SIGTERM.
    try:
        server.wait(30)
    except subprocess.TimeoutExpired:
        server.kill()
sys.exit(status)
PYTHON
}

# The Bloop server that Metals starts outlives Metals. It would not survive into sessions anyway,
# but it could keep this script's output open, and so keep the script from finishing.
stop_bloop() {
  local pid
  pid=$(cat "${XDG_DATA_HOME:-$HOME/.local/share}/scalacli/bloop/daemon/pid" 2>/dev/null) || return 0
  # Guards against the PID file being stale and its PID reused by another process.
  grep -q BloopServer "/proc/$pid/cmdline" 2>/dev/null || return 0
  kill "$pid"
  for _ in $(seq 50); do
    [ -d "/proc/$pid" ] || return 0
    sleep 0.2
  done
  kill -9 "$pid"
}


step "Install jvm-proxy-relay" install_relay
step "Install sbt $SBT_VERSION" install_sbt
step "Install Coursier" install_coursier
step "Configure the Maven Central mirror" configure_maven_mirror
step "Configure the JVMs' network access" configure_jvm_network

# The PIDs of the warm-up steps run in parallel are waited for explicitly: a plain `wait` would
# also wait for the `tee` process substitution that saves the output, which never ends before the script.
checkout=$(find_checkout)
echo "==> mlscript checkout: ${checkout:-not found, skipping its dependencies}"
warm_ups=()
if [ -n "$checkout" ]; then
  step "Pre-fetch npm packages" warm_up_npm & warm_ups+=($!)
  step "Pre-fetch Metals MCP $METALS_VERSION" fetch_metals & warm_ups+=($!)
  step "Pre-fetch the build's dependencies and compile hkmc2JVM" warm_up_sbt & warm_ups+=($!)
  wait "${warm_ups[@]}"
  step "Import the build in Metals" import_build_in_metals
  step "Stop Bloop" stop_bloop
else
  step "Pre-fetch sbt $SBT_VERSION" warm_up_sbt_launcher & warm_ups+=($!)
  step "Pre-fetch Metals MCP $METALS_VERSION" fetch_metals & warm_ups+=($!)
  wait "${warm_ups[@]}"
fi

step "Stop jvm-proxy-relay" jvm-proxy-relay stop

if [ -s "$failed_steps_file" ]; then
  echo "==> Setup finished after ${SECONDS}s; failed steps:"
  sed 's/^/  - /' "$failed_steps_file"
else
  echo "==> Setup finished after ${SECONDS}s; all steps succeeded"
fi
rm -f "$failed_steps_file"
exit 0
