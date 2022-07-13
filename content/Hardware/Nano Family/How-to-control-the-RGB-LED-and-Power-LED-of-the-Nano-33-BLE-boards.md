---
title: "How to control the RGB LED and Power LED of the Nano 33 BLE boards?"
id: 360016724140
---

The [Nano 33 BLE Sense](https://store.arduino.cc/products/arduino-nano-33-ble-sense) board has an inbuilt RGB LED which is connected to pin 22, 23, 24.

This information is available on the Nano 33 BLE's boards [variant file](https://github.com/arduino/ArduinoCore-nRF528x-mbedos/blob/master/variants/ARDUINO_NANO33BLE/pins_arduino.h#L54).

```arduino
#define RED 22     
#define BLUE 24     
#define GREEN 23
#define LED_PWR 25
```

Below is the general sketch to play around with the RGB led on the Nano 33 BLE boards and user can modify the sketch according to the requirements.

```arduino
// How to control the RGB Led and Power Led of the Nano 33 BLE boards.  

 #define RED 22     
 #define BLUE 24     
 #define GREEN 23
 #define LED_PWR 25

void setup() {

 // intitialize the digital Pin as an output
  pinMode(RED, OUTPUT);
  pinMode(BLUE, OUTPUT);
  pinMode(GREEN, OUTPUT);
  pinMode(LED_PWR, OUTPUT);

}

// the loop function runs over and over again
void loop() {
  digitalWrite(RED, LOW); // turn the LED off by making the voltage LOW
  delay(1000);            // wait for a second
  digitalWrite(GREEN, LOW);
  delay(1000);  
  digitalWrite(BLUE, LOW);
  delay(1000);  
  digitalWrite(RED, HIGH); // turn the LED on (HIGH is the voltage level)
  delay(1000);                         
  digitalWrite(GREEN, HIGH);
  delay(1000);  
  digitalWrite(BLUE, HIGH);
  delay(1000);  
  digitalWrite(LED_PWR, HIGH);
  delay(1000);  
  digitalWrite(LED_PWR, LOW);
  delay(1000);  
}
```
