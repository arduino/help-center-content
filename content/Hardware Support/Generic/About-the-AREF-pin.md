---
title: "About the AREF pin"
id: 360018922239
---

The **AREF (Analog Reference) pin** can be used to provide an external **reference voltage** for the analog-to-digital conversion of inputs to the analog pins. The reference voltage essentially specifies the value for the top of the input range, and consequently each discrete step in the converted output.

Advantages of using an external reference include:

* Precise control of reference value (instead of a limited number of built-in options).
* No programming logic required to adjust reference voltage.
* In some cases, a less noisy signal.

Not all boards have an enabled AREF pin, and it doesn't work the same way on all boards that do:

<table>
  <tr>
    <td>
      <ul>
        <li>Arduino AVR Boards (Uno, Mega, Leonardo, etc.)</li>
        <li>Arduino SAMD Boards (Zero, etc.)</li>
        <li>Arduino megaAVR Boards (Uno WiFi Rev2)</li>
      </ul>
    <td>
      <p>External reference voltage can be read from the AREF pin. Enable it by calling <a href="https://www.arduino.cc/reference/en/language/functions/analog-io/analogreference/">analogReference()</a> with the appropriate option for your board, i.e. <code>analogReference(EXTERNAL)</code> for AVR boards.</p>
      <blockquote><b>Note:</b> To avoid damaging your board, read the library reference's <a href="https://www.arduino.cc/reference/en/language/functions/analog-io/analogreference/#_notes_and_warnings">notes and warnings</a> section before using an external reference voltage.</blockquote>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>GIGA</li>
      </ul>
    </td>
    <td>
        The analog reference is automatically selected when the AREF pin is connected to a voltage.
        The GIGA doesn’t need to use analogReference() to indicate the reference since it automatically changes the state when a voltage is added.
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>Mbed Nano boards (33 BLE, etc.)</li>
      </ul>
    </td>
    <td>
      The microcontroller only supports internal reference. The AREF pin is not connected to anything.
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>Portenta H7 (H7 Lite, etc.)</li>
      </ul>
    </td>
    <td>
      Any external voltage applied to the AREF pin will be automatically used as the reference. See <a href="https://support.arduino.cc/hc/en-us/articles/4753980038812-About-ADC-reference-voltage-on-Portenta-H7">About ADC reference voltage on Portenta H7</a>.
    </td>
  </tr>
</table>
