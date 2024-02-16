---
title: "Upload the Science Journal firmware"
id: 4408029337746
---

Learn how to upload the Science Journal firmware to your board. In this article:

* [Compatible boards](#compatible-boards)
* [Board configuration overview](#board-configuration)
* [Upload the firmware using the Cloud Editor](#using-the-cloud-editor)
* [Upload the firmware using Arduino IDE](#using-arduino-ide)

<a id="compatible-boards"></a>

## Compatible boards

The Science Journal can be used with the following boards:

* Arduino MKR WiFi 1010 (with the Science Carrier, or Science Carrier Rev2)
* Arduino Nano 33 BLE Sense
* Arduino Nano 33 BLE Sense Rev2
* Arduino Nano RP2040 Connect (by itself, or with the Science Carrier R3)

>The MKR WiFi 1010 needs to be connected using the Science Carrier, which is only available in the [Arduino Science Kit Physics Lab](https://store.arduino.cc/products/arduino-science-kit-physics-lab).

<a id="board-configuration"></a>

## Board configuration overview

To use the Science Journal, it is necessary to use different libraries and examples depending on your board or Science Kit. See the table below for an overview:

| Board                                      | Library                 | Example                               |
| ------------------------------------------ | ----------------------- | ------------------------------------- |
| Arduino Nano 33 BLE Sense (by itself)       | Arduino_ScienceJournal | /ScienceKit/<em>Nano33BLESenseFirmware</em> |
| Arduino Nano 33 BLE Sense Rev2 (by itself)  | Arduino_ScienceJournal | /ScienceKit/<em>Nano33BLESenseRev2Firmware</em> |
| Arduino MKR WiFi 1010 (with Science Carrier)| Arduino_ScienceJournal | /ScienceKit/<em>PhysicsLabFirmware</em> |
| Arduino MKR WiFi 1010 (with Science Carrier Rev2)| Arduino_ScienceJournal | /ScienceKitR2/<em>PhysicsLabFirmware</em> |
| Arduino Nano RP2040 Connect (by itself)    | Arduino_ScienceJournal | /ScienceKit/<em>RP2040ConnectFirmware</em> |
| Arduino Nano RP2040 Connect (with Science Carrier R3)| Arduino_ScienceKitCarrier | /<em>ScienceJournal</em> |

<a id="using-the-cloud-editor"></a>

## Upload the firmware using the Cloud Editor

1. Open the [Cloud Editor](https://create.arduino.cc/editor).
2. Connect your board to your computer with a USB cable.
3. Select your board in the board dropdown.

   ![The board dropdown in the Cloud Editor.](img/web-editor-sj-firmware-board.png)

4. Check the [Board configuration overview  table](#board-configuration) for information about the required library and example for your board.
5. Click on **Examples** in the left-most sidebar to open the Examples tab. Search the example for your board in the textbox and select it in the results area.

    ![Opening the Nano33BLESenseFirmware example from the Arduino_ScienceJournal library.](img/web-editor-select-example.png)

6. Click the ![Cloud Editor upload button.](img/symbol_upload-web.png) **Upload** button.

   ![Uploading the sketch in the Cloud Editor.](img/web-editor-sj-firmware-upload.png)

7. Wait for the process to finish (Compilation for the Nano 33 BLE Sense may take several minutes, and the console will not print any messages during this time).
8. When the upload is completed, you can [connect your board to the Science Journal app](https://support.arduino.cc/hc/en-us/articles/4407749620370).

<a id="using-arduino-ide"></a>

## Upload the firmware using Arduino IDE

1. Connect your board to your computer with a USB cable.
2. Open Arduino IDE and [select your board](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE).
3. Check the [Board configuration overview  table](#board-configuration) for information about the required library and example for your board.
4. [Install the library](https://support.arduino.cc/hc/en-us/articles/5145457742236-Add-libraries-to-Arduino-IDE) for your board.
5. In `File > Examples`, hover over the library for your board to reveal the examples and select the example for your board (In IDE 1, the path is `File > Examples > INCOMPATIBLE`).

    ![Arduino IDE 2 with the Nano33BLESenseFirmware example in the File>Examples menu](img/ide2-select-example-sj.png)

6. Click the ![Upload button](img/symbol_upload.png) **Upload** button.
7. Wait for the process to finish (Compilation for the Nano 33 BLE Sense may take several minutes, and the console will not print any messages during this time).
8. When the upload is completed, you can [connect your board to the Science Journal app](https://support.arduino.cc/hc/en-us/articles/4407749620370).
