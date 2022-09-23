---
title: "Select programmer in Arduino IDE"
---

When you have [selected a board in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE#board), external programmers can be selected under _Tools > Programmer_ in the menu bar. The options are defined in the platform's `programmers.txt` file[^1].

[^1]: [Platform specification – programmers.txt](https://arduino.github.io/arduino-cli/latest/platform-specification#programmerstxt)

The programmer selection is used by:

* The _Tools > Burn Bootloader_ menu bar item.
* The _Sketch > Upload Using Programmer_ option.

The programmer selection does **not** affect:

* Sketch compilation (for example, when clicking the ![Verify button](img/symbol_verify2.png) **Verify** button).
* Uploading a sketch to a board connected to your computer by clicking the the ![Upload button](img/symbol_upload2.png) **Upload** button.
