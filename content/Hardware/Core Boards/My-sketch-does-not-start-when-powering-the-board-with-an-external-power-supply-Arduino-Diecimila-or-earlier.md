---
title: "My sketch does not start when powering the board with an external power supply (Arduino Diecimila or earlier)"
id: 360016724100
---

The RX pin is unconnected, the bootloader on the board may be seeing garbage data coming in, meaning that it never times out and starts your sketch.

Try connecting the RX pin to ground with a 10K resistor (or connecting RX directly to the TX pin).
