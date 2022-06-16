---
title: "Uninstall a library from Arduino IDE"
---

Learn how to remove IDE libraries from your computer.

---

## Uninstall using your file manager

Removing the library files directly is the most reliable method that will work for all IDE versions and library types.

### Library Manager, "Add .ZIP Library", and manual installs

Most libraries are located in the Sketchbook library folder, including:

* Libraries installed with the Library Manager
* Libraries imported with _Sketch > Include library > Add .ZIP library..._
* Any other libraries manually moved into the folder

Follow these steps to remove these libraries.

1. [Open the Sketchbook](https://support.arduino.cc/hc/en-us/articles/4412950938514-Open-the-Sketchbook).
2. Go into the `libraries` subfolder.
3. Delete the folder for libraries you want to uninstall.
4. Restart Arduino IDE.

### Libraries bundled with board platforms

Some board platforms are packaged with libraries, that are saved within the [Arduino15 folder](https://support.arduino.cc/hc/en-us/articles/360018448279), inside the `Arduino15/packages/<vendor>/hardware/<board platform>/<version>/libraries` subfolder.

They are written specifically for the boards of that platform and are only accessible when one of those boards is selected in the _Tools > Board_ menu. They will be removed when [uninstalling the board platform](https://support.arduino.cc/hc/en-us/articles/4407225360018). Removing them is not recommended. If doing so, included examples may stop functioning. The libraries will be reinstalled if the package is updated by the Board Manager.

---

## Uninstall in Library manager (2.x only)

In **Arduino IDE 2.x**, libraries available in the Library Manager can also be uninstalled there.

1. In the menu bar, click on _Tools > Manage Libraries..._

2. Search for the library you want to uninstall.

3. Find the library in the search results, which are listed alphabetically.

   ![Finding the 'ArduinoBLE' library in the Library Manager.](img/library-manager-2.x-search.png)

4. Put your mouse cursor over the INSTALLED label and click UNINSTALL to uninstall the library.

   ![Uninstalling the 'ArduinoBLE' library in the Library Manager.](img/library-manager-2.x-uninstall.png)

---

## Further reading

For a complete overview of files used by Arduino IDE, see [Find sketches, libraries, cores and other files on your computer](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-cores-and-other-files-on-your-computer).
