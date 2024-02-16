---
title: "Deprecation Notice of Arduino IoTCloud Library version 1.12.0 and 1.12.1 Statement"
id: 12351845223836
---

## Statement

Due to a change in the management of the TLS certificates introduced by the Cloud provider used by Arduino (AWS), we are forced to deprecate two versions of the [Arduino IoTCloud Library](https://github.com/arduino-libraries/ArduinoIoTCloud) for users authenticating their boards with a **Secret Key**.

We're making improvements on a continual basis and this will help Arduino in enhancing and evolving its infrastructure and services.

## Impacted Users

The users impacted by the deprecation are users of Arduino Cloud that have specific types of boards connected:

* [Arduino Nano ESP32](https://store.arduino.cc/products/nano-esp32) boards
* Generic third-party ESP32 boards

Only if they are running the [Arduino IoTCloud Library](https://github.com/arduino-libraries/ArduinoIoTCloud) versions [v1.12.0](https://github.com/arduino-libraries/ArduinoIoTCloud/releases/tag/1.12.0) and [v1.12.1](https://github.com/arduino-libraries/ArduinoIoTCloud/releases/tag/1.12.1).

## Effective Release

After February 29th, 2024, the support of the affected library versions will be ended.

## What do I have to do?

If you are impacted, please ensure you update your library to at least [v1.12.2](https://github.com/arduino-libraries/ArduinoIoTCloud/releases/tag/1.12.2) before the end of February 2024, for continued access to Arduino Cloud for your boards.

**Before the deprecation date**, please update the [Arduino IoTCloud Library](https://github.com/arduino-libraries/ArduinoIoTCloud) in any of the following ways:

* performing an OverTheAir (OTA) update
* connecting your board via USB and performing a sketch upload

**If the deprecation date is expired**, and you haven’t updated the library, your board will not be able to connect to Arduino Cloud. However, you can connect the board via USB and perform a sketch upload to ensure the library is updated and the board can continue to operate.

## Reference

* [Amazon introduces dynamic intermediate certificate authorities | Amazon Web Services](https://aws.amazon.com/blogs/security/amazon-introduces-dynamic-intermediate-certificate-authorities/)
