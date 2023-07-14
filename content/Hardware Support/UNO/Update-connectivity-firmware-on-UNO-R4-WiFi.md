---
title: Update WiFi firmware on UNO R4 WiFi
---

<!-- NICE https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest/download/unor4wifi-update-macos.zip -->
<!-- GitHub verkar ok men direct download https://docs.github.com/en/repositories/releasing-projects-on-github/linking-to-releases -->

## Windows

1. Unplug any non-essential USB devices from your computer.
1. Connect the [**UNO R4 WiFi**](https://docs.arduino.cc/hardware/uno-r4-wifi) board to your computer with the USB cable.
1. Open the release page for the latest version of the firmware in your web browser:
   https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest
1. Click the download link under the "**Assets**" section of the release page:
   - If you are using Linux, click the "**unor4wifi-update-linux.zip**" link.
   - If you are using macOS, click the "**unor4wifi-update-macos.zip**" link.
   - If you are using Windows, click the "**unor4wifi-update-windows.zip**" link.
   <https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest>
1. Click the "**unor4wifi-update-windows.zip**" download link under the "**Assets**" section of the release page:
1. Wait for the download to finish.
1. [Unzip](https://support.microsoft.com/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc#:~:text=To%20unzip%20files,-Open%20File%20Explorer) the downloaded file.
1. Double click on the `update.bat` file that is in the unzipped folder.
   A terminal window will open.
1. The terminal window might now show a list of the serial ports present on your computer.
   For example:
   ```text
   Start flashing firmware
   [2023-07-11T06:39:09Z INFO ] Detected 2 serial ports
   [2023-07-11T06:39:09Z INFO ] Ports which match a known common dev board are highlighted
   [2023-07-11T06:39:09Z INFO ] Please select a port
   ❯ COM1
     COM43 - USB Serial Device (COM43)
   ```
1. Wait for the download to finish.
1. [Unzip](https://support.microsoft.com/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc#:~:text=To%20unzip%20files,-Open%20File%20Explorer) the downloaded file.
1. Double click on the `update.bat` file that is in the unzipped folder.
   A terminal window will open.
1. The terminal window might now show a list of the serial ports present on your computer.
   For example:
   ```text
   Start flashing firmware
   [2023-07-11T06:39:09Z INFO ] Detected 2 serial ports
   [2023-07-11T06:39:09Z INFO ] Ports which match a known common dev board are highlighted
   [2023-07-11T06:39:09Z INFO ] Please select a port
   ❯ COM1
     COM43 - USB Serial Device (COM43)
   ```
   If so, use the <kbd>**↓**</kbd> key on your keyboard to select the port of the **UNO R4 WiFi** board and then press the <kbd>**Enter**</kbd> key.
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
1. Press any key on your keyboard.
   The terminal window will now close.
1. Disconnect the USB cable of the **UNO R4 WiFi** board from your computer.
1. Connect the **UNO R4 WiFi** board to your computer with the USB cable again.

---

Please let me know if you have any questions or problems while following those instructions.1. The terminal window will now show the following prompt:
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
1. Press any key on your keyboard.
   The terminal window will now close.
1. Disconnect the USB cable of the **UNO R4 WiFi** board from your computer.
1. Connect the **UNO R4 WiFi** board to your computer with the USB cable again.

---

Please let me know if you have any questions or problems while following those instructions.

## macOS

1. Unplug any non-essential USB devices from your computer.
1. Connect the [**UNO R4 WiFi**](https://docs.arduino.cc/hardware/uno-r4-wifi) board to your computer with the USB cable.
1. Open the release page for the latest version of the firmware in your web browser:
   <https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest>
1. Click the "**unor4wifi-update-macos.zip**"download link under the "**Assets**" section of the release page:
1. Wait for the download to finish.
1. [Unzip](https://support.apple.com/en-ca/guide/mac-help/mchlp2528/mac) the downloaded file.
1. Control-click on the unzipped `unor4wifi-update-macos` folder.
   A context menu will open.
1. Select "**New Terminal at Folder**" from the context menu.
   A terminal window will open.
1. Type the following command in the **Terminal** window:
   ```text
   chmod a+x update.command && sudo xattr -d com.apple.quarantine bin/espflash && sudo xattr -d com.apple.quarantine bin/unor4wifi-reboot-macos && ./update.command
   ```
1. Press the <kbd>**Enter**</kbd> key.
   A "Password" prompt will appear in the **Terminal** window.
1. Type your macOS user password.
1. Press the <kbd>**Enter**</kbd> key.
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
   If so, use the <kbd>**↓**</kbd> key on your keyboard to select the port of the **UNO R4 WiFi** board from the list and then press the <kbd>**Enter**</kbd> key.
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

---

Please let me know if you have any questions or problems while following those instructions.
