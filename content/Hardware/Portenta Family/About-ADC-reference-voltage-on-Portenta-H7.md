---
title: "About ADC reference voltage on Portenta H7"
---

The **analog-to-digital converter** (ADC) on Portenta H7 switches between internal and external reference voltage automatically, so unlike some other boards, [analogReference()](https://www.arduino.cc/reference/en/language/functions/analog-io/analogreference/) should **not** be used.

<a id="internal-reference"></a>

## Using the internal reference voltage (3.1 V)

When no external voltage is applied the AREF pin is pulled up to around 3.1 V. This will then be used for the reference voltage. It cannot be changed programmatically, but you can _normalize the input_ by dividing the measured value with the maximum:

Here's how you can normalize the input with a 2.0 V maximum:

```
int sensorValue = analogRead(A0);                   // read the input pin
float sensorVoltage = sensorValue * (3.1 / 1023.0); // ADC with the full 0 – 3.1 V range
float normalizedVoltage = sensorVoltage / 2.0;      // Normalize to a 0 – 2.0 V range
```

Note that the internal voltage has some noise. If appropriate for your project, you can use a running average in your sketch. For inspiration, see the [Smoothing](https://www.arduino.cc/en/Tutorial/BuiltInExamples/Smoothing) example.

<a id="external-reference"></a>

## Using an external reference voltage

Any external voltage applied to the AREF pin will be automatically used at the reference, you do **not** have to configure this in the sketch.

The voltage needs to be above 0 V, and no more than 3.1 V.

<p style="display:none;">
   How to use AREF pin on Portenta H7
</p>
