---
title: "How to update the bootloader on Portenta H7"
---

A bootloader is a small application that starts when an Arduino board gets powered. Official Arduino boards come pre-flashed with a bootloader, but to guarantee the best performance and stability it needs to be updated with the latest firmware releases.

---

1. First we must ensure we have the latest version available of the core. To do so open the board manager in the menu under _Tools->Board->Boards Manager_... Then search for "portenta" and find the **Arduino Mbed OS Portenta Boards** package and click on "Install" or "Update" accordingly.
2. To update the bootloader we use the **PortentaH7_updateBootloader** sketch. You can find the sketch file under _File > Examples > Portenta_System_

   ![Bootloader Update Sketch](img/update_bootloader_portenta.png)

3. Compile and upload the sketch to the board. Make sure you have selected the right port before you upload.
4. Open the Serial monitor and you will see the specifications of your current bootloader and your board. Enter **"Y"** in the text field and press enter to begin the update process.

   ![Serial monitor output](img/update_bootloader_portenta_2.png)

5. You will see the message "Bootloader update complete. You may now disconnect the board." when the update is complete.

   ![Update complete message](img/update_bootloader_portenta_3.png)
