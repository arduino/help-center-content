---
title: "My sketch uploads but does not work as expected"
id: 360013825259
---

Learn what to do if your sketch uploads but the board is unresponsive or does not produce expected behavior.

## 1. Check your code

Even if your sketch compiles successfully, _runtime errors_ can occur when code is being executed on the board. This error will not stop the code from executing but may result in unexpected behavior.

An example of this are handling of arrays:

```
int array[10];
int value = array[100];
array[-100] = 10;
```

In the above example, `value` we will be assigned an indeterminate value from memory outside the array. On the other hand, `array[-100] = 10` will overwrite memory outside the array, which may interfere with other parts of your code.

Try this to check for and avoid runtime errors:

* **Try uploading a simple example**. If it works, the problem may be due to a runtime error.
  * Using **IDE 2:** On the toolbar menu, go to `File > Examples > 01.Basics` and choose the *Blink* sketch. Click the ![Upload button](img/symbol_upload.png) **Upload** button.
  * Using **Cloud Editor:** On the left-most sidebar, go to `Examples > 01.Basics` and choose the *Blink* sketch. Click the ![Cloud Editor upload button.](img/symbol_upload-web.png) **Upload** button.
* Take care to not assign values or read from outside the range of a declared array.
* Debug the code by inserting [`Serial.print()`](https://www.arduino.cc/reference/en/language/functions/communication/serial/print/) calls and checking the Serial Monitor. Use this method to check what values get assigned to important variables and when the code branches, e.g. on an `if()` statement. Consider using the [ArduinoTrace](https://www.arduino.cc/reference/en/libraries/arduinotrace/) to make this process simpler.

## 2. Check the power supply

An external power source needs to be stable and to have sufficient current and voltage to power your setup.

1. Check the requirements for your devices on [Arduino Docs](https://docs.arduino.cc/).
2. Try powering the setup from your computer via USB.
3. Try a different USB cable to rule out damage to the cable.

## 3. Check board connections and components

1. Make sure that the components connected to the board are working properly and there are no short circuits.
2. Try connecting one component at a time and try running the sketch after each added component.
