---
title: "Update Wi-Fi firmware on GIGA R1 WiFi"
---

In this article, we will go through a step-by-step process on how to get the latest Wi-Fi firmware on your GIGA R1 WiFi board.

## Before you begin

* Add the **Arduino Mbed OS Giga Boards** to Arduino IDE using the [Boards Manager](https://support.arduino.cc/hc/en-us/articles/360016119519-Add-boards-to-Arduino-IDE).

## Instructions

1. Connect your GIGA R1 WiFi to your computer using a USB-C cable.

2. Select your board in the board selector, or use the _Tools > Port_ and _Tools > Board_ menus.

3. Open the `WiFiFirmwareUpdater` sketch by selecting _File > Examples > STM32H747_System > WiFiFirmwareUpdater_ in the menu bar.

4. ![Upload button](img/symbol_upload2.png) **Upload** the sketch, wait for the upload to complete and then open the Serial Monitor.

5. If you get a message like:

   ```
   Searching for WiFi firmware file 4343WA1.BIN ...
   A WiFi firmware is already installed. Do you want to install the firmware anyway? Y/[n]
   ```

   Enter and send `Y` to continue.

6. Wait a few seconds till you get the message `Firmware and certificates updated!` in the serial monitor.
