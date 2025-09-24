---
title: Reset the flash memory on STM32H747-based devices
id: 16206977438748
---

Learn how to reset or change the QSPI flash memory configuration on STM32H747-based Arduino boards using a utility sketch. Running the sketch erases any custom partitioning, restores one of two supported memory layouts, and reinstalls the latest connectivity firmware along with TLS certificates.

You may want to use this procedure to:

- Switch between different partition schemes.
- Recover a board with incorrectly partitioned memory.
- Resolve other issues with memory or connectivity.

In this article:

<!-- TOC -->

- [Available partition schemes](#available-partition-schemes)
- [Use the default partition scheme](#use-the-default-partition-scheme)
- [Use the partition scheme for Arduino PLC IDE](#use-the-partition-scheme-for-arduino-plc-ide)
- [Troubleshooting](#troubleshooting)

<!-- /TOC -->

---

## Available partition schemes

| Partition scheme | Description                                                                                               |
|---------------------|--------------------------------------------------------------------------------------------------------|
| [Default partition scheme](#use-the-default-partition-scheme)    | Required for full Arduino Cloud support.                  |
| [Arduino PLC IDE](#use-the-partition-scheme-for-arduino-plc-ide) | Compatible with Arduino PLC IDE 1.0.8.                    |

---

## Use the default partition scheme

This partition scheme supports the latest Arduino Cloud features, and is recommended unless you are using your device with Arduino PLC IDE.

Supported devices:

- Arduino GIGA R1 WiFi
- Arduino Opta Lite
- Arduino Opta RS485
- Arduino Opta WiFi
- Arduino Portenta H7
- Arduino Portenta H7 Lite
- Arduino Portenta H7 Lite Connected
- Arduino Portenta Machine Control

Follow these steps:

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

   Type "Y" into the Serial Monitor and press <kbd>Enter</kbd> to confirm (recommended).

1. The following should now appear in the serial monitor:

   ```
   Do you want to restore the WiFi firmware and certificates? Y/[n]
   ```

   Type "Y" into the Serial Monitor and press <kbd>Enter</kbd> to confirm (recommended).

1. The following should now appear in the serial monitor:

   ```
   Do you want to use LittleFS to format user data partition? Y/[n]
   If No, FatFS will be used to format user partition.
   Note: LittleFS is not supported by the OPTA PLC runtime.
   ```

   Type "Y" into the Serial Monitor and press <kbd>Enter</kbd> to confirm (recommended).

1. The process is complete when this message appears in the serial monitor:

   ```
   QSPI Flash formatted!
   It's now safe to reboot or disconnect your board.
   ```

---

## Use the partition scheme for Arduino PLC IDE

This partition scheme is compatible with Arduino PLC IDE 1.0.8.

Supported devices:

- Arduino Opta Lite
- Arduino Opta RS485
- Arduino Opta WiFi
- Arduino Portenta Machine Control

Follow these steps:

1. Download the following sketch:

   [memory_partitioning.zip](https://content.arduino.cc/assets/memory_partitioning.zip){.link-download}

1. Open the sketch in your editor:

   - Arduino IDE: Extract the .zip into your [Sketchbook](https://support.arduino.cc/hc/en-us/articles/4412950938514-Open-the-Sketchbook-folder). Ensure both `memory_partitioning.ino` and `certificates.h` are inside a folder named `memory_partitioning`.

   - Cloud Editor: Open the [Sketches tab](https://app.arduino.cc/sketches) and click on the **Create** button in the top-right corner. Select **Import local file** in the dropdown menu and import `memory_partitioning.zip`.

1. Open the imported sketch in your editor.

1. Connect your device to your computer and select the device in the editor.

1. Click ![Upload button](img/symbol_upload2.png) **Upload** to upload the sketch to the device. The partitioning and firmware update process will begin automatically when the sketch starts running.

1. Click the ![Serial Monitor button](img/symbol_monitor.png) **Serial Monitor** button in the top-right corner or select Tools > Serial Monitor (IDE only).

1. Open the Serial Monitor. When this message appears, the process is complete:

   ```
   Firmware and certificates updated!
   It's now safe to reboot or disconnect your board.
   ```

Note that resetting the flash memory will remove the PLC IDE runtime. To continue using PLC IDE with your device, you need to [reinstall the runtime](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license/#3-download-the-runtime).

---

## Troubleshooting

If you're using an Arduino Opta and still encounter issues, the memory may have write protection enabled. Follow the instructions in [Recover an Arduino Opta with read-only flash memory](https://support.arduino.cc/hc/en-us/articles/16289852333212-Recover-an-Arduino-Opta-with-read-only-flash-memory), then partition the memory again.
