---
title: Problems uploading to UNO R4 WiFi on Windows
id: 9398559565340
---

When uploading sketches to **Arduino UNO R4 WiFi** using Arduino development tools on Windows, you may encounter these errors:

* **Arduino IDE 2 / Arduino CLI:** `No device found on <COM port>`, `Failed uploading: uploading error: exit status 1`
* **Web Editor:** `Executing command: exit status 1`, `No device found on <COM port>`
* **Arduino IoT Cloud (Setup Device):** `We were not able to configure your device`, `Executing command: exit status 1`

The issue was caused by how the board is reset and put into bootloader mode using the OS bindings of the hardware. **The root cause and the solution has been found and it is solved in the latest IDE 2 version (v2.1.1)**. You can also follow **[this forum thread](https://forum.arduino.cc/t/device-not-showing-in-com-port/1142476)** for updates.

These are some options for using your UNO R4 WiFi in the meantime:

* **Use IDE 2 v2.1.1 or higher**.
* **Use the "Legacy IDE":** In IDE 1.8.19 and earlier the serial port touch reset was handled using Java, and there are many reports of successfully uploading sketches to UNO R4 WiFi using this version. **[Click here to download IDE 1.8.19](https://downloads.arduino.cc/arduino-1.8.19-windows.exe)**.
* **Use a Mac or Linux computer:** This issue is only known to affect Windows users. If you have access to a macOS or Linux computer, you can use it to upload your sketches.
