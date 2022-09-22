---
title: "Can I use a 3.3 V rated sensor with a 5 V operating board?"
id: 4405245694738
---

For some projects, sensors with small voltage outputs (less than 5 V) can be used. However, this makes the Arduino board's sensor readings less accurate, if the sensor is used as a typical 5 V output rated sensor. For example, the Arduino UNO has 10 bits ADC resolution which means that it can read 0-5 V with 1023 steps. That is, 5000 mV/1024 = 4,88 mV, meaning that it can only measure a signal change in the ADC if the voltage increases or decreases with about 5 mV.

For a 3.3 V rated output sensor, one of the ways to use this type of sensor with an Arduino board is to use the board's internal reference. For example, the Arduino UNO or ATmega328 has an internal reference voltage value of 1.1 V. For other boards, see [internal reference](https://www.arduino.cc/reference/en/language/functions/analog-io/analogreference/).

To use this for Arduino UNO, set the ADC voltage reference to internal in the sketch setup as shown below.

```
void setup {
  analogReference(INTERNAL);  //INTERNAL 1.1V reference selected
}
void loop {
}   
```

For sizing the voltage divider required for the sensor output and the calculations required to obtain accurate sensor output reading, check the **3.3 V Sensor, INTERNAL 1.1 V reference** section of [Arduino and ADC (part3)](https://www.open-electronics.org/arduino-and-adc-part3/).
