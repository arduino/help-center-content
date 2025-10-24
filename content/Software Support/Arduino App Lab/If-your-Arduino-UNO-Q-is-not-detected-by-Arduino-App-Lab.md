---
title: "If your Arduino UNO Q is not detected by Arduino App Lab"
---

When Arduino App Lab starts, it will look for Arduino UNO Q boards connected on a USB port, [TODO]

In this article:

- [If your board is not detected via USB](#if-your-board-is-not-detected-via-usb)
- [If your board is not detected via Wi-Fi](#if-your-board-is-not-detected-via-wi-fi)

---

## If your board is not detected via USB

Try again after each step:

1. [Disconnect and reconnect your board](#disconnect-and-reconnect-your-board)
2. [Check board connections](#check-board-connections)

### 1. Disconnect and reconnect your board {#disconnect-and-reconnect-your-board}

  1. Disconnect and reconnect your board to reset its power.
  1. Verify that at least one LED on your board lights on.<!-- TODO -->
  1. Wait for the Arduino UNO Q to fully boot up. AT first, the LED matrix will display a swirling animation the shape of the Arduino logo. Once the board has finished booting, the LED matrix will instead  display a heartbeat animation.
  1. Check for any system notifications that may prompt you to grant USB device permissions, and allow them if they appear.

### 2. Check board connections {#check-board-connections}

A common reason for a board not being detected is an issue with the USB connection. Follow the instructions below to ensure a proper setup:

- *Use a Data USB Cable*: Connect your board with a data USB cable, not a charging-only cable.
- *Test the USB Cable*: Confirm the cable is working by testing it with another device or trying a different cable.
- *Connect directly*: Connect the board directly to your computer instead of through a USB hub.
- *Try a Different USB Port*: If the board is still not detected, try a different USB port on your computer.
- *Disconnect jumper cables*: Remove any jumper cables connected to the board’s pins, as they may interfere with detection.

Some USB accessories are not compatible with Arduino UNO Q:

- Arduino UNO Q is not compatible with Apple USB-C hubs.
- Arduino UNO Q may not be detected when connected to USB-A ports on some USB hubs.

---

## If your board is not detected via Wi-Fi

Try again after each step:

1. [Restart your board](#restart-your-board)
2. [Check your Wi-Fi configuration](#check-your-wi-fi-configuration)

> [!IMPORTANT]
> To detect a UNO Q via Wi-Fi, you first need to connect to it via USB and configure the network connection.

### 1. Restart your board {#restart-your-board}

1. Disconnect and reconnect UNO Q from it's power supply.
1. Verify that at least one LED on your board lights on.
1. Wait for the Arduino UNO Q to fully boot up. AT first, the LED matrix will display a swirling animation the shape of the Arduino logo. Once the board has finished booting, the LED matrix will instead  display a heartbeat animation.

### 2. Check your Wi-Fi configuration {#check-your-wi-fi-configuration}

1. Ensure that your Wi-Fi router or access point is turned on and accessible.
1. Ensure that your computer and your UNO Q board are connected to the same Wi-Fi network.
1. Verify that your UNO Q board has the correct Wi-Fi name and password in [Single-Board Computer mode](https://docs.arduino.cc/tutorials/uno-q/single-board-computer/).
