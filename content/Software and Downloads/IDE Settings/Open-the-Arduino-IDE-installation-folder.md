---
title: "Open the Arduino IDE installation folder"
---

Learn how to open the Arduino IDE installation folder on your system.

---

## Windows

Arduino IDE is installed in `C:\Program Files (x86)\Arduino` by default.

1. Open Explorer.

2. Navigate to `C:\Program Files (x86)\Arduino`.

---

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

* [Find sketches, libraries, cores and other files on your computer](https://support.arduino.cc/hc/en-us/articles/4411202655634)
