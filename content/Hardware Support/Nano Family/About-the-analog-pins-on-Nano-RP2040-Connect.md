---
title: "About the analog pins on Nano RP2040 Connect"
---

The microcontroller on the Nano RP2040 Connect has four analog pins, connected to A0–A3 on the board. The NINA-W10 multiradio module is used to enable analog inputs for the remaining A4-A7 pins on the standard Nano form factor.

---

## Input and output capabilities

**Pins A0–A3** are connected to the board's microcontroller (Raspberry Pi RP2040). These pins can be used like analog pins on most other Arduino boards:

* Write to a pin with [analogWrite()](https://www.arduino.cc/reference/en/language/functions/analog-io/analogwrite/)
* Read from a pin with [analogRead()](https://www.arduino.cc/reference/en/language/functions/analog-io/analogread/)

If possible, try to use these pins for your project.

**Pins A4–A7** are connected to the NINA-W10 multiradio module. These pins have the following limitations:

* They are read-only. You cannot write to these pins.
* Pins A4 and A5 are used by the microcontroller to communicate with some onboard peripherals (I<sup>2</sup>C), such as the crypto chip (required for Cloud connectivity). Avoid reading from these pins if your project relies on I<sup>2</sup>C communication.
* The input voltage range is [lower than the board's 3.3 V operating voltage](#voltage-range).

The input/output support for the analog pins is summarized in this table:

| Pins  | In   | Out |
|-------|------|-----|
| A0–A3 | Yes  | Yes |
| A5–A6 | Yes* | No  |
| A6–A7 | Yes  | No  |

*_Pins A4 a A5 are used by the I<sup>2</sup>C communications bus. Reading from these pins is possible but doing so can interfere with onboard peripherals._

---

<a id="voltage-range"></a>

## Input voltage range

The range of analog input values that can be read is different for the two sets of pins:

| Pins  | Voltage range |
|-------|---------------|
| A0-A3 | 0.0–3.3 V     |
| A4-A7 | 0.0–2.7 V*    |

_*With WIFINina firmware 1.4.8 or earlier, the range for these pins are 0.0–1.2 V. [Update the firmware](https://support.arduino.cc/hc/en-us/articles/360013896579-Check-and-update-the-firmware-for-WiFiNINA-and-WiFi101) to get the full 0.0–2.7 V range._

---

## Increase the analogRead resolution

The `analogRead()` function returns 10-bit values (0–1023) by default. You can increase the resolution to 12-bit (0–4095) with the [analogReadResolution()](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) function. Just add this code to your `setup()` function:

```arduino
analogReadResolution(12);
```

---

## Differential nonlinearity spikes on pins A0-A3

The analog-to-digital converter on the RP2040 microcontroller have spikes in DNL (Differential nonlinearity) errors at four values — 512, 1,536, 2,560, and 3,584, limiting performance in some cases.

See errata RP2040-E11 (p. 627) in the [RP2040 Datasheet](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf) for more information.

---

## Further reading

* [Nano RP2040 Connect (Arduino Docs)](https://docs.arduino.cc/hardware/nano-rp2040-connect)
* [NINA-W10 series data sheet](https://content.u-blox.com/sites/default/files/NINA-W10_DataSheet_UBX-17065507.pdf)
