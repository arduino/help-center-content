---
title: "Camera image from Portenta Vision Shield does not show up on OpenMV"
id: 4402386864146
---

This help center entry is a quick troubleshooting guide to solve no image issue on OpenMV with Portenta H7 and Vision Shield. Please verify and confirm the following checks:

1. Ensure the Vision Shield is securely connected to the Portenta board. Make sure both connectors click and engage properly by gently pushing on either side of the board’s connectors.
2. Ensure all software and firmware is up to date. For that, verify and update the following:
   * Download and install the latest version of Arduino IDE.
   * Install/Update to the latest core version of Arduino Mbed OS Boards: In Arduino IDE go to _Tools > Board > Boards Manager_ and search for 'Portenta'. Install `Arduino Mbed OS Portenta Boards` by Arduino. For step-by-step instructions, see [How to update the bootloader on Portenta H7](https://support.arduino.cc/hc/en-us/articles/4404067649554-How-to-update-the-bootloader-on-Portenta-H7).
   * Update Portenta H7 bootloader: In Arduino IDE select the Portenta H7 (M7 core) under _Tools > Board_ and then go to _File > Examples > STM32H747_System > STM32H747_updateBootloader_. Select 115200 baud rate and proceed with the update following the instructions in the serial monitor.
   * Update OpenMV IDE to [the latest available version](https://openmv.io/pages/download).
     Then you can try to upload and run “helloworld.py” from OpenMV top menu: *file > examples > arduino > basics.* The video image should show up in the video section of OpenMV (top right corner).

![HelloWorld example in the OpenMV IDE](img/vs_troubleshooting.png)

For a step-by-step guide on uploading your first program with OpenMV and Portenta Vision Shield, try the [Blob Detection tutorial](https://www.arduino.cc/pro/tutorials/portenta-h7/por-openmv-bt).

If the above did not solve the problem, contact [Arduino Technical Support](https://www.arduino.cc/en/contact-us/).
