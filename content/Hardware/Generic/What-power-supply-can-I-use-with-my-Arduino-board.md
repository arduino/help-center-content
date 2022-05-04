---
title: "What power supply can I use with my Arduino board?"
---

All Arduino boards need electric power to function. A power supply is what is used to provide electric power to the boards and typically can be a battery, USB cable, AC adapter or a regulated power source device.

There are different ways to power your Arduino board. The most common way is through the USB connector available on every board, but there are a few other possibilities to power your board. If you like to know more about this, the different ways to supply power to your board are listed below:

> **Note**: Incorrect input voltage can damage your board. Never connect an external power supply before checking the input voltage limits. Look for technical specifications in [Arduino Docs](https://docs.arduino.cc/).

## USB

Arduino boards can operate satisfactorily on power that is available from the USB port. It provides 5V DC voltage and can be sourced from the port from a PC, wall socket adapter or portable power bank.

## AC socket

Some Arduino boards like UNO, MEGA and DUE, come with an AC socket that can be used to power the boards and to supply additional voltage if needed. A power supply adapter that provides from 7 to 12V (Volts) of DC (Direct Current) is required. The adapter is plugged onto the wall socket and the other end goes directly onto the board's AC socket.

**Make sure the power adapter complies with your Arduino board specifications.**

If you find that additional power is required from your Arduino board to operate it properly, or if you need to operate the Arduino board disconnected from a USB port.

The AC adapters are commonly available in retail stores for use with consumer products are often suitable, but make sure that it has the proper connector for plugging into the power socket on your Arduino board: **5.5mm** diameter cylindrical plug with **2.1mm** pin hole, and that provides Positive voltage on the inside pin hole and Negative (or common/ground) voltage on the outside cylindrical sleeve of the connector plug.

## Battery

Some boards come with a Li-Po (Lithium-ion Polymer) battery socket that fits this kind of batteries. For example, MKR boards (except MKR FOX and WAN 1300) come with this feature. These types of batteries supply 3.7V, are rechargeable and they can provide higher energy than other lithium batteries.

Please make sure the battery connector suits your board's battery connector. For MKRs the connector is [JST PHR-2](https://www.digikey.se/product-detail/en/jst-sales-america-inc/PHR-2/455-1165-ND/608607).

## VIN

Another way to power your board is by supplying voltage from a regulated power source directly to the VIN pin. Just need to connect the positive wire from your power supply to VIN and the negative to GND. Follow your board power specifications to figure out the voltage range that your board can handle.

VIN pin is an INPUT only.

## Screw terminal (only MKR FOX and WAN 1300)

These boards come with a screw terminal for a pair of either AA or AAA batteries where to plug a 3V battery pack (not included). Make sure you respect the polarity of the connector as labelled on the board.

For most applications, 1A (Amp) of current supply capacity is sufficient, but you may find that you’ll need more if you have a specific Shield module that needs it, or a stack of several Shield modules that along with the Arduino board draws a higher total current.

You should sum the rated Input power current requirement for each Shield you are using along with your Arduino board to get the total needed, and acquire a power adapter/supply that provides a minimum of that total (higher current power supply current capacity has no ill effects).

You also have to remember that the on-board 5V regulator cannot supply an infinite current (actually 800mA is a good choice in order to not overheat the board) so if one of your project need a large amount of power you can consider to provide the needed 5V (or what ever) selectively to the various equipment (using an appropriate number of power supplies and regulators if needed) and make them working together connecting all the GNDs in the same point
