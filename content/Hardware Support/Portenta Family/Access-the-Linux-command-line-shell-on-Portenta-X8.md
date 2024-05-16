---
title: Access the Linux command-line shell on Portenta X8
id: 14013004356124
---

Learn how to use Android Debug Bridge to access the command-line shell on Portenta X8.

---

## Before you begin

* Connect your Portenta X8 to your computer using a USB cable.
* Install the **Arduino Mbed OS Portenta Boards** package using the [Boards Manager in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/360016119519-Add-boards-to-Arduino-IDE) or [Arduino CLI](https://arduino.github.io/arduino-cli/0.35/getting-started/#install-the-core-for-your-board).
  * If you do not wish to install the board package, you can [download the Android SDK Platform-Tools from here](https://developer.android.com/tools/releases/platform-tools#downloads). Note that you'll need to modify the commands in the next step.

## Connect to the command-line shell

Follow these steps to connect to the Linux command-line shell on Portenta X8:

* [Windows](#Windows)
* [macOS](#macOS)
* [Linux](#Linux)

### Windows{#Windows}

1. Open Command Prompt.

1. Run the following command to enter the `adb` folder:

   ```
   cd %localappdata%\Arduino15\packages\arduino\tools\adb
   ```

1. Run this command to list the installed versions:

   ```
   dir
   ```

1. Open the installed version:

   ```
   cd <folder name>
   ```

1. Run this command to open the shell:

   ```
   adb.exe shell
   ```

### macOS{#macOS}

1. Open Terminal.

1. Run the following command to enter the `adb` folder:

   ```
   cd ~/Library/Arduino15/packages/arduino/tools/adb
   ```

1. Run this command to list the installed versions:

   ```
   ls
   ```

1. Open the installed version:

   ```
   cd <folder name>
   ```

1. Run this command to open the shell:

   ```
   ./adb shell
   ```

### Linux{#Linux}

1. Open Terminal.

1. Run the following command to enter the `adb` folder:

   ```
   cd ~/.arduino15/packages/arduino/tools/adb
   ```

1. Run this command to list the installed versions:

   ```
   ls
   ```

1. Open the installed version:

   ```
   cd <folder name>
   ```

1. Run this command to open the shell:

   ```
   ./adb shell
   ```
