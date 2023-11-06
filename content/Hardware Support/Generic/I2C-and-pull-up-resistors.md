---
title: I2C and pull-up resistors
id: 11153357842588
---

For effective data transmission with the Inter-Integrated Circuit (I2C) protocol using Arduino, it's often necessary to use external pull-up resistors on the designated I2C pins. Most Arduino boards don't have pre-installed pull-up resistors on these pins, but instead they offer exposed pads for surface mount resistors. This gives more flexibity on how these pins can be used. More specifically:

* The I2C designated pins can also be used as General Purpose Input/Output (GPIO) pins or for Analog-to-Digital Conversion (ADC). In this modes, pull-up resistors are not typically required.
* Users are not bound to use I2C with pre-set pull-up values. This is important because the optimal pull-up value can vary depending on different factors. <a class="link-external" href="https://learn.sparkfun.com/tutorials/i2c/i2c-at-the-hardware-level">Read more about I2C and pull-up values</a>

Therefore, when setting up I2C communication it is important to refer to the specifications and device datasheets for understanding the ideal pull-up value requirements.
