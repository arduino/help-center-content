---
title: "Reset the sketch memory on Nano RP2040 Connect"
id: 4404168794514
---

If the Nano RP2040 Connect is not recognized when connected to your computer, or fails to power up after a firmware or sketch upload, a factory reset might solve the issue.

---

## How to Factory Reset your Nano RP2040 Connect

1. Factory reset should be carried out if all the previous corrective steps above fail to get the board to work properly or if the UF2 image got corrupted after firmware or sketch upload.

1. To start this process, double-tap the reset button or connect a jumper wire between the **REC** and **GND pins**, this will open a mass storage folder.

1. Remove the jumper wire while the mass storage folder is still open.

1. Download blink.ino.elf.uf2 file from [here](https://docs.arduino.cc/tutorials/nano-rp2040-connect/rp2040-01-technical-reference#board-not-detected).

1. Drag the blink.ino.elf.uf2 file into the mass storage folder.

1. If successful, the board will be flashed with a program that blinks the built-in LED, and shifts between the red, green, and blue pixels.