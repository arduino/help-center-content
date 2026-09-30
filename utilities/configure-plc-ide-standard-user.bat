@echo off
setlocal enabledelayedexpansion

echo ====================================================
echo Arduino PLC IDE - Standard User Configuration Tool
echo ====================================================
echo.

set "TARGET_DIR=%LOCALAPPDATA%\T"

if not exist "%TARGET_DIR%" (
    echo Creating directory "%TARGET_DIR%"...
    mkdir "%TARGET_DIR%"
    if !errorlevel! neq 0 (
        echo Error: Could not create directory "%TARGET_DIR%".
        goto :error
    )
) else (
    echo Target directory "%TARGET_DIR%" already exists.
)

set "SOURCE_SKETCH=C:\Program Files\Arduino PLC IDE Tools\sketch.yaml"
if not exist "%SOURCE_SKETCH%" (
    set "SOURCE_SKETCH=C:\Program Files (x86)\Arduino PLC IDE Tools\sketch.yaml"
)

if exist "!SOURCE_SKETCH!" (
    echo Copying sketch.yaml...
    copy "!SOURCE_SKETCH!" "%TARGET_DIR%" >nul
    if !errorlevel! neq 0 (
        echo Error: Failed to copy sketch.yaml to "%TARGET_DIR%".
        goto :error
    )
) else (
    echo Error: sketch.yaml was not found in:
    echo   "C:\Program Files\Arduino PLC IDE Tools\"
    echo   "C:\Program Files (x86)\Arduino PLC IDE Tools\"
    echo Please ensure Arduino PLC IDE Tools is installed.
    goto :error
)

echo Generating arduino-cli.yaml...
(
echo board_manager:
echo     additional_urls: []
echo directories:
echo     data: %LOCALAPPDATA%\T\A
echo     downloads: %LOCALAPPDATA%\T\D
echo     user: %LOCALAPPDATA%\T\U
echo output:
echo     no_color: true
) > "%TARGET_DIR%\arduino-cli.yaml"

if !errorlevel! neq 0 (
    echo Error: Failed to generate "%TARGET_DIR%\arduino-cli.yaml".
    goto :error
)

echo.
echo ====================================================
echo Configuration completed successfully!
echo ====================================================
echo.
echo You can now run Arduino PLC IDE as a standard user.
echo On your first compilation, the required tools and
echo libraries will be downloaded automatically.
echo.
pause
exit /b 0

:error
echo.
echo Configuration failed.
pause
exit /b 1