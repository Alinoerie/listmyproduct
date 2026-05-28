#!/bin/bash
# Vercel build hook — runs before Vercel packages and uploads the output.
# listmyproduct shares productpixl's DB, no schema push needed.
# We must run next build here so .next/ exists for Vercel to upload.
set -e
echo "==> [deploy-hook] Running production build..."
next build
echo "==> [deploy-hook] Build complete"
