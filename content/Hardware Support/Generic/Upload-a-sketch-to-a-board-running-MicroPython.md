---
title: Upload a sketch to a board running MicroPython
---

Uploading a sketch to an Arduino board running MicroPython is straightforward. You don’t need to manually uninstall MicroPython—uploading a sketch automatically replaces the existing firmware and restores the board’s standard Arduino functionality. If you’d like to switch back to MicroPython, simply [reinstall the MicroPython firmware](https://support.arduino.cc/hc/en-us/articles/15156644171548-Upload-firmware-for-Arduino-Lab-for-Micropython).

Boards with MicroPython support:

- Arduino GIGA R1 WiFi
- Arduino Nano 33 BLE
- Arduino Nano 33 BLE Rev2
- Arduino Nano 33 BLE Sense
- Arduino Nano 33 BLE Sense Rev2
- Arduino Nano ESP32
- Arduino Nano RP2040 Connect
- Arduino Nicla Vision
- Arduino Opta Lite
- Arduino Opta RS485
- Arduino Opta WiFi
- Arduino Portenta C33
- Arduino Portenta H7
- Arduino Portenta H7 Lite
- Arduino Portenta H7 Lite Connected

---

Follow these steps:

1. If Arduino Lab for MicroPython is running: Disconnect from the board, or close the application.

1. Open an Arduino development tool that support sketch uploads, such as Arduino IDE or the [Arduino Cloud Editor](https://app.arduino.cc/sketches/examples?nav=Examples&eid=01.Basics%2FBlink){.link-external}.

1. Select your board. If it doesn't appear, set your board to **bootloader mode** by double-pressing the reset button.

   - The board is in bootloader mode when the LED pulses slowly in green[^colors].

   - _If you're using Nano ESP32:_ If the bootloader mode won't activate, try adjusting your timing, waiting 0.3 to 1 second between each press.

1. Upload the **Blink** example, or any other Arduino sketch, to restore the standard Arduino bootloader.

   - In Arduino IDE, select File > Example > 01.Basics > Blink.

[^colors]: On some earlier versions of the Nano ESP32, the LED will be blue instead of green, and yellow instead of purple.
