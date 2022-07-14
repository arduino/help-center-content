---
title: "The IDE prints a message about sketch size and memory usage"
id: 4405339237522
---

The IDE always checks for storage space and dynamic memory usage when compiling your code, and then prints the results to the console. For example:

```
Sketch uses 4316 bytes (15%) of program storage space. Maximum is 28672 bytes.
Global variables use 153 bytes (5%) of dynamic memory, leaving 2407 bytes for local variables. Maximum is 2560 bytes.
```

* In this case, both values are **below** 100% and you don't need to do anything.

* But, if either storage space or dynamic memory usage is **above** 100%, you have to free up storage space or optimize your code. See [Reduce the size and memory usage of your sketch](https://support.arduino.cc/hc/en-us/articles/360013825179-Reduce-the-size-and-memory-usage-of-your-sketch) for more information.
