---
title: "If Arduino IDE hangs on start-up"
---

If Arduino IDE stops responding or never finishes opening, follow these steps to troubleshoot the problem.

## 1. Check your internet connection

On the first run after a fresh installation, Arduino IDE downloads and installs additional essential components. If it cannot install these components, Arduino IDE may hang during start-up.

1. Make sure your computer is connected to the internet.
1. Close all Arduino IDE windows.
1. Start Arduino IDE again.

> [!NOTE]
> After the required components are installed, an internet connection is not required to edit, compile, and upload sketches. Internet-dependent features, such as **Library Manager**, will not be available while your computer is offline.

## 2. Examine the command-line logs

If Arduino IDE still hangs, start it from a terminal to view its diagnostic output.

### Linux

1. Close all Arduino IDE windows.
1. Open a [command-line terminal](https://ubuntu.com/tutorials/command-line-for-beginners) in the folder containing the Arduino IDE AppImage.
1. Enter the following command, replacing `<version>` with the Arduino IDE version number:

   ```text
   ./arduino-ide_<version>_Linux_64bit.AppImage
   ```

1. Press <kbd>**Enter**</kbd>.

### macOS

1. Close all Arduino IDE windows.
1. Open macOS [**Launchpad**](https://support.apple.com/guide/mac-help/mh35840/mac).
1. Search for `terminal`.
1. Select **Terminal**.
1. Enter the following command:

   ```text
   "/Applications/Arduino IDE.app/Contents/MacOS/Arduino IDE"
   ```

1. Press <kbd>**Enter**</kbd>.

### Windows

1. Close all Arduino IDE windows.
1. Open Windows [**File Explorer**](https://support.microsoft.com/windows/find-and-open-file-explorer-ef370130-1cca-9dc5-e0df-2f7416fe1cb1).
1. Open the Arduino IDE installation folder.

   The default installation location is usually one of the following:

   ```text
   C:\Program Files\Arduino IDE
   ```

   ```text
   C:\Users\<username>\AppData\Local\Programs\Arduino IDE
   ```

   Replace `<username>` with your Windows username.

   > [!NOTE]
   > The `AppData` folder is hidden by default. To show it in File Explorer, open **View** and enable **Hidden items**.

1. Hold <kbd>**Shift**</kbd> and right-click an empty area inside the Arduino IDE installation folder.
1. Select **Open PowerShell window here**.
1. Enter the following command:

   ```text
   & ".\Arduino IDE"
   ```

1. Press <kbd>**Enter**</kbd>.

### Review the logs

Return to the terminal or PowerShell window. Wait until Arduino IDE appears to be hanging. This may be indicated by:

* No additional output appearing in the terminal.
* The same output appearing repeatedly.

Look for error messages in the output. Searching for an error message online may help you identify the cause and find a solution.

If you cannot resolve the problem, create a post in the [Arduino IDE 2.x section of the Arduino Forum](https://forum.arduino.cc/c/development-tools/ide-2-x/93) or [contact Arduino Support](https://www.arduino.cc/en/contact-us/).

Describe what happens when Arduino IDE starts and include the complete command-line output in your forum post or support request.
