---
title: Nano ESP32 is not compatible with ESP Rainmaker library
id: 10274941782300
---

The **Arduino ESP32 Boards** and **esp32** board packages include example sketches, such as `RMakerCustom`, for the [ESP RainMaker solution](https://github.com/espressif/esp-rainmaker). However, the library is currently not compatible with the **Arduino Nano ESP32** board, and the examples may not upload or run correctly. The reason is that the library expects a specific partition map, different from the one used on Arduino Nano ESP32.
