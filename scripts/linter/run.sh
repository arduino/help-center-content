#!/usr/bin/env bash

# 1. Load NVM silently into this shell session
source ~/.nvm/nvm.sh > /dev/null 2>&1

# 2. Try to use the .nvmrc version, or install it if missing (silently)
nvm use > /dev/null 2>&1 || nvm install > /dev/null 2>&1

# 3. Run the actual linter script
node markdownlint.js