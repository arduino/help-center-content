---
title: "Control the RGB LED on Nano 33 BLE boards"
id: 360016724140
---

Learn how to control the built-in RGB LED on Nano 33 BLE boards.

This article applies to the following boards:

* Arduino Nano BLE
* Arduino Nano BLE Rev2
* Arduino Nano BLE Sense
* Arduino Nano BLE Sense Rev2

---

## How to control the RGB LED

You can easily access the pins using these predefined constants:

* `LEDR` – red channel pin (P22)
* `LEDG` – green channel pin (P23)
* `LEDB` – blue channel pin (P24)

You can then set the value for each channel with the [`digitalWrite(pin, value)`](https://docs.arduino.cc/language-reference/en/functions/digital-io/digitalwrite/) function:

* `digitalWrite(LEDR, LOW)` – turn the RED LED **on**.
* `digitalWrite(LEDR, HIGH)` – turn the RED LED **off**.

> [!IMPORTANT]
> The RGB pins are **active-low**. This means that the pin is activated (turning on the LED) when the voltage is low.

To control the brightness or produce different colors, use the [`analogWrite(pin, value)`](https://docs.arduino.cc/language-reference/en/functions/analog-io/analogWrite/) function. For the `value` parameter, you can use a number from `0` to `255`. Because the RGB pins are active-low, a value of `0` will activate the pin's LED at full brightness, while a value of `255` turns it off completely.

* `analogWrite(LEDG, 255)` – turn the GREEN LED **off**.
* `analogWrite(LEDB, 128)` – turn the RED channel **off**.

## Example

This example uses the predefined pin number constants (`LEDR`, `LEDG`, `LEDB`) and the `digitalWrite` function to create all possible combinations when setting each pin to a `HIGH` or `LOW` state.

```arduino
void setup() {

  // Initialize pins as outputs
  pinMode(LEDR, OUTPUT);
  pinMode(LEDG, OUTPUT);
  pinMode(LEDB, OUTPUT);
}

void loop() {

  // WHITE
  digitalWrite(LEDR, LOW);
  digitalWrite(LEDG, LOW);
  digitalWrite(LEDB, LOW);

  // RED
  digitalWrite(LEDR, LOW);
  digitalWrite(LEDG, HIGH);
  digitalWrite(LEDB, HIGH);

  // wait for a second
  delay(1000);

  // GREEN
  digitalWrite(LEDR, HIGH);
  digitalWrite(LEDG, LOW);
  digitalWrite(LEDB, HIGH);

  // wait for a second
  delay(1000);

  // BLUE
  digitalWrite(LEDR, HIGH);
  digitalWrite(LEDG, HIGH);
  digitalWrite(LEDB, LOW);

  // wait for a second
  delay(1000);

  // YELLOW
  digitalWrite(LEDR, LOW);
  digitalWrite(LEDG, LOW);
  digitalWrite(LEDB, HIGH);

  // wait for a second
  delay(1000);

  // MAGENTA
  digitalWrite(LEDR, LOW);
  digitalWrite(LEDG, HIGH);
  digitalWrite(LEDB, LOW);

  // wait for a second
  delay(1000);

  // CYAN
  digitalWrite(LEDR, HIGH);
  digitalWrite(LEDG, LOW);
  digitalWrite(LEDB, LOW);

  // wait for a second
  delay(1000);

  // RGB OFF
  digitalWrite(LEDR, HIGH);
  digitalWrite(LEDG, HIGH);
  digitalWrite(LEDB, HIGH);

  // wait for a second
  delay(1000);
}
```
