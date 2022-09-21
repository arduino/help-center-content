---
title: "My Arduino Nano RP2040 Connect provides weird ADC readings in pins A0 to A3"
id: 4402994141330
---

For analog inputs, the Nano RP2040 Connect device has a 10-bit ADC on a fixed set of pins (A0, A1, A2 and A3) with a fixed analog reference voltage of +3.3V. As such, standard Arduino calls can be used to read their values which returns a value from 0 to 1023, corresponding to the ADC reading of the specific pin.

Pins A0 to A3 are connected to the RP2040's own ADC and are used as standard analog pins like in other Nano boards. The RP2040 IC has been [reported](https://www.hackster.io/news/raspberry-pi-confirms-it-is-investigating-a-flaw-in-the-raspberry-pi-pico-rp2040-adc-95c393b55dfb) to have non-linearity issues that lead to inaccurate analog readings.
