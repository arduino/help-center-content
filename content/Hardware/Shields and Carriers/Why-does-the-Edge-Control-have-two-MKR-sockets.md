---
title: "Why does the Edge Control have two MKR sockets?"
---

The Arduino Edge Control is a great choice to control sensors in outdoor scenarios with no mains power available. The Nordic nRF52840 microcontroller features built-in Bluetooth<sup>®</sup> support, but on its own the board doesn't support additional wireless connectivity.

For this reason, the Edge control comes with a dual MKR socket that enables connecting two [Arduino MKR boards](https://store.arduino.cc/arduino/mkr-family) as "networking co-processors". This allows extending the network capabilities with LoRa<sup>®</sup>, GSM, NB-IoT and Wi-Fi.

![Arduino Edge Control with Dual MKR Socket](img/edge_control_2_0.7.png)

For example, it is possible to connect a [MKR WiFi 1010](https://store.arduino.cc/arduino-mkr-wifi-1010) to establish a WiFi connection with the IoT Cloud and, at the same time, connect an [MKR WAN 1300](https://store.arduino.cc/arduino-mkr-wifi-1010) to enable LoRa/LoRaWAN connectivity for your project.

To achieve this, the MKRs need to be loaded with their own sketch to manage connectivity and I/O data. Also, a form of communication between the Edge Control and the MKR needs to be implemented to send and receive the data. This can be done via UARTs and I2C, or with any other application protocol that relies on UART/I2C.
