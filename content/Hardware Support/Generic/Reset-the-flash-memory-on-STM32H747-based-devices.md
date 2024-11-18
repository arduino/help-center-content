---
title: Reset the flash memory on STM32H747-based devices
id: 16206977438748
---

Learn how to reset the QSPI flash memory for STM32H747-based Arduino devices by uploading a utility sketch. The sketch will remove any previous partitioning scheme, and recreate the factory-defined partition scheme. Finally, the latest connectivity firmware and TLS certificates are reinstalled.

You may want to use this procedure to:

* Restore the factory-defined memory allocation for full support of Arduino IDE or Arduino Cloud.
* Resolve issues with storage or connectivity.

Supported devices:

* Arduino GIGA R1 WiFi
* Arduino Opta Lite
* Arduino Opta RS485
* Arduino Opta WiFi
* Arduino Portenta H7
* Arduino Portenta H7 Lite
* Arduino Portenta H7 Lite Connected
* Arduino Portenta Machine Control

---

> [!IMPORTANT]
> Resetting the flash memory will remove the PLC IDE runtime. [Reinstall the runtime](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license/#3-download-the-runtime) to continue using PLC IDE with your device.

Follow these steps:

1. Download the following sketch:

   [memory_partitioning.zip](https://docs.arduino.cc/3147be35e0c40957022af51f015c3e4d/memory_partitioning.zip){.link-download}

1. Open the sketch in your editor:

   * Arduino IDE: Extract the .zip into your [Sketchbook](https://support.arduino.cc/hc/en-us/articles/4412950938514-Open-the-Sketchbook-folder). Ensure both `memory_partitioning.ino` and `certificates.h` are inside a folder named `memory_partitioning`.

   * Cloud Editor: Open the [Sketches tab](https://app.arduino.cc/sketches) and click on the **Create** button in the top-right corner. Select **Import local file** in the dropdown menu and import `memory_partitioning.zip`.

1. Open the imported sketch in your editor.

1. Connect your device to your computer and select the device in the editor.

1. Click ![Upload button](img/symbol_upload2.png) **Upload** to upload the sketch to the device.

1. Click the ![Serial Monitor button](img/symbol_monitor.png) **Serial Monitor** button in the top-right corner or select Tools > Serial Monitor (IDE only).

1. Open the Serial Monitor. When this message appears, the process is complete:

   ```
   Firmware and certificates updated!
   It's now safe to reboot or disconnect your board.
   ```

Check if the problem persists. If you're using PLC IDE, you'll first need to [reinstall the runtime](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license/#3-download-the-runtime). If you're using an Arduino Opta and still encounter issues, the memory may have write protection enabled. Follow the instructions in [Recover an Arduino Opta with read-only flash memory](https://support.arduino.cc/hc/en-us/articles/16289852333212-Recover-an-Arduino-Opta-with-read-only-flash-memory), then repeat the steps above.
