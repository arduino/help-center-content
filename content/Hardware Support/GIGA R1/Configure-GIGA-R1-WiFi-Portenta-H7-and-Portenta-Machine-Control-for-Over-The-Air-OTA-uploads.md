---
title: Configure GIGA R1 WiFi, Portenta H7, and Portenta Machine Control for Over-The-Air (OTA) uploads
id: 12370721200540
---

Learn how to enable [Over-The-Air (OTA) uploads](https://docs.arduino.cc/arduino-cloud/features/ota-getting-started/) for:

* GIGA R1 WiFi
* Portenta H7
* Portenta H7 Lite
* Portenta Machine Control

Follow these steps if you experience any of these errors when attempting an OTA upload:

* `Error while mounting the filesystem. Err = -5`
* `Arduino_Portenta_OTA::begin() failed with error code -3`

---

Follow these steps to partition memory and install the Wi-Fi firmware required for OTA uploads:

1. Open the memory partitioning sketch:

   - Arduino IDE: Ensure that you are using the [latest version of the board package](https://support.arduino.cc/hc/en-us/articles/4404691106066-Update-board-packages-in-Arduino-IDE), then select File > Examples > STM32H747_System > QSPIFormat.

   - Arduino Cloud Editor: Open the [QSPIFormat example](https://app.arduino.cc/sketches/examples?eid=arduino%2Fhardware%2Fmbed_opta%2F4.4.1%2Flibraries%2FSTM32H747_System%2Fexamples%2FQSPIFormat&slid=mbed_opta%3A4.4.1%3Astm32h747_system){.link-chevron-external} in the Cloud Editor.

1. Connect your device to your computer and select the device in the editor.

1. Click ![Upload button](img/symbol_upload2.png) **Upload** to upload the sketch to the device.

1. Click the ![Serial Monitor button](img/symbol_monitor.png) **Serial Monitor** button in the top-right corner or select Tools > Serial Monitor (Arduino IDE only).

1. You should see the text below in the serial monitor. If the serial monitor is empty, ensure the sketch has finished uploading and press the RST button on the device to restart the sketch.

   ```
   WARNING! Running the sketch all the content of the QSPI flash will be erased.
   The following partitions will be created:
   Partition 1: WiFi firmware and certificates 1MB
   Partition 2: OTA 5MB
   Partition 3: Provisioning KVStore 1MB
   Partition 4: User data / OPTA PLC runtime 7MB
   Do you want to proceed? Y/[n]
   ```

1. Type "Y" into the Serial Monitor and press <kbd>Enter</kbd> to proceed.

1. The following should now appear in the serial monitor:

   ```
   Do you want to perform a full erase of the QSPI flash before proceeding? Y/[n]
   Note: Full flash erase can take up to one minute.
   ```

   Type "Y" into the Serial Monitor and press <kbd>Enter</kbd> to confirm.

1. The following should now appear in the serial monitor:

   ```
   Do you want to restore the WiFi firmware and certificates? Y/[n]
   ```

   Type "Y" into the Serial Monitor and press <kbd>Enter</kbd> to confirm.

1. The following should now appear in the serial monitor:

   ```
   Do you want to use LittleFS to format user data partition? Y/[n]
   If No, FatFS will be used to format user partition.
   Note: LittleFS is not supported by the OPTA PLC runtime.
   ```

   Type "Y" into the Serial Monitor and press <kbd>Enter</kbd> to confirm.

1. The process is complete when this message appears in the serial monitor:

   ```
   QSPI Flash formatted!
   It's now safe to reboot or disconnect your board.
   ```
