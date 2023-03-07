---
title: "Burn the bootloader on GIGA R1 WiFi"
---

## Before you begin

* Add the **Arduino Mbed OS Giga Boards** to Arduino IDE using the [Boards Manager](https://support.arduino.cc/hc/en-us/articles/360016119519-Add-boards-to-Arduino-IDE).
* [Download and install the STM32CubeProgrammer from STMicroelectronics](https://www.st.com/en/development-tools/stm32cubeprog.html#st-get-software).
  * You will be required to provide and validate an email address to get a download link.
  * On macOS, you may need to run the executable directly: Right-click the `.app` container and select **Show package contents**, then navigate into `Contents/MacOs`. Double-click the file `SetupSTM32CubeProgrammer-X_Y_Z_macos` executable.

## 1. Connect the board in bootloader mode

1. With the board unplugged, press the button **BOOT0** and continue to press it.

   ![The BOOT0 button on Giga R1 WiFi.](img/giga-boot0-button.png)

2. Keep holding the **BOOT0** button as you connect the Giga R1 WiFi to your computer using a USB C cable.

3. When the ON LED is lit, release the **BOOT0** button.

   <!-- If the board ON LED has lit up then release the BOO0 button. Now keep the board powered on with the USB C cable and continue this procedure -->

## 2. Burn the bootloader using STM32CubeProgrammer

1. **[Download the bootloader file](https://github.com/arduino/ArduinoCore-mbed/raw/master/bootloaders/GIGA/bootloader.elf)**[^1].

2. Open STM32CubeProgrammer.

3. Click on the **Open file** tab.

   <!-- This won't upload to Zendesk for some reason: <img src="img/stm32cube-open-file.png" width=800px> -->

   <img src="https://content.arduino.cc/assets/stm32cube-open-file.png" width=800px>

4. Navigate to the [Arduino 15 folder](https://support.arduino.cc/hc/en-us/articles/360018448279-Open-the-Arduino15-folder), then select this file:

   `packages/arduino/hardware/mbed_giga/3.9.9/bootloaders/GIGA/bootloader.elf`

5. If you get a "Warning: File corrupted. Two or more segments defines the same memory zone" message, ignore it.

6. Set the programmer selection (default: ST-LINK) to **USB**.

   <img src="img/stm32cube-usb-mode.png" width=800px>

7. For the **Port** selection, select your board. To refresh the list, click the update button.

   <img src="img/stm32cube-port-selection.png" width=800px>

8. Click on **Connect** button. The connection status should change from "Not connected" to "Connected".

   <img src="img/stm32cube-connect.png" width=800px>

9. Click on the **Download** button. If you get another warning message, close it by selecting OK.

   > **Note:** Click on the left part of the button where it says "Download" (not the arrow, which opens a context menu)

   <img src="img/stm32cube-download.png" width=800px>

10. The message "File download complete" will appear as a pop-up notification when the download is complete.

11. Disconnect the board from the USB-C cable and connect it again.

[^1]: If you've installed the **Arduino Mbed OS Giga Boards** package, you can also find it inside your [Arduino15 folder](https://support.arduino.cc/hc/en-us/articles/360018448279-Open-the-Arduino15-folder). The path is `Arduino15/packages/arduino/hardware/mbed_giga/3.9.12/bootloaders/GIGA/bootloader.elf`.
