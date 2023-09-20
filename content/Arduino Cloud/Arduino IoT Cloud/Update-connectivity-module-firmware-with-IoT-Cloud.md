---
title: Update connectivity module firmware with IoT Cloud
id: 10501616961564
---

Arduino IoT Cloud uses the Arduino Firmware Uploader tool to update supported connectivity modules:

These boards and modules are supported[^deprecated]:

| Board                 | Module   |
|-----------------------|----------|
| Arduino UNO R4 WiFi   | ESP32-S3 |
| Arduino Portenta C33  | ESP32-C3 |
| Arduino MKR WiFi 1010 | NINA     |
| Arduino NANO 33 IoT   | NINA     |
| Arduino Uno WiFi Rev2 | NINA     |
| Arduino Nano RP2040   | NINA     |

[^deprecated]: MKR 1000 WiFi and MKR Vidor 4000 are not supported in the Arduino Firmware Uploader used by Arduino IoT Cloud. To update these boards, use Arduino IDE [2.2.1](https://github.com/arduino/arduino-ide/releases/tag/2.1.1) or Arduino Firmware Uploader [2.3.0](https://github.com/arduino/arduino-fwuploader/releases/tag/2.3.0). For more information, see the [Arduino Firmware Uploader user documentation](https://arduino.github.io/arduino-fwuploader/latest/deprecated/).

How to update the firmware:

* When you **add a new device** to IoT Cloud, the connectivity module firmware is automatically updated.
* To update an existing device, follow these steps:
  1. Open the **[Device tab](https://create.arduino.cc/iot/devices)** and select the device you want to update.
  2. Click on the row with your device name to open **Device info**.
  3. Find the **Connectivity Module Firmware** row. It will display the last firmware version that was flashed to the board. If a newer one is available, an **Update** button will be displayed. Click it to update the firmware to the latest available version.

     ![Device Info](img/iot-cloud-device-info-update.png)

* Alternatively, you update an existing device by removing it and then adding it again. When adding the device, the firmware is automatically updated with the latest firmware version.
