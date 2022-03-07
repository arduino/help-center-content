---
title: "How to set the Edge Control to bootloader mode"
---

Like many other Arduino boards, the Arduino Edge Control can be set to bootloader mode by double tapping the reset button. This is often used to re-enable the COM port when it's not showing in the Arduino IDE, allowing us to load a new sketch onto the board.

If the double tap reset isn't working, make sure that a CR2032 battery is properly inserted in the battery holder. Otherwise, the reset button will not work as expected.

Also, note that on the Edge Control board the LED will not fade in and out when in bootloader mode. Your PC will configure a new port for the Edge Control after the double tap reset, which will show up in the IDE under _Tools > Port_.
