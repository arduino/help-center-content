---
title: "The MKR GPS shield does not fetch any data"
id: 360018628960
---

If you have trouble fetching GPS data with your MKR GPS Shield it is recommended to review the below advice.

The Arduino MKR GPS Shield works better under the recommended conditions:

* Try to place it in an outdoor environment with clear sky. Cloudy weather, buildings, mountains, walls and obstacles decrease significantly GPS shield reception.
* Take into account that, in ideal conditions, the GPS can take several minutes before GPS data becomes available. If using indoors, it can take more than 15 minutes.
* It is recommended to connect with 8 or more satellites for reliable performance, but it can work with less too.
* Make sure the shield has a working cell battery connected. The backup battery allows the GPS Shield to be reprogrammed without losing the configuration when the shield is disconnected from the MKR board. It also stores the last location data registered and the battery keeps the information safe. Without battery all the data is lost when we restart the GPS shield.

* Check that the Arduino_MKRGPS library is included in your sketch: `#include <Arduino_MKRGPS.h>`

  > You can check the library code here: [https://www.arduino.cc/en/Reference/ArduinoMKRGPS](https://www.arduino.cc/en/Reference/ArduinoMKRGPS)

* Additionally you can try your sketch with this alternative library: [SparkFun Ublox Arduino Library](https://github.com/sparkfun/SparkFun_Ublox_Arduino_Library)
