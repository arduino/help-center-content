---
title: Select programmer in Arduino IDE
id: 6125080065820
---

When you have [selected a board in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE#board), external programmers can be selected under _Tools > Programmer_ in the menu bar. The options are defined in the platform's `programmers.txt` file[^1].

[^1]: [Platform specification – programmers.txt](https://arduino.github.io/arduino-cli/latest/platform-specification#programmerstxt)

The programmer selection is used by:

* The _Tools > Burn Bootloader_ option.
* The _Sketch > Upload Using Programmer_ option.

The programmer selection is **not** used when:

* Compiling your sketch (for example, when clicking ![Verify button](img/symbol_verify2.png) **Verify**).
* Uploading without a programmer, by clicking the ![Upload button](img/symbol_upload2.png) **Upload** button.

> **Note:** In Arduino IDE 1.x, if the selected board _only_ supports programmer uploads, the ![Upload button](img/symbol_upload2.png) **Upload** button has the same effect as _Tools > Upload Using Programmer_[^2]

[^2]: [Platform specification – Upload Using Programmer by default](https://arduino.github.io/arduino-cli/latest/platform-specification/#upload-using-programmer-by-default)
