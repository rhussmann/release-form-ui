#!/usr/bin/env bash
set -xe
npm install
./node_modules/grunt-cli/bin/grunt
aws s3 mb s3://form.asyouareboudoir.com/
aws s3 website s3://form.asyouareboudoir.com/ \
    --index-document index.html --error-document error.html
aws s3api put-bucket-policy --bucket form.asyouareboudoir.com \
    --policy file://${PWD}/util/policy.json
aws s3 sync ./build s3://form.asyouareboudoir.com/
