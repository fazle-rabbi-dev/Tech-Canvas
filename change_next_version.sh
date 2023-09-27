#!/usr/bin/bash

# This script created to switch next.js version to 13.1.0
# Cause: Next.js 13.1.0 is best for work with next.js in Android Phone with 2Gb Ram! 😳

echo '{
  "name": "next_template_pagesdir",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "autoprefixer": "10.4.15",
    "next": "13.1.0",
    "postcss": "8.4.29",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-top-loading-bar": "^2.3.1",
    "tailwindcss": "3.3.3"
  }
}' > package.json && npm i
