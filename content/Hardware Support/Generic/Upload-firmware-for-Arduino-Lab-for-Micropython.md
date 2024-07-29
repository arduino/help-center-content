---
title: Upload firmware for Arduino Lab for Micropython
---

These are some reasons you may want to upload firmware for Arduino Lab for Micropython:

- Enable MicroPython on boards that initially come with the Arduino bootloader.

- Restore MicroPython firmware after an Arduino sketch has been flashed.

- Update the MicroPython firmware to a newer version.

## Supported Boards

- Arduino GIGA R1 WiFi
- Arduino Nano 33 BLE Sense
- Arduino Nano ESP32
- Arduino Nano RP2040 Connect
- Arduino Nicla Vision
- Arduino Portenta C33
- Arduino Portenta H7
- Arduino Primo

## Instructions

1. Download the [MicroPython Installer](https://github.com/arduino/lab-micropython-installer/releases/latest) for your operating system:

    - **Windows:** Download the `.exe` file labeled 'Windows' and run the installer.

    - **macOS:** Download the `.zip` file labeled 'macOS', extract the zip file, and move the application to your Applications folder.

    - **Linux:** Download the `.deb` file labeled 'Linux' and install it using your package manager.
        - `sudo dpkg -i [file name]`.

    - **NuGet Package:** Download the `.nupkg` file if you are using NuGet for package management.

1. Launch the Firmware Installer tool.

1. Let the installer detect your board

    ![detect board](img/Detect_boards.png)

1. Press the 'Install MicroPython' button.

1. Wait for Installation. After a few seconds, your board will be ready to go!

If the installer doesn't automatically find the MicroPython firmware, you can [download it manually](https://micropython.org/download/?vendor=Arduino).
