---
title: "Restore the connectivity firmware on UNO R4 WiFi with espflash"
id: 16379769332892
---

The UNO R4 WiFi has a ESP32-S3 chip, which handles the USB-to-serial communication. The firmware for this chip can normally be upgraded [using Arduino IDE or Arduino Cloud](https://support.arduino.cc/hc/en-us/articles/9670986058780-Update-the-connectivity-module-firmware-on-UNO-R4-WiFi#iot), but if this is not possible the firmware can be restored using **espflash**.

You may want to use this procedure if:

* Your UNO R4 WiFi is detected as a generic ESP32 board by Arduino IDE or Arduino Cloud.
* Your UNO R4 WiFi isn't detected as any board by Arduino IDE or Arduino Cloud, despite being connected to your computer with a working data USB cable.

---

Follow these steps:

1. Unplug any non-essential USB devices from your computer.
1. Short the pins highlighted in the image using a jumper wire:

   ![The GND and Download ESP32 pins.](img/esp32-data-pins.png)
1. Maintain the short between these pins as you connect the UNO R4 WiFi board to your computer with a USB cable.
1. Download and extract the .ZIP file for your system:
   * [unor4wifi-update-windows.zip](https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest/download/unor4wifi-update-windows.zip){.link-download}
   * [unor4wifi-update-macos.zip](https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest/download/unor4wifi-update-macos.zip){.link-download}
   * [unor4wifi-update-linux.zip](https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/latest/download/unor4wifi-update-linux.zip){.link-download}
1. Open your system's command line application inside the extracted folder.
   * **Windows:** Hold <kbd>⇧Shift</kbd> and right-click any blank space inside the extracted folder. In the context menu, select **Open command window here / Open PowerShell window here**.
   * **macOS:** Control-click on the unzipped `unor4wifi-update-macos` folder and select "**New Terminal at Folder**" from the context menu. A terminal window will open.
   * **Linux:** Open [a command line terminal](https://ubuntu.com/tutorials/command-line-for-beginners) in the extracted folder.
1. Run the command:
   * **Windows:** `bin\espflash write-bin -b 115200 0x0 (Get-Item .\firmware\UNOR4-WIFI-S3-*.bin).FullName`
   * **macOS/Linux:** `./bin/espflash write-bin -b 115200 0x0 firmware/UNOR4-WIFI-S3-*.bin`
1. The terminal window might now show a list of the serial ports present on your computer. Use the arrow keys on your keyboard to select the port for the board and then press the <kbd>**Enter**</kbd> key.
   * **Windows:** The board will have a name like "USB Serial device". <!-- TODO: Confirm name -->
   * **macOS:** The board will be named "USB JTAG_serial debug unit". Two ports with this name will be available, select the port that starts with `/dev/cu.usbmodem*`. <!-- TODO: Same for Linux, probably. Confirm this. -->
   * If you can't find it, try following steps 1–3 again.

1. The terminal window will now show the following prompt:

   ```text
   ? Remember this serial port for future use? (y/n) ›
   ```

   Press the <kbd>**N**</kbd> key on your keyboard.
1. The flashing process should now start. Wait for it to finish, as indicated by output that looks something like this:

   ```text
   [2023-07-11T08:59:44Z INFO ] Connecting...
   [2023-07-11T08:59:45Z INFO ] Using flash stub
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

<!-- `/dev/cu.usbmodem13301 - USB JTAG_serial debug unit` -->
