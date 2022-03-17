---
title: "Power the Portenta H7"
---

Learn about different ways of powering the Portenta H7.

## Using a USB cable

The onboard USB-C port can be used to power the board in different configurations:

* Connect the board to a USB port on your computer.
* Connect the board to a USB wall charger.
* Connect the board to a power bank.

## Using a battery

Portenta H7 can be powered with a Li-Po
battery connected to the J4 connector. If the battery is connected when the board is powered via USB or VIN, the battery will be recharged.

To learn more, see [Connect a battery to Portenta H7](https://support.arduino.cc/hc/en-us/articles/4405015055762-Connect-a-battery-to-Portenta-H7).

## Using the VIN pins

Portenta H7 can be powered through the VIN pins in two ways:

* To use the **top pin headers**, connect the **+** of your power supply to **VIN**, and **-** to **GND**. For more information, see the pinout in [Arduino Docs](https://docs.arduino.cc/hardware/portenta-h7).
* Alternatively, you can use the VIN pins in the **J1 high-density connector**. A total of four VIN pins are available in the connector. For best performance, supply power to all of them, as each pin can only carry 300 mA. For more information, see the datasheet in [Arduino Docs](https://docs.arduino.cc/hardware/portenta-h7).

## Further reading

* [Portenta H7 (Arduino Docs)](https://docs.arduino.cc/hardware/portenta-h7)
