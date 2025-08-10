#!/bin/bash

# Build script for Render
npm ci
npm run build

# Copy _redirects to dist folder if it doesn't exist
if [ ! -f "./dist/_redirects" ]; then
  cp ./public/_redirects ./dist/_redirects
fi

echo "Build completed successfully"
