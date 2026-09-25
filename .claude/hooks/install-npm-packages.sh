#!/bin/bash
# SessionStart hook (see .claude/settings.json): in Claude Code cloud sessions, installs the npm
# packages that the tests need at runtime (TypeScript, Binaryen). Local sessions are left alone.
# A SessionStart hook's stdout is added to Claude's context, so all output goes to stderr.

[ "${CLAUDE_CODE_REMOTE:-}" = true ] || exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0

# `npm ci` reinstalls node_modules from scratch, so only run it when package-lock.json changed
# since the last installation, which is recorded in this file.
stamp=node_modules/.package-lock.sha256
expected=$(sha256sum package-lock.json | cut -d ' ' -f 1)
if [ "$(cat "$stamp" 2> /dev/null)" != "$expected" ]; then
  if npm ci --no-audit --no-fund >&2; then
    echo "$expected" > "$stamp"
  else
    echo "WARNING: npm ci failed; tests that need TypeScript or Binaryen will fail" >&2
  fi
fi
exit 0
