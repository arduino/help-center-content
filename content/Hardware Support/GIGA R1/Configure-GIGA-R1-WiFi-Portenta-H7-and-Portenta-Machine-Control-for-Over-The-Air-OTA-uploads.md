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

## 1. Connect your board to Arduino IDE

> [!IMPORTANT]
> The required sketch examples are currently not available in the Web Editor.

1. Open Arduino IDE.

1. Connect the board to your computer with a USB-C cable.

1. Select your board in the board selector, or use the _Tools > Port_ and _Tools > Board_ menus.

---

## 2. Format the flash memory

Format the board's Quad Serial Peripheral Interface (QSPI) flash memory.

**Follow these steps:**

1. In the top menu bar, open **File > Examples > STM32H747_System > QSPIFormat**.

1. Click ![Upload button](img/symbol_upload2.png) **Upload** to upload the sketch.

1. Open the Serial Monitor using one of these methods:

   * Click the ![Serial Monitor button](img/symbol_monitor.png) button in the top-right corner.

   * Select _Tools > Serial Monitor_ in the menu bar.

1. If the Serial Monitor is empty, run the sketch again by pressing the **RST** button on the board.

1. This message should appear:

   `Do you want to use partition scheme 1? Y/[n]`
   `If No, partition scheme 2 will be used.`

   If you do, type `Y` into the text field and press <kbd>Enter</kbd> to send.

1. Followed by this message:

   `WARNING! Running the sketch all the content of the QSPI flash will be erased. Do you want to proceed? Y/[n]`

   If you do, type `Y` into the text field and press <kbd>Enter</kbd> to send.

1. Wait until `QSPI Flash formatted!` appears in the Serial Monitor output.

---

<a id="flash-the-wi-fi-firmware"></a>

## 3. Flash the Wi-Fi firmware

Flash the latest Wi-Fi firmware version to the board.

**Follow these steps:**

1. In the top menu bar, open **File > Examples > STM32H747_System > WiFiFirmwareUpdater**.

1. Click ![Upload button](img/symbol_upload2.png) **Upload** to upload the sketch.

1. Open the Serial Monitor using one of these methods:

   * Click the ![Serial Monitor button](img/symbol_monitor.png) button in the top-right corner.

   * Select _Tools > Serial Monitor_ in the menu bar.

1. If the Serial Monitor is empty, run the sketch again by pressing the **RST** button on the board.

1. If you get this message:

   `A WiFi firmware is already installed. Do you want to install the firmware anyway? Y/[n]`

   If you do, type `Y` into the text field and press <kbd>Enter</kbd> to send.

1. Wait until `Firmware and certificates updated!` appears in the Serial Monitor output.
