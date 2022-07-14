---
title: "What library to use to read the IMU in the board?"
id: 360019235159
---

Several of the Arduino boards have Inertial Measurement Units (IMUs) embedded in them. In order to access the readings of these sensors you can use one of our libraries. since there are several of them, this can be confusing, so in order to use the right one, please follow this instructions:

1. Check your board's IMU model [in our store](https://store.arduino.cc/), under the "tech specs" tab of the bord you are working with.

2. Install & include the corresponding library oin the IDE & sketch respectively:

* `Arduino_ LSM6DS3` is the one to use in boards like the Arduino UNO WiFi Rev2 and Nano 33 IoT boards
* `Arduino_LSM9DS1`is the one to use in boards like the Arduino Nano 33 BLE.
