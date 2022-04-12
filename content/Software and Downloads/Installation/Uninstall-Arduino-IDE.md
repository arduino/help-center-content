---
title: "Uninstall Arduino IDE"
---

Learn how to uninstall Arduino IDE.

---

## Uninstalling the application

* **Windows:**
  * In Windows 10: Open the start menu and find the Arduino application. Right-click on it and select **Uninstall**.
  * Alternatively, open Explorer and go to `C:\Program Files (x86)\Arduino`, then run `uninstall.exe`.
* **macOS:**
   1. Open Finder.
   2. Go to the `Applications` folder.
   3. Remove the `Arduino.app` or `Arduino IDE.app` application.
* **Linux**: The application files are located wherever they were extracted in the installation process. If you need help finding it you can [follow these steps](https://support.arduino.cc/hc/en-us/articles/4412943340178#linux).

---

## Removing additional files

Arduino IDE saves your sketches, library files and board cores outside the application folder. This way, they will still be available if you're updating Arduino IDE to a different version, or if you reinstall it later. Optionally, you can also remove these files:

[The Sketchbook](https://support.arduino.cc/hc/en-us/articles/4412950938514) contains your saved sketches and installed libraries. It is located in your Documents folder by default, inside the `Arduino` subfolder.

* **Windows:** `C:\Users\{username}\Documents\Arduino`
* **macOS:** `/Users/{username}/Documents/Arduino`
* **Linux:** `/home/{username}/Arduino`

[The Arduino15 folder](https://support.arduino.cc/hc/en-us/articles/360018448279). Located in these locations by default:

* **Windows:** `C:\Users\{username}\AppData\Local\Arduino15`. Open your Users older in Explorer and look for a folder called `Appdata`. This folder is hidden by default. In newer versions of Windows, you can display hidden items by clicking the View tab, and checking Hidden items.
  * This folder is hidden by default. I newer versions of Windows, you can display hidden items by clicking the **View** tab, and checking _Hidden items_.
* **macOS:** `/Users/{username}/Library/Arduino15` Open Finder and navigate to the home folder `(/Users/{username})`. From the Finder menu bar, click on `View > Show View Options`, and tick _Show Library Folder_. The `Arduino15` folder can now be found in `{username}/Library`.
* **Linux:** The folder is located in `home/{username}/.arduino15` and is hidden by default. To show it, click the hamburger button and check Show Hidden Files.
