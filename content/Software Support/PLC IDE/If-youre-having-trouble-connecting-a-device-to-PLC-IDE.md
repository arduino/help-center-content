---
title: "If you're having trouble connecting a device to PLC IDE"
id: 8824551178780
---

Learn what to do if you're having an issue using your device with PLC IDE.

> ![TIP]
> If you're just getting started with PLC IDE, see [Arduino® PLC IDE Setup & Device License Activation](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license/).

In this article:

- [If you can't find the serial port for your device](#if-you-cant-find-the-serial-port-for-your-device)
- [If you can't install the runtime](#if-you-cant-install-the-runtime)
- [If you can't connect to the device](#if-you-cant-connect-to-the-device)
- [If you see an error when downloading](#if-you-see-an-error-when-downloading)
- [If there is an issue activating the license](#if-there-is-an-issue-activating-the-license)

---

## If you can't find the serial port for your device

In this section:

- [About serial ports in PLC IDE](#about-serial-ports-in-plc-ide)
- [If you don't know which port to use](#if-you-dont-know-which-port-to-use)
- [If your device does not appear on any port](#if-your-device-does-not-appear-on-any-port)

### About serial ports in PLC IDE

There are two contexts where you need to specify a serial port target.

- _When installing the runtime._
- _When configuring the Modbus protocol._

When the runtime has been installed, two serial ports may appear. When installing the runtime, the choice of port doesn't matter. When configuring the Modbus protocol, you should select the **lower-numbered** port as the target.

### If you don't know which port to use

In some cases, it may be challenging to determine which serial port belongs to your PLC device. This is especially true if other devices or interfaces have ports open on your computer.

1. If two ports are open, and they are numbered COM<N> and COM<N+1> (for example, COM20 and COM21), it's likely that both are created by your PLC device. Choose the **lower-numbered port** when configuring PLC IDE.
2. If many ports are available, try disconnecting other USB devices that may be using serial communication and select **Project > Refresh current target** to refresh the list of ports.
3. If you're still unsure what port to choose, see [Identify the serial port of your PLC device](https://support.arduino.cc/hc/en-us/articles/16724283965596).

### If your device does not appear on any port

Try these steps in order. Refresh the list of ports after each step by selecting **Project > Refresh current target** in the menu bar.

1. Disconnect and reconnect your PLC device.
1. Check for any system notifications that may prompt you to grant USB device permissions, and allow them if they appear.
1. Ensure your device is connected using a working data USB cable. Connect your board with a data USB cable, not a charging-only cable. Confirm the cable is working by testing it with another device or trying a different cable.
1. Connect the board directly to your computer instead of through a USB hub.
1. If the board is still not detected, try a different USB port on your computer.
1. Press the `RESET` button twice to put it into Bootloader mode and try to [install the runtime](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license/#3-download-the-runtime).
   - On the Opta, the button is located in a small hole, similar to those on a router, so you'll need a pointed object.
   - When installing the runtime, select the **Automatic (Bootloader)** target.

---

## If you can't install the runtime

In this section:

- [If there is an error when installing the runtime](#if-there-is-an-error-when-installing-the-runtime)
- [If nothing happens when downloading the runtime](#if-nothing-happens-when-downloading-the-runtime)

### If there is an error when installing the runtime

See the [If you see an error when downloading](#if-you-see-an-error-when-downloading) section.

### If nothing happens when downloading the runtime

Follow these steps:

1. Under the Output panel, select the **Resources** tab.

1. Follow the linked instructions if you see any of these errors:
   - [Cannot generate profile file error message: Error: Path not found](#cannot-generate-profile-file-error-message-error-path-not-found)
   - [Error: invalid path creating config dir](#error-invalid-path-creating-config-dir)
   - If you see a different error, see the [If you see an error when downloading](#if-you-see-an-error-when-downloading) section.

1. Restart PLC IDE.

1. Ensure you've installed the latest version of the Arduino PLC IDE software from the Arduino Software page.

---

## If you can't connect to the device

Learn what to do if you are unable to connect to the device.

In this section:

- [If the "On-Line > Set up communications" and "On-line > Connect" options are disabled](#if-the-on-line--set-up-communications-and-on-line--connect-options-are-disabled)
- [Error: “Unable to start the communication”](#error-unable-to-start-the-communication)
- [If PLC IDE becomes unresponsive when connecting to the device](#if-plc-ide-becomes-unresponsive-when-connecting-to-the-device)

### If the "On-Line > Set up communications" and "On-line > Connect" options are disabled

These options are only available when a project is open. Select **File > New Project** to create a new project.

### Error: “Unable to start the communication”

When choosing **On-line > Set up communications** you may get this error message:

```
Unable to start the communication
Choose 'On-line / Set up communication' to configure it
```

Resolve the issue by selecting **On-line > Set up communication** and checking the settings. See [Connect to the Device](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license/#4-connect-to-the-device) for help.

### If PLC IDE becomes unresponsive when connecting to the device

PLC IDE may become unresponsive if there isn't a response on the targeted port.

Follow these steps:

1. Select **On-line > Set up communication**.
1. Click on **Properties** to open the Modbus configuration.
1. Under Communication, ensure the right **Port** is selected.
1. See the [If you can't find the serial port for your device](#if-you-cant-find-the-serial-port-for-your-device) section for help finding the right port.

---

## If you see an error when downloading

In this section:

- [Error: "Cannot download sketch file error code: 1"](#error-cannot-download-sketch-file-error-code-1)
- [Cannot generate profile file error message: Error: Path not found](#cannot-generate-profile-file-error-message-error-path-not-found)
- [Error: invalid path creating config dir](#error-invalid-path-creating-config-dir)
- [“Error” in the bottom right corner on first use of the board](#error-in-the-bottom-right-corner-on-first-use-of-the-board)

### Error pop-up: "Cannot download sketch file (error code: 1)"

This error may occur when attempting to download the runtime sketch.

Solutions:

1. [Verify that the correct port is selected in the manual sketch download widget.](https://support.arduino.cc/hc/en-us/articles/16724283965596)

1. Double-tap the device’s reset button to put it in bootloader mode. First, try selecting the correct COM port. If that doesn’t work, set the Port to “Automatic (BootLoader)” and attempt to download the sketch again.

1. Close any applications blocking the port, such as the Arduino IDE serial monitor.

1. [Reformat the QSPI flash memory](https://support.arduino.cc/hc/en-us/articles/16206977438748-Reset-the-flash-memory-on-STM32H747-based-devices)

1. Create a new project and attempt to download the runtime again.

### Cannot generate profile file (error message: Error: Path not found)

If you see this error, it means that the `sketch.yaml` file is missing from `C:\Users\USERNAME\AppData\Local\T\sketch.yaml`.

When installing PLC IDE, a **User Account Control** prompt will ask for administrator privileges. Some files that are used by PLC IDE will be created in the `C:\Users\ADMIN-USERNAME\AppData\Local\T` directory for that admin account.

Do one of the following:

- If your account has admin privileges, you can simply reinstall PLC IDE to create the missing files for your user.
- Run PLC IDE using the same admin account that installed it:
  1. Close PLC IDE.
  2. Right-click PLC IDE and select **Run as administrator**.
  3. Continue using the same admin credentials that were used when installing PLC IDE.
- Copy the files to configure a non-admin user for PLC IDE:
  1. Sign in as an admin.
  2. Copy the `C:\Users\ADMIN-USERNAME\AppData\Local\T` folder.
  3. Paste the folder into the `C:\Users\REGULAR-USERNAME\AppData\Local\T` directory.
  4. Open the `C:\Users\REGULAR-USERNAME\AppData\Local\T\arduino-cli.yaml` file in a text editor.
  5. Replace `ADMIN-USERNAME` with `REGULAR-USERNAME` in all file paths inside the file.
  6. Save the changes to `arduino-cli.yaml`.

### Error: invalid path creating config dir

You may see this error:

`Error: invalid path creating config dir: C:\Users\USERNAME\AppData\Local\T\A error: mkdir C:\Users\<User>\AppData: Cannot create a file when that file already exists.`

This error can occur when the `arduino-cli.yaml` file is copied from another user.

Do one of the following:

- Open `arduino-cli.yaml` in a text editor and change all paths to use your own user folder.
  1. Open the `C:\Users\USERNAME\AppData\Local\T\arduino-cli.yaml` file in a text editor.
  2. Replace `OTHER-USERNAME` with `USERNAME` in all file paths inside the file.
  3. Save the changes to `arduino-cli.yaml`.
- Run PLC IDE using the same admin account that installed it:
  1. Close PLC IDE.
  2. Right-click PLC IDE and select **Run as administrator**.
  3. Continue using the same admin credentials that were used when installing PLC IDE.

### “Error” in the bottom right corner on first use of the board

Follow these steps:

1. In the Output panel, open the **Resources** tab and check for error messages.
2. [Reformat the QSPI flash memory](https://support.arduino.cc/hc/en-us/articles/16206977438748-Reset-the-flash-memory-on-STM32H747-based-devices).
3. Reinstall the runtime and try again.

---

## If there is an issue activating the license

When activating the license you may see one of these errors:

- `Could not activate licenses for the following products: AIPC_Arduino_Opta`
- `Error #29 activating AlPLC_Arduino_PMC: Generic parameters error`
- `Could not activate licenses for the following products: AIPC_Arduino_PMC`

Try the following:

- [Reformat the QSPI flash memory](https://support.arduino.cc/hc/en-us/articles/16206977438748-Reset-the-flash-memory-on-STM32H747-based-devices). Then, try to activate the license again.

- If you are using a company-owned computer, please follow these steps:

  1. Temporarily disable any antivirus software running on your system.

  1. Temporarily disable the firewall on your computer.

  1. Attempt the license activation process again.

> [!NOTE]
> Corporate networks and security programs may interfere with license activation. Disabling these temporarily can help complete the process.

<!-- markdownlint-disable-file HC001 -->
