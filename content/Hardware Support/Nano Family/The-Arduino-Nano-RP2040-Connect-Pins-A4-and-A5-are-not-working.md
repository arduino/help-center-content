---
title: "The Arduino Nano RP2040 Connect Pins A4 and A5 are not working"
id: 4402998613394
---

Nano RP2040 Connect has eight analog input pins A0 to A7 and a fixed analog reference voltage of +3.3V. It has a 12-bit ADC on a fixed set of pins A4 to A7. As a result, standard Arduino calls can be used to read their values with a resolution that can go from 0 to 4095, corresponding to the ADC reading of the specific pin.

Pins A4 and A5 are shared with the I2C bus and are each pulled up with a 4.7KΩ resistor. The I2C connections on pins A4 (SDA) and A5 (SCL) are used for connecting to the onboard peripherals. By default, these two PINs are I2C pins, but can also be used as standard ADC pins for most applications. However, depending on specific applications, using them as standard ADC pins other than I2C pins may lead to conflict with the on-board IMU and Crypto chip.
