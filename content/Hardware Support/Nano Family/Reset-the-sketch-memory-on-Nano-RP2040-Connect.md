---
title: "Reset the sketch memory on Nano RP2040 Connect"
id: 4404168794514
---

If your Nano RP2040 Connect isn't recognized by your computer or fails to power up after a firmware update or sketch upload, performing a factory reset may resolve the issue.

---

## How to Factory Reset your Nano RP2040 Connect

1. To start the reset process, either double-tap the reset button or connect a jumper wire between the **REC** and **GND** pins. This action should open a mass storage folder on your computer.

1. If you used a jumper wire, carefully remove it while the mass storage folder is still open.

1. Download `blink.ino.elf.uf2` file from [here](https://docs.arduino.cc/tutorials/nano-rp2040-connect/rp2040-01-technical-reference#board-not-detected).

1. Drag and drop the `blink.ino.elf.uf2` file into the mass storage folder.

1. If successful, the board’s LED will blink and cycle through red, green, and blue.
