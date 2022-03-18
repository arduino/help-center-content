---
title: "Tips to reduce the size of a sketch if it's too big"
---

> **Note:** The IDE will always check for storage and memory usage when verifying your code . You do not need to do anything if respective uses are below 100%.

Here are a few tips to cut down the size of the sketch:

* If using arrays or string constants, try to shorten them.
* Always put the repetitive code in functions or loops.
* Try to replicate macros with functions if possible.
* Try using variables of smallest data-types if possible
* Avoid print statements used only for debugging.
* By writing the sketch with integer math, which should save you about 2kb instead of writing your code in the floating-point math.
* Don't include #include statements at the top of your sketch for libraries which are not necessary for the code requirement.
* Moreover, you can upload your programs using the hardware programmer and bypass the Arduino bootloader. By doing this, you can save about the 2K of Flash memory. Check this link for the information on using the hardware programmer.
* Also, try using the SD card when using the String or Arrays in your sketches as we know that multi dimensional arrays and strings occupy more storage space.

If you still won't be able to resolve your issue, try using another board with more memory i.e Arduino Mega.

We're always engaged to reduce the size of the Arduino core to arrange free space for your sketches.
