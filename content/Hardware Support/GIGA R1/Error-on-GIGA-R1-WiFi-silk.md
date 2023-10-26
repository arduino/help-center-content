---
title: "Error on GIGA R1 WiFi silk"
id: 
---

An error has been identified on the silk (the printed text and markings) of some Arduino GIGA R1 WiFi boards. Specifically, there are two mislabeled pins at the bottom of the board. To clarify:

* The `5V` pin is located to the right of the `GND` pin and directly below the `74` pin.
* The `3.3V` pin is located to the right of the `VIN` pin.

![Corrected Arduino GIGA R1 WiFi markings. Highlighted are the 5V pin (right of GND and below 74) and the 3.3V pin (right of VIN).](img/GIGA-R1-Silk-warning.png)
