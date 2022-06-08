---
title: "Can I program the Arduino board in C?"
---

In fact, you already are; the Arduino language is merely a set of C/C++ functions that can be called from your code. Your sketch undergoes minor changes (e.g. automatic generation of function prototypes) and then is passed directly to a C/C++ compiler (avr-g++). All standard C and C++ constructs [supported by avr-g++](https://www.nongnu.org/avr-libc/user-manual/FAQ.html#faq_cplusplus) should work in Arduino. For more details, see the page on the [Arduino build process](https://arduino.github.io/arduino-cli/latest/sketch-build-process/).
