---
title: "Use the built-in sensors on Nano 33 BLE Sense"
id: 360014654820
---

The Nano 33 BLE Sense has a set of sensors embedded on the top, which gives a lot of options to try ideas without having to generate the circuit to such sensors in a prototyping board.
The sensor location can be checked in the following image, while the specific model and some other details are addressed later in this same article:

<img src ="https://content.arduino.cc/assets/NANO-33-BLE-Sense_sensor-indentification.png" title="Sensors on Nano 33 BLE Sense">

## Color, brightness, proximity and gesture sensor

The Gesture sensor is the APDS9960 module, [here](https://docs.broadcom.com/docs/AV02-4191EN) you can check its datasheet. It senses gesture, color, ambience illumination and proximity. This chip, made by Broadcom, is supported by our [ArduinoAPDS9960 library](https://www.arduino.cc/en/Reference/ArduinoAPDS9960) which includes functions and example sketches.

## Digital microphone

The digital microphone is a [MP34DT05](https://www.st.com/resource/en/datasheet/mp34dt05-a.pdf), this chip, made by ST Microelectronics, is an ultra-compact, low-power, omnidirectional, digital MEMS microphone built with a capacitive sensing element and an IC interface; it produces an output coded in [PDM](https://en.wikipedia.org/wiki/Pulse-density_modulation). The PDM format is supported by our [PDM library](https://www.arduino.cc/en/Reference/PDM) that can be used also with our [ArduinoSound](https://www.arduino.cc/en/Reference/ArduinoSound) library which contains example sketches to use the sensor.

## Motion, vibration and orientation

The Inertial Measurement Unit (IMU) is a [LSM9DS1](https://www.st.com/resource/en/datasheet/lsm9ds1.pdf) chip that comes integrated in the board. It features a 3-axis accelerometer, 3-axis gyroscope and 3-axis magnetometer. This chip, made by ST Microelectronics, is a standard component supported by our library [ArduinoLSM9DS1](https://www.arduino.cc/en/Reference/ArduinoLSM9DS1) which contains example sketches to use the sensor.
The library takes care of the sensor initialization and sets its values as follows:

- Accelerometer range is set at [-4,+4]g -/+0.122 mg
- Gyroscope range is set at [-2000, +2000] dps +/-70 mdps
- Magnetometer range is set at [-400, +400] uT +/-0.014 uT
- Accelerometer Output data rate is fixed at 104 Hz
- Gyroscope Output data rate is fixed at 104 Hz
- Magnetometer Output data rate is fixed at 20 Hz

## Relative humidity and temperature

The relative humidity and temperature sensor is a [HTS221](https://www.st.com/resource/en/datasheet/HTS221.pdf), is an ultra-compact sensor that uses a polymer dielectric planar capacitor structure capable of detecting relative humidity variations and temperature, returned as digital output on a serial interface. This chip, made by ST is supported by our library [ArduinoHTS221](https://www.arduino.cc/en/Reference/ArduinoHTS221).
The library contains, as usual, useful functions and example sketches to use the sensor to measure the [relative humidity](https://en.wikipedia.org/wiki/Relative_humidity).
The sensor can be calibrated using the function `readHTS221Calibration()`, and it's ranges are as following:

- Humidity accuracy: ± 3.5% rH, 20 to +80% rH
- Humidity range: 0 to 100 %
- Temperature accuracy: ± 0.5 °C,15 to +40 °C
- Temperature range: -40 to 120° C

### Pressure

The barometer sensor is a [LPS22HB](https://www.st.com/resource/en/datasheet/lps22hb.pdf), is an ultra-compact sensor which functions as a digital output barometer. This chip, made by ST is supported by our [ArduinoLPS22HB](https://www.arduino.cc/en/Reference/ArduinoLPS22HB) library which includes example sketches to measure the atmospheric pressure.

- Absolute pressure range: 260 to 1260 hPa

If you would like to make a quick test of all the sensors, you can use [this](https://create.arduino.cc/editor/arduino_support/68cca5d0-4f1b-45ea-b43d-f22b759555fa/preview) sketch to check if all the sensors are being initialised.

You can check the board pinout [here](https://content.arduino.cc/assets/Pinout-NANOsense_latest.pdf).
