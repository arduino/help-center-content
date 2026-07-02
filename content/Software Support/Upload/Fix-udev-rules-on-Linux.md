---
title: Fix udev rules on Linux
id: 9005041052444
---

On Linux, `udev` rules configure the system to recognize Arduino boards and grant your user account the necessary permissions to access, upload code, and debug. Missing or incorrect `udev` rules can result in failed board detection or uploads, as Arduino IDE and other development tools will not be able to access the board.

You can resolve the issue by configuring the required rules using an [automated bash script](#automatic-configuration).

---

## Related Error Messages

If your `udev` rules are missing or configured incorrectly, you may see errors similar to the following depending on your board:

| Boards | Related error output |
| :--- | :--- |
| **GIGA R1 WiFi / Portenta H7 / Portenta C33 / UNO R4** | `dfu-util: Cannot open DFU device 2341:0366 found on devnum X (LIBUSB_ERROR_ACCESS)`<br>`dfu-util: No DFU capable USB device available`<br>`Failed uploading: uploading error: exit status 74` |
| **Nicla Sense ME** | `Error: unable to open CMSIS-DAP device 0x2341:0x60`<br>`Error: unable to find a matching CMSIS-DAP device`<br>`Failed uploading: uploading error: exit status 1` |
| **Nano Every / UNO WiFi Rev2** | `avrdude: jtagmkII_getsync(): sign-on command: status -1`<br>`avrdude: usbdev_open(): cannot open device: Permission denied`<br>`Failed uploading: uploading error: exit status 1` |
| **Nano RP2040 Connect** | `Failed uploading: uploading error: exit status 1` |
| **UNO Q** | `Error: exit status 1: adb: insufficient permissions for device: missing udev rules? user is in the plugdev group`<br>`Failed uploading: uploading error: exit status 1` |

---

## Automatic configuration

You can configure rules for all Arduino boards by downloading and running `arduino-udev-setup.sh`.

Follow these steps to download and run the script:

### Step 1: Download the script

You can download the script either using your web browser or directly in the terminal:

* **Option A (Web Browser):** Download [arduino-udev-setup.sh](https://content.arduino.cc/assets/arduino-udev-setup.sh){.link-download} directly.

* **Option B (Terminal):** Open your terminal and run one of the following commands to download the file directly into your current directory:

  ```bash
  wget https://content.arduino.cc/assets/arduino-udev-setup.sh
  ```

  *or*

  ```bash
  curl -O https://content.arduino.cc/assets/arduino-udev-setup.sh
  ```

### Step 2: Open the terminal and navigate to the file

If you downloaded the file via Web Browser:

Open your Terminal and navigate to your downloads folder manually:

  ```bash
  cd ~/Downloads
  ```

### Step 3: Run the script as root

The script needs to create a configuration file in a system directory (`/etc/udev/rules.d/`) and reload the `udev` service, which requires administrator (root) privileges.

Run the script using bash:

```bash
sudo bash arduino-udev-setup.sh
```

When prompted, enter your Linux user password and press Enter.

### Step 4: Reconnect your board

Once the script completes successfully:

1. Unplug your Arduino board from the USB port.
2. Plug the board back into the USB port.

This forces the system to reload and apply the new `udev` rules to your device. Try uploading your sketch again in Arduino IDE!

---

## Resources

* View the [script source code on GitHub](https://github.com/arduino/help-center-content/blob/main/utilities/arduino-udev-setup.sh) to inspect or contribute to the code.
