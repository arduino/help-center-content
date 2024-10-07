---
title: "How to calibrate the internal temperature sensor"
id: 4411202645778
---

When working with internal temperature sensors, such as those found on boards like the Arduino MKR IoT Carrier or the Nicla Sense ME, one common issue is inaccurate temperature readings due to self-heating. Self-heating occurs because components on the board generate heat, which can lead to temperature readings higher than the actual environmental temperature. Factors like power usage, board positioning, and the running code can increase the impact of this effect.

## Steps to calibrate the temperature sensor

### Measure the required offset

1. Turn on your board and let it operate for some time to allow the components to reach their normal operating temperature, ensuring any heat-related offset becomes noticeable.

1. Use a reliable external source to measure the room temperature, like a digital thermostat.

1. Compare the temperature reading from your sensor with the reading from the external source.

1. Subtract the sensor's reading from the external source's reading to calculate the offset.

### Implement the offset in your sketch

Once you have determined the offset, you can adjust the temperature readings in your sketch. Locate the part of the code that retrieves the temperature value and apply the offset by either adding or subtracting it based on whether your sensor reads higher or lower than the actual temperature.

```
float temperature = sensor.readTemperature(); // Function to get temperature from the sensor

float offset = 5; // Your calculated offset

float calibratedTemperature = temperature - offset;
```
