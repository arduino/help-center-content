---
title: Migrating to Zephyr core 0.55.0 on UNO Q
---

The Arduino Zephyr core version 0.55.0 introduces significant improvements and changes for Arduino UNO Q. This update streamlines how Serial communication works and adds support for new libraries, but also requires specific tooling and library updates for a smooth transition.

In this article:

<!-- TOC -->

- [What's changing](#whats-changing)
- [What you need to do](#what-you-need-to-do)
- [Troubleshooting](#troubleshooting)

<!-- /TOC -->

## What's changing

- `Serial` is now an alias for `Monitor`, and `Serial` will print to the Serial Monitor, consistent with other Arduino cores. To print directly to the hardware UART pins (pins 0 and 1) on the UNO Q, you must now explicitly use `Serial1` instead of `Serial`.
- The core now enforces the inclusion and usage of the `Arduino_RouterBridge` and `Arduino_RPCLite` libraries for Serial support. Compiling with this new core makes the manual inclusion of `Arduino_RouterBridge.h` redundant for basic Serial usage.
- If you are using cores manually placed in your sketchbook, it is now mandatory to use `zephyr` as the local core name for the UNO Q.
- The `flash_mode` option has been removed from the board settings.

## What you need to do

### Arduino App Lab

Arduino App Lab will automatically prompt you to update to the latest version.

To manually initiate the update:

1. Open **Settings** from the sidebar.
2. Find the **System Info** section.
3. Select **Update**.

### Arduino IDE

If you're using Arduino IDE, you need to manually update the core, install the latest libraries, and flash the bootloader.

Follow these steps:

1. Open the **Boards Manager** in Arduino IDE.
2. Search for **Arduino Zephyr Boards**.
3. Update to version **0.55.0**.
4. Open the **Library Manager**.
5. Search for `Arduino_RouterBridge`, and install the latest version.
6. Search for `Arduino_RPCLite`, and install the latest version.
7. Select **Tools > Programmer > JLink**.
8. Select **Tools > Burn Bootloader**.

## Troubleshooting

### Error: Please install the Arduino_RouterBridge library

When compiling your sketch, you may encounter this error:

`#error "Please install the Arduino_RouterBridge library from the Library Manager for proper Serial support on this board."`

**Solution:** Open the **Library Manager**, search for `Arduino_RouterBridge`, and install it.

### Error: Please update the Arduino_RouterBridge library

When compiling your sketch, you may encounter this error:

`#error "Please update the Arduino_RouterBridge library to the latest version to ensure Serial support on this board."`

**Solution:** Open the **Library Manager**, search for `Arduino_RouterBridge`, and update it to the latest version.
