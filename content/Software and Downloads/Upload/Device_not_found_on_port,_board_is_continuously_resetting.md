---
title: "Device not found on ports and the board is continuously resetting"
---

If your board is continuously resetting and the ports are not found in Arduino IDE, please do the following checks before contacting Arduino Technical Support.

1. It is a common mistake to think that the protective foam that comes with the box is not conductive and therefore it can stay attached to the pins as the board is functioning. The foam is slightly conductive and can cause malfunctions and unexpected behavior when kept attached to the pins. The foam needs to be slightly conductive to protect the board from ESD during shipping, but it needs to be removed before the board gets powered on.

2. If the protective foam has been removed, then check that the latest version of the core has been installed correctly for your board: To do this simply go to Arduino > Tools > Board > Boards Manager. In the pop-up window search for the name and model of your board (for MKR boards the core is **Arduino SAMD Boards** ). Once located then simply click 'Install' or 'Update' accordingly.

3. Try to set the board in _Bootloader_ mode before uploading a sketch. To activate _Bootloader_ mode simply double tap the RESET button. The built-in LED 'L' on the board will fade in and out. Then try to upload a sketch from the 'examples' folder in Arduino IDE ('Blink' is the most common sketch used for testing). Check if the sketch was uploaded correctly and the L LED is blinking as expected.

If you tried the above three steps and the problem persists, please contact [Arduino Technical Support](https://store.arduino.cc/store-support).
