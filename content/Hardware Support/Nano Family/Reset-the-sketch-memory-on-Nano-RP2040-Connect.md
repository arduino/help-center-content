---
title: "Reset the firmware on Nano RP2040 Connect"
id: 4404168794514
---

If your Nano RP2040 Connect isn't recognized by your computer or fails to power up after a firmware update or sketch upload, performing a firmware reset may resolve the issue. Follow the steps below to reset the firmware: 

1. Connect the board to your computer via USB.

1. Double-tap the reset button to enter bootloader mode (Alternatively, connect a jumper wire between the **REC** and **GND** pins). This will open RP2040's mass storage folder on your computer.

1. If you used a jumper wire, remove it while the mass storage folder is still open.

1. Download the <a class="link-download" href="https://content.arduino.cc/assets/Blink.ino.elf.uf2">`blink.ino.elf.uf2` file</a>.

1. Drag and drop the `blink.ino.elf.uf2` file into RP2040's mass storage folder.

1. The board’s built-in LED should now blink and cycle through red, green, and blue, confirming that the reset process was successful.
