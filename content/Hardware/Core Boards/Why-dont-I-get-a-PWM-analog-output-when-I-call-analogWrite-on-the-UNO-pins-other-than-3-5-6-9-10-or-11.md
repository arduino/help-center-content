---
title: "Why don't I get a PWM (analog) output when I call analogWrite() on the UNO pins other than 3, 5, 6, 9, 10, or 11?"
---

The microcontroller on the Arduino UNO board, ATmega168, only supports PWM output `analogWrite()` on certain pins. Calling `analogWrite()` on any other pins will give high (5 volts) for values greater than 128 and low (0 volts) for values less than 128.

Older Arduino boards with an ATmega8 only support PWM output on pins 9, 10, and 11.
