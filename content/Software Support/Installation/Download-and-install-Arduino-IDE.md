---
title: "Download and install Arduino IDE"
id: 360019833020
---

Learn how to download and install the desktop-based Arduino IDE.

---

## Installation instructions

> If you're using a Chromebook, see [Use Arduino with Chromebook](https://support.arduino.cc/hc/en-us/articles/360016495639-Use-Arduino-with-Chromebook).

### Windows

1. <a class="link-download" href="https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_Windows_64bit.exe">Download the latest release</a> (The download will start after you click this link. Check your browser's download manager or the Downloads folder on your computer to find the downloaded file)
2. Double-click the executable (.exe) file.
3. Follow the instructions in the installation guide.
4. When completing the setup, leave _Run Arduino IDE_ ticked to launch the application, or launch it later from the Start Menu.

### macOS

1. <a class="link-download" href="https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_macOS_64bit.dmg">Download the latest release</a> (The download will start after you click this link. Check your browser's download manager or the Downloads folder on your computer to find the downloaded file)
2. Double-click the disk image (.dmg) file.
3. Drag and drop the Arduino IDE application into the Applications folder.
4. Launch Arduino IDE the same way you would launch any other application (such as <kbd>⌘</kbd> + <kbd>Space</kbd> for Spotlight and search for "Arduino").

### Linux

1. <a class="link-download" href="https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_Linux_64bit.AppImage">Download the latest release</a>
2. Find the AppImage file in your file manager.
3. Make the AppImage file executable:

   1. Right-click the file.
   2. Choose Properties,
   3. Select the Permissions.
   4. Tick the _Allow executing file as program_ box.

4. Double-click the AppImage file to launch Arduino IDE.

If Arduino IDE fails to open, and you see the text `dlopen(): error loading libfuse.so.2` or `AppImages require FUSE to run`, you may be missing some dependencies[^1]. Follow these steps:

1. Open the **Terminal** application.
2. Enter this command:

   `sudo apt-get -y install libfuse2`
3. Press <kbd>Enter</kbd> and wait for the process to complete.
4. Close the Terminal window.
5. Try launching Arduino IDE again by double-clicking the AppImage file.

[^1]: <https://docs.appimage.org/user-guide/troubleshooting/fuse.html>

---

## Additional download options

* For a portable installation on Windows or Linux, use a "ZIP file" option:
  * _ZIP file_ (Windows)
  * _ZIP file 64 bits (X86-64)_ (Linux)
* For more control in mass deployment, use the _MSI installer_ package (Windows Installer) file.

* Nightly builds – preview incoming releases.
* IDE 1 (legacy)

<a class="link-external" href="https://www.arduino.cc/en/software">View all download options on the Software page</a>

---

## If you need help

* Arduino IDE 2 runs on the following systems:

  * **Windows:** Win 10 (64-bit) or newer
  * **macOS:** 10.15: “Catalina” or newer, 64-bit
  * **Linux:** 64-bit

* If you're using a Chromebook, see [Use Arduino with Chromebook](https://support.arduino.cc/hc/en-us/articles/360016495639-Use-Arduino-with-Chromebook).
* If you're installing the legacy version, see these guides for [Windows](https://docs.arduino.cc/software/ide-v1/tutorials/Windows), [macOS](https://www.arduino.cc/en/Guide/macOS), [Linux](https://docs.arduino.cc/software/ide-v1/tutorials/Linux).
* Consider using the [Cloud Editor](https://app.arduino.cc/) (you'll need to install the [Arduino Create Agent](https://support.arduino.cc/hc/en-us/articles/360014869820-Install-the-Arduino-Create-Agent)).
* Check the [Installation & Troubleshooting category](https://forum.arduino.cc/c/using-arduino/installation-troubleshooting/18) in the Arduino Forum.

<p style="display:none;">
   Tags: como instalo la aplicacion
</p>
