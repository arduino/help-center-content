---
title: "If you get unexpected zeroes using Serial.parseInt() or Serial.parseFloat()"
id: 4407876044434
---

The `Serial.parseInt()` and `Serial.parseFloat()` functions will return the next valid number in the incoming serial, or return zero if a valid number was not found.

If your `loop()` function is calling the parsing function when `Serial.available() == 0` returns `true`, and you are sending a number value through the Serial Monitor with a **line ending** configured:

1. Read the first valid number value in the buffer. Line ending characters will be left in the buffer, and `Serial.available() == 0` will return `false`.
2. If the function is called again before a new number value has been added to the buffer, it will return zero.

You can solve the problem by:

- Selecting **No line ending** in the Serial Monitor.
- Using the [Serial.read()](https://docs.arduino.cc/language-reference/en/functions/communication/serial/read/) and define your own logic for reading the buffer.
