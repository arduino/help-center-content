---
title: "Error: Symbol not found environ"
---

Arduino AVR Boards 1.6.12 and newer require macOS 10.8 Mountain Lion or newer. If you want to use an older version of macOS, you will need to roll back to the last compatible version of Arduino AVR Boards:

* `Tools > Board > Boards Manager`
* Wait for the downloads to finish
* Click on “Arduino AVR Boards”
* Select "1.6.11" from the "select version" drop down menu
* Click "Install".
* Wait for installation to finish.
* Click "Close".

Due to a bug, this workaround doesn't work with Arduino IDE 1.8.6, but it will work with any other version of the Arduino IDE.

If you have update notifications enabled (`File > Preferences > Check for updates on startup`), you will need to refrain from updating to a newer version of Arduino AVR Boards.
