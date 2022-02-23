---
title: "Format a MicroSD card for use with the Arduino Pro Gateway (macOS/Windows)"
---

Arduino Pro Gateway comes with a preloaded MicroSD memory card with system software. Learn how to restore this memory card or prepare a new memory card for use with the gateway.

---

## 1. Format the SD card

1. Download and install [SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter/).
2. Open the application.
3. Insert the SD Card into your computer.
4. Ensure that the SD card is displayed in the _Select Card_ drop-down.
5. Select _Overwrite Format_ in formatting options.
6. Begin formatting by clicking the `Format` button.

## 2. Flash the SD card

01. Download the Arduino Pro Gateway image file for the SD card [here](https://downloads.arduino.cc/arduino_pro_gateway_for_lora/prod/sd_kit_image_releases/v1.1.0/20190206PROD_ArduinoProGateway_SD.zip).
02. Extract the zipped file and save it.
03. Go to BalendaEtcher and download the flasher application [here](https://www.balena.io/etcher/).
04. Locate the balenaEtcher application in your downloads and proceed with installation.
05. Open the Etcher application.
06. Select _Flash from File_.
07. Locate '20190206PROD_ArduinoProGateway_SD.img' file and Open.
08. Insert SD Card into your computer.
09. Select target "SD Card".
10. Flash the image by selecting the `Flash!` button.

## Reactivate your gateway

If your Pro Gateway is already activated, you need to reactivate it using [Manager for Linux](https://create.arduino.cc/devices/).

1. [Deactivate the gateway](https://support.arduino.cc/hc/en-us/articles/4407770459410) in Manager for Linux.
2. [Activate the gateway](https://support.arduino.cc/hc/en-us/articles/4407770369042) in Manager for Linux.
