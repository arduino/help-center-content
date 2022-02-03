---
title: "Error gnu.io.PortInUseException when uploading code or using the serial monitor on the Mac"
---

```
   Error inside Serial.()
   gnu.io.PortInUseException: Unknown Application
   at gnu.io.CommPortIdentifier.open(CommPortIdentifier.java:354)
   at processing.app.Serial.(Serial.java:127)
   at processing.app.Serial.(Serial.java:72)
```

This probably means that the port is actually in use by another application. Please make sure that you're not running other programs that access serial or USB ports, like PDA sync application, Bluetooth device managers, certain firewalls, etc. Also, note that some programs (e.g. Max/MSP) keep the serial port open even when not using it - you may to need to close any patches that use the serial port or quit the application entirely.

If you get this error with Arduino 0004 or earlier, or with Processing, you'll need to run the `macosx_setup.command`, and then restart your computer. Arduino 0004 includes a modified version of this script that all users need to run (even those who ran the one that came with Arduino 0003). You may also need to delete the contents of the `/var/spool/uucp` directory.
