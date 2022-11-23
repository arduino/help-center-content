---
title: "Use Python® with Arduino Yún Rev2"
id: 360012963820
---

1. Make sure, the `Bridge` library is updated with the latest version. If not, go to Arduino IDE top menu: *Sketch > Include Library > Manage Libraries*, search for 'Bridge' and update it.

2. Go to *File > Examples > Bridge> YunSerialTerminal*.

   ![Example location](img/yun-py1.png)

3. Upload this sketch and open the serial monitor.

4. Change the baud rate to 115200. After a few seconds, press the Enter button to activate the console.

   ![Example location](img/yun-py2.png)

   ![Example location](img/yun-py3.png)

5. Send the opkg commands in Openwrt platform to install the python packages:

   * `opkg update
   * `opkg upgrade`
   * `opkg install python`
   * `opkg install python-pip`
