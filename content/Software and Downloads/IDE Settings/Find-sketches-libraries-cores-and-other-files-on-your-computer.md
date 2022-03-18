---
title: "Find sketches, libraries, cores and other files on your computer"
---

Learn where sketches, libraries, board platforms, and application files used by Arduino IDE are stored on your computer.

---

## Sketches

* Sketches are saved in the [Sketchbook folder](https://support.arduino.cc/hc/en-us/articles/4412950938514-Open-the-Sketchbook) by default.
* Sketches have the `.ino` file extention.
* By default they will have name based on the date, such as `sketch_nov17b.ino`.

<h2 id="libraries">Libraries</h2>

Libraries installed with the Library Manager are stored inside the Sketchbook.

1. [Open the Sketchbook](#sketchbook).

2. Open the `libraries` folder.

Libraries included with the IDE 1.8 download are located in the [installation folder](#installation).

---

## Board platforms and cores

Board platforms installed with the Board Manager are stored inside the Arduino15 folder.

1. [Open the Arduino15 folder](#Arduino15).

2. Open `packages`.

3. Open the **package vendor** folder, e.g. `arduino`.

4. Open `hardware`. Installed packages from the vendor are contained within.

The package folder contains one or more installed versions of the package. For example, version 1.8.12 of Arduino's `samd` library is located in `<Arduino15>/packages/arduino/samd/1.8.12`.

---

## Arduino IDE application files

Application files are located in the [installation directory](https://support.arduino.cc/hc/en-us/articles/4412943340178).

## Further reading

* [Where are the installed cores located?](https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
* [Where can I find the Arduino15 folder?](https://support.arduino.cc/hc/en-us/articles/360018448279-Where-can-I-find-the-Arduino15-folder-)
* [How to do a complete uninstall of the Arduino IDE?](https://support.arduino.cc/hc/en-us/articles/360021325733-How-to-do-a-complete-uninstall-of-the-Arduino-IDE)
* [How do I delete or uninstall a library from the IDE?](https://support.arduino.cc/hc/en-us/articles/360016077340-How-do-I-delete-or-uninstall-a-library-from-the-IDE-)
