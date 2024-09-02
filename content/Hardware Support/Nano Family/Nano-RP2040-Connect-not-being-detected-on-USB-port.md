---
title: "Nano RP2040 Connect not being detected on USB port"
id: 4404168794514
---

If the Nano RP2040 Connect is not recognized when connected to your computer, or fails to power up after a firmware or sketch upload, the steps outlined below can be taken to solve the issue.

---

## Make sure board core and Cloud Agent is installed

If you're using the Desktop IDE, the core (Arduino Mbed OS RP2040 Boards) needs to be installed via the Board Manager. To install the core, follow the steps [here](https://docs.arduino.cc/software/ide-v1/tutorials/getting-started/cores/arduino-mbed_nano). We recommend installing the latest version of the core. For the Cloud Editor, the Arduino Cloud Agent has to be installed for the board to be recognized. [Install the Arduino Cloud Agent here](https://create.arduino.cc/getting-started/plugin/welcome).

## Try the bootloader mode

Double-tap the reset button to put the board in bootloader mode. While it is in bootloader mode, upload an example sketch from the IDE (like [Blink](https://www.arduino.cc/en/Tutorial/BuiltInExamples/Blink)), then press the reset button once to exit this mode once the upload is successful.

## Try a hard Reset

A hard reset will force the onboard processor to restart the device. Connect a jumper wire between the **REC** and **GND** pins, then follow the steps (1-5) outlined [here](https://docs.arduino.cc/tutorials/nano-rp2040-connect/rp2040-01-technical-reference#board-not-detected) to complete the process.

## Factory Reset

Factory reset should be carried out if all the previous corrective steps above fail to get the board to work properly or if the UF2 image got corrupted after firmware or sketch upload. To start this process, double-tap the reset button or connect a jumper wire between the **REC** and **GND** pins, this will open a mass storage folder. Remove the jumper wire while the mass storage folder is still open, then download `blink.ino.elf.uf2` file from [here](https://docs.arduino.cc/tutorials/nano-rp2040-connect/rp2040-01-technical-reference#board-not-detected). Drag the `blink.ino.elf.uf2` file into the mass storage folder, if successful, the board will be flashed with a program that blinks the built-in LED, and shifts between the red, green and blue pixels.
