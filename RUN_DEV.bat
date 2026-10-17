@echo off
title SGL React App - Dev Server
cd /d "%~dp0"

echo ===================================================
echo   Starting SGL React Application...
echo ===================================================

start http://localhost:5173
call npm run dev
pause
