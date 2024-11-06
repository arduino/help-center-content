---
title: "If you're having trouble connecting a device to PLC IDE"
id: 8824551178780
---

## Check this first

- If you haven't done so, start by checking the [Arduino PLC IDE Setup and Board's License Activation](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license#instructions) tutorial.

- Ensure you've installed the latest version of the **Arduino PLC IDE** software.

- Ensure that you have full administrative privileges when running PLC IDE.

- Ensure you use a USB cable that supports data transfer.

- When downloading the runtime, or connecting to the device, ensure you're [targeting the correct port](https://support.arduino.cc/hc/en-us/articles/16724283965596).

- When opening a project created with an earlier version of the PLC IDE, some issues may occur. Try creating a new project (**File > New Project**) to see if this resolves the issue.

- You need **valid license** to download the code to the device:

  - Licenses for Portenta Machine Control are [available in the store](https://store.arduino.cc/products/plc-key-portenta-machine-control). Instructions for license activation [are available here](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license#6-license-activation-with-product-key-portenta-machine-control).

  - Arduino Opta is a pre-licensed product, follow the [activation instructions](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license#7-license-activation-with-pre-licensed-products-opta).

---

## If PLC IDE installation fails

### "User cancelled installation"

This error occurs when the installation is interrupted before the Arduino IDE Tools Setup Wizard completes.

Restart the installation process and ensure you allow the Setup Wizard to finish without interruption.

### "Fatal error during installation"

This error typically appears when attempting to install the PLC IDE without an internet connection.

Connect to the internet and try the installation again. The installer requires an active connection to download the necessary components.

---

## If Manual sketch download fails for setup and re-installation

### Error: "Cannot download sketch file (error code: 1)"

This error may occur when attempting to download the runtime sketch.

Solutions:

1. [Verify that the correct port is selected in the manual sketch download widget.](https://support.arduino.cc/hc/en-us/articles/16724283965596)

1. Double-tap the device’s reset button to put it in bootloader mode. First, try selecting the correct COM port. If that doesn’t work, set the Port to “Automatic (BootLoader)” and attempt to download the sketch again.

1. Close any applications blocking the port, such as the Arduino IDE serial monitor.

1. [Reformat the QSPI flash memory](https://support.arduino.cc/hc/en-us/articles/16206977438748-Reset-the-flash-memory-on-STM32H747-based-devices)

1. Create a new project and attempt to download the runtime again.

### Error: "(DownloadSketch) Can not download sketch: COM port must be used!"

This error occurs when no COM port is selected.

[Select the correct COM port in the manual sketch download widget](https://support.arduino.cc/hc/en-us/articles/16724283965596) and attempt the download again.

### If nothing happens when downloading the runtime

1. Ensure you've installed the latest version of the Arduino PLC IDE software from the Arduino Software page.

1. Verify the "T" Folder Exists

   `C:\Users\<Profile-Name>\AppData\Local\T`

   If you can't find this folder, Copy it from the computer's Admin profile (which requires access authorization, e.g., the admin password) and paste it into the same path on the user profile.

1. Restart PLC IDE.

---

## If there is an issue connecting to a device

### If the "On-Line > Set up communications" and "On-line > Connect" options are disabled

These options are only available when a project is open. Select **File > New Project** to create a new project.

### Error: “Unable to start the communication”

When choosing **On-line > Set up communications** you may get this error message:

```
Unable to start the communication
Choose 'On-line / Set up communication' to configure it
```

Resolve the issue by selecting **On-line > Set up communication** and checking the settings. See [Connect to the Device](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license#5-connect-to-the-device) for help.

### “Error” in the bottom right corner on first use of the board

[Reformat the QSPI flash memory.](https://support.arduino.cc/hc/en-us/articles/16206977438748-Reset-the-flash-memory-on-STM32H747-based-devices)

---

## If there is an issue activating the license

When activating the license for Arduino Opta or Portenta Machine Control, the following errors may occur:

### Opta

After clicking “Activate PLC Runtime”: `Could not activate licenses for the following products: AIPC_Arduino_Opta`

### Portenta Machine Control

- Online activation: `Error #29 activating AlPLC_Arduino_PMC: Generic parameters error`

- Offline activation: `Could not activate licenses for the following products: AIPC_Arduino_PMC`

Solutions:

- Upload the [Memory Partitioning sketch](https://docs.arduino.cc/tutorials/opta/memory-partitioning/) using Arduino IDE. Then, try to activate the license again.

- If you are using a company-owned computer, please follow these steps:

  1. Temporarily disable any antivirus software running on your system.

  1. Temporarily disable the firewall on your computer.

  1. Attempt the license activation process again.

  > [!NOTE]
  > Corporate networks and security programs may interfere with license activation. Disabling these temporarily can help complete the process.

<!-- markdownlint-disable-file HC001 -->
