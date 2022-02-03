---
title: "My MKR IoT Carrier makes clicking noises when plugged in"
---

The clicking sound that appears when you power the carrier via the USB of an Arduino board (e.g. MKR WIFI 1010), is an expected behavior. Continue reading if you want to know more about how to avoid it and the reasons behind it!

* You can stop this clicking sound by attaching the recommended rechargeable battery to the carrier, and connecting the battery to the Arduino board. Read more [here](https://support.arduino.cc/hc/en-us/articles/360020407519).
* Sometimes when there is a grounding issue with a circuit wired or plugged directly to the carrier, the relay(s) might be triggered repeatedly. To avoid this, make sure all the different parts of your project share the same ground.
The MKR IoT Carrier has two built-in 24V relays (V23079) that can be used to control external high power devices. The states of these two relays, Relay 1 and Relay 2, are indicated by the onboard LEDs, L1 and L2.

If, for example, the LED 1 is ON, it means that the COM and the NC terminal of Relay 1 are connected and this is accompanied by a click sound coming from the relay. However, if LED 1 is OFF, it means that the COM and NO are not connected and there will not be a click sound.

This same logic applies to Rely 2 and LED 2. If LED 2 is ON, the COM and NC terminals of relay 2 are connected and Relay 2 will make a clicking sound, and if LED 2 is OFF, the COM and NO are not connected and there will not be a click sound.

Note:

* If there is a clicking sound when you power the carrier via the USB of an Arduino board (say MKR WIFI 1010) plugged into it, you can stop this by connecting the recommended rechargeable battery to the Arduino board.
* Sometimes when there is a grounding issue with a circuit wired or plugged directly to the carrier, the relay(s) might be triggered repeatedly.
