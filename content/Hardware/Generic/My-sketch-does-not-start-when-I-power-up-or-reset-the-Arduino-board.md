---
title: "My sketch does not start when I power up or reset the Arduino board"
---

this is most likely happening because you are sending serial data to the board when it firsts turns on.

During the first few seconds, the bootloader (a program pre-burned onto the chip on the board) listens for the computer to send it a new sketch to be uploaded to the board. After a few seconds without communication, the bootloader will time out and start the sketch that's already on the board.

If you continue to send data to the bootloader, it will never time out and your sketch will never start. You'll either need to find a way to stop serial data from arriving for the first few seconds when the board powers (e.g. by enabling the chip that sends the data from within your setup() function) or burn your sketch onto the board with an [external programmer](https://www.arduino.cc/en/Hacking/Programmer), replacing the bootloader.
