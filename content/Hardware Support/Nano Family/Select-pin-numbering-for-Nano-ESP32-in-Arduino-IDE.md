---
title: Select pin numbering for Nano ESP32 in Arduino IDE
id: 10483225565980
---

By default, Nano ESP32 uses pin mapping consistent with the **Nano form factor**, and is generally compatible with projects made for other Nano boards. Since this pin mapping is different than the one used for common ESP32 boards, some libraries made for ESP32 boards may not function correctly. In this case, you may want to use the standard ESP32 pin numbering.

You can select pin numbering in **Tools > Pin Numbering** option:

* **By Arduino pin (default):** Standard for Nano boards by Arduino.
* **By GPIO number (legacy):** Standard for most ESP32 boards.

Regardless of which pin numbering you use, you can use the pin labels to refer to the pins. The following lines of codes are equivalent, but only the one using `D0` to refer to the pin works with both pin numbering options:

* `pinMode(2, OUTPUT)` (By Arduino pin)
* `pinMode(5, OUTPUT)` (By GPIO number)
* `pinMode(D0, OUTPUT)` (By Arduino pin **or** By GPIO number)

For a complete overview, see the table below.

| Pin       | Arduino pin | GPIO number |
|:----------|:------------|:------------|
| D0        |           0 |          44 |
| D1        |           1 |          43 |
| D2        |           2 |           5 |
| D3        |           3 |           6 |
| D4        |           4 |           7 |
| D5        |           5 |           8 |
| D6        |           6 |           9 |
| D7        |           7 |          10 |
| D8        |           8 |          17 |
| D9        |           9 |          18 |
| D10       |          10 |          21 |
| D11       |          11 |          38 |
| D12       |          12 |          47 |
| D13       |          13 |          48 |
| LED_RED   |          14 |          46 |
| LED_GREEN |          15 |           0 |
| LED_BLUE  |          16 |          45 |
| A0        |          17 |           1 |
| A1        |          18 |           2 |
| A2        |          19 |           3 |
| A3        |          20 |           4 |
| A4        |          21 |          11 |
| A5        |          22 |          12 |
| A6        |          23 |          13 |
| A7        |          24 |          14 |

## Further reading

* [Nano ESP32 Selecting Pin Configuration](https://docs.arduino.cc/tutorials/nano-esp32/pin-setup)
