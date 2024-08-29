---
title: "Open the Arduino IDE installation folder"
id: 4412943340178
---

Learn how to open the Arduino IDE installation folder on your system.

**Standard installations:**

* [Windows](#windows)
* [macOS](#macos)
* [Linux](#linux)

**Other:**

* [Windows (Microsoft Store)](#windows-ms-store)

---

## Windows {#windows}

Depending on whether "All users" or "Only me" was selected during installation, these are the default installation paths:

* **All users:** `C:\Program Files\Arduino IDE`
* **Only me:** `C:\Users\%USERNAME%\AppData\Local\Programs\Arduino IDE`

> Prior to IDE 2, the application name was `Arduino`, with `C:\Program Files (x86)\Arduino` being the default path.

### Navigate to the installation folder in File Explorer

1. Open the File Explorer from the Task Bar or Start Menu, or press <kbd>Win</kbd> + <kbd>E</kbd> on your keyboard.

2. To find the system drive `C:`, look for "This PC" in the sidebar and double-click to open.

3. Navigate to the path listed above by double-clicking folders.

The `AppData` folder is hidden by default. If you can't see it, follow these steps:

* **Windows 11:** View > Show > Hidden items.

* **Windows 10:** View > Options > Change folder and search options. Select the View tab and, in Advanced settings, select Show hidden files, folders, and drives and OK.

### Show the enclosing folder of an application in the Task Bar

If you're able to find Arduino IDE in the Task Bar, you can use this method:

1. Open the Start Menu.

2. Find Arduino IDE in the list of applications, right-click on it, and select **More > Show file location**.

3. A new File Explorer window will open a folder containing shortcuts to all Start Menu programs, with the Arduino IDE shortcut being selected.

4. Right-click the Arduino IDE shortcut and select **Open file location**.

5. The Arduino IDE installation folder will open, with the main executable being selected.

---

## macOS {#macos}

The application files are packaged in an application bundle file named `Arduino IDE.app`, which is located inside the Applications folder (`/Applications`) by default.

### Open the Applications folder

1. Open Finder.

2. Click on Applications in the sidebar or press <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd>.

### Show the enclosing folder of any application

* When Arduino IDE is running, right-click on the icon in Dock and select **Options > Show in Finder**.
* Hold <kbd>⌘</kbd> + <kbd>Space</kbd> to open Spotlight and search for "Arduino". Use the arrow keys to highlight `Arduino IDE.app`, then hold <kbd>⌘</kbd> and press <kbd>Enter</kbd> to open the enclosing folder.

### Explore package contents

In Finder, right-click the Arduino application, and select _Show Package Contents_.

The executable is located at `Arduino IDE.app/Contents/MacOS/Arduino IDE`.

---

## Linux {#linux}

### AppImage

When using the **AppImage** distribution, there is no automatic installation process. The application files remain packaged in AppImage file, which may have been saved to your Downloads folder by default.

### ZIP archive

If the application was downloaded as an archive, the files are stored wherever chosen during the extraction process.

### Other options and 'whereis'

If `arduino` is available as a command in Terminal, you can use the `whereis` command to locate binary, source, and manual page files:

1. Open Terminal.

2. Enter the following command and check the output.

   `whereis arduino`

3. The output will probably point to a shortcut. Enter the following command to get the actual path.

   `readlink <path>`

---

## Windows (Microsoft Store) {#windows-ms-store}

Arduino IDE is available as a Windows App in the Microsoft Store. It is installed to `C:\Program Files\WindowsApps` by default, with a folder name like `ArduinoLLC.ArduinoIDE_<VERSION>`, with a version number instead of "\<VERSION\>".

### Navigate to the installation folder in File Explorer

1. Open the File Explorer from the Task Bar or Start Menu, or press <kbd>Win</kbd> + <kbd>E</kbd> on your keyboard.

2. To find the system drive `C:`, look for "This PC" in the sidebar and double-click to open.

3. Go to `Program Files` > `WindowsApps`.

4. Look for a folder starting with "ArduinoLLC.ArduinoIDE_".

The `WindowsApps` folder is hidden by default. If you can't see it, follow these steps:

* **Windows 11:** View > Show > Hidden items.

* **Windows 10:** View > Options > Change folder and search options. Select the View tab and, in Advanced settings, select Show hidden files, folders, and drives and OK.

### Open with the Run Dialog

1. Press <kbd>Win</kbd> + <kbd>R</kbd>

2. Copy and paste this path into the box:

   `C:\Program Files\WindowsApps`

3. Press <kbd>Enter</kbd> to open the location in File Explorer.

---

## Further reading

* [Find sketches, libraries, board cores, and other files on your computer](https://support.arduino.cc/hc/en-us/articles/4415103213714-Find-sketches-libraries-board-cores-and-other-files-on-your-computer)
