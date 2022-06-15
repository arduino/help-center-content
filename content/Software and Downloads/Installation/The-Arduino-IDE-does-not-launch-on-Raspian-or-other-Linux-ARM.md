---
title: "The Arduino IDE does not launch on Raspian or other Linux ARM"
id: 360020378220
---

If the IDE is not launching after installation on Raspian or another Linux ARM, please ensure that you've installed the ARM release. You can find the ARM release on the [download page](https://www.arduino.cc/en/software). Also note that [a 32-bit operating system is currently recommended for the Raspberry Pi](https://www.raspberrypi.org/forums/viewtopic.php?t=275370).

The error `cannot touch '/root/.config/mimeapps.list': No such file or directory` is not related to the above, and should not prevent the IDE from launching.
