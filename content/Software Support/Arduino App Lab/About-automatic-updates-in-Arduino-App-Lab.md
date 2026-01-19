---
title: About automatic updates in Arduino App Lab
id: 24360072322972
---

Arduino App Lab is updated regularly with new features and bug fixes. When a new version is available, App Lab will automatically ask you to update.

In this article:

<!-- TOC -->

- [Manage automatic updates](#manage-automatic-updates)
- [What is updated](#what-is-updated)
- [Skipping updates](#skipping-updates)
- [Troubleshooting](#troubleshooting)

<!-- /TOC -->

---

## Manage automatic updates

When you connect to a board in Arduino App Lab, it automatically checks for updates. This process requires an Internet connection.

### On your computer

1. Connect your board to your computer.

1. Select the board in Arduino App Lab.

1. If prompted, configure your account and network settings.

1. If Arduino App Lab detects new updates, they will be displayed.

1. Click **Install Updates** to confirm or **Next Time** to skip.

### In standalone mode

> [!NOTE]
> When running App Lab on your board standalone mode, only the App Lab installation on that board will be updated.

1. Sign into your board in standalone/SBC mode.

   For instructions, see [UNO Q as a Single-Board Computer](https://docs.arduino.cc/tutorials/uno-q/single-board-computer/#computer-assembly).

1. Open Arduino App Lab if it does not start automatically.

1. If prompted, configure your account and network settings.

1. If Arduino App Lab detects new updates, they will be displayed.

1. Click **Install Updates** to confirm or **Next Time** to skip.

---

## What is updated

It's important to understand the difference between updating Arduino App Lab and updating the software on your Arduino board.

- **Board software update:** The software that runs on your Arduino board (like the Arduino UNO Q). This include the Arduino App Lab installation on the board, which can be run standalone mode.
- **Arduino App Lab (on PC):** The application running on your computer. Updates for App Lab bring new features, bug fixes, and performance improvements to the application itself.

You can see details about the updates in the updates prompt window.

[Learn more about the software components for Arduino App Lab](https://support.arduino.cc/hc/en-us/articles/24358702846748-Code-repositories-for-Arduino-App-Lab-components){.link-chevron-right}

---

## Skipping updates

> [!INFO]
> To ensure compatibility and prevent issues, some updates may be mandatory and cannot be skipped.

With App Lab version 0.3.1 and later, you can skip non-mandatory updates for both App Lab and board software. When prompted to update, click the **Next Time** button to skip the update. You'll be asked again next time you connect to the board or launch Arduino App Lab in standalone mode.

---

## Troubleshooting

- If you see a **"Your board software is out of date”** warning, you need to manually flash the Linux image. See [If your Arduino UNO Q board software is out of date](https://support.arduino.cc/hc/en-us/articles/23170731875740-If-your-Arduino-UNO-Q-board-software-is-out-of-date).
- If the update process completed but without updating App Lab to the latest version, you can [update App Lab manually](https://support.arduino.cc/hc/en-us/articles/24305472458652-Manually-update-Arduino-App-Lab).
