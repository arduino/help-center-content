---
title: "Fix udev rules on Linux"
---

On Linux, missing udev[^1] rules can result in failed uploads. While you may be able to select the board in Arduino IDE and start a sketch upload, when the board is reset into bootloader mode, Arduino IDE will not be able to access it. This can result in errors such as:

[^1]: <https://manpages.ubuntu.com/manpages/xenial/man7/udev.7.html>

* `dfu-util: Cannot open DFU device 2341:x found on devnum 24 (LIBUSB_ERROR_ACCESS)`

  `dfu-util: No DFU capable USB device available`
* `Error: unable to open CMSIS-DAP device 0x2341:x`

  `Error: unable to find a matching CMSIS-DAP device`

* `Failed uploading: uploading error: exit status 74`

* `Failed uploading: uploading error: exit status 1`

---

## Set udev rules for Arduino Mbed OS boards

The following boards require udev rules:

* Nano RP2040 Connect (mbed_nano)
* GIGA R1 WiFi (mbed_giga)
* Nicla Sense ME (mbed_nicla)
* Portenta H7 (mbed_portenta)
* Portenta H7 Lite (mbed_portenta)
* Portenta H7 Lite Connected (mbed_portenta)

Missing udev rules can result in these errors:



Follow these steps;

You can set the udev rules by running `post_install.sh` as root:

1. Go to the [post_install.sh file in the GitHub repository](https://github.com/arduino/ArduinoCore-mbed/blob/main/post_install.sh).
1. Download the file to your computer.

   ![The "Download raw file" button on github.com](img/github-udev-download.png)

1. Open your Download folder in Terminal:
   * **On Ubuntu:** Open the Files application and navigate to your Download folder. Right-click on an empty area inside the folder (not on a file) and select **Open in Terminal**.
   * Open Terminal, and navigate to your Download folder:

     `cd ~/Downloads`

1.  Run this command:

    `sudo ./post_install.sh`

1. If prompted, enter your password, and press Enter again.

Try uploading your sketch again.

---

## Set udev rules for Arduino megaAVR boards

The following boards require udev rules:

* UNO WiFi Rev2
* Nano Every

Missing udev rules can result in these errors:

* `avrdude: usbdev_open(): cannot open device: Permission denied`
* `avrdude: jtag3_open_common(): Did not find any device matching VID 0x03eb and PID list: 0x2145`
* `Failed uploading: uploading error: exit status 1`

Follow these steps;

You can set the udev rules by running `post_install.sh` as root:

1. Go to the [post_install.sh file in the GitHub repository](https://github.com/arduino/ArduinoCore-mbed/blob/main/post_install.sh).
1. Download the file to your computer.

   ![The "Download raw file" button on github.com](img/github-udev-download.png)

1. Open your Download folder in Terminal:
   * **On Ubuntu:** Open the Files application and navigate to your Download folder. Right-click on an empty area inside the folder (not on a file) and select **Open in Terminal**.
   * Open Terminal, and navigate to your Download folder:

     `cd ~/Downloads`

1.  Run this command:

    `sudo ./post_install.sh`

1. If prompted, enter your password, and press Enter again.

Try uploading your sketch again.
