---
title: "Error: Multiple libraries were found"
id: 4406379650578
---

When compiling your code, you may come across this error:

```
Error: Multiple libraries were found for...
```

This message doesn’t always indicate a problem; instead, is some helpful information provided by the Arduino Cloud Editor. It is not an error nor a warning and can be safely ignored. As long as the message shows that the expected library was used.

In the example output below, multiple libraries named `Servo` were found.

```
Multiple libraries were found for "Servo.h"
Used: /home/builder/opt/libraries/latest/servo_1_1_8
Not used: /home/builder/opt/libraries/latest/evive_2_0_3
Not used: /home/builder/opt/libraries/latest/xmc_servo_1_0_1
Not used: /home/builder/opt/libraries/latest/printoo_library_1_0_2
Not used: /home/builder/opt/libraries/latest/servoesp32_1_0_3
Not used: /home/builder/opt/libraries/latest/rokitsmart_1_0_9

Using library servo_1_1_8 at version 1.1.8 in folder: /home/builder/opt/libraries/latest/servo_1_1_8
```

Only one of these libraries can be used for compiling the sketch code. As indicated by the second and last line the library in `/home/builder/opt/libraries/latest/servo_1_1_8` is being used.

If the sketch fails to compile, start by looking for other errors printed later in the console output **(e.g., syntax error, no such file or directory)**. If you want the Cloud Editor to use a different library, please see [Selecting between multiple libraries with the same name](https://support.arduino.cc/hc/en-us/articles/4405884552594-Selecting-between-multiple-libraries-with-the-same-name).

## Further reading

* [Errors when uploading a sketch](https://support.arduino.cc/hc/en-us/articles/4403365313810-Errors-when-uploading-a-sketch)
