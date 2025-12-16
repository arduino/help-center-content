---
title: If Arduino App Lab shows an "Error checking for updates" message
---

When Arduino App Lab is checking for software updates, you may encounter an "Error checking for updates" message. Learn how to resolve the issue.

---

## Before you begin

> [!IMPORTANT]
> If you also see a **"Your board software is out of date"** warning, you may need to flash a new Linux image. See [If your Arduino UNO Q board software is out of date](https://support.arduino.cc/hc/en-us/articles/23170731875740-If-your-Arduino-UNO-Q-board-software-is-out-of-date).

Follow these instructions if your board is detected in Arduino App Lab, but there is a problem connecting to the board.

If your board does not appear in Arduino App Lab, see [If your Arduino UNO Q is not detected by Arduino App Lab](https://support.arduino.cc/hc/en-us/articles/23170726082332-If-your-Arduino-UNO-Q-is-not-detected-by-Arduino-App-Lab) instead.

## 1. Retry at least two times <!-- No longer relevant? -->

In some cases, especially after flashing a new Linux image, the update process can fail.

Try the following at least two times:

1. Disconnect the board.
1. Close Arduino App Lab.
1. Open Arduino App Lab.
1. Wait for the board to be detected (this can take up to 60 seconds).
1. Click the board to connect.

## 2. Check board power

Insufficient power from the USB port, cable, or a connected hub can cause the board to reboot unexpectedly during an update.

To ensure the board has a stable power supply, follow these guidelines:

* **Use the recommended cable and port**
  The most reliable option is a **USB-C to USB-C** cable connected directly to your computer. If you use a **USB-C to USB-A** cable, connect it to a high-power port (e.g., USB 3.0) and avoid older USB 2.0 ports.

* **Avoid unpowered hubs**
  If you are connecting the board via a USB hub, ensure it has its own dedicated power supply. An unpowered hub may not provide enough power, especially if other devices are connected.

* **Rule out faulty hardware**
  If the problem persists, try using a different USB cable and another USB port on your computer to check if the issue is with a faulty cable or port.

## 3. Check your network configuration

An unstable internet connection can cause the update to fail.

First, ensure your Wi-Fi network is stable and that the board is in a location where it can get a good signal.

If the network is stable, the issue may be with the board's stored network credentials. You can resolve this by re-configuring the network settings using one of the following methods:

* **Update configuration in SBC mode**
  Boot the UNO Q in SBC mode to access and update the network configuration directly.

* **Update configuration via ADB**
  Remove the existing Wi-Fi configuration using an ADB shell and the `nmcli` command-line tool.

  1. [Open an ADB shell](https://docs.arduino.cc/tutorials/uno-q/adb/) to your board.
  2. List all network connections:

     ```sh
     nmcli con
     ```

  3. Find the name (SSID) of the Wi-Fi network you want to remove.
  4. Remove the configuration. Replace `YOUR_WIFI_NAME` with the name from the previous step:

     ```sh
     nmcli con remove YOUR_WIFI_NAME
     ```

 After removing the old configuration, you will be prompted to set up Wi-Fi again in the App Lab.

## 4. Flash the latest Linux image

> [!WARNING]
> All data saved on the board will be lost.

If App Lab is still not able to update your Arduino UNO Q, you may want to consider **flashing the latest Linux image**. This is a reliable way to resolve any issues with the software configuration on your board.

## If you still need help

If you still need help, [contact us](https://www.arduino.cc/en/contact-us/).
