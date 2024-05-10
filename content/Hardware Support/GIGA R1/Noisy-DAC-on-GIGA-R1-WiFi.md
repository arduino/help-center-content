---
title: "Noisy DAC on GIGA R1 WIFI"
---

When running a sketch on your GIGA R1 WiFi board that reads from storage from a USB drive a noise might be noticeable on the DAC especially when using the board's audio output where a slight hum can be detected.

## How to fix it

* Add a capacitor between the AREF and GND Pins. Make sure when adding components or changing your circuits the board is unpowered.
![10pF Capacitor between AREF and GND](img/GIGA-R1-filter-DAC.png)

## Testing it out

1. Upload the sketch [Audio playback](https://docs.arduino.cc/tutorials/giga-r1-wifi/giga-audio/#audio-playback)

2. Listen for the noise

3. Unpower the board

4. Add the capacitor as shown in the image

5. Power the board

The noise should not be noticeable any longer. Check the polarity of the capacitor and the integrity of the audio cable if the noise continues.
