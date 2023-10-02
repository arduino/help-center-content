---
title: "Arduino IDE won't open; The cloud file provider is not running"
id: 360021557299
---

The Microsoft OneDrive On-Demand and the back up features can result in essential files not being available or synchronized. This can lead to issues when starting Arduino IDE on Windows (the initialization window appears and disappears without showing any error message or warning), or to errors during compilation. Learn more about possible solutions.

---

<a id="disable-on-demand"></a>

## Disable the On-Demand feature

1. Make sure that your internet connection is stable.
2. Open Microsoft OneDrive (look for the OneDrive icon inside the system tray at the bottom-right of the taskbar):

   ![Microsoft One Drive icon inside system tray](img/one-drive-system-tray.png)

3. Click on the settings icon and go to "Settings":

   ![Microsoft One Drive settings selected](img/one-drive-settings.png)

4. Go to "Sync and back up" and click on "Advanced settings":

   ![Microsoft One Drive with "Sync and back up" and "Advanced settings" highlighted](img/one-drive-advanced-settings.png)

5. Scroll down to "Files-On-Demand" and choose "Download all files":

   ![Microsoft One Drive with "Sync and back up" and "Download all files" highlighted](img/one-drive-on-demand.png)

6. Allow some time for OneDrive to download the files.

<a id="install"></a>

## Re-install IDE outisde the OneDrive folder

1. [Uninstall Arduino IDE](https://support.arduino.cc/hc/en-us/articles/360021325733-Uninstall-Arduino-IDE) from your computer.
2. [Install Arduino IDE](https://support.arduino.cc/hc/en-us/articles/360019833020-Download-and-install-Arduino-IDE) outside the OneDrive folder. For example:
   * `C:\Program Files\Arduino IDE` or `C:\Users\username\AppData\Local\Programs\Arduino IDE`
   * Avoid paths like: `C:\Users\username\OneDrive\Documents\Arduino\...`

<a id="disable-backup"></a>

## Disable back up for the IDE location

Having the IDE installed in a folder that is backed up by OneDrive (e.g. "Documents") can result in essential files not being available or synchronized. Follow these steps to disable automatic back up:

1. Make sure that your internet connection is stable.
2. Open Microsoft OneDrive (look for the OneDrive icon inside the system tray at the bottom-right of the taskbar):

   ![Microsoft One Drive icon inside system tray](img/one-drive-system-tray.png)

3. Click on the settings icon and go to "Settings":

   ![Microsoft One Drive settings selected](img/one-drive-settings.png)

4. Go to "Sync and back up" and click on "Manage back up": 

   ![Microsoft One Drive "Sync and back up" and "Manage back up" highlighted](img/one-drive-backup.png)

5. Disable the back up option for the folder containing Arduino IDE and click "Save changes":

   ![Microsoft One Drive "Back up folder on this PC" section](img/one-drive-backup-off.png)
   