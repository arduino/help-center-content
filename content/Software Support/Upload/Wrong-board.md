---
title: "If Arduino IDE misidentifies your board"
---

Learn what to do if Arduino IDE misidentifies your board.

In this article:

* [Reset manual board selection](#manual-selection)
* [If your UNO R4 WiFi or Nano ESP32 is identified as a generic ESP32 board](#generic-esp32)

---

<a id="manual-selection"></a>

## Reset manual board selection

While Arduino IDE Will identify and select most board automatically, the default selection can be overridden with a manual selection. This selection will be remembered the next time you connect the board.

To see if a manual selection is being made, look for an **Reset** arrow icon to the right of the board name (under the **Edit** button).

* If the Reset symbol is present, click it to restore the default selection.
* If the Reset symbol is not present, no manual selection has been made.

![Resetting the default board selection.](img/board-selector-reset.png)

---

<a id="generic-esp32"></a>

## If your UNO R4 WiFi or Nano ESP32 is identified as a generic ESP32 board

* If you're using an **Arduino Nano ESP32**, but it's being detected as generic ESP32 boards, the Arduino bootloader may be missing. To solve the issue, [reset the default Arduino bootloader](https://support.arduino.cc/hc/en-us/articles/9810414060188-Reset-the-Arduino-bootloader-on-the-Nano-ESP32).

* If you're using an **Arduino UNO R4 WiFi**, but it's being detected as a ESP32 board, the USB bridge firmware may be missing. To solve the issue, follow [these instructions to restore the firmware using espflash](https://support.arduino.cc/hc/en-us/articles/9670986058780-Update-the-connectivity-module-firmware-on-UNO-R4-WiFi#espflash).
