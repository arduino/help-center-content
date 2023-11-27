---
title: "Uninstall Arduino IDE"
id: 360021325733
---

Learn how to uninstall Arduino IDE.

---

## Uninstalling the application

* **Windows:**
  * In Windows 10: Open the start menu and find the Arduino application. Right-click on it and select **Uninstall**.
  * Alternatively, open Explorer and run `C:\Program Files\Arduino IDE\Uninstall Arduino IDE.exe`. Or if you're using Arduino IDE 1.x, `C:\Program Files (x86)\Arduino\uninstall.exe`.
* **macOS:**
   1. Open Finder.
   2. Go to the `Applications` folder.
   3. Remove the `Arduino.app` or `Arduino IDE.app` application.
* **Linux**: The application files are located wherever they were extracted in the installation process. If you need help finding it you can [follow these steps](https://support.arduino.cc/hc/en-us/articles/4412943340178#linux).

---

## Removing additional files

Arduino IDE saves your sketches, library files and board cores outside the application folder. This way, they will still be available if you're updating Arduino IDE to a different version, or if you reinstall it later. Optionally, you can also remove these files.

**If you're reinstalling Arduino IDE as a troubleshooting procedure, try the following:**

* To resolve console errors that appear when compiling or uploading sketches, remove the [Arduino15](#Arduino15) and [libraries subfolder](#sketchbook) and restart Arduino IDE.
* To resolve problems with Arduino IDE itself, remove the [User data folder](#user-data-folder) and restart Arduino IDE.

<a id="sketchbook"></a>

### Sketchbook

The [Sketchbook](https://support.arduino.cc/hc/en-us/articles/4412950938514) contains your saved sketches and installed libraries.

Default Sketchbook location:

* **Windows:** `C:\Users\{username}\Documents\Arduino`
* **macOS:** `/Users/{username}/Documents/Arduino`
* **Linux:** `/home/{username}/Arduino`

Default libraries subfolder location:

* **Windows:** `C:\Users\{username}\Documents\Arduino\libraries`
* **macOS:** `/Users/{username}/Documents/Arduino/libraries`
* **Linux:** `/home/{username}/Arduino/libraries`

<a id="Arduino15"></a>

### Arduino15 folder

The [Arduino15 folder](https://support.arduino.cc/hc/en-us/articles/360018448279) contain installed board packages and tools.

Default location:

* **Windows:** `C:\Users\{username}\AppData\Local\Arduino15`. Open your Users folder in Explorer and look for a folder called `AppData`.
  * This folder is hidden by default. In newer versions of Windows, you can display hidden items by clicking the **View** tab, and checking _Hidden items_.
* **macOS:** `/Users/{username}/Library/Arduino15` Open Finder and navigate to the home folder `(/Users/{username})`. From the Finder menu bar, click on `View > Show View Options`, and tick _Show Library Folder_. The `Arduino15` folder can now be found in `{username}/Library`.
* **Linux:** The folder is located in `home/{username}/.arduino15` and is hidden by default. To show it, click the hamburger button and check Show Hidden Files.

### Configuration folder (.arduinoIDE)

The **.arduinoIDE** folder contain configuration files like `settings.json` and `arduino-cli.yaml`.

Default location:

* **Windows:** `C:\Users\{username}\.arduinoIDE` (hidden)
* **macOS:** `/Users/{username}/.arduinoIDE` (hidden)
* **Linux:** `/home/{username}/.arduinoIDE` (hidden)

<a id="user-data-folder"></a>

### User data folder (arduino-ide)

The **arduino-ide** folder contains various temporary files. Removing this folder can sometimes resolve problems with Arduino IDE.

Default location:

* **Windows:** `C:\Users\{username}\AppData\Roaming\arduino-ide\`
* **macOS:** `~/Library/Application Support/arduino-ide/`
* **Linux:** `~/.config/arduino-ide/`

<!-- NOTE: https://forum.arduino.cc/t/how-to-disable-opening-last-sketch-on-startup/1037122/2 -->
