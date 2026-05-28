#!/bin/bash
# Runs before every Vercel build.
# On production deployments, syncs the Prisma schema to the database first.
# This prevents "table/column does not exist" errors after schema changes.

set -e

echo "==> [deploy-hook] Skipping schema push (listmyproduct shares productpixl db)"
echo "==> [deploy-hook] Starting build..."

# Run the actual build
echo "==> [deploy-hook] Starting build..."
next build
