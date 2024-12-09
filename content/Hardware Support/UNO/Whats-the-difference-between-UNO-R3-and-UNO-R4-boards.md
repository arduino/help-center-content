---
title: What's the difference between UNO R3 and UNO R4 boards?
id: 9350551575964
---

Learn about the differences between the Arduino UNO R3, UNO R4 Minima and UNO R4 WiFi boards.

In this article:

- Board overview (#overview)
- Compatibility (#compatibility)
- Technical specifications comparison (#tech-specs)

---

## Board overview {#overview}

The UNO R4 boards maintain the same form factor, pinout and 5 V operating voltage as the UNO R3. Here's a quick overview:

- **UNO Rev3**: A classic board with an 8-bit architecture, offering straightforward functionality and broad library compatibility.

- **UNO R4 Minima**: Focused on simplicity, it offers essential functions ideal for prototyping and basic learning. It includes advanced features such as an SWD port for program debugging, along with increased processing power and additional memory.

- **UNO R4 WiFi**: Equipped with WiFi and Bluetooth connectivity, it is ideal for IoT and wireless projects. The Qwiic I2C Connector and 12x8 Red LED Matrix enable project creation without soldering, manual wiring, or using a breadboard.

### Does the UNO R4 replace the UNO R3?

No, the Arduino UNO R3 will still be available and supported for makers who want to work with its 8-bit AVR microcontroller.

### Selected differences

#### Different behavior on runtime errors

If the board encounters a runtime error while running an uploaded sketch, you need to double-press the reset button to put it into bootloader mode before uploading a new sketch.

Note that unlike some Mbed OS boards, runtime errors do not result in a flashing LED.

The UNO R4 WiFi board features an error-catching mechanism that detects operations that caused a runtime crash, as opposed to the usual silent behavior of a crashed board.

#### Different board package

Previous UNO boards (except the UNO WiFi Rev2) were AVR-based, and used the **Arduino AVR Boards** package. For UNO R4, install the **Arduino UNO R4 Boards** package.

## Compatibility {#compatibility}

### Can I use hardware compatible with the UNO R3 with an UNO R4 board?

UNO R4 boards maintain the same mechanical and electrical compatibility, allowing you to seamlessly use your existing shields and hardware with the new board.

> [!NOTE]
> Third-party UNO shields are compatible with R4 in terms of voltage and pinout. However,  software compatibility might require some porting work, so it should be checked with shield manufacturers before purchase.

### Can I use my sketch developed for UNO R3 with an UNO R4 board?

Yes, if your sketch was developed using the [Arduino API](https://docs.arduino.cc/language-reference/). If your sketch uses instructions specific to the AVR architecture, they will have to be changed to ensure compatibility.

### Are libraries for UNO R3 also compatible with the UNO R4 boards?

- Libraries that are based on the [Arduino API](https://docs.arduino.cc/language-reference/) will work as is.

- Libraries that use AVR-specific instructions are not compatible with the architecture of UNO R4 boards. However, some of these libraries have already been ported. For more details, refer to the [UNO R4 Library Compatibility repository](https://github.com/arduino/uno-r4-library-compatibility).

## Technical specifications comparison {#tech-specs}

| Feature                  |          Arduino UNO R3          |     Arduino UNO R4 Minima     |      Arduino UNO R4 WiFi      |
|--------------------------|:--------------------------------:|:-----------------------------:|:-----------------------------:|
| Microcontroller          |            ATmega328P            | Renesas RA4M1 (Arm Cortex-M4) | Renesas RA4M1 (Arm Cortex-M4) |
| Wi-Fi/Bluetooth LE       |                No                |               No              |       ESP32-S3-MINI-1-N8      |
| USB Connector            |               USB-B              |             USB-C             |             USB-C             |
| Mouse/Keyboard Emulation |                No                |              Yes              |              Yes              |
| Real-Time Clock          |                No                |              Yes              |              Yes              |
| Built-in LED Pin         |                13                |               No              |               No              |
| Digital I/O Pins         |                14                |               14              |               14              |
| Analog input pins        |                 6                |               6               |               6               |
| PWM pins                 |                 6                |               6               |               6               |
| DAC                      |                No                |           1 (12-bit)          |           1 (12-bit)          |
| External interrupts      |                No                |              2,3              |              2,3              |
| UART                     |                Yes               |              Yes              |              Yes              |
| I2C                      |                Yes               |              Yes              |              Yes              |
| SPI                      |                Yes               |              Yes              |              Yes              |
| CAN                      |                No                |              Yes              |              Yes              |
| Qwiic connector          |                No                |               No              |              Yes              |
| OFF pin                  |                No                |               No              |              Yes              |
| VRTC pin                 |                No                |               No              |              Yes              |
| LED Matrix               |                No                |               No              |       12x8 (96 red LEDs)      |
| Operating voltage        |                5V                |               5V              |               5V              |
| Input voltage            |               7-12V              |             6-24V             |             6-24V             |
| DC Current per I/O Pin   |               20mA               |              8mA              |              8mA              |
| Clock speed              |               16MHz              |             48MHz             |             48MHz             |
| Memory                   | 2kB SRAM, 32kB FLASH, 1kB EEPROM |     256kB Flash, 32kB RAM     |     256kB Flash, 32kB RAM     |
| MCU Resolution           |               8-bit              |             32-bit            |             32-bit            |

<!-- markdownlint-disable-file HC001 -->