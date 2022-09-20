---
title: "Open the Arduino IDE installation folder"
id: 4412943340178
---

Learn how to open the Arduino IDE installation folder on your system.

---

<a id="windows"></a>

## Windows

Arduino IDE is installed in `C:\Program Files\Arduino IDE` by default.

1. Open File Explorer (AKA Windows Explorer).

2. Navigate to the installation folder:

   * **Windows (IDE 2.x):** `C:\Program Files\Arduino IDE`
   * **Windows (IDE 1.x):** `C:\Program Files (x86)\Arduino`
   * **Windows (Windows App Store):** `C:\Program Files\WindowsApps\ArduinoLLC.ArduinoIDE_<VERSION>`

---

<a id="macos"></a>

## macOS

1. Open the Applications folder.

2. Right-click the Arduino application, then click _Show Package Contents_.

3. Most content of interest is within the `Java` folder.

Full path: `/Applications/Arduino.app/Contents/Java`

---

<a id="linux"></a>

## Linux

The application files are located wherever they were extracted in the installation process.

If you need help finding it you can follow these steps:

1. Open Terminal.

2. Enter the following command and check the output.

   `whereis arduino`

3. The output will probably point to a shortcut. Enter the following command to get the actual path.

   `readlink <path>`

---

## Further reading

* [Find sketches, libraries, board cores, and other files on your computer](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer)
