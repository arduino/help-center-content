---
title: "If the LED on Portenta H7 turns red when running a sketch"
id: 4409207313042
---

Whenever there is a runtime error on Portenta H7, the LED on the board will flash RED. Most times the cause of the error is that the code uploaded on the board attempts to perform a task which the Portenta H7 hardware is unable to complete or that specific function or feature has not been developed in the Mbed core. Hardware damage can be another cause of this error. Try the following to resolve the issue:

1. Check that the sketch uploaded to the board does not have invalid commands and make sure that the included libraries are compatible with Portenta H7 architecture.

2. If the error still exists after checking the previous step recommendations, do a double-tap of the reset button and upload an example sketch from the Portenta H7 examples library. This should reset the board back to a working state and re-enable the port on the PC.

3. If this doesn't solve the issue check the [Arduino Forum](https://forum.arduino.cc/c/hardware/portenta/91) or get in contact with [Arduino Support](https://www.arduino.cc/en/contact-us/).
