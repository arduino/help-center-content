---
title: "How to do a loopback test"
---


For Arduino boards with a dedicated USB to serial adapter chip (Uno, Mega, or Nano), a *loopback test* can be performed to test the serial communication between the board and your PC.

---

A failed loopback test indicates a problem with one or more of the following:

* The host computer
* Hardware driver
* USB cable
* The board's USB to Serial converter

## Instructions

1. Disconnect the board from your computer or battery.

2. Remove all shields, jumper cables, and other connections from the board.

3. Connect a jumper cable from **RESET** to **GND**.

4. Connect a jumper cable from **Digital 0 (RX)** to **Digital 1 (TX)**.

5. Connect the board to your computer and open the Arduino IDE or the [Arduino Cloud Web Editor](https://create.arduino.cc/editor).

6. Ensure that the correct port is selected.
   * **Arduino IDE:** *Tools > Port > [Your Arduino Board]*
   * **Web Editor:** Select your board using the boards dropdown.

7. Open the Serial Monitor.
   * **Arduino IDE:** *Tools > Serial Monitor*
   * **Web Editor:** Select *Monitor* in the sidebar.

8. Enter a message and click Send (the baud rate does not matter). Your message should immediately be echoed by the board, and appear in the output field below.

   ![Performing a loopback test in the Arduino IDE serial monitor.](img/serial_monitor_loopback_test.gif "Performing a loopback test in the Arduino IDE serial monitor")

  *Performing a loopback test in the Arduino IDE serial monitor.*
