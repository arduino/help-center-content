---
title: "About LoRa and LoRaWAN"
id: 4402394268562
---

In this article:

<!-- TOC -->

- [What is LoRa and LoRaWAN?](#what-is-lora-and-lorawan)
- [Suitable use cases](#suitable-use-cases)
- [Arduino devices with LoRa connectivity](#arduino-devices-with-lora-connectivity)
- [Further reading](#further-reading)

<!-- /TOC -->

---

## What is LoRa and LoRaWAN?

- **LoRa<sup>®</sup>** is a radio modulation technique for the physical layer that can be used for long-range, low-power communication.
- **LoRaWAN<sup>®</sup>** is a communication protocol and network architecture that functions on LoRa.

LoRa and LoRaWAN are particularly useful for environments with limited connectivity and long distances between the main microcontroller and the components linked to it.

---

## Suitable use cases

LoRa and LoRaWAN are suitable for:

- **Long range:** Up to 3 miles (4.8 km) in urban areas and up to 10 miles (16 km) or more in rural areas with line of sight.
. **Low power:** LoRa transceivers can run on small, inexpensive batteries for several years.
- **Low cost:** Lightweight protocols reduce complexity in hardware design and lower device costs. Its range and network topology reduce expensive infrastructure requirements, and the use of license-free or licensed bands reduce network costs.
- **Coverage anywhere:** Use exiting open-source networks or set up your own gateways.
- **Large-scale deployments:** A gateway can support thousands of nodes, depending on the uplink frequency.

Lora and LoRaWAN are generally **not** suitable for:

- **High-bandwidth applications:** The bandwidth is limited both by data rate (up to 27 kbit/s) and the network duty cycle[^1].
- **Real-time applications:** Any application that is sensitive to latency

[^1]: <https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/>

**To learn more, see [The Arduino Guide to LoRa® and LoRaWAN®](https://docs.arduino.cc/learn/communication/lorawan-101).**

---

## Arduino devices with LoRa connectivity

See [Arduino devices with LoRaWAN® connectivity](https://support.arduino.cc/hc/en-us/articles/4403398854418-Arduino-devices-with-LoRaWAN-connectivity).

---

## Further reading

- [LoRaWAN® (The Things Network)](https://www.thethingsnetwork.org/docs/lorawan/)
