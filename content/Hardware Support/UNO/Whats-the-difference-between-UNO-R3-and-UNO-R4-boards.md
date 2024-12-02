---
title: What's the difference between UNO R3 and UNO R4 boards?
id: 9350551575964
---

Learn about the differences between UNO R3 and the new UNO R4 WiFi and UNO R4 Minima boards.

---

## Select differences

Here are a few changes you may notice if you've previously used the UNO R3:

### USB connector type

UNO R4 boards use a **USB-C** connector.

You'll need a USB-C cable to connect the board to your computer.

### Different behavior on runtime errors

If the board encounters a runtime error while running an uploaded sketch, you need to double-press the reset button to put it into bootloader mode before uploading a new sketch.

Note that unlike some Mbed OS boards, runtime errors do not result in a flashing LED.

### Differnet board package

All previous UNO boards (except the UNO WiFi Rev2) were AVR-based, and used the **Arduino AVR Boards** package.

To use the new UNO R4 boards, install the new **Arduino UNO R4 Boards** package.

---

## Does the UNO R4 replace the UNO R3?

No, the Arduino UNO R3 will still be available and supported for makers who want to work with its 8-bit AVR microcontroller.

---

## Compatibility

### Can I use hardware compatible with the UNO R3 with an UNO R4 board?

UNO R4 boards maintain the same mechanical and electrical compatibility, allowing you to seamlessly use your existing shields and hardware with the new board.

### Can I use my sketch developed for UNO R3 with an UNO R4 board?

Yes, if your sketch was developed using the [Arduino API](https://docs.arduino.cc/language-reference/).

If your sketch uses instructions specific to the AVR architecture, they will have to be changed to ensure compatibility.

### Are libraries for UNO R3 also compatible with the UNO R4 boards?

Libraries that are based on the [Arduino API](https://docs.arduino.cc/language-reference/) will work as is.

Libraries that use AVR-specific instructions are not compatible with the architecture of UNO R4 boards. However, there are libraries that have already been ported as part of our early adopters program.

<!-- markdownlint-disable-file HC001 -->
