---
title: "Compilation errors when uploading"
---

Learn about compilation errors in your sketch and how to resolve them.

---

## Syntax errors

A *syntax error* appears when your sketch violates the rules of the programming language. These errors need to be fixed before the sketch can be compiled and uploaded to the board.

The error will be printed in the IDE console, and will typically contain a description of the error, as well as the line number where it occurred. Enabling line numbers in Preferences can be helpful, but the line will also be highlighted by the IDE.

In the example below, the error is caused by a missing semicolon on line 29.

![Compilation error in the IDE console, due to missing semicolon.](img/error-expected-semicolon-1.png)

If you're unsure whether your error is due to compilation, you can click the ![Verify button](img/symbol_verify.png) **Verify** button. This will compile and verify the sketch without uploading it to the board. When the sketch is compiled correctly the output will look similar to this.

```
Sketch uses 924 bytes (2%) of program storage space. Maximum is 32256 bytes.
Global variables use 9 bytes (0%) of dynamic memory, leaving 2039 bytes for local variables. Maximum is 2048 bytes.
```

## Required functions

Note that the sketch *must* contain a `setup()` and `loop()` function. If these are missing, or if their names have been changed, the compiler will return this error.

```
collect2: error: ld returned 1 exit status
exit status 1
```

## Still need help?

* Arduino sketches are written in the Arduino language, which is based on standard C++ language. Most likely you will find a wealth of resources by searching `C++ <error message>` in your search engine.

* For help with functions specific to Arduino, see the [Arduino functions reference](https://www.arduino.cc/reference/en/).

* Visit the [Programming Questions category](https://forum.arduino.cc/c/20) in the Arduino forum. Start by reading the pinned threads which will contain useful information on how to best post a question.
