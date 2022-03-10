---
title: "Power the Portenta H7"
---

In this article you will learn about the different possibilities to power the Arduino Portenta H7 and the corresponding requirements for each case. There are mainly three ways to supply power to this board:

## USB

Portenta H7 features a USB-C connector which is usually connected to a PC to program the board but, at the same time, the USB is the main source of power. So, besides enabling the serial port that allows sketch uploads to the board, the USB-C connector supplies the 5V that are required for both board operation and programming.

Therefore, for operation mode Portenta H7 can be powered through USB through a regulated power supply such as the standard 5V USB plug (the ones used to charge mobile phones and electronic devices), or even a portable 5V power bank equipped with the corresponding USB-C connector.

For board programming you must ensure that the cable you are using is data compatible, as some USB cables only supply power but do not carry over data.

## Battery

Portenta H7 can also be powered with a Li-Po battery connected onto the J4 connector. The board also recharges the battery when this one is discharged as long as Portenta H7 is powered via VIN or USB.

Click [here](https://support.arduino.cc/hc/en-us/articles/4405015055762-Connect-a-battery-to-Portenta-H7) to check the compatible batteries, their connector type and specifications.

## VIN

Portenta H7 can be powered directly through the VIN pins available on the top pin headers of the H7. For this, simply connect the '+' of your power supply to the VIN pin and '-' to GND.

It is also possible to power the board using the VIN pins from the high density connectors but the user must take into account:

- There are a total of 4 VIN pins available in the J1 high-density connector.
- Every VIN pin in the high-density connector is able to carry only 300 mA, therefore you cannot use a single pin of the HD connector to power the board. Instead try to use all 4 VIN pins in the high-density connector to supply power to the board.
