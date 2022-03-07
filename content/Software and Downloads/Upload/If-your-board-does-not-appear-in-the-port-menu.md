---
title: "If your board does not appear in the port menu"
---

Learn what to do if your board does not appear in the port selection menu in Arduino IDE.

---

## Check connectivity

* One or more LEDs should be lit when the board is powered.
* The board needs to be connected to your computer with a data USB cable. A charge-only cable will not work.
* Make sure the USB cable is not damaged. Test your cable with a different device, or try using a different cable.
* Remove any connections to digital pins **0 (RX)** and **1 (TX)**.
* Check that no other pins are unintentionally getting current.

> **Note:** If the port menu is open, you need to close and re-open it for the list to refresh.

## USB-to-Serial firmware

Missing or corrupted USB-to-Serial firmware can cause UNO and Mega boards to be recognized as any of the following:

* Unknown Device (Uno, missing on Windows 10)
* Unknown USB Device (Invalid Device Descriptor) (Uno, corrupted on Windows 10)
* Composite Device (Uno, missing on macOS)
* USB Device (Uno, corrupted on macOS)
* ATmega16u2 DFU
* Atmega8U2 DFU

Resolve the issue by [flashing the USB-to-Serial firmware in DFU mode](https://support.arduino.cc/hc/en-us/articles/4408887452434-Flash-USB-to-serial-firmware-in-DFU-mode).

## Check the FTDI drivers (Arduino Nano)

If you're using the original Arduino Nano, make sure [the FTDI drivers are installed](https://support.arduino.cc/hc/en-us/articles/4411305694610).
