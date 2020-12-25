#!/bin/zsh
echo "$(grep -v '^$gas' dist/main.js)" > dist/main.js