---
title: "If your device can't be added to Arduino Cloud"
id: 360019355679
---

Learn what to do if there's a problem adding your device to Arduino Cloud.

---

## Try these steps in order

1. [Quick checks](#1-quick-checks)
1. [Check your USB cable and peripherals](#2-check-your-usb-cable-and-peripherals)
1. [Rule out hardware issues](#3-rule-out-hardware-issues)
1. [Reset the sketch](#4-reset-the-sketch)
1. [Stop applications that may be using the device](#stop-applications-that-may-be-using-the-device)
1. [Manually partition your memory Arduino device for Arduino Cloud](#5-manually-partition-your-memory-arduino-device-for-arduino-cloud)

---

## 1. Quick checks

* Try disconnecting and reconnecting your device from your computer or power source.
* Confirm that the device is powered by checking that the power LED is lit.
  * _Exception:_ The Arduino Opta does not have a power LED. The device can be powered even if no LEDs are lit.
* If prompted, allow the device to connect to your computer.
* If Arduino IDE is running, ensure that the serial monitor is closed, or simply close Arduino IDE.

## 2. Check your USB cable and peripherals

* Ensure you're using a working USB cable that supports data transfer. If possible, try using a different cable.
* Ensure that any USB hubs or docks are powered and working. If possible, try connecting the device directly to your computer.

## 3. Rule out hardware issues

* Detach the device from any shield/carrier or external circuitry.

## 4. Reset the sketch

A bad sketch or a non-working Cloud configuration can prevent your computer from programming the board.

### If you're configuring the device over serial (USB)

Try a **double-press** reset:

1. Find the reset button on the device (typically labeled **RESET** or **RST**).
2. Press the reset button twice and confirm that the on-board LED pulses. Adjust the timing if needed.
3. Continue with device configuration. You may find that the configuration is initially able to proceed, but encounters another error. In that case, simply repeat the double-press reset, and attempt to continue. Eventually, Arduino Cloud will overwrite any sketch on the board, solving the issue.

If you still can't add the device, use Arduino IDE to the Cloud Editor to program the board with a safe sketch (such as the [BareMinimum](https://app.oniudra.cc/sketches/examples?nav=Examples&eid=01.Basics%2FBareMinimum) or [Blink](https://app.oniudra.cc/sketches/examples?nav=Examples&eid=01.Basics%2FBlink) example), then try adding the device to Arduino Cloud again.

### If you're configuring the device over Bluetooth

* Understand that Bluetooth setup requires the board to be running the Arduino Cloud provisioning sketch. When the board is running this sketch, the on-board LED will flash with a "heartbeat" pulse that turns solid when connecting to Arduino Cloud. If your board is not running this sketch, you first need to configure it using USB (Serial).
* If your board is running the provisioning sketch but still isn't detected, try resetting the Cloud configuration:

   * **Arduino Opta:** Press and hold the user button (BTN_USER) until the LED (LED_USER) turns off.
   * **UNO R4 WiFi:** Connect Pin 2 to GND until the LED turns off.

## 5. Stop applications that may be using the device

When configuring your device over serial (USB), other applications can prevent Arduino Cloud from communicating with the device.

When this happens Arduino Cloud will:

* Display the **"We could not find any Arduino device"** error page.
* Display a temporary notification: _"Failed to open serial port. Is the device already in use?"_

Try this:

* If Arduino IDE is running, make sure that the Serial Monitor is closed.
* Close any other applications you think may be using the port.
* Restart the Arduino Cloud Agent.
* Restart your computer.

If you still encounter the issue, follow the steps in [Find and stop process blocking a port](https://support.arduino.cc/hc/en-us/articles/4407830972050-Find-and-stop-process-blocking-a-port) to identify and stop the application that's using the port.

<!-- The Serial Monitor in the Cloud Editor will automatically be closed -->




---

## 6. Manually partition your memory Arduino device for Arduino Cloud

The following Arduino Cloud devices have QSPI memory:

* Arduino GIGA R1 WiFi
* Arduino Opta Lite
* Arduino Opta RS485
* Arduino Opta WiFi
* Arduino Portenta H7
* Arduino Portenta H7 Lite
* Arduino Portenta H7 Lite Connected
* Arduino Portenta Machine Control

If your device has a corrupted or outdated partition scheme, you may encounter one of these issues:

* A red LED on the device is blinking.
* Arduino Cloud does not detect the device.
* A “Storage partition failed!” error is displayed when you attempt to add the device on Arduino Cloud.
* A “Storage Initialization Fail!” error is displayed when you attempt to add the device on Arduino Cloud.

You can resolve these issues by [repartitioning the memory with a supported partition scheme](https://support.arduino.cc/hc/en-us/articles/16206977438748-Reset-the-flash-memory-on-STM32H747-based-devices).


<!-- markdownlint-disable-file HC001 -->