---
title: Fix udev rules on Linux
id: 9005041052444
---

On Linux, missing udev[^1] rules can result in failed uploads, as Arduino IDE (and other development tools) will not be able to access the board when it resets to bootloader mode.

The board package typically includes a script that is run during installation, which sets the appropriate udev rules. If this script didn't run correctly, or if the rules were removed, they can be configured by running the script manually:

[^1]: <https://manpages.ubuntu.com/manpages/questing/en/man7/udev.7.html>

<table style="display: table;">
<thead>
  <tr style="display: table-row;">
    <th>Boards</th>
    <th>Related error output</th>
    <th>Instructions</th>
  </tr>
</thead>
<tbody>
  <tr style="display: table-row;">
    <td>Nano RP2040 Connect</td>
    <td><code>Failed uploading: uploading error: exit status 1</code></td>
    <td rowspan="4"><a href="#mbed-os">Set udev rules for Arduino Mbed OS boards</a></td>
  </tr>
  <tr style="display: table-row;">
    <td>GIGA R1 WiFi</td>
    <td>
      <code>dfu-util: Cannot open DFU device 2341:0366 found on devnum 24 (LIBUSB_ERROR_ACCESS)</code><br>
      <code>dfu-util: No DFU capable USB device available</code><br>
      <code>Failed uploading: uploading error: exit status 74</code>
    </td>
  </tr>
  <tr style="display: table-row;">
    <td>Nicla Sense ME</td>
    <td>
      <code>Error: unable to open CMSIS-DAP device 0x2341:0x60</code><br>
      <code>Error: unable to find a matching CMSIS-DAP device</code><br>
      <code>Failed uploading: uploading error: exit status 1</code>
    </td>
  </tr>
  <tr style="display: table-row;">
    <td>
      Portenta H7<br>
      Portenta H7 Lite<br>
      Portenta H7 Lite Connected
    </td>
    <td>
      <code>dfu-util: Cannot open DFU device 2341:035b found on devnum 26 (LIBUSB_ERROR_ACCESS)</code><br>
      <code>dfu-util: No DFU capable USB device available</code><br>
      <code>Failed uploading: uploading error: exit status 74</code>
    </td>
  </tr>
  <tr style="display: table-row;">
    <td>Nano Every</td>
    <td>
      <code>avrdude: jtagmkII_getsync(): sign-on command: status -1</code><br>
      <code>avrdude: jtagmkII_getsync(): timeout/error communicating with programmer (status -1)</code><br>
      <code>Failed uploading: uploading error: exit status 1</code>
    </td>
    <td rowspan="2"><a href="#megaAVR">Set udev rules for Arduino megaAVR boards</a></td>
  </tr>
  <tr style="display: table-row;">
    <td>UNO WiFi Rev2</td>
    <td>
      <code>avrdude: usbdev_open(): cannot open device: Permission denied</code><br>
      <code>avrdude: jtag3_open_common(): Did not find any device matching VID 0x03eb and PID list: 0x2145</code><br>
      <code>Failed uploading: uploading error: exit status 1</code>
    </td>
  </tr>
  <tr style="display: table-row;">
    <td>
      UNO R4 WiFi<br>
      UNO R4 Minima<br>
      Portenta C33
    </td>
    <td>
      <code>Failed uploading: uploading error: exit status 1</code><br>
      <code>dfu-util: Cannot open DFU device PID:VID found on devnum X (LIBUSB_ERROR_ACCESS)</code><br>
      <code>dfu-util: No DFU capable USB device available</code><br>
      <code>Failed uploading: uploading error: exit status 74</code>
    </td>
    <td rowspan="2"><a href="#renesas">Set udev rules for Arduino Renesas boards</a></td>
  </tr>
</tbody>
</table>

---

<a id="mbed-os"></a>

## Set udev rules for Arduino Mbed OS boards

The following boards require udev rules:

* Nano RP2040 Connect (mbed_nano)
* GIGA R1 WiFi (mbed_giga)
* Nicla Sense ME (mbed_nicla)
* Portenta H7 (mbed_portenta)
* Portenta H7 Lite (mbed_portenta)
* Portenta H7 Lite Connected (mbed_portenta)

You can set the udev rules by running `post_install.sh` as root.

Follow these steps:

1. Go to the [post_install.sh file for Arduino Mbed OS Boards on GitHub](https://github.com/arduino/ArduinoCore-mbed/blob/main/post_install.sh).

2. Download the file to your computer.

   ![The "Download raw file" button on github.com](img/github-udev-download.png)

3. Open your Download folder in Terminal:
   * **On Ubuntu:** Open the Files application and navigate to your Download folder. Right-click on an empty area inside the folder (not on a file) and select **Open in Terminal**.
   * Open Terminal, and navigate to your Download folder:

     `cd ~/Downloads`

4. Run this command:

   `sudo ./post_install.sh`

5. If prompted, enter your password, and press Enter again.

Try uploading your sketch again.

---

<a id="megaAVR"></a>

## Set udev rules for Arduino megaAVR boards

The following boards require udev rules:

* UNO WiFi Rev2
* Nano Every

You can set the udev rules by running `post_install.sh` as root.

Follow these steps:

1. Go to the [post_install.sh file for Arduino megaAVR Boards on GitHub](https://github.com/arduino/ArduinoCore-megaavr/blob/master/post_install.sh).

2. Download the file to your computer.

   ![The "Download raw file" button on github.com](img/github-udev-download.png)

3. Open your Download folder in Terminal:
   * **On Ubuntu:** Open the Files application and navigate to your Download folder. Right-click on an empty area inside the folder (not on a file) and select **Open in Terminal**.
   * Open Terminal, and navigate to your Download folder:

     `cd ~/Downloads`

4. Run this command:

   `sudo ./post_install.sh`

5. If prompted, enter your password, and press Enter again.

Try uploading your sketch again.

---

<a id="renesas"></a>

## Set udev rules for Arduino Renesas boards

The following boards require udev rules:

* UNO R4 WiFi (Arduino UNO R4 Boards)
* UNO R4 Minima (Arduino UNO R4 Boards)
* Portenta C33 (Arduino Renesas Portenta Boards)

You can set the udev rules by running `post_install.sh` as root.

Follow these steps:

1. Go to the [post_install.sh file for Arduino Renesas Boards on GitHub](https://github.com/arduino/ArduinoCore-renesas/blob/main/post_install.sh).

2. Download the file to your computer.

   ![The "Download raw file" button on github.com](img/github-udev-download.png)

3. Open your Download folder in Terminal:
   * **On Ubuntu:** Open the Files application and navigate to your Download folder. Right-click on an empty area inside the folder (not on a file) and select **Open in Terminal**.
   * Open Terminal, and navigate to your Download folder:

     `cd ~/Downloads`

4. Run this command:

   `sudo ./post_install.sh`

5. If prompted, enter your password, and press Enter again.

Try uploading your sketch again.
