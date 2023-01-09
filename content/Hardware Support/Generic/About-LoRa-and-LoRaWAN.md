---
title: "About LoRa and LoRaWAN"
id: 4402394268562
---

---

## What is LoRa and LoRaWAN?

* **LoRa<sup>®</sup>** is a radio modulation technique for the physical layer that can be used for long-range, low-power communication.
* **LoRaWAN<sup>®</sup>** is a communication protocol and network architecture that functions on LoRa.

LoRa and LoRaWAN are particularly useful for environments with limited connectivity and long distances between the main microcontroller and the components linked to it.

---

## Suitable use cases

LoRa and LoRaWAN are suitable for:

* **Long range:** Up to 3 miles (4.8 km) in urban areas and up to 10 miles (16 km) or more in rural areas with line of sight.
* **Low power:** LoRa transceivers can run on small, inexpensive batteries for several years.
* **Low cost:** Lightweight protocols reduce complexity in hardware design and lower device costs. Its range and network topology reduce expensive infrastructure requirements, and the use of license-free or licensed bands reduce network costs.
* **Coverage anywhere:** Use exiting open-source networks or set up your own gateways.
* **Large-scale deployments:** A gateway can support thousands of nodes, depending on the uplink frequency.

Lora and LoRaWAN are generally **not** suitable for:

* **High-bandwidth applications:** The bandwidth is limited both by data rate (up to 27 kbit/s) and the network duty cycle[^1].
* **Real-time applications:** Any application that is sensitive to latency

[^1]: https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/

**To learn more, see [The Arduino Guide to LoRa® and LoRaWAN®](https://docs.arduino.cc/learn/communication/lorawan-101).**

---

## Arduino devices with LoRa connectivity

**Boards:**

* [Arduino MKR WAN 1300 (LoRa® connectivity)](https://store.arduino.cc/products/arduino-mkr-wan-1300-lora-connectivity)
* [Arduino MKR WAN 1310](https://store.arduino.cc/products/arduino-mkr-wan-1310)

**Shields and carriers for Portenta boards:**

Note that a compatible Portenta board is required.

* [Portenta Vision Shield - LoRa®](https://store.arduino.cc/products/arduino-portenta-vision-shield-lora%C2%AE) (together with a Portenta H7 board)
* [Portenta Max Carrier](https://store.arduino.cc/products/portenta-max-carrier)

**Gateways:**

* [WisGate Edge PRO](https://store.arduino.cc/products/wisgate-edge-pro)
* [WisGate Edge Lite 2](https://store.arduino.cc/products/wisgate-edge-lite2)

For more information, see [Arduino devices with LoRaWAN® connectivity](https://support.arduino.cc/hc/en-us/articles/4403398854418-Arduino-devices-with-LoRaWAN-connectivity).

---

## Further reading

* [LoRaWAN® (The Things Network)](https://www.thethingsnetwork.org/docs/lorawan/)
* [What are LoRa® and LoRaWAN®? (LoRa Developer Portal)](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/lora-and-lorawan)
