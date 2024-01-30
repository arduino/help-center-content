---
title: "Uninstall boards from Arduino IDE"
id: 4407225360018
---

The Boards Manager provides the most convenient way to remove unwanted or unused boards. The location of the installed cores can be found [here](https://support.arduino.cc/hc/en-us/articles/4415103213714#boards).

The following instructions to uninstall is not limited to the core in this example; it equally would be applicable to both official Arduino and third party cores.

---

## Uninstall using the Boards Manager

> [!NOTE]
> In Arduino IDE 1.x, the "Arduino AVR Boards" package is bundled with [the application files](https://support.arduino.cc/hc/en-us/articles/4412943340178-Open-the-Arduino-IDE-installation-folder) and cannot be uninstalled using the Boards Manager.

The Boards Manager provides the most convenient way to remove unwanted or unused boards.

1. **Open the Boards Manager:**

   * In the menu bar, select _Tools > Board > Boards Manager..._
   * In IDE 2, you can also click on the ![Boards Manager icon](img/symbol_board.png) button in the sidebar.

2. Filter the results by typing in the text field, and find the board package you want to uninstall.

3. **Uninstall the library:**

   * In Arduino IDE 1.x, click the **Remove** button.

   * In Arduino IDE 2, hover over the "Installed" label to reveal the **Uninstall** button, and click it.

   ![Uninstalling the SAMD package in Arduino IDE 1 and IDE 2.](img/uninstall-board.png)
   _The Library Manager looks slightly different depending on what version of the IDE you are using._

4. Confirm that you want to uninstall the board package.

5. Wait while Arduino IDE uninstalls the board package.

If you want to remove many packages, or are unsure which packages are installed, it will be more efficient to [delete the files directly](#delete-files).

---

<a id="delete-files"></a>

## Uninstall by directly deleting files

The files can also be removed directly with your system's file manager application:

1. [Open the Arduino15 folder](https://support.arduino.cc/hc/en-us/articles/360018448279-Open-the-Arduino15-folder).

2. Open the `packages` subfolder.

3. Open the package vendor's subfolder, e.g. `arduino`, or `adafruit`.

4. Open the `hardware` subfolder. This folder contains the board packages.

5. Remove any/all folders within.

---

## Further reading

* [Add boards to Arduino IDE](https://support.arduino.cc/hc/en-us/articles/360016119519)
