---
title: "Recover an Arduino Opta with read-only flash memory"
---

In certain situations, the QSPI flash memory on the Arduino Opta may become configured as read-only.

The QSPI flash is likely read-only if:

* You are unable to erase or overwrite the QSPI flash memory.
* You encounter an `Error formatting OTA partition` message when attempting to [partition the memory](https://support.arduino.cc/hc/en-us/articles/16206977438748-Reset-the-flash-memory-on-STM32H747-based-devices).

The write protection can be removed by uploading a recovery sketch.

----

Follow these steps:

1. Download or copy the [unlockOptaNORFlash.ino](https://github.com/manchoz/unbrick-recover-readonly-flash-arduino-opta/blob/master/unlockOptaNORFlash/unlockOptaNORFlash.ino)[^1] sketch from GitHub.

   ![Downloading a file on GitHub.](img/github-download.png)

1. Open the sketch in your editor:

   * In Arduino IDE, do one of the following:

     * Create a new sketch and paste the entire unlockOptaNORFlash sketch into the editor.
     * Copy the .ino file into your [Sketchbook](https://support.arduino.cc/hc/en-us/articles/4412950938514-Open-the-Sketchbook-folder). Ensure that `unlockOptaNORFlash.ino` is inside a folder named `unlockOptaNORFlash`.

   * In Cloud Editor, open the [Sketches tab](https://app.arduino.cc/sketches) and click on the **Create** button in the top-right corner. Select **Import local file** in the dropdown menu and import `unlockOptaNORFlash.ino`.

1. Connect your Opta to your computer and select it in the editor.

1. ![Upload button](img/symbol_upload2.png) **Upload** the sketch.

1. Click the ![Serial Monitor button](img/symbol_monitor.png) **Serial Monitor** button in the top-right corner or select Tools > Serial Monitor (IDE only).

1. The process is complete when the line `---end---` appears in the serial output.

[^1]: The sketch works by reinitializing the QSPI and configuring the hardware protection data pin as a GPIO input. The internal pull-up resistor of the QSPI flash is then used to deactivate the hardware flash protection. Through this approach, writing can be enabled, and the protection bits can be reset. Learn more about the procedure [here](https://github.com/manchoz/unbrick-recover-readonly-flash-arduino-opta).
