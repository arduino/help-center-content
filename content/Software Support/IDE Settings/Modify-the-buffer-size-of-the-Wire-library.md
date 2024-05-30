---
title: "Modify the buffer size of the Wire library"
id: 4406686928786
---

The Wire library is used to communicate with I2C/TWI devices. Being able to change/modify it’s buffer size is very useful for I2C/TWI device communication.

To locate the `Wire.h` library in the Arduino installation path and modify its buffer size, take the steps outlined below:

1. Close the Arduino IDE if open.

2. Find the file `Wire.h`:

   * **Windows (IDE 2):** `C:\Users\{username}\AppData\Local\Arduino15\packages\arduino\hardware\avr\{version}\libraries\Wire\src\Wire.h`
   * **Windows (IDE 1.x):** `C:\Program Files (x86)\Arduino\hardware\arduino\avr\libraries\Wire\src\Wire.h`
   * **macOS:** `~/Library/Arduino15/packages/arduino/hardware/avr/{version}/libraries/Wire/src/Wire.h`
   * **Linux:** `~/.arduino15/packages/arduino/hardware/avr/{version}/libraries/Wire/src/Wire.h`

3. Open the file `Wire.h` with a text editor.

4. Locate the line `#define BUFFER_LENGTH 32` and change the number `32` to the desired value.

5. Save the changes made and close the text editor.

6. Restart the IDE.
