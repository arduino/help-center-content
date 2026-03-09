---
title: If your Arduino UNO Q is not detected by Arduino App Lab
id: 23170726082332
---

When you open Arduino App Lab, it automatically looks for any Arduino UNO Q boards connected through USB or available on your Wi-Fi network. Learn what to do if your board is not detected.

In this article:

- [If your board is not detected via USB](#if-your-board-is-not-detected-via-usb)
- [If your board is not detected on the network](#if-your-board-is-not-detected-on-the-network)

---

## If your board is not detected via USB

Try again after each step:

1. [Disconnect and reconnect your board](#disconnect-and-reconnect-your-board)
2. [Check board connections](#check-board-connections)

### 1. Disconnect and reconnect your board {#disconnect-and-reconnect-your-board}

  1. Disconnect and reconnect your board to reset its power.
  1. Verify that at least one LED on your board lights on.<!-- TODO -->
  1. Wait for the Arduino UNO Q to fully boot up. At first, the LED matrix will display a swirling animation the shape of the Arduino logo. Once the board has finished booting, the LED matrix will instead  display a heartbeat animation.
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

## If your board is not detected on the network

Try again after each step:

1. [Restart your board](#restart-your-board)
2. [Check your Wi-Fi configuration](#check-your-wi-fi-configuration)
3. [Allow mdns-discovery (Windows)](#allow-mdns-discovery)

> [!IMPORTANT]
> To detect a UNO Q via Wi-Fi, you first need to connect to it via USB and configure the network connection.

### 1. Restart your board {#restart-your-board}

1. Disconnect and reconnect UNO Q from its power supply.
1. Verify that at least one LED on your board lights on.
1. Wait for the Arduino UNO Q to fully boot up. At first, the LED matrix will display a swirling animation the shape of the Arduino logo. Once the board has finished booting, the LED matrix will instead display a heartbeat animation.

### 2. Check your Wi-Fi configuration {#check-your-wi-fi-configuration}

1. Ensure that your Wi-Fi router or access point is turned on and accessible.
1. Ensure that your computer and your UNO Q board are connected to the same Wi-Fi network.
1. Verify that your UNO Q board has the correct Wi-Fi name and password in [Single-Board Computer mode](https://docs.arduino.cc/tutorials/uno-q/single-board-computer/).

### 3. Allow mdns-discovery (Windows) {#allow-mdns-discovery}

> [!NOTE]
> This section only applies to Arduino App Lab on Windows.

Network Mode relies on local network discovery (mDNS) to automatically find boards on the same network.

- When launching Arduino App Lab for the first time, you may receive a prompt from Windows Defender (or other security software) regarding `mdns-discovery.exe`. You must **allow** this access for the board to be discovered. If you declined the prompt, you can [manually allow mdns-discovery through Windows Firewall](https://support.arduino.cc/hc/en-us/articles/4506515275548#allow-manually).
- Some network configurations such as guest Wi-Fi, corporate networks, VPNs, or strict firewall rules may prevent automatic discovery, even if the board is connected to Wi-Fi. If the board still does not appear, ensure that your firewall allows traffic on **UDP port 5353**, which is required for mDNS discovery.
