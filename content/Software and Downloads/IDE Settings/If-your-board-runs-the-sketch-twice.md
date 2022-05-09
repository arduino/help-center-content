---
title: "If your board runs the sketch twice"
---

On some boards, uploading while the Serial Monitor is open causes the board to run once, before resetting and running the new sketch. This can cause `Serial.println()` output to display twice in the Serial Monitor.

This happens on boards without native USB capabilities (such as the UNO and Mega), which automatically reset when the port is opened. Since Arduino IDE needs to close the Serial Monitor for the upload tool to access the port, we get the following sequence of events:

1. Upload is started in Arduino IDE.
2. The Serial Monitor port is closed.
3. The port is opened by the upload tool. The board resets, and runs briefly runs any sketch currently on the board.
4. After a short while (typically ~100 ms), upload finishes.
5. Serial Monitor reopens the port. The board resets a second time, and starts running the new sketch.

The repeated output can be avoided in two ways:

1. If one simply wants to repeatedly run the sketch to observe the output, there’s no need to upload the (same) sketch multiple times. Just press the reset button with the Serial Monitor open.
2. The board resets after approximately 100 milliseconds. By adding `delay(150)` at the start of the `setup()` function, the board will be reset before any of the following code is executed. Increase the delay if needed.

## Further reading

* [Serial.read()](https://www.arduino.cc/reference/en/language/functions/communication/serial/read/) in Arduino reference
* [Serial input basics](https://forum.arduino.cc/t/serial-input-basics-updated/382007) in the Arduino Forum
* [If you get unexpected zeroes using Serial.parseInt() or Serial.parseFloat()](https://support.arduino.cc/hc/en-us/articles/4407876044434-If-you-get-unexpected-zeroes-using-Serial-parseInt-or-Serial-parseFloat-)
