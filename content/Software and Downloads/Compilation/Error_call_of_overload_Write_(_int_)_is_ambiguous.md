---
title: "Error: call of overloaded 'write(int)' is ambiguous"
---

When compiling your code, you may come across this error:

```
error: call of overloaded 'write(int)' is ambiguous
```

This occurs when the value zero `0` is assigned to the `Serial.write()` function. `0`, `NULL` and `0x00` can be interpreted as the Null value or an unsigned byte by the `Serial.write()` function.

This function writes **binary** data to the serial port, sent as a byte or series of bytes representing the digits of a number. As mentioned before, `0x00`, `0` or `NULL` could be interpreted as a pointer, which causes this compilation error.

To solve this problem, you can force the function to read the provided value as a `byte` type by using a _casting operator_. For example, to pass `0x00` to the function:

```
 Serial.write((byte) 0x00);
```

It is always recommended to use the [print() function](https://www.arduino.cc/reference/en/language/functions/communication/serial/print/) instead, as explained in the [Serial.write() function](https://www.arduino.cc/reference/en/language/functions/communication/serial/write/) reference page.
