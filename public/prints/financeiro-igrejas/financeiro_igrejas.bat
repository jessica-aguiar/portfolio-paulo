@echo off
setlocal enabledelayedexpansion
set i=1
for %%a in (*.png) do (
  ren "%%a" "financeiro!i!.png"
  set /a i=!i!+1
)
echo Renomeados com sucesso!
pause
