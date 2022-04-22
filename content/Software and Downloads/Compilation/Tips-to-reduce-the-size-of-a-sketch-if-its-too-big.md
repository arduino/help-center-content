---
title: "Reduce the size and memory usage of your sketch"
---

Learn how to reduce the size and memory usage of your sketch.

> [The IDE always checks for storage space and dynamic memory usage](https://support.arduino.cc/hc/en-us/articles/4405339237522-The-IDE-prints-a-message-about-sketch-size-and-memory-usage) when verifying your code. If the respective values are below 100%, you don't have to reduce the size of your sketch.

---

## Code optimization

Arduino sketches are written in the Arduino language, which is based on standard C++ language. Therefore, using general C++ optimization techniques will help. For example:

* If using arrays or string constants, try to shorten them.
* Use functions and loop functions instead of having repeated code.
* Try to replicate macros with functions.
* Try using variables of the [smallest data-types](https://www.arduino.cc/reference/en/) (e.g. use integer instead floating-point data-types if possible)

Also, do not include any outside libraries that are not necessary for your sketch to run.  

> Outside libraries are called by using an [*#include*](https://www.arduino.cc/reference/tr/language/structure/further-syntax/include/) statement at the top of your sketch.

## Still need help?

* You can decrease memory usage by uploading your programs using the [hardware programmer](https://docs.arduino.cc/hacking/software/Programmer) and bypassing the Arduino bootloader.
* Use an [SD card](https://docs.arduino.cc/learn/programming/sd-guide) to increase storage space.
* Use a board with more storage and memory capacity.
