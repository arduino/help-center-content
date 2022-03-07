---
title: "Windows Device Manager shows a 'warning sign' under my device"
---

This section will show you what to do if you notice a yellow warning sign next to the Arduino board in Windows 'Device Manager'. This error means that the drivers for the device are missing and the board did not install properly in your PC. The corresponding port for the board in Arduino IDE will not show or it will be grayed out making uploading sketches to the board not possible.

  ![](img/warning_sign_1.png)

This error can be caused by different issues. The following list of checks can help solving the problem or at least identify it.

## Check 1: Verify the core is properly installed

The right core for your Arduino board is available in the Arduino IDE software under the menu `Tools > Board > Boards Manager`.

![](img/warning_sign_3.png)

Once the Boards Manager is open, you can just search the name of your board and the right core will show up in the search results. Then just click Install. Alternatively you can also search directly for the name of the core if you know it.

The core is all the computer needs to install the Arduino board's driver so it is very important to select the right one and to make sure it is up to date. No additional drivers need to be downloaded or installed.

## Check 2: Avoid the use of USB Hubs

Make sure your board is plugged in directly onto the USB port of your PC. Sometimes, USB hubs can limit the current and/or data transfer speeds of the devices so it is better to connect your board directly.

## Check 3: Check the cable

Make sure your USB cable is suitable for data communication. Some USB cables only support charging and do not allow data transfers.

## Check 4: The board's driver was not detected

1. Right click on the Arduino board and select the option "Update Driver..."This action will open a new window which will ask you `How do you want to search for drivers?`

   ![](img/warning_sign_0.jpeg)

2. Select the second option "Browse my computer for driver software".

   ![](img/warning_sign_2.png)

3. Find the 'Drivers' folder. This folder is located wherever Arduino IDE was installed or saved. In case you have downloaded the Installer version, the path is _C:\Program Files (x86)\Arduino\drivers_. In case you have downloaded the Zip version, the route is based on where you extracted the files. But remember that it needs to finish with drivers folder.

## Check 5: Update Arduino IDE

Check that your Arduino IDE version is the latest. You can download it here in case you need it: [Arduino IDE](https://www.arduino.cc/en/Main/Software).

If you have gone through all this checks and the warning sign on device manager remains preventing the board to be recognized by the PC we advice you to contact [Technical Support](https://store.arduino.cc/usa/store-support).
