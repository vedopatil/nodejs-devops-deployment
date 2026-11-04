#!/bin/bash
set -e

cd /home/vedo/nodejs-devops-deployment

git pull origin main
npm ci
/usr/local/bin/pm2 restart nextastra-app