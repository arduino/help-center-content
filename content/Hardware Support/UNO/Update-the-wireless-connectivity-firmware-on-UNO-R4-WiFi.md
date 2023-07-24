---
title: Update the wireless connectivity firmware on UNO R4 WiFi
id: 9670986058780
---

Learn how to update the wireless connectivity firmware on the ESP32-S3 module on the UNO R4 WiFi.

Updating the firmware is required to use UNO R4 WiFi with Arduino Cloud.

In this article:

* [Windows](#windows)
* [macOS](#macos)
* [Linux](#linux)

---

<a id="windows"></a>

## Windows

1. Unplug any non-essential USB devices from your computer.
1. Connect the UNO R4 WiFi board to your computer with the USB cable.
1. Download <a class="link-download" href="https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest/download/unor4wifi-update-windows.zip">unor4wifi-update-windows.zip</a>
1. [Unzip](https://support.microsoft.com/windows/f6dde0a7-0fec-8294-e1d3-703ed85e7ebc) the downloaded file.
1. Double-click on the `update.bat` file that is in the unzipped folder.
   > **Note:** Depending on your Windows security settings, a **Windows protected your PC** dialog may open with this message:
   >
   > _Microsoft Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk._
   >
   > Click the **More info** link in the dialog and then click the **Run anyway** button to continue.
1. A terminal window will open. The terminal window might now show a list of the serial ports present on your computer.

   For example:

   ```text
   Start flashing firmware
   [2023-07-11T06:39:09Z INFO ] Detected 2 serial ports
   [2023-07-11T06:39:09Z INFO ] Ports which match a known common dev board are highlighted
   [2023-07-11T06:39:09Z INFO ] Please select a port
   ❯ COM1
     COM43 - USB Serial Device (COM43)
   ```

   If so, use the <kbd>**↓**</kbd> key on your keyboard to select the port of the **UNO R4 WiFi** board from the list, and then press the <kbd>**Enter**</kbd> key.
1. The terminal window will now show the following prompt:

   ```text
   ? Remember this serial port for future use? (y/n) ›
   ```

   Press the <kbd>**N**</kbd> key on your keyboard.
1. The flashing process should now start. Wait for it to finish, as indicated by output that looks something like this:

   ```text
   Chip type:         esp32s3 (revision v0.1)
   Crystal frequency: 40MHz
   Flash size:        8MB
   Features:          WiFi, BLE
   MAC address:       dc:54:75:c4:c6:54
   [00:00:15] [========================================]     689/689     0x0
   Press any key to continue . . .
   ```

1. Press any key on your keyboard to close the terminal window.
1. Disconnect the USB cable of the **UNO R4 WiFi** board from your computer.
1. Connect the **UNO R4 WiFi** board to your computer with the USB cable again.

### Troubleshooting for Windows

If you get a `VCRUNTIME140.dII was not found` error, download and install the <a class="link-top-right" href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022">Microsoft Visual C++ Redistributable package</a> from Microsoft.

---

<a id="macos"></a>

## macOS

1. Unplug any non-essential USB devices from your computer.
1. Connect the UNO R4 WiFi board to your computer with the USB cable.
1. Download <a class="link-download" href="https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest/download/unor4wifi-update-macos.zip">unor4wifi-update-macos.zip</a>
1. [Unzip](https://support.apple.com/en-ca/guide/mac-help/mchlp2528/mac) the downloaded file.
1. Control-click on the unzipped `unor4wifi-update-macos` folder and select "**New Terminal at Folder**" from the context menu. A terminal window will open.
1. Type the following command in the **Terminal** window:

   ```text
   chmod a+x update.command && sudo xattr -d com.apple.quarantine bin/espflash && sudo xattr -d com.apple.quarantine bin/unor4wifi-reboot-macos
   ```

1. Press the <kbd>**Enter**</kbd> key.
1. Type the following command in the **Terminal** window:

   ```text
   ./update.command
   ```

1. Press the <kbd>**Enter**</kbd> key.
1. Type your macOS user password in the "Password" prompt and press the <kbd>**Enter**</kbd> key again.
1. The terminal window might now show a list of the serial ports present on your computer.

   For example:

   ```text
   Start flashing firmware
   [2023-07-11T08:55:51Z INFO ] Detected 6 serial ports
   [2023-07-11T08:55:51Z INFO ] Ports which match a known common dev board are highlighted
   [2023-07-11T08:55:51Z INFO ] Please select a port
   ❯ /dev/cu.wlan-debug
     /dev/tty.wlan-debug
     /dev/cu.Bluetooth-Incoming-Port
     /dev/tty.Bluetooth-Incoming-Port
     /dev/cu.usbmodem2214101 - USB JTAG_serial debug unit
     /dev/tty.usbmodem2214101 - USB JTAG_serial debug unit
   ```

   If so, use the <kbd>**↓**</kbd> key on your keyboard to select the `dev/cu.usbmodem*` port for **USB JTAG_serial debug unit** and then press the <kbd>**Enter**</kbd> key.

1. The terminal window will now show the following prompt:

   ```text
   ? Remember this serial port for future use? (y/n) ›
   ```

   Press the <kbd>**N**</kbd> key on your keyboard.
1. The flashing process should now start. Wait for it to finish, as indicated by output that looks something like this:

   ```text
   [2023-07-11T08:59:44Z INFO ] Serial port: '/dev/cu.usbmodem2214101'
   [2023-07-11T08:59:44Z INFO ] Connecting...
   [2023-07-11T08:59:45Z INFO ] Using flash stub
   Chip type:         esp32s3 (revision v0.1)
   Crystal frequency: 40MHz
   Flash size:        8MB
   Features:          WiFi, BLE
   MAC address:       dc:54:75:c4:c6:54
   [00:00:14] [========================================]     689/689     0x0
   ```

1. Close the **Terminal** window.
1. Disconnect the USB cable of the **UNO R4 WiFi** board from your computer.
1. Connect the **UNO R4 WiFi** board to your computer with the USB cable again.

### Troubleshooting for macOS

* If you get a `Cannot put the board in ESP mode. (via 'unor4wifi-reboot')` error: disconnect and reconnect the board, then run the command again.
* If you get an `xattr: bin/espflash: No such xattr: com.apple.quarantine` or `xattr: bin/espflash: No such xattr: com.apple.quarantine` error, it means that the command has already been run, or is otherwise not needed. Proceed with the next step.

---

<a id="linux"></a>

## Linux

1. Unplug any non-essential USB devices from your computer.
1. Connect the UNO R4 WiFi board to your computer with the USB cable.
1. Download <a class="link-download" href="https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest/download/unor4wifi-update-linux.zip">unor4wifi-update-linux.zip</a>
1. Open the release page for the latest version of the firmware in your web browser:
   <https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest>
1. Extract the downloaded ZIP file.
1. Open [a command line terminal](https://ubuntu.com/tutorials/command-line-for-beginners) in the extracted folder.
1. Type the following command:

   ```text
   ./update.sh
   ```

1. Press the <kbd>**Enter**</kbd> key.
1. The terminal window might now show a list of the serial ports present on your computer.

   For example:

   ```text
   Start flashing firmware
   [2023-07-12T15:02:36Z INFO ] Detected 3 serial ports
   [2023-07-12T15:02:36Z INFO ] Ports which match a known common dev board are highlighted
   [2023-07-12T15:02:36Z INFO ] Please select a port
   ❯ /dev/ttyACM0 - 7 Series/C210 Series Chipset Family USB xHCI Host Controller
     /dev/ttyS4
     /dev/ttyS0
   ```

   If so, use the <kbd>**↓**</kbd> key on your keyboard to select the port of the **UNO R4 WiFi** board from the list, and then press the <kbd>**Enter**</kbd> key.
1. The terminal window will now show the following prompt:

   ```text
   ? Remember this serial port for future use? (y/n) ›
   ```

   Press the <kbd>**N**</kbd> key on your keyboard.
1. The flashing process should now start. Wait for it to finish, as indicated by output that looks something like this:

   ```text
   [2023-07-12T15:04:46Z INFO ] Serial port: '/dev/ttyACM0'
   [2023-07-12T15:04:46Z INFO ] Connecting...
   [2023-07-12T15:04:46Z INFO ] Using flash stub
   Chip type:         esp32s3 (revision v0.1)
   Crystal frequency: 40MHz
   Flash size:        8MB
   Features:          WiFi, BLE
   MAC address:       dc:54:75:c4:c6:54
   [00:00:14] [========================================]     689/689     0x0
   ```

1. Close the terminal window.
1. Disconnect the USB cable of the **UNO R4 WiFi** board from your computer.
1. Connect the **UNO R4 WiFi** board to your computer with the USB cable again.
