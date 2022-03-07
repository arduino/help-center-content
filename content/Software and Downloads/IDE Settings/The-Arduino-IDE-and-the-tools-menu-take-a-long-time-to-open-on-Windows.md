---
title: "The Arduino IDE and the tools menu take a long time to open on Windows"
---

If the Arduino software takes a long time to start up and appears to freeze when you try to open the Tools menu, there is a conflict with another device on your system.
The Arduino software, on startup and when you open the Tools menu, tries to get a list of all the COM ports on your computer; it is possible that a COM port created by one of the devices on your computer slows down this process.

In order to avoid or minimize these conflicts, take a look in the Device Manager and try disabling the devices that provide COM ports one by one (e.g. Bluetooth<sup>®</sup> devices) and recheck the Arduino software.
