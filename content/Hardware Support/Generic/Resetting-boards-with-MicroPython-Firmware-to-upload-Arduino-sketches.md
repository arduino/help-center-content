---
title: Resetting boards with MicroPython Firmware to upload Arduino sketches
---

Uploading an Arduino sketch to a board running MicroPython is straightforward. In fact, there is no need for a separate process to remove the MicroPython runtime. When you upload an Arduino sketch, it automatically overwrites the existing firmware, effectively restoring the board to standard Arduino functionality.

## Boards with MicroPython support

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

## Instructions for Nano ESP32

1. Press the RST button two times, waiting 0.3 to 1 second between each press.

   > [!IMPORTANT]
   > The timing between presses is different compared to bootloader mode on most other Arduino boards. If bootloader mode won’t activate, try adjusting your timing.

2. Check the on-board LED near the RST button:
   - **If the LED pulses slowly in green[^colors]:** The board is in bootloader mode. Go to the next step.
   - **If the LED is off:** Repeat step 1 or try [Option 2: Use the Esptool programmer option in Arduino IDE](#esp32-download-mode).

3. Select Arduino Nano ESP32 in Arduino IDE or the Cloud Editor.

4. Upload BareMinimum, or any other Arduino sketch to restore the standard Arduino bootloader.

## Instructions for the remaining boards

1. Open any Arduino development tool like Arduino IDE

2. Select your board. If it doesn't appear, set your board to bootloader mode by double-pressing the reset button.

3. Upload BareMinimum, or any other Arduino sketch.
