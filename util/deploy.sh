#!/usr/bin/env bash
set -xe
npm install
./node_modules/grunt-cli/grunt
aws s3 sync ./build s3://form.asyouareboudoir.com/
