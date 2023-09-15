---
title: "Use stack backtrace to debug a sketch for UNO R4 WiFi"
---

The UNO R4 WiFi uses [CmBacktrace](https://github.com/armink/CmBacktrace) to print useful information in the serial output when a runtime error occurs. The output includes an `addr2line` command that can be used to find the line in your sketch where the runtime error occurred.

## Requirements

To use the backtrace, the following must be true:

* The board must be a UNO R4 WiFi. The UNO R4 Minima does not have backtrace functionality.
* A serial connection must be initiated before the error occurs, by calling [Serial.begin()](https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/) in your sketch.
* The Serial Monitor must be open.
* `addr2line` must be installed on your system:
  * **Windows:** `addr2line` is not available as a native Windows application, but can be run with [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install). The Ubuntu distribution of Linux is installed by default and should come with `addr2line`. Otherwise, install it with `apt-get install binutils`.
  * **macOS:** `addr2line` can be installed with [Homebrew](https://brew.sh/) by running `brew install binutils` in Terminal.
  * **Linux:** `addr2line` may already be installed on your system. Otherwise, run `apt-get install binutils` in Terminal (Ubuntu, Debian), or see [command-not-found.com/addr2line](https://command-not-found.com/addr2line) for other distributions.

## Instructions

Follow these steps to run the `addr2line` command:

1. Look at the last line in the serial monitor output, which starts with `Show more call stack info by run:`.
2. Copy the `addr2line` command. Make sure to include the full command, for example:

   `addr2line -e "/private/var/folders/58/gntldnl9249ck9fjblgv9jdw0000gp/T/arduino/sketches/EE268ECDDB1E91C34016236A92C09AA0/ErrorInducer.ino".elf -a -f 00004188 00008718 0000426e 00009bd4 00009c12 00004296 0000753a 00007530`

3. **Windows only:** Paste the command in a text editor. Replace "C:" with "/mnt/c" and replace **all** backslashes (\\) with forward slashes (/).
4. Open Terminal (macOS, Linux) or [Windows Powershell](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/starting-windows-powershell?view=powershell-7.3).
   * **Windows only:** Type `Ubuntu` into Windows Powershell and press <kbd>Enter</kbd>.
5. Paste the `addr2line` command (or the `addr2line` command altered in step 3, if using **Windows**) and press <kbd>Enter</kbd>.
6. Look for the first line that includes the path to your sketch. The line number where the error occurred follows immediately after. For example, `/Users/username/Documents/Arduino/ErrorInducer/ErrorInducer.ino:67` indicates that the error occurred on line 67.
7. Find the line in Arduino IDE. Line numbers are printed to the left of each line of code. Analyze the row where the error occurred.

   In this example, an out-of-bounds access of the `numbers` array occurs after a few iterations of the `while(true)` loop:

   ![Analyzing the code.](img/addr2line-example.png)
