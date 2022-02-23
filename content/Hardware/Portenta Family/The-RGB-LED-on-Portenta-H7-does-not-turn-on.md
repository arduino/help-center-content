---
title: "The RGB LED on Portenta H7 does not turn on"
---

Perhaps you just obtained a Portenta H7 Arduino board and when you test the RGB LED by `digitalWrite(LED_BUILTIN, HIGH);` you notice that it doesn't work.

This is because, as opposed to other Arduino boards, on the Portenta H7 the built-in RGB led pins need to be pulled to ground to make the LED light up. This means that a voltage level of LOW will turn the LED on, a voltage level of HIGH will turn it off.

## Example

```
digitalWrite(LED_BUILTIN, HIGH); // turn the LED off (HIGH is the voltage level)

digitalWrite(LED_BUILTIN, LOW); // turn the LED on by making the voltage LOW (LOW is the voltage level)
```
