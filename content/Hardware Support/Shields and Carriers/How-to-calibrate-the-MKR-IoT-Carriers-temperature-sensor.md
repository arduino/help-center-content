---
title: "How to calibrate the MKR IoT Carrier's temperature sensor"
id: 4411202645778
---

The MKR IoT Carrier is equipped with a [HTS221](https://www.arduino.cc/en/Reference/ArduinoHTS221); which is a digital humidity and temperature sensor. However, when your temperature reading is inaccurate then a recalibration would assist in displaying a more accurate temperature. This can be easily adjusted by making small modifications to your code.

## 1. Get Offset for Calibration

Use another source to get the temperature of the room (e.g. Thermostat, Smartphone). Compare the temperature from your chosen source to the one of the HTS221 sensor by subtracting the two. Save the difference as your offset to be used for calibration adjustment.

> [!NOTE]
> Temperature reading from secondary source 28°C and the HTS221 sensor is 23°C. Therefore, (28°C - 23°C = 5°C) offset = 5°C.

The above would indicate that the HTS221 sensor is 5°C less than the actual temperature; therefore, we will offset the difference in the following sections.

## 2. Calibrate the temperature

Locate the variable in the loop function of your sketch to modify; this can be done using either following sketches but are not limited to: _Personal Weather Station_ project from Arduino Cloud or the ReadSensors sketch of the Arduino IDE under _File > Examples > MKRIoTCarrier > Sensor > ENV_HTS221 > ReadSensors._

```
  float temperature = carrier.Env.readTemperature();
```

Depending if you need to calibrate your sensor higher or lower then you would add or subtract your offset to the return value of the function to be saved as your new temperature variable. However, for this guide we will continue to use the offset in the example above by subtracting as follows:

```
  float temperature = carrier.Env.readTemperature()-5;
```

Now the temperature should be calibrated to a more accurate reading of your choosing. For more details on the HST221 library please visit their [GitHub webpage](https://github.com/arduino-libraries/Arduino_HTS221/blob/master/src/HTS.cpp#L87).
