---
title: Reset the Arduino bootloader on the Nano ESP32
id: 9810414060188
---

Learn how to reset the default Arduino bootloader on the Nano ESP32.

These are some reasons you may want to reset the bootloader:

* Update the Arduino bootloader already on the board. This can resolve issues with Nano ESP32 being misidentified as other ESP32 boards.
* Restore the ability to upload regular Arduino sketches to a Nano ESP32 that has been flashed with MicroPython or other third-party firmware images.

---

<a id="reset-the-bootloader"></a>

> [!TIP]
> Before you begin, it is recommended to have the latest version of the **Arduino ESP32 Boards** or **esp32** boards package installed using the Board Manager.

Follow these steps:

1. Connect a jumper cable between the **GND** and **B1** pins. The RGB LED will turn on with a green[^colors] color.

   ![The GND and B1 pins](img/nano-esp32-gnd-b1.png)

2. While the **GND** and **B1** pins are shorted, press the white **RST** button on the top of the board to reset the board to **firmware download mode**.

3. Remove the jumper cable. The RGB LED should stay on, in a purple[^colors] color.

4. Open Arduino IDE.

5. Go to **Tools > Port** and select the board (it may be identified as an arbitrary ESP32 board).

6. Go to **Tools > Board** and select **Arduino ESP32 Boards > Arduino Nano ESP32** (or **esp32 > Arduino Nano ESP32** if you're using the full esp32 package).

7. Open the **Tools > Programmer** menu.

8. Click on the **Esptool** option to select it.

9. Select **Tools > Burn Bootloader** to erase the flash memory.

   > [!WARNING]
   > Any data saved by sketches or MicroPython will be lost. Optionally, you can try skipping this step to preserve saved data.
   >
   > If you still experience issues with the upload process, or if the board is still not recognized, try repeating the procedure with this step included.

   The process is complete when you see these lines:

   ```
   Chip erase completed successfully in 2.7s
   Hard resetting via RTS pin...
   ```

10. Select **Sketch > Upload Using Programmer** to begin uploading the firmware.

    The process is complete when you see these lines:

    ```
    Leaving...
    Hard resetting via RTS pin...
    ```

11. Press the **RST** button on top of the board to exit firmware download mode.

## Troubleshooting

### dfu-util: No DFU capable USB device available

If you see this error, it means that the sketch is still being uploading with the regular upload process.

Try this:

* Ensure that the **Esptool** option is selected in the **Tools > Programmer** menu. It needs to be actively selected, even if no other options are available. You will know the Esptool option is selected if a checkmark is displayed next to the name.

  ![The Esptool option in the Tools > Programmer menu. A checkmark indicates that the option is currently selected.](img/esptool-selected.png)

* Ensure you are uploading the sketch by selecting **Sketch > Upload Using Programmer** and not by clicking the regular Upload button.

### If the board is only recognized once or requires a double-press reset to upload a sketch

This issue can be caused by old data on the flash memory interfering with the Arduino bootloader.

To resolve the issue, follow the full [bootloader flashing procedure](#reset-the-bootloader), including the **Tools > Burn Bootloader** step.

> [!WARNING]
> Any data saved by sketches or Micropython in the user partition will be lost.

[^colors]: On some earlier versions of the Nano ESP32, the LED will be blue instead of green, and yellow instead of purple.

<!-- markdownlint-disable-file HC001 -->
