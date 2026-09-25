#!/bin/bash
# Starts the Metals MCP server (stdio transport) for the checkout containing this script.
# Used by .mcp.json; .codex/config.toml configures the same server for Codex.
# The cloud environment setup script (.claude/cloud-environment/setup.sh) pre-fetches this version.

set -euo pipefail

readonly METALS_VERSION=1.6.9
workspace="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

# Apps started from the macOS GUI, like the Claude desktop app, may not have the shell's PATH.
PATH="$PATH:/opt/homebrew/bin:/usr/local/bin:$HOME/.local/share/coursier/bin:$HOME/Library/Application Support/Coursier/bin"

for launcher in cs coursier; do
  if command -v "$launcher" > /dev/null; then
    exec "$launcher" launch "org.scalameta:metals-mcp_2.13:$METALS_VERSION" -- \
      --workspace "$workspace" --transport stdio
  fi
done
echo "metals-mcp.sh: Coursier (cs) not found; see https://get-coursier.io/docs/cli-installation" >&2
exit 1
