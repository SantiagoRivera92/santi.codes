#!/usr/bin/env bash
# cf-switch.sh — Switch between Cloudflare accounts for deployment
#
# Usage:
#   source scripts/cf-switch.sh <account-name>
#
#   This sources a .env.<account-name> file and exports its variables
#   so wrangler uses the correct credentials.
#
# Setup:
#   cp .env.example .env.personal    # edit with personal Cloudflare creds
#   cp .env.example .env.work        # edit with work Cloudflare creds
#
# Then run:  source scripts/cf-switch.sh personal
# Or add this alias to your shell:  alias cfswitch='source scripts/cf-switch.sh'

set -a

ACCOUNT="$1"

if [ -z "$ACCOUNT" ]; then
  echo "Usage: source scripts/cf-switch.sh <account-name>"
  echo ""
  echo "Available accounts:"
  for f in .env.*; do
    [ -f "$f" ] && echo "  ${f#.env.}"
  done
  return 1 2>/dev/null || exit 1
fi

ENV_FILE=".env.$ACCOUNT"

if [ ! -f "$ENV_FILE" ]; then
  echo "Error: $ENV_FILE not found."
  echo "Create it from .env.example:  cp .env.example $ENV_FILE"
  return 1 2>/dev/null || exit 1
fi

# Clear any existing Cloudflare env vars
unset CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID

source "$ENV_FILE"

if [ -z "$CLOUDFLARE_API_TOKEN" ] || [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
  echo "Error: CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID must be set in $ENV_FILE"
  return 1 2>/dev/null || exit 1
fi

echo "Switched to Cloudflare account: $ACCOUNT"
echo "  Account ID: $CLOUDFLARE_ACCOUNT_ID"
echo "  Ready to deploy. Run: npm run deploy"
