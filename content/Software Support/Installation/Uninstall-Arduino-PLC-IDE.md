---
title: "Uninstall Arduino PLC IDE"
---

This article explains how to completely uninstall the Arduino PLC IDE from your system.

The process involves removing both the main application and its associated tools, as well as deleting residual files stored in the user directory.

---

## Uninstall the application

To uninstall Arduino PLC IDE, remove both components using the Windows uninstall tool:

- PLC IDE
- PLC IDE Tools

Follow these steps:

1. Open the Start menu and search for **Add or remove programs**
2. Locate **PLC IDE**
3. Select it and click **Uninstall**
4. Repeat the process for **PLC IDE Tools**

---

## Remove T folder

After uninstalling the applications, delete the remaining local files stored in the `T` folder.

Navigate to:

    C:\Users\%USERNAME%\AppData\Local\

Locate and delete the following folder:

    T

The `T` folder is used by Arduino PLC IDE to store downloaded components, board platforms, toolchains, and libraries required for building and deploying projects.

For example, it may contain:

- Board support packages and multiple versions of board cores
- Toolchains such as `arm-none-eabi-gcc`
- Arduino libraries (e.g. ArduinoIoTCloud, ArduinoHttpClient)
- Debugging and flashing tools (e.g. OpenOCD, dfu-util)
- Temporary build files and cached resources

Removing this folder ensures that all cached data and installed components are fully cleared from the system.

> [!NOTE]
> The **AppData** folder is hidden by default. Enable hidden files in File Explorer from the **View** menu if needed.

---

## Projects created with PLC IDE

Uninstalling Arduino PLC IDE does **not** remove any projects created with the software.

Projects are stored in the location selected during their creation and must be deleted manually if needed.
