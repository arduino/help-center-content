---
title: "Reduce the size and memory usage of your sketch"
id: 360013825179
---

Learn how to reduce the size and memory usage of your sketch.

> [The IDE always checks for storage space and dynamic memory usage](https://support.arduino.cc/hc/en-us/articles/4405339237522-The-IDE-prints-a-message-about-sketch-size-and-memory-usage) when compiling your code. You don't need to do anything if both are below 100%.

---

## Optimize your code

* **String literals** can consume lots of storage and memory:
  * Avoid doing String operations if possible. If outputting lots of text to serial, use multiple calls to `Serial.print()` instead of using string concatenation.
  * Use the `F()` macro for constant string literals used serial output. For example, here `"Test done. Results:"` is stored in memory:

    ```
    Serial.println("Test done. Results:");
    Serial.println(results);
    ```

    Here it will be saved in sketch storage instead, freeing up memory:

    ```
    Serial.println(F("Test done. Results:"));
    Serial.println(results);
    ```

  * Try to reduce the number of string literals in your code.
* **Optimize variables.** Remove unused variables and be economical with the data types you use. Don't use `long` (4 bytes) if only `int` (2 bytes) are needed. Don't use `float` if only whole numbers will be assigned.
* **Declare variables as locally as possible** to save memory:
  * Anything declared at global scope will exist for the entire lifetime of the sketch.
  * Variables that are only used inside one function, can be declared within that function.
  * If a variable needs to be shared between multiple functions, consider passing it as a parameter.
* **Avoid recursive code** to reduce memory usage. Use iterative functions instead.
* **Minimize array sizes.** Don't declare larger arrays than needed.
* **Check your libraries** to save storage. Avoid [including](https://www.arduino.cc/reference/tr/language/structure/further-syntax/include/) large libraries unless you need to. Save storage by implementing your own code that only does what you need.

* **Store constant data in storage instead of memory** with [PROGMEM](https://www.arduino.cc/reference/en/language/variables/utilities/progmem/).

> Arduino sketches are written in the Arduino language, which is based on standard C++. Therefore, using general C++ optimization techniques will help.

## Additional options

* **Skip the bootloader.** Free up space by uploading your sketch with a [hardware programmer](https://docs.arduino.cc/hacking/software/Programmer), without storing a bootloader on the board.
* Increase storage space with an [SD card](https://docs.arduino.cc/learn/programming/sd-guide).
* Use a board with more storage and memory.

---

## Further reading

* [Memory (Foundations)](https://www.arduino.cc/en/Tutorial/Foundations/Memory)
