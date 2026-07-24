---
title: "Zephyr first-time setup"
---

Learn how to prepare supported Arduino boards to run applications built on the Zephyr RTOS by installing the Zephyr loader.

This article applies to the following boards:

- Arduino Portenta H7
- Arduino Portenta C33
- Arduino Opta
- Arduino GIGA R1 WiFi
- Arduino Nano Matter
- Arduino Nano RP2040 Connect
- Arduino Nano 33 BLE
- Arduino Nano 33 BLE Sense
- Arduino Nano 33 IoT
- Arduino Nicla Sense ME
- Arduino Nicla Vision
- Arduino UNO Q

> [!NOTE]
> This guide requires the **Arduino Core on Zephyr** version `0.90.0` or later.

In this article:

- [Overview {#overview}](#overview-overview)
- [Prerequisites {#prerequisites}](#prerequisites-prerequisites)
- [Automatic loader updates {#automatic-loader-updates}](#automatic-loader-updates-automatic-loader-updates)
- [Flash the Zephyr loader manually {#flash-manually}](#flash-the-zephyr-loader-manually-flash-manually)
- [Still need help? {#still-need-help}](#still-need-help-still-need-help)

---

## Overview {#overview}

Arduino is transitioning its high-performance board cores from the deprecated Arm Mbed OS to the modern, open-source **Zephyr RTOS**. Before running Zephyr-based sketches on a supported Arduino board for the first time, you must install the **Zephyr loader** onto your hardware. The loader is a small firmware utility that allows the board to accept and run applications built on the Zephyr RTOS architecture.

This guide walks you through the initial setup process in Arduino IDE.

---

## Prerequisites {#prerequisites}

Before you begin, ensure you have the following:

- **Arduino IDE 2.x** installed.
- **ArduinoCore-zephyr (v0.90.0 or later)** installed via _Tools > Board > Boards Manager_.
- A data-compatible USB cable to connect your board directly to your computer.

---

## Automatic loader updates {#automatic-loader-updates}

Starting with ArduinoCore-zephyr v0.90.0, the core includes automatic loader sync across all supported boards. During every sketch upload, the loader version is checked and updated behind the scenes if required.

This includes boards that have no Zephyr loader installed; uploading any sketch will automatically install the loader the very first time the board is used with a Zephyr-based core.

> [!IMPORTANT]
> **For Portenta C33 users:** Due to a required bootloader update on the Portenta C33, you **must** complete the [manual loader flashing process](#flash-manually) below at least once. After completing this initial update manually, automatic loader updates will work seamlessly on the Portenta C33 as well.

---

## Flash the Zephyr loader manually {#flash-manually}

Follow these steps to prepare your board for Zephyr for the first time, or to manually sync the loader with the core version:

1. Connect your board to your computer via USB.

2. **Put the board in bootloader mode:** Quickly double-click the physical **RESET** button on your board. The built-in LED will pulse or blink, indicating the board is in bootloader mode.

3. **Select your board and port:** In the Arduino IDE menu, go to _Tools > Board_ and select your board under the **Arduino Core on Zephyr** platform. Then, select the correct port under _Tools > Port_.

4. **Select a programmer:** Go to _Tools > Programmer_ and choose **Factory Programmer** (or any other available option specified for your board).

5. **Burn the loader:** Select _Tools > Burn Bootloader_. Wait for the process to complete. You should see a success message in the console output.

   > [!IMPORTANT]
   > **Portenta C33 step:** If this is your first time flashing the loader on a Portenta C33, an automatic bootloader update will start right after burning the loader. **You must wait until the board's LED starts flashing blue** before proceeding to the next step.

6. **Upload your sketch:** Once the loader burn succeeds (and after waiting for the blue flashing LED on the Portenta C33), put the board into bootloader mode once more by double-clicking the physical **RESET** button, then upload a sketch.

   To test that everything is working, you can upload a basic blink sketch:
   - Open _File > Examples > 01.Basics > Blink_.
   - Click the **Upload** button in Arduino IDE.

   The blink example will now compile and run on top of the Zephyr RTOS!

---

## Still need help? {#still-need-help}

If you encounter errors during the *Burn Bootloader* step:

- Ensure your USB cable supports data transfer (not power-only).
- Try putting the board back into bootloader mode by double-clicking the physical **RESET** button again.
- Visit the [ArduinoCore-zephyr GitHub repository](https://github.com/arduino/ArduinoCore-zephyr/issues) to view reported issues or request technical support.
- If you still need help, contact us or search the [Arduino Forum](https://forum.arduino.cc/).
