---
title: "Add a library to Arduino IDE"
---

Libraries are a collection of code that provide extra functionality for use in sketches, for example when working with hardware or manipulating data.

Learn how to add a library to Arduino IDE.

---

## Using the Library manager

1. In the menu bar, go to `Tools > Manage Libraries...` (In IDE 2, you can also click on the Library Manager icon on the left).

2. Search for the library you want to install.

3. Find the library in the search results.

4. Click on the INSTALL button.

   ![IDE 1 Library Manager with search box and Install button highlighted](img/LibraryManager_InstallingLibrary_IDE1.png)

   ![IDE 2 Library Manager Icon, search box, and Install button highlighted](img/LibraryManager_InstallingLibrary_IDE2.png)

5. Wait for the installation to complete.

---

## Importing a .zip Library

1. In the menu bar, go to `Sketch > Include Library > Add .ZIP Library...`

2. You will be prompted to select the library you want to add. Navigate to the .zip file's location and open it.

3. If you're using Arduino IDE 2.x, you may need to restart it for the library to be available[^1].

[^1]: https://github.com/arduino/arduino-ide/issues/659

---

<a id="manual-installation"></a>

## Manual installation

1. Go to the directory where you have downloaded the .zip library file.

2. Extract the .zip file.

3. Select the main folder (it should have the library's name) and move it to the "libraries" folder [inside your sketchbook](https://support.arduino.cc/hc/en-us/articles/4412950938514-Open-the-Sketchbook).

4. Restart Arduino IDE.

> Note that adding a library to the "libraries" folder in the sketchbook will override other previously installed library versions.

---

## Further reading

* [Uninstall a library from Arduino IDE](https://support.arduino.cc/hc/en-us/articles/360016077340-Uninstall-a-library-from-Arduino-IDE)

* [Installing libraries in the Arduino IDE 1](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries#importing-a-zip-library) on Arduino Docs

* [Installing libraries in the Arduino IDE 2](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-installing-a-library) on Arduino Docs

* About [#include](https://www.arduino.cc/reference/en/language/structure/further-syntax/include/)
