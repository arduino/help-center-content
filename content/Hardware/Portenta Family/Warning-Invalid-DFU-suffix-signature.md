---
title: "Warning: Invalid DFU suffix signature"
---

When uploading a sketch to Portenta H7 you may receive this warning in the console:

```
Warning: Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release
```

This warning is expected, and is only displayed if [verbose output is enabled](https://support.arduino.cc/hc/en-us/articles/4407705216274).

If `upload complete.` is output to console the upload was successful.
