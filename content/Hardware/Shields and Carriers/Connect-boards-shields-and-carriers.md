---
title: "Connect boards, shields, and carriers"
id: 4410110093586
---

Extend the functionality of your Arduino board by connecting compatible shields and carriers.

---

## MKR and Classic

Devices from the **MKR** and **Classic** family can easily be connected and "stacked".

* The pin names are typically printed on the female header connectors, as well as on the board silkscreen.
* To connect a carrier, insert the board's male header pins into the female connectors on the carrier.
* To connect a shield, insert the shield's male header pins into the female connectors on the board.

> Multiple shields can be connected to one board but depending on your project, you may want to consider the ordering. If you're a shield for measuring light intensity, you may want to attach it on top, to not obstruct its sensors.

Follow these steps to connect MKR or Classic devices:

1. Unplug all power sources from the devices.
2. Make sure the devices are facing the same way, and that the pins are aligned. You can do this easily by looking at the pin names.
3. Gently push down to attach the device.

![Photo of Arduino configuration with a coupled shield, board and carrier.](img/shield-board-carrier-coupling-align-pins.png)

## Nano Family

**Nano** boards share many similarities to MKR and Classic, but some differences apply:

* Pin names are only printed on the board silkscreen.
* The [original Nano](https://docs.arduino.cc/hardware/nano/) has pre-attached headers without female pins. Both shields and carriers are connected to the male pins.
* Other Nano boards come without pre-attached headers, but with headers included in the box.

Follow these steps to connect Nano devices:

1. Unplug all power sources from the devices.
2. Make sure you have the pins aligned, and facing the right way.
3. Gently push down to attach the device.

## Portenta

**Portenta** boards have **high-density connectors** for use with other Portenta devices:

1. Unplug all power sources from the devices.
2. Align the boards so the connectors line up they're facing the same way.
3. Press down until the connectors click slightly.

Portenta boards also support **MKR** family devices. The headers are unpopulated, so pins must be attached, or connections soldered. The pin names are not printed on the board but can be reviewed using the pinout diagrams available at [Arduino Docs](https://docs.arduino.cc/#pro-family). Here you can also review other connectivity options.
