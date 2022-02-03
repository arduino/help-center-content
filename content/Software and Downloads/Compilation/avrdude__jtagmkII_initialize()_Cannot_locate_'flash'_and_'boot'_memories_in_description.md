---
title: "avrdude: jtagmkII_initialize(): Cannot locate 'flash' and 'boot' memories in description"
---

> This error has mostly been reported for the _Arduino Nano Every_

When a sketch is successfully compiled and uploaded, the Arduino IDE console output may indicate

```
”avrdude: jtagmkII_initialize(): Cannot locate "flash" and "boot" memories in description”
```

which is often a spurious warning (not an error) which can be safely ignored. It does not indicate any problem with the uploaded sketch as long as it was successfully compiled and uploaded to the board. However, if there is an error while compiling and uploading a sketch, it is unrelated to this warning.
