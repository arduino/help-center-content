---
title: "If your board runs the sketch twice"
---

The issue of the ```setup()``` function running twice when uploading a sketch has been reported in some boards.

Since a port can only be connected to one application at a time, the Arduino IDE has to close and open the port a number of times to upload a sketch while the Serial Monitor is open. This process resets the board and the program runs again.

The repeated output can be avoided in two ways:

1. If one simply wants to repeatedly run the sketch to observe the output, there’s no need to upload the (same) sketch multiple times. Just press the reset button with the Serial Monitor open.
2. The board resets after approximately 100 milliseconds. By adding `delay(150)` at the start of the `setup()` function, the board will be reset before any of the following code is executed. Increase the delay if needed.

## Useful information

* [Serial.read()](https://www.arduino.cc/reference/en/language/functions/communication/serial/read/) in Arduino reference
* [Serial input basics](https://forum.arduino.cc/t/serial-input-basics-updated/382007) in the Arduino Forum
* [If you get unexpected zeroes using Serial.parseInt() or Serial.parseFloat()](https://support.arduino.cc/hc/en-us/articles/4407876044434-If-you-get-unexpected-zeroes-using-Serial-parseInt-or-Serial-parseFloat-)
