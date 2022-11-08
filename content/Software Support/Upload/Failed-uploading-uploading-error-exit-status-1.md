---
title: Failed uploading: uploading error: exit status 1
id: 6554944868252
---

`Failed uploading: uploading error: exit status 1` is a generic error message indicating that the upload has failed.

## Check the console output

Often preceding lines will contain more specific information. For example:

```
No device found on cu.Bluetooth-Incoming-Port
Failed uploading: uploading error: exit status 1
```

In this case the `cu.Bluetooth-Incoming-Port` port was selected by mistake. Since no board is connected to the port, the upload failed. This is indicated by the `No device found on cu.Bluetooth-Incoming-Port` message. The issue can be solved by selecting the right port in the _Tools > Port_ menu.

## If you're not sure what's causing the error

Follow these steps:

1. **Check your connections**. Your board needs to be connected with a data USB cable (charge-only cables will not work). Make sure the cable is fully inserted in the port on each end. Try a different USB cable, and avoid hubs and other adapters if possible. Remove connections to the board pins, especially the **0 (RX)** and **1 (TX)** digital pins.

2. **Check your board and port selections**. In the top menu bar, make sure the correct board is selected in _Tools > Board_, and that you've selected the right port in _Tools > Port_. Try disconnecting and reconnecting your board if you're unsure which port is being used (close and reopen the Port menu to refresh the list). For more information, see [Select the right port and board](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port).

3. **Make sure other applications aren't using the port**. Close other instances of the IDE, serial monitors, and any other applications that may be using the port. See [Find and stop process blocking a port](https://support.arduino.cc/hc/en-us/articles/4407830972050-Find-and-stop-process-blocking-a-port).

## Further reading

* [Errors when uploading a sketch](https://support.arduino.cc/hc/en-us/articles/4403365313810-Errors-when-uploading-a-sketch)
