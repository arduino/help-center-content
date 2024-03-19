---
title: "How to change the ADC resolution"
id: 360012963860
---

The Arduino Nano 33 BLE has the ability to change its analog read resolution increasing the number of bits on the values that `analogRead()` function returns. The default resolution value is 10-bits (returns values between 0-1023) and it can support up to 12-bit ADC (returns values between 0-4095).

To achieve this there is another function called `analogReadResolution()` that sets the size (in bits) of the value returned by `analogRead()`.

See the [analogReadResolution()](https://www.arduino.cc/reference/en/language/functions/analog-io/analogreadresolution/) page for more information on how to change the ADC resolution.
