---
title: "Arduino Sensor Kit's DHT20 sensor reading"
---

Currently, the DHT20 sensor is not compatible with the Arduino Sensor Kit library. Learn how to get readings from the DHT 20 sensor using a 3rd party library.

![DHT20 sensor.](img/DHT20_sensor.png)

---

1. Download the [Grove Temperature And Humidity Sensor library](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Grove_Temperature_And_Humidity_Sensor-master.zip).

2. [Manually install](https://support.arduino.cc/hc/en-us/articles/5145457742236-Add-a-library-to-Arduino-IDE#manual-installation) the library.

3. [Uninstall](https://support.arduino.cc/hc/en-us/articles/360016077340-Uninstall-a-library-from-Arduino-IDE) any competing libraries. (e.g. previous versions of the Grove Temperature And Humidity Sensor library).

4. Make sure that only one DHT.h file is in your libraries folder. (The only DHT.h file available should be the one inside the "Grove_Temperature_And_Humidity_Sensor-master" folder).

5. Open the Arduino IDE and create a new sketch.

6. Copy [this example](https://wiki.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DH20/#__code_0) to the sketch.

7. Change the serial speed to 9600 by writing `debug.begin(9600)` in line 21.

8. Upload the sketch.

## Further reading

* [Grove - Temperature&Humidity Sensor(DHT20)](https://wiki.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DH20/)
