#!/bin/bash
# SessionStart hook (see .claude/settings.json) for Claude Code cloud sessions; local sessions are
# left alone. In order, it brings the session's branch up to date, reports the steps of the cloud
# environment's setup script (.claude/cloud-environment/setup.sh) that failed, and installs the npm
# packages that the tests need at runtime (TypeScript, Binaryen).
# A SessionStart hook's stdout is added to Claude's context, so only messages for the agent go there;
# everything else goes to stderr.

[ "${CLAUDE_CODE_REMOTE:-}" = true ] || exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0


# Sessions start from the clone saved in the environment cache when it was built. A session was
# observed to fetch the current commit of its branch, and then to check out the local branch of that
# name that the saved clone already had, which pointed to an older commit; the session then lacked,
# e.g., the .mcp.json added in between. So the branch is fast-forwarded to its remote counterpart,
# unless it has local commits or changes to tracked files, in which case the agent is told.
sync_branch() {
  local branch remote before behind
  branch=$(git symbolic-ref --quiet --short HEAD) || return 0
  remote="origin/$branch"
  git fetch --quiet origin "+refs/heads/$branch:refs/remotes/$remote" >&2 || return 0
  before=$(git rev-parse --short HEAD)
  behind=$(git rev-list --count "HEAD..$remote")
  [ "$behind" -gt 0 ] || return 0
  if ! git merge-base --is-ancestor HEAD "$remote"; then
    echo "Note: branch $branch and $remote have diverged ($behind commits only on $remote)."
  elif [ -n "$(git status --porcelain --untracked-files=no)" ]; then
    echo "Note: branch $branch is $behind commits behind $remote, but was not fast-forwarded" \
      "because it has uncommitted changes."
  elif git merge --quiet --ff-only "$remote" >&2; then
    echo "Note: the session started on commit $before of branch $branch, $behind commits behind" \
      "$remote, so the SessionStart hook fast-forwarded it to $(git rev-parse --short HEAD)." \
      "Changes that these commits make to .claude/settings.json or .mcp.json only apply to later sessions."
  else
    echo "Note: branch $branch is $behind commits behind $remote, and could not be fast-forwarded."
  fi
}

# setup.sh saves its output to this log, marking each failed step with the prefix grepped for here.
report_setup_failures() {
  local log=/var/log/mlscript-cloud-setup.log failed
  if [ ! -f "$log" ]; then
    echo "Note: $log is missing, so this cloud environment's setup script is not the current" \
      ".claude/cloud-environment/setup.sh: sbt, Coursier or Metals may be missing or misconfigured."
    return
  fi
  failed=$(grep '^SETUP STEP FAILED:' "$log")
  if [ -n "$failed" ]; then
    echo "Note: some steps of the cloud environment's setup script failed (details in $log):"
    echo "$failed"
  fi
}

# `npm ci` reinstalls node_modules from scratch, so it only runs when package-lock.json changed
# since the last installation, which is recorded in this file.
install_npm_packages() {
  local stamp=node_modules/.package-lock.sha256 expected
  expected=$(sha256sum package-lock.json | cut -d ' ' -f 1)
  if [ "$(cat "$stamp" 2> /dev/null)" != "$expected" ]; then
    if npm ci --no-audit --no-fund >&2; then
      echo "$expected" > "$stamp"
    else
      echo "Note: npm ci failed; tests that need TypeScript or Binaryen will fail."
    fi
  fi
}


# Brings the branch up to date first, as that can change package-lock.json.
sync_branch
report_setup_failures
install_npm_packages
exit 0
