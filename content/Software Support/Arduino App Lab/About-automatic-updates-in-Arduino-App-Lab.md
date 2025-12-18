---
title: About automatic updates in Arduino App Lab
---

Arduino App Lab is updated regularly with new features and bug fixes. When a new version is available, App Lab will automatically ask you to update.

In this article:

<!-- TOC -->

- [Updates are required](#updates-are-required)
- [What is updated](#what-is-updated)
- [Trigger an automatic update in Arduino App Lab](#trigger-an-automatic-update-in-arduino-app-lab)
- [Troubleshooting](#troubleshooting)

<!-- /TOC -->

---

## Updates are required

To ensure compatibility and prevent issues, App Lab needs to check for updates when you connect a board or start App Lab in standalone mode. This process requires an internet connection. An option to skip updates is planned for a future Arduino App Lab release.

---

## What is updated

It's important to understand the difference between updating Arduino App Lab and updating the software on your Arduino board.

- **Board software update:** The software that runs on your Arduino board (like the Arduino UNO Q). This include the Arduino App Lab installation on the board, which can be run standalone mode.
- **Arduino App Lab (on PC):** The application running on your computer. Updates for App Lab bring new features, bug fixes, and performance improvements to the application itself.

If you are having issues with your board, such as it not being detected, you may need to update the board software.

---

## Trigger an automatic update in Arduino App Lab

When you connect to a board in Arduino App Lab, it automatically checks for updates. This process updates both the Arduino App Lab installation on your computer, and the installation on the board.

### On your computer

1. Connect your board to your computer.

1. Select the board in Arduino App Lab.

1. If prompted, configure your account and network settings.

1. If Arduino App Lab detects new updates, they will be displayed.

   ![App Lab update available](img/app-lab-update.png)

1. Click **Install Updates** to confirm.

### In standalone mode

> [!NOTE]
> When running App Lab on your board standalone mode, only the App Lab installation on that board will be updated.

1. Sign into your board in standalone/SBC mode.

   For instructions, see [UNO Q as a Single-Board Computer](https://docs.arduino.cc/tutorials/uno-q/single-board-computer/#computer-assembly).

1. Open Arduino App Lab if it does not start automatically.

1. If prompted, configure your account and network settings.

1. If Arduino App Lab detects new updates, they will be displayed.

   ![App Lab update available](img/app-lab-update.png)

1. Click **Install Updates** to confirm.

---

## Troubleshooting

- If you see a **"Your board software is out of date”** warning, you need to manually flash the Linux image. See [If your Arduino UNO Q board software is out of date](https://support.arduino.cc/hc/en-us/articles/23170731875740-If-your-Arduino-UNO-Q-board-software-is-out-of-date).
- If the update process completed but without updating App Lab to the latest version, you can [update App Lab manually](https://support.arduino.cc/hc/en-us/articles/24305472458652-Manually-update-Arduino-App-Lab).
