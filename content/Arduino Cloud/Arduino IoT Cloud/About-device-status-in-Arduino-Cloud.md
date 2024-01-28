---
title: "About device status in Arduino Cloud"
id: 4407169649682
---

In Arduino Cloud, the **device status** describes the connection between your device and the Cloud.

![Devices in Arduino Cloud with different statuses.](img/Board_status.png)

One of these will be displayed for each device:

| Status           | Description                                                                            |
|------------------|----------------------------------------------------------------------------------------|
| Ready to connect | The device has initialized a connection but is not connected to the Arduino Cloud. |
| Online           | The device is connected and communicating with the Arduino Cloud.                  |
| Offline          | The device has initialized a connection but is not connected to the Arduino Cloud. |
| -                | Device status is not supported for this device.                                        |

After uploading your sketch, it may take a few minutes before the status changes to Online.

> [!NOTE]
> Device status is not supported by the LoRa communication protocol, and is not available for MKR WAN 1300, MKR WAN 1310, and other LoRa devices.

## Further reading

* [My device is not connecting to Wi-Fi or to Arduino Cloud](https://support.arduino.cc/hc/en-us/articles/360019355679-My-device-is-not-connecting-to-WiFi-or-to-IoT-Cloud)
