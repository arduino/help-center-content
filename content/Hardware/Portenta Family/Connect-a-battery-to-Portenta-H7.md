---
title: "Connect a battery to Portenta H7"
---

The Portenta H7 is compatible with a single cell 3.7 V Li-Po or Li-Ion battery (700 mAh minimum) which connects to a 3-pin BM03B-ACHSS-GAN-TF connector.

Usually, these batteries do not come with the right mating connector to fit the Portenta H7. Therefore, the right connector type needs to be acquired separately and installed manually onto the battery end.

The easiest way to attach the battery to the connector is using pre-crimped wires. Simply 'click in' each pre-crimped wire in the connector. Then, connect the other end of the pre-crimped wires to the corresponding polarity on the battery as explained later in this article. Use your preferred connection method (soldering or wire connector) to join the pre-crimped wires to the battery. Specific details for the battery connector and crimped wires are listed below:

## Compatible parts

### Battery Connector

* Manufacturer: JST
* Part Number: ACHR-03V-S
* Description: CONN RCPT ACH W-B 3POS 1.2MM

### Pre-Crimped Wires

* Manufacturer: JST
* Part Number: ASACHSACH28Wxxx
* Description: JUMPER SACH-003G-P0.2

## Connecting the battery

The battery connector has three connection pins whereas Li-Po and Li-Ion batteries usually only come with two wires. This is because some batteries come with a third connection that is used as a thermistor or temperature sensor.

The images below show where each wire from the battery must go on Portenta H7. As we can see, the middle wire (THM) is for the thermistor or temperature sensor, and the others on the side are for GND and VBAT. If your battery does not come with the sensor wire, simply leave this connection empty.

![Battery connector on Portenta H7](img/portenta-H7-battery-connector.png)

**Note that the image is for schematic illustration purposes and does not show the pre-crimped wires. In case pre-crimped wires are being used, they are connected between the battery connector and the battery wires.**
