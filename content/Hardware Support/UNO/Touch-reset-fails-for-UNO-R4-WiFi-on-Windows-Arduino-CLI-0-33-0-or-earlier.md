---
title: "Touch reset fails for UNO R4 WiFi on Windows (Arduino CLI 0.33.0 or earlier)"
id: 9398559565340
---

When uploading sketches to **Arduino UNO R4 WiFi** using Arduino development tools on Windows, you may encounter these errors:

* Arduino IDE 2 / Arduino CLI: `No device found on <COM port>`, `Failed uploading: uploading error: exit status 1`
* Web Editor: `Executing command: exit status 1`, `No device found on <COM port>`
* Arduino IoT Cloud (Setup Device): `We were not able to configure your device`, `Executing command: exit status 1`

The underlying issue[^github-issue-renesas] was identified and a patch[^github-pr-cli] was included in Arduino CLI 0.33.1, Arduino IDE 2.1.1, and Arduino Create Agent 1.3.2.

To use your UNO R4 WiFi on Windows, make sure your software is up to date:

* If you are using Arduino IDE 2, press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open the Command Palette and run the `Arduino: Check for Arduino IDE Updates` command, and look for a pop-up notification in the bottom-left corner. Alternatively, <a class="link-download" href="https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_Windows_64bit.exe">download and install the latest version</a>.
* The Create Agent updates to the latest version automatically. <a class="link-up-right" href="https://support.arduino.cc/hc/en-us/articles/4407002993426-Check-your-Arduino-Create-Agent-version">Check your Arduino Create Agent version</a> to verify that you're running 1.3.2 or later. If it's not updating, try restarting the application, or <a class="link-up-right" href="https://support.arduino.cc/hc/en-us/articles/360014869820-Install-the-Arduino-Create-Agent">manually installing the latest version</a>.
* If you are using Arduino CLI, run `arduino-cli upgrade`.

If you're still see errors when uploading, check **[Errors when uploading a sketch](https://support.arduino.cc/hc/en-us/articles/4403365313810-Errors-when-uploading-a-sketch)**.

[^github-issue-renesas]: [Upload broken for the Uno R4 WiFi on Windows #10](https://github.com/arduino/ArduinoCore-renesas/issues/10)

[^github-pr-cli]: [Fix 1200-bps touch DTR handling (Windows) #2234](https://github.com/arduino/arduino-cli/pull/2234)

[^github-release]: <https://github.com/arduino/arduino-cli/releases/tag/0.33.1>

[^github-release]: <https://github.com/arduino/arduino-create-agent/releases/tag/1.3.2>
