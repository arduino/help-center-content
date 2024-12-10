---
title: "Update firmware and libraries for Arduino Alvik"
---
Keeping your Alvik’s firmware updated ensures it has the latest features, bug fixes, and performance improvements. Regular updates also help maintain compatibility with other software, ensuring optimal performance for your robot. In this article, we will explain what the Alvik Updater does and how to use it effectively.

- [How to Update your Alvik](#how-to-update-your-alvik)
- [What does the Alvik Updater do?](#what-does-the-alvik-updater-do)
    - [What Alvik Updater Will Do](#what-alvik-updater-will-do)
    - [What Alvik Updater Will Not Do](#what-alvik-updater-will-not-do)
- [Troubleshooting](#troubleshooting)
    - [If the update seems to have stopped](#if-the-update-seems-to-have-stopped)
    - [If your Alvik doesn’t appear in the dialog window](#if-your-alvik-doesnt-appear-in-the-dialog-window)

## How to Update your Alvik

1. Go to the [Arduino Alvik Updater](https://alvikupdate.arduino.cc/)

1. Turn on your Alvik robot and connect the Nano ESP32 to your Computer with a USB-C cable.

1. Click on the 'Connect' button.

1. A dialog window will open, prompting you to select a device.

    !["Connect to serial port" dialog window on PC and Chromebook](img/connect-to-serial-port.png)

    > [!NOTE]
    > The appearance of this window may vary depending on your operating system. Similarly, the port you need to select might differ in name or format.

1. Once the device is connected, the 'Update' button will become clickable. Click the 'Update' button to proceed.

1. Wait for the update to finish. This process may take some time.

    ![Update Complete visuals](img/update-complete.png)

    The update is complete when a checkmark and the text "Updated" appear below the update button.

## What does the Alvik Updater do?

### What Alvik Updater Will Do

- Update or install the Alvik MicroPython library
- Update or install the Alvik Carrier firmware
- Restore library modifications.

### What Alvik Updater Will Not Do

- Restore default demo examples
- Remove any projects or files added by the user
- Update or install the MicroPython firmware on the Nano ESP32 board

## Troubleshooting

### If the update seems to have stopped

If the update button seems unresponsive or does not continue loading:

1. Ensure the switch on the Alvik is set to "On."

1. Reload the page and try the update again.

### If your Alvik doesn’t appear in the dialog window

1. **Verify the Board Port in Arduino Lab for MicroPython**

    Alvik is often not displayed as "Alvik" in the dialog window. It may sometimes appear as "Nano ESP32" or under another name, with the port listed in parentheses e.g., (COM29) on Windows or (ttyACM0) on Chromebook. If there are multiple options, you can confirm which port corresponds to your Alvik by connecting it to Arduino Lab for MicroPython.

1. **Reconnect the Board**

    - Disconnect and reconnect your board to reset its power.
    - Look for any system notifications requesting USB device permissions and grant them if prompted.

1. **Check the Board Connection**

    - Ensure you’re using a data USB cable, not a charging-only cable.
    - Connect the board directly to your computer, bypassing any USB hubs.
    - If the board still isn’t detected, try a different USB port.
