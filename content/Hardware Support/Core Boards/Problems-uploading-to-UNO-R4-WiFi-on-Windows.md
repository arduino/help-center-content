---
title: Problems uploading to UNO R4 WiFi on Windows
id: 9398559565340
---

When uploading sketches to **Arduino UNO R4 WiFi** using Arduino development tools on Windows, you may encounter these errors:

* **Arduino IDE 2 / Arduino CLI:** `No device found on <COM port>`, `Failed uploading: uploading error: exit status 1`
* **Web Editor:** `Executing command: exit status 1`, `No device found on <COM port>`
* **Arduino IoT Cloud (Setup Device):** `We were not able to configure your device`, `Executing command: exit status 1`

The issue is caused by how the board is reset and put into bootloader mode using the OS bindings of the hardware. We are actively working on a solution. Please see **[this forum thread](https://forum.arduino.cc/t/device-not-showing-in-com-port/1142476)** for updates.

These are two options for using your UNO R4 WiFi in the meantime:

* **Use the "Legacy IDE":** In IDE 1.8.19 and earlier the serial port touch reset was handled using Java, and there are many reports of successfully uploading sketches to UNO R4 WiFi using this version. **[Click here to download IDE 1.8.19](https://downloads.arduino.cc/arduino-1.8.19-windows.exe)**.
* **Use a Mac or Linux computer:** This issue is only known to affect Windows users. If you have access to a macOS or Linux computer, you can use it to upload your sketches.

We understand that these options will not suit everyone, and ask you to please bear with us as we strive to get a working solution into everyone's hands.
