---
title: Compilation error: exit status 1
id: 6554914611228
---

A `Compilation error: exit status 1` error indicates that the sketch compilation process has failed, and is not related to the upload process. For more information, look at previous lines in the error output.

For example, check this error output:

```
.../core_arduino_samd_mkrwifi1010_dc4ffca0ef28855003b5cc223e78a605.a(main.cpp.o): In function `main':
.../Arduino15/packages/arduino/hardware/samd/1.8.13/cores/arduino/main.cpp:53: undefined reference to `loop'
collect2: error: ld returned 1 exit status

exit status 1

Compilation error: exit status 1
```

The most useful information is ``undefined reference to `loop'``, which occurs because the sketch is missing a correctly defined `loop()` function.

## Further reading

* [If your sketch doesn't compile](https://support.arduino.cc/hc/en-us/articles/4402764401554-If-your-sketch-doesn-t-compile)
