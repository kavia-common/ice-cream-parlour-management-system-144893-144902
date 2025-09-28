#!/bin/bash
cd /home/kavia/workspace/code-generation/ice-cream-parlour-management-system-144893-144902/icecream_parlour_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

