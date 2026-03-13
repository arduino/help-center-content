---
title: About Qwiic
---
In this article:

- [Technical Specifications](#technical-specifications)
- [Pinout](#pinout)
- [Daisy Chanining](£daisy-chaining)
- [Voltage Compatibility](#voltage-compatibility)
- [Compatible Arduino products](#compatible-arduino-products)
- [Modulino Nodes and Qwiic compatibility](#modulino-nodes-and-qwiic-compatibility)

Qwiic is a system of breakout modules and development boards that use a specific connector for easy I2C communication.

Wiring I2C devices can be complicated, but Qwiic simplifies this with pre-made cables, allowing you to connect additional sensors and actuators without soldering. You can chain devices together using a single cable, enabling them to work right away.

## Technical Specification{#technical-specifications}

Qwiic uses a **JST SH 4-pin 1.0mm pitch** connector. This small, polarized connector ensures that you cannot plug it in backwards, making it beginner-friendly.

## Pinout{#pinout}

Each Qwiic cable consists of four wires with standard color coding:

| Wire Color | Signal | Description |
|:---:|:---:|---|
| **Black** | GND | Ground |
| **Red** | 3.3V | Power Supply |
| **Blue** | SDA | I2C Data |
| **Yellow** | SCL | I2C Clock |

## Daisy Chaining{#daisy-chaining}

One of the most powerful features of Qwiic is the ability to "daisy chain" multiple sensors. If a Qwiic module has two connectors, you can connect the first to your Arduino board, and the second to another Qwiic module.

- **Unique I2C Addresses:** Each module in the chain must have a unique I2C address. If you connect two identical sensors (e.g., two temperature sensors with the same I2C address), they will conflict.
- **Power Limits:** All modules in the chain are powered by the Arduino's 3.3V regulator. Be mindful of the total current draw of your chain to avoid overloading the regulator.

## Voltage Compatibility{#voltage-compatibility}

> [!CAUTION]
> **Qwiic is a 3.3V-only system.**
> Most Qwiic-enabled boards and sensors are not 5V tolerant. Connecting a 5V source to a Qwiic connector or using it with a 5V I2C bus without proper level shifting will likely damage your hardware.

## Compatible Arduino products{#compatible-arduino-products}

- [Alvik](https://docs.arduino.cc/tutorials/alvik/user-manual/#qwiic-connectors)
- [Modulino Nodes (included in the Plug and Make Kit)](https://docs.arduino.cc/hardware/plug-and-make-kit/#features:~:text=Qwiic%20Connectors,building%20complex%20circuits.)
- [Nano Connector Carrier](https://docs.arduino.cc/tutorials/nano-connector-carrier/getting-started-nano-connector-carrier/#qwiic-connector)
- [Nano R4](https://docs.arduino.cc/tutorials/nano-r4/user-manual/#qwiic-connector)
- [UNO R4 WiFi](https://docs.arduino.cc/tutorials/uno-r4-wifi/qwiic/#qwiic)
- [UNO Q](https://docs.arduino.cc/tutorials/uno-q/user-manual/#qwiic)

## Modulino Nodes and Qwiic compatibility{#modulino-nodes-and-qwiic-compatibility}

Modulino nodes are compatible with the entire Qwiic ecosystem, both mechanically and electrically. They can be connected in series with other Qwiic components. This setup uses I2C communication, making it simple to add multiple devices without complex wiring.
