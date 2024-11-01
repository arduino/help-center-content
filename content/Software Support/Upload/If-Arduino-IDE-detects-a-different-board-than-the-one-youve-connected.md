---
title: If Arduino IDE detects a different board than the one you've connected
id: 12070802257436
---

Learn what to do if Arduino IDE misidentifies your board.

In this article:

* [Reset manual board selection](#manual-selection)
* [If your UNO R4 WiFi or Nano ESP32 is identified as a generic ESP32 board](#generic-esp32)
* [If Arduino UNO (Rev3 or earlier), Mega, or classic Nano is misidentified](#misidentified-uno-mega-nano)

---

<a id="manual-selection"></a>

## Reset manual board selection

While Arduino IDE will detect and select most boards automatically, the default selection can be overridden with a manual selection. This selection will be remembered the next time you connect the board.

<!-- The reset button will show up under these conditions:

* Arduino IDE identified the port as a single specific board name:
* The board the user selected is different from the board Arduino IDE identified the port as

-->

Open the board selector and look for a **Reset** arrow icon to the right of the currently selected board and port. If the Reset symbol is present, click it to restore the default selection

![Resetting the default board selection.](img/board-selector-reset.png)

If the Reset symbol is not present, click "Select other board and port" at the bottom of the list and [manually select the correct board](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE#other-board-and-port).

---

<a id="generic-esp32"></a>

## If your UNO R4 WiFi or Nano ESP32 is identified as a generic ESP32 board

* If you're using an **Arduino Nano ESP32**, but it's being detected as a generic ESP32 board, the Arduino bootloader may be missing. To solve the issue, [reset the default Arduino bootloader](https://support.arduino.cc/hc/en-us/articles/9810414060188-Reset-the-Arduino-bootloader-on-the-Nano-ESP32).

* If you're using an **Arduino UNO R4 WiFi**, but it's being detected as an ESP32 board, the USB bridge firmware may be missing. To solve the issue, follow [these instructions to restore the firmware using espflash](https://support.arduino.cc/hc/en-us/articles/16379769332892-Restore-the-USB-connectivity-firmware-on-UNO-R4-WiFi-with-espflash).

---

<a id="misidentified-uno-mega-nano"></a>

## If Arduino UNO (Rev3 or earlier), Mega, or classic Nano is misidentified

* If your **UNO (Rev3 or earlier)** or **Mega** board is recognized as any of the following, it may indicate that the USB-to-Serial firmware is missing or corrupted:

  * Unknown Device
  * Composite Device
  * ATmega16u2 DFU
  * Atmega8U2 DFU

  To solve the issue, [flash the USB-to-serial firmware](https://support.arduino.cc/hc/en-us/articles/4408887452434-Flash-the-USB-to-serial-firmware-for-UNO-Rev3-and-earlier-and-Mega-boards).

* If you're using a **classic Nano**, but it's being detected as "USB Serial Port" <!-- on Windows --> or another generic name, the FTDI drivers may be missing. To solve the issue, follow [install the FTDI drivers](https://support.arduino.cc/hc/en-us/articles/4411305694610-Install-or-update-FTDI-drivers).

<!-- markdownlint-disable-file HC001 -->
