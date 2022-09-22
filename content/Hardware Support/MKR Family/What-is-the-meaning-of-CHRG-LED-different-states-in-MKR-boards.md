---
title: "What is the meaning of CHRG LED different states in MKR boards?"
id: 360016119199
---

The following MKR boards listed below have a JST battery connector that allows powering the board through a Li-Po battery. The chip responsible of managing the supply and charge of the battery on these boards is the BQ24195L. This chip has one of its outputs directly connected to an LED labeled as **CHRG** indicating different battery charge states.

**MKR Boards with BQ24195L:**

* MKR WIFI1010
* NB1500
* GSM1400
* WAN1310

The CHRG LED provides information about the state of the battery and the BQ24195L chip. We will find the following scenarios depending on the CHRG LED status:

## CHRG LED > OFF

* Charging in progress (including recharge)
* BQ24195L is supplying power to the board from the battery. Board is powered from the battery (ON LED is lit steady green).

## CHRG LED > ON

* Charging complete
* Sleep mode, charge disable

## CHRG LED > Blinking at 1Hz

* Charge suspend due to:
* Input over-voltage
* TS fault (temperature fault)
* Timer fault
* Input or system over-voltage

For more detailed information about the BQ24195L and its operation you can check its datasheet here: [BQ24195L](https://www.ti.com/lit/ds/symlink/bq24195l.pdf?ts=1597152215766&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FBQ24195L)
