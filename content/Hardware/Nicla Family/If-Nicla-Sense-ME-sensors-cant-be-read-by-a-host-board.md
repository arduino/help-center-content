---
title: "If Nicla Sense ME sensors can't be read by a host board"
---

One way of configuring the Nicla Sense ME is connecting it to a compatible host board. Try the following if you experience issues:

1. Use the latest version of the `Arduino_BHY2` and `Arduino_BHY2Host` libraries, and the latest `Mbed OS Nicla Boards` platform.
2. Ensure you're using the correct connection type parameter (`NICLA_VIA_ESLOV`, `NICLA_AS_SHIELD` or `NICLA_VIA_BLE`) for `BHY2.begin()` in `App.ino` and `BHY2Host.begin()` on the host sketch.
3. Make sure you have uploaded `App.ino` to Nicla.
4. Check that the ESLOV cable is no longer than 10 cm. Longer ESLOV cables might produce bad sensor readings and/or connectivity issues with MKR boards in the IoT Cloud. If you don't have a shorter ESLOV cable available, try configuring the Nicla as a shield.
5. If all the verifications above have been checked and the connection still fails, or sensor data does not arrive, try pressing the RESET button on the Nicla Sense board first, and then press the RESET button on the host board.
