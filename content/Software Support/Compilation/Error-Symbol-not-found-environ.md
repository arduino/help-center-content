---
title: "Error: Symbol not found environ"
id: 360021135074
---

Arduino AVR Boards 1.6.12 and newer require macOS 10.8 Mountain Lion or newer. If you want to use an older version of macOS, you will need to roll back to the last compatible version of Arduino AVR Boards. Follow these steps:

1. Open **Tools > Board > Boards Manager**
2. Wait for the downloads to finish
3. Click on “Arduino AVR Boards”
4. Select "1.6.11" from the "select version" drop down menu
5. Click "Install".
6. Wait for installation to finish.
7. Click "Close".

Due to a bug, this workaround doesn't work with Arduino IDE 1.8.6, but it will work with any other version of the Arduino IDE.

If you have update notifications enabled, you will need to refrain from updating to a newer version of Arduino AVR Boards.
