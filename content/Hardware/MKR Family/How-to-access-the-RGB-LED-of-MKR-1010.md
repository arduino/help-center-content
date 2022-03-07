---
title: "How to access the RGB LED of MKR 1010?"
---


The MKR 1010 board comes with an RGB LED which can be accessed using the WiFi Nina library. This way the LED can be integrated into your sketch for example a successful WiFi connection or indications.

Example sketch to utilize the RGB LED of Arduino MKR 1010 below.

```c++
#include <WiFiNINA.h>
#include <utility/wifi_drv.h>
void setup()
{
WiFiDrv::pinMode(25, OUTPUT); //GREEN
WiFiDrv::pinMode(26, OUTPUT); //RED
WiFiDrv::pinMode(27, OUTPUT); //BLUE
}
void loop()
{
WiFiDrv::digitalWrite(27, HIGH); //Turn On Blue light
delay(1000);
WiFiDrv::digitalWrite(27, LOW); //Turn Off Blue light
delay(1000);
WiFiDrv::digitalWrite(26, HIGH); //Turn On Red light
delay(1000);
WiFiDrv::digitalWrite(26, LOW); //Turn Off Red light
delay(1000);
WiFiDrv::digitalWrite(25, HIGH); //Turn On Green light
delay(1000);
WiFiDrv::digitalWrite(25, LOW); //Turn Off Green light
delay(1000);
}
```

You can also use the following command for On and Off.

```c++
WiFiDrv::digitalWrite(27, 128); //Turn On Blue light
delay(1000);
WiFiDrv::digitalWrite(27, 0); //Turn Off Blue light
delay(1000);
```
