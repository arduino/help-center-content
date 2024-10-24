---
title: "If your board is unresponsive, stuck resetting, or otherwise not working as expected"
id: 360016420160
---

Learn what to do if your board appears to be running a sketch, but is not behaving as expected. If you're trying to upload a sketch but are getting an error in Arduino IDE, see [Errors when uploading a sketch](https://support.arduino.cc/hc/en-us/articles/4403365313810-Errors-when-uploading-a-sketch) instead.

---

1. Remove any connections to the RESET pin. If a black packaging foam is attached to the board, remove it.

2. Check the power supply. If your board is powered by a USB cable, try using a different cable, or a different USB port on your computer. If using an external power supply, try using a USB cable.

3. Check your sketch for incorrect use of [Watchdog](https://www.arduino.cc/reference/en/libraries/watchdog/) resets or other declared reset functions that can cause the board to reset unexpectedly. If you're able to upload your sketch but it's not working as expected, debug your if, for and while statements with [Serial.print()](https://docs.arduino.cc/language-reference/en/functions/communication/Serial/print/) and check the Serial Monitor. Make sure you're not assigning values to an array outside its declared length.

4. Reset the memory. Copy and paste the [BareMinimum](https://www.arduino.cc/en/Tutorial/BuiltInExamples/BareMinimum) sketch below or open it with _File > Examples > 01.Basics > BareMinimum in Arduino IDE. Then, double-tap the RESET button to put the board in bootloader mode. If it's detected on a port, upload the sketch.

<iframe src=https://create.arduino.cc/example/builtin/01.Basics%5CBareMinimum/BareMinimum/preview?embed style="height:510px;width:100%;margin:10px 0" frameborder=0></iframe>

---

## Still need help?

* Visit the [Installation & Troubleshooting](https://forum.arduino.cc/c/using-arduino/installation-troubleshooting/18) in the Arduino forum.

* [Contact us](https://www.arduino.cc/en/contact-us/).

> **Please include this information:**
>
> * A [verbose error output](https://support.arduino.cc/hc/en-us/articles/4407705216274)
> * The name of your board
> * Your operating system
> * Your Arduino IDE version
