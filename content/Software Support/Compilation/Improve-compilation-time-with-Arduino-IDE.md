---
title: "Improve compilation time with Arduino IDE"
---

Learn what to do if a sketch is taking a long time to compile with Arduino IDE.

---

## Initial compilation takes longer

It can be helpful to understand how Arduino IDE helps improve compilation time:

* The first time a sketch is compiled will take longer. Depending on your computer, the board architecture, and the amount and size of included libraries, compilation may take several minutes.
* For subsequent compilations, Arduino IDE will automatically use previously compiled files, often significantly reducing compilation time.
* If you're using IDE 2, the cached files are preserved between sessions. If you're using IDE 1, the files will be removed when the application is closed.

---

## Avoid external hard drives, network drives, and cloud storage

* Check your Sketchbook location and make sure to use an internal disk drive. You can check and change your Sketchbook location in the Preferences dialog (_File > Preferences_, or _Arduino IDE > Preferences_ on macOS).
* If you're using cloud storage to automatically "offload" files, try excluding your Sketchbook path from offloading, or change your Sketchbook location. You can check and change your Sketchbook location in the Preferences dialog (_File > Preferences_, or _Arduino IDE > Preferences_ on macOS).
* The Sketchbook is often stored inside your user's Documents folder. In some cases, this folder may be configured to store files in a different location. See [this article from Microsoft](https://support.microsoft.com/en-us/topic/configuration-of-the-my-documents-folder-dfd9a90d-8f80-18d6-e7cc-f1566fc3b10b) if you're on Windows.

---

## Check verbose compilation output

To get more details about the compilation process:

1. [Enable verbose compilation output](https://support.arduino.cc/hc/en-us/articles/4407705216274).

2. Click ![Verify button](img/symbol_verify2.png) **Verify** to compile the sketch without uploading.

3. Observe the console output in the bottom panel as the sketch is being compiled.

4. Look for files or folder paths that are causing unexpected slow-downs.

---

## Antivirus software may slow down compilation

One cause of slow compilation can be antivirus software doing an **on-access scan**. Arduino IDE creates many short processes during compilation, and if each of these has to wait to be scanned before running, it can result in long compilation time.

Try the following:

* Look for an activity history in your antivirus software to see if files or processes related to Arduino IDE are being scanned.
* **TEMPORARILY** disable your antivirus for a single compilation to see if you notice a change in compilation time, then turn the antivirus back on.
* Exclude relevant files, folders, and processes from scanning in your antivirus settings.


---

## Further reading

* [Sketch build process (Arduino CLI reference)](https://arduino.github.io/arduino-cli/latest/sketch-build-process/)

* [Find sketches, libraries, board cores, and other files on your computer](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer)
