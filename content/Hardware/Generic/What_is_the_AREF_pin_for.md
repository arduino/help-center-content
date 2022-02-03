---
title: "What is the AREF pin for?"
---

AREF means Analog REFerence. It allows us to feed the Arduino a reference voltage from an external power supply in order to configure the reference voltage used for analog input (i.e. the value used as the top of the input range).

For example, if we want to measure voltages with a maximum range of 3.3V, we would feed a nice smooth 3.3V into the AREF pin – perhaps from a voltage regulator IC. Then the each step of the ADC would represent 3.22 millivolts.

The function that allows us to change the reference voltage in our sketch is `analogReference()`. It Configures the reference voltage used for analog input (i.e. the value used as the top of the input range).

> For Mbed Nano Boards there is no AREF pin on the microcontroller and the only references to be used with the ADC are the internal ones. So in the MBED boards, the AREF pin is not connected to anything.

To find out more about the `analogreference()` function and how to use it with all different Arduino board types click on this [link](https://www.arduino.cc/reference/en/language/functions/analog-io/analogreference/).
