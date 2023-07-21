---
title: 'If you get an error when compiling for an ESP32 board with esp board package 2.0.10 on Windows or Linux'
---

Version 2.0.10 of the **esp32 board package** introduced a bug[^github-issue][^github-pr] that would cause compilation to fail for some Windows and Linux users. On Windows, the error output includes an `Access is denied` message.

[^github-issue]: [Core Compilation failure on Linux in v2.0.10 #8424](https://github.com/espressif/arduino-esp32/issues/8424)
[^github-pr]: [2.0.10 escaping fix #8433](https://github.com/espressif/arduino-esp32/pull/8433)

The causes for the error are different depending on which system you're using:

* [Windows](#windows)
* [Linux](#linux)

---

<a id="windows"></a>

## If you're using Windows

On Windows, the error output may look like this:

```
Access is denied.
cmd /c type nul > "C:\\Users\\Hannes" "Siebeneicher\\AppData\\Local\\Temp\\arduino\\sketches\\2B717D34C8CC4EA7678C7773DD033E96/file_opts"
exit status 1
Compilation error: exit status 1
```

The issue is expected to be fixed in the next release of the esp32 board package.

Meanwhile, you can try this solution:

* Downgrade to **esp32 2.0.9**:
  * To make 2.0.9 and earlier versions available in the board manager, you need to add `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json` as an ["Additional boards manager URL" in Preferences](https://support.arduino.cc/hc/en-us/articles/360016466340-Add-third-party-platforms-to-the-Boards-Manager-in-Arduino-IDE).
  * You cannot use the Nano ESP32 with this version.

---

<a id="linux"></a>

## If you're using Linux

On Linux, the error output may look like this:

```
Compiling core...
bash -c "echo '-DARDUINO_CORE_BUILD' > /tmp/arduino_build_925905/file_opts"
>: -c: line 1: unexpected EOF while looking for matching `''
>: -c: line 2: syntax error: unexpected end of file
exit status 2
Error compiling for board Adafruit ESP32 Feather.
```

The issue is expected to be fixed in the next release of the esp32 board package.

Meanwhile, you can try these solutions:

* Use Arduino IDE 2.1.1 or later.
* Use Arduino 1.8.19 downloaded as `.zip` download from the official <a class="link-download" href="https://www.arduino.cc/en/software#legacy-ide-18x">Downloads page</a>, instead of a package manager like `apt`.
* Downgrade to **esp32 2.0.9**:
  * To make 2.0.9 and earlier versions available in the board manager, you need to add `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json` as an ["Additional boards manager URL" in Preferences](https://support.arduino.cc/hc/en-us/articles/360016466340-Add-third-party-platforms-to-the-Boards-Manager-in-Arduino-IDE).
  * You cannot use the Nano ESP32 with this version.
