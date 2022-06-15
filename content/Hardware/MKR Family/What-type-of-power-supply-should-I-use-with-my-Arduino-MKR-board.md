---
title: "What type of power supply should I use with my Arduino MKR board?"
id: 360014653660
---

Typically, the Arduino board can operate successfully powered through the USB port of the computer, but in case that you need to operate the Arduino board disconnected from a USB port you need then to acquire a power supply or battery.

Here are the different ways to power your Arduino MKR board:

## USB

It only takes a micro USB cable and the standard USB output from the port of a PC or equivalent 5V source (portable battery power bank for example).

## Li-Po

Your MKR board (except MKR FOX and WAN 1300), can also work powered by a 3.7V Li-Po (Lithium-ion Polymer) battery. These types of batteries are rechargeable and they can provide higher energy than other lithium batteries.

Please make sure the battery connector suits your battery: connector type on battery’s side [JST PHR-2](https://www.digikey.se/product-detail/en/jst-sales-america-inc/PHR-2/455-1165-ND/608607).

## Screw terminal (only MKR FOX and WAN 1300)

The board comes with a screw terminal for a pair of either AA or AAA batteries where to plug a 3V battery pack (not included). Make sure you respect the polarity of the connector as labelled on the board.

## VIN

Another way to power a MKR board is by supplying 5V from a regulated power source directly to the VIN pin. Just need to connect the positive wire from your power supply to VIN and the negative to GND.

If the power is fed through this pin, the USB power source is disconnected. This is the only way you can supply 5v (range is 5V to maximum 6V) to the board not using USB. VIN pin is an INPUT only.

For most applications, 1A (Amp) of current supply capacity is sufficient, but you may find that you’ll need more if you have a specific shield module or additional motors which demand more current. For these cases, a possible solution can be as follows:

Sum the rated input power current requirement for each shield, motor or extra device you are using along with your Arduino board in order to get the total needed. Then, acquire the proper power adapter/supply and connect it to the circuit using common grounds.
