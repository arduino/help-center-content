---
title: "An overview of different UNO boards"
id: 7901453165724
---

In this article:

* [The standard line of ATmega328P-based UNO boards](#uno)
* [Other UNO boards from Arduino](#uno-other)
* [Arduino-compatible UNO boards by other manufacturers](#compatible)

---

<a id="uno"></a>

## The standard line of ATmega328P-based UNO boards

While "Arduino UNO" was also the name of the [first Arduino UNO board model](#arduino-uno), it is now more often used to refer to any board with these characteristics:

* Uses the Arduino UNO layout
* ATmega328P microcontroller
* Uses the `Arduino Uno` board core from the Arduino AVR Boards package

Today, the [Arduino UNO R3](#arduino-uno-r3) is the main successor to this line of boards, and the most popular official Arduino UNO board.

<a id="arduino-uno-r3"></a>

<hr style="height:2px">

<!-- ### Arduino UNO R3 <!-- SKU: A000066 -->

<img src="img/A000066_03.front_1000x750.png" width=400px>

**Arduino UNO R3**
Microcontroller: ATmega328P
Board core: `Arduino Uno (Arduino AVR Boards)`
Store page: [Arduino Uno Rev3](https://store.arduino.cc/products/arduino-uno-rev3)
Documentation: [UNO R3](https://docs.arduino.cc/hardware/uno-rev3)

Revision 3 of the board has the following new features:

* **1.0 pinout:** Added SDA and SCL pins that are near to the AREF pin and two other new pins placed near to the RESET pin, the IOREF that allow the shields to adapt to the voltage provided from the board.
* Stronger RESET circuit.
* The ATmega8U2 USB-to-serial chip was replaced with ATmega16U2.

See also: [Overview of the Arduino UNO Components](https://docs.arduino.cc/tutorials/uno-rev3/intro-to-board)

<hr style="height:2px">

<!-- ### Arduino UNO R3 SMD <!-- SKU: A000073 -->

<img src="https://cdn.shopify.com/s/files/1/0438/4735/2471/products/A000073_00.front_643x483.jpg?v=1637829596" width=400px>

**Arduino UNO R3 SMD**
Microcontroller: ATmega328P
Board core: `Arduino Uno (Arduino AVR Boards)`
Store page: [Arduino Uno Rev3 SMD](https://store.arduino.cc/products/arduino-uno-rev3-smd)
Documentation: [UNO R3 SMD](https://docs.arduino.cc/hardware/uno-rev3-smd)

On the **SMD (Surface Mounted Device)** version of the UNO R3, the ATmega328 microprocessor is soldered directly on the board. This means it cannot easily be replaced like on the standard UNO R3.

<hr style="height:2px">

<!-- ### Arduino UNO Rev3 with Long Pins -->

<img src="https://docs.arduino.cc/static/59be648a9bc0da11bc1e642ff77db6cb/a207c/a000099_featured_1.jpg" width=400px>

**Arduino UNO Rev3 with Long Pins**
Microcontroller: ATmega328P
Board core: `Arduino Uno (Arduino AVR Boards)`
Documentation: [Arduino UNO Rev3 with Long Pins](https://docs.arduino.cc/retired/boards/arduino-uno-rev3-with-long-pins)

A version of the UNO R3 with longer pins on the bottom.

<hr style="height:2px">

<!-- ### Arduino UNO Rev2 -->

<img src="img/ArduinoUno_r2_front.png" width=400px>

**Arduino UNO Rev2**
Microcontroller: ATmega328P
Board core: `Arduino Uno (Arduino AVR Boards)`

This revision added a resistor pulling the ATmega8U2 HWB line to ground, making it easier to [set to DFU mode](https://support.arduino.cc/hc/en-us/articles/4410804625682).

<a id="arduino-uno"></a>

<hr style="height:2px">

<!-- ### Arduino UNO -->

<img src="img/ArduinoUnoFront.png" width=400px>

**Arduino UNO**
Microcontroller: ATmega328P
Board core: `Arduino Uno (Arduino AVR Boards)`
Documentation: [ARDUINO UNO](https://docs.arduino.cc/retired/other/arduino-older-boards#arduino-uno)

The original UNO board. It is sometimes refered to as the "R1" or "Rev1" version to distinguish it from later versions.

<a id="uno-other"></a>

---

## Other UNO boards from Arduino

<!-- ### UNO WiFi Rev2 -->

<hr style="height:2px">

<img src="img/ABX00021_03.front_78bd33e4-a4f4-44f6-894b-404212477ec4_643x483.png" width=400px>

**UNO WiFi Rev2**
Microcontroller: ATmega4809
Board core: `Arduino Uno Wifi Rev2 (Arduino megaAVR Boards)`
Store page: [ARDUINO UNO WiFi REV2](https://store.arduino.cc/products/arduino-uno-wifi-rev2)
Documentation: [UNO WiFi Rev2](https://docs.arduino.cc/hardware/uno-wifi-rev2)

Noticeably, the UNO WiFi Rev2 features an ATmega4809 microprocessor instead of the ATmega328P microprocessor used on the original UNO WiFi and all other UNO boards. When [selecting your board in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970) it's important to differentiate between Arduino Uno Wifi (Arduino AVR Boards) and Arduino Uno Wifi Rev2 (Arduino megaAVR Boards), and select the correct one for your board.

The only UNO board that comes with an ATmega4809 microprocessor instead of an ATmega328P. The u-blox NINA-W102 enables Bluetooth® and Wi-Fi connectivity.

<hr style="height:2px">

<img src="https://docs.arduino.cc/static/930b385bbd2ce6ad9123deb95fe1b3cf/6aca1/a000133_featured.jpg" width=400px>

**Arduino UNO WiFi**
Microcontroller: ATmega328P
Board core: `Arduino Uno WiFi (Arduino AVR Boards)`
Documentation: [Arduino Uno WiFi](https://docs.arduino.cc/retired/boards/arduino-uno-wifi)

A version of the UNO R3 with an ESP8266 Wi-Fi module.

Not to be confused with the **Arduino UNO WiFi Rev2**.

<hr style="height:2px">

<!-- ### UNO Mini Limited Edition -->

<img src="img/ABX00062_01.front_643x483.png" width=200px>

**UNO Mini Limited Edition**
Microcontroller: ATmega328P
Board core: `Arduino Uno Mini (Arduino AVR Boards)`
Store page: [Arduino UNO Mini Limited Edition](https://store.arduino.cc/products/uno-mini-le)
Documentation: [UNO Mini Limited Edition](https://docs.arduino.cc/hardware/uno-mini-le)

This limited edition UNO board comes in a smaller form factor, and has a USB-C connector.

<a id="compatible"></a>

---

## Arduino-compatible "UNO" boards by other manufacturers

There exists a variety of clone and derivative boards, as well as other products marketed as "Arduino-compatible", with "UNO" in the name.

Most Arduino-compatible "UNO" boards available today are based on the **Arduino UNO R3** and can be used with the main `Arduino Uno (Arduino AVR Boards)` core. They may use USB-to-serial chips that require additional drivers. Consult the manufacturer's documentation or contact your reseller for more information.

---

## Further reading

* [Arduino Docs](https://docs.arduino.cc/)
* [Retired Products & Legacy Documentation](https://docs.arduino.cc/retired)
