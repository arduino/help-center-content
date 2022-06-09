---
title: "How to update OPENWRT on Arduino YÚN"
---

The Yún Rev 2 runs a distribution of Linux called OpenWrt-Yun, based on OpenWrt. Due to continuous improvements and suggestions coming from both the OpenWrt and the Arduino communities, version of OpenWrt-Yun installed on your Yún Rev 2 may be out of date. Please check this upgrade tutorial and be sure you're running the latest version available.

## Steps

### Step 0: Preparations

To upgrade or reinstall the OpenWrt-Yun image on your Yún, you'll need to download the zip file from the [download](https://www.arduino.cc/en/Main/Software#toc8) page. Once you've unpacked the file, move the binary image file to the root folder of a microSD card and insert the card into the Yún, or put it in the root folder of a USB flash drive and insert it in the USB Host of the Yún.

Updating the OpenWrt-Yun image will cause the loss of all files and configurations you previously saved on the flash memory of the Yún. Before upgrading, we strongly advise you to upload YunSerialTerminal example (File -> Examples -> Bridge -> YunSerialTerminal) because other sketches may interfere with the boot process and may make your Yún unresponsive.

### Step 1: Upgrading Using the Web Panel

Make sure the Yún and your computer are on the same network, and open a browser. Connect to the Yún's web panel page by entering the IP address or the name you gave to the board in the browser. With the default name you reach the Yún at `http://arduino.local`.

Once logged in, on the first page with the network information, scroll to the bottom, where you should see a notification informing you that a file containing an upgrade image has been found.

If you want to proceed resetting the Yún, click the red RESET button at the very bottom of the page.

![Arduino Yún web portal](img/How_to_update_openwrt_on_yun_0.png)

The process of upgrading the Yún will take around 3 minutes. During this time the WLAN led will flash until the process has been completed.

!["Wait until the WLAN led stops blinking" message in Arduino's Yún web portal](img/How_to_update_openwrt_on_yun_1.png)

While you are upgrading the image you can't use the Yún
