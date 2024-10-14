---
title: "Uninstall libraries from Arduino IDE"
id: 360016077340
---

Learn how to uninstall Arduino libraries, whether through the Library Manager for individual removals or by using your file manager for bulk deletions across all IDE versions.

In this article:

* [Uninstall libraries using the Library Manager(requires IDE 2)](#library-manager)
* [Remove libraries manually using file manager](#file-manager)

---

## Uninstall libraries using the Library Manager{#library-manager}

The Library Manager in Arduino IDE 2 can be used to uninstall individual libraries:

1. Click the ![Library Manager button](img/symbol_library.png) **Library Manager** button or select _Tools > Manage Libraries..._ in the menu bar.

2. Filter your search:

   * For the Type option, select **Installed** to show only installed libraries
   * To further filter the results, type the library name into the text field.

   ![Filtering the results.](img/ide2-library-manager-filter.png)

3. Find the library in the search results. Note that the results are listed alphabetically.

4. Click the **Remove** Button

   ![Uninstalling the AlPlc_Opta library.](img/ide2-library-manager-uninstall.png)

5. Confirm that you want to uninstall the library by clicking **Yes**.

> [!NOTE]
> If a newer version of the library is available, the **Remove** button will be replaced by an **Update** button. To remove the library in this case, click the three dots in the top-right corner and select **Remove**.

## Remove libraries manually using file manager {#file-manager}

This method allows you to remove many libraries at once. It works for all types of libraries and versions of Arduino IDE.

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

## Further reading

* [Find sketches, libraries, board cores, and other files on your computer](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-cores-and-other-files-on-your-computer).
