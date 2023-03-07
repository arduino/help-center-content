---
title: "Update Wi-Fi firmware on Portenta H7 boards"
id: 4403365234322
---

In this article, we will go through a step-by-step process on how to get the latest Wi-Fi firmware on your Portenta H7 board.

## Supported boards

* Portenta H7
* Portenta H7 Connected

## Before you begin

* [Install the latest version](https://support.arduino.cc/hc/en-us/articles/360016119519-Add-boards-to-Arduino-IDE) of **"Arduino Mbed OS Portenta Boards"** in Arduino IDE.
* [Install the latest bootloader for Portenta H7](https://support.arduino.cc/hc/en-us/articles/4404067649554)

## Instructions

1. Connect your Portenta H7 to your computer using a USB-C cable.

2. Select **Portenta H7 (M7 core)** in the board selector, or use the _Tools > Port_ and _Tools > Board_ menus.

3. Open the `WiFiFirmwareUpdater` sketch by selecting _File > Examples > STM32H747_System > WiFiFirmwareUpdater_ in the menu bar.

4. ![Upload button](img/symbol_upload2.png) **Upload** the sketch, wait for the upload to complete and then open the Serial Monitor.

5. If you get a message like:

   ```
   Searching for WiFi firmware file 4343WA1.BIN ...
   A WiFi firmware is already installed. Do you want to install the firmware anyway? Y/[n]
   ```

   Enter and send `Y` to continue.

6. Wait a few seconds till you get the message `Firmware and certificates updated!` in the serial monitor.

## Troubleshooting

* If you get an `Compilation error: QSPIFBlockDevice.h: No such file or directory` error, check your board selection and note that this sketch is not compatible with Portenta X8[^1].

[^1]: https://github.com/arduino/ArduinoCore-mbed/issues/529
