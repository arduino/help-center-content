---
title: "Build failed for project 'ArduinoIoTCloud-Basic' using an ESP8266"
---

The Arduino IoT Cloud is not compatible with all never version of the ESP8266 boards core platform. The recommended version of the core platform for the Arduino IoT Cloud is core version **2.5.0**.

For core versions **3.0.0** and above is selected for some newer ESP8266 boards, this compilation error can occur:

```
Error compiling libraries
Build failed for project 'ArduinoIoTCloud-Basic'
```

Follow these steps to resolve the issue:

1. In the Arduino IDE, open `Tools > Board > Boards Manager`.

2. In the Boards Manager, search for "esp8266" and find the platform with the same by **ESP8266 Community**.

3. From the dropdown version menu, select version **2.5.0** or **2.5.1** and then click the **Install button**.

4. Wait for the update to finish and then click the **close button** to close the window.
