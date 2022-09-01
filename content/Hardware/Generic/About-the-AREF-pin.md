---
title: "About the AREF pin"
id: 360018922239
---


The **AREF (Analog Reference) pin** can be used to provide an external **reference voltage** for the analog-to-digital conversion of inputs to the analog pins. The reference voltage essentially specifies the value for the top of the input range, and consequently each discrete step in the converted output.

> **Note:**

> When reading voltage on the analog pins (e.g. **A0**, **A1**, etc.) the analog signal needs to be converted into a digital signal. This is done by a digital-to-analog converter (ADC). Arduino boards typically use a 10-bit ADC, resulting in 1024 (2^10) discrete levels.

> For example, if we want to measure voltages with a maximum range of 3.3 V, we would feed a nice smooth 3.3 V into the AREF pin – perhaps from a voltage regulator IC. Then the each step of a 10-bit analog-to-digital conversion (to would represent 3.22 mV.

Not all boards have an enabled AREF pin, and the function on those that do can vary:

<table>
  <tr>
    <td style="width:50%">
      <ul>
        <li>Arduino AVR Boards (Uno, Mega, Leonardo, etc.)</li>
        <li>Arduino SAMD Boards (Zero, etc.)</li>
        <li>Arduino megaAVR Boards (Uno WiFi Rev2)</li>
      </ul>
    <td>External reference voltage can be read from the AREF pin. Enable it by calling <a href="https://www.arduino.cc/reference/en/language/functions/analog-io/analogreference/">analogreference()</a> with the appropriate option for your board, i.e. <code>analogReference(EXTERNAL)</code> for AVR boards.</td>
  </tr>
  <tr style="width:50%;">
    <td>
      <ul>
        <li>Mbed Nano boards (33 BLE, etc.)</li>
      </ul>
    </td>
    <td>
    The microcontroller only supports internal reference. The AREF pin is not connected to anything.</td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>Portenta (H7, H7 Lite, etc.)</li>
      </ul>
    </td>
    <td>Any external voltage applied to the AREF pin will be automatically used as the reference. See <a href="https://support.arduino.cc/hc/en-us/articles/4753980038812-About-ADC-reference-voltage-on-Portenta-H7">About ADC reference voltage on Portenta H7</a>.</td>
  </tr>
</table>
