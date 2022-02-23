---
title: "How to reduce power consumption on the Nano 33 BLE"
---

The power consumption on the Nano 33 BLE boards can be reduced down to 0.9 mA (approximate value on standby). Follow these tips to achieve the lowest possible power consumption:

* Use `delay()` in your sketch to put the nRF52840 to sleep when it's not doing anything.

* Turn off the power LED:
`digitalWrite(LED_PWR, LOW);`

* Turn off the sensors:
`digitalWrite(PIN_ENABLE_SENSORS_3V3, LOW);`

* Turn off the I2C pull-up resistors:
`digitalWrite(PIN_ENABLE_I2C_PULLUP, LOW);`

* Cut the 3.3 V jumper on the bottom of the board. This will avoid the power usage of the MPM3610 step-down converter used to convert the 5 V power supply to the 3.3 V supported by the components on the Nano 33 BLE. You will then need to supply power to the board via the 3.3V pin, as it will no longer get power from the USB connection.

[See this example sketch](https://create.arduino.cc/editor/arduino_support/55b72af7-5b59-43f1-b3f7-e02b47fbfce9/preview) for a demonstration on how to implement the above-mentioned tips.
