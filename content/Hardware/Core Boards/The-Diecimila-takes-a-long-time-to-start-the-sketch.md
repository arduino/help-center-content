---
title: "The Diecimila takes a long time to start the sketch"
---

Some of the Arduino Diecimila boards were accidently burned with the Arduino NG bootloader. It should work fine, but has a longer delay (6-8 seconds) when the board is reset because the NG doesn't have an automatic reset, so uploads need to be timed manually. If your Diecimila has the NG bootloader on it, you may need to physically press the reset button on the board before uploading your sketch.

You can figure out if your Diecimila has the NG bootloader if the Built-in LED (also on pin 13) will blink three times when the board is reset. On the other hand, a standard Diecimila's LED blinks once on reset. You can also burn the correct bootloader onto your Diecimila, see the [bootloader page](https://www.arduino.cc/en/Hacking/Bootloader) for details.
