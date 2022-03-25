---
title: "'Error: avrdude' when uploading"
---

The tool **avrdude** is used to upload sketches to the Arduino boards which use microcontrollers of the AVR architecture. When uploading code to your board in the IDE, avrdude may give an error.

Most of these errors can be resolved by following this [general troubleshooting checklist](#check-the-following).

You can also read about these specific errors:

* [avrdude: stk500_recv(): programmer is not responding
   avrdude: stk500_getsync() attempt X of 10: not in sync](#avrdude-stk500_recv-and-stk500_getsync)
* [avrdude: stk500v2_ReceiveMessage(): timeout
  avrdude: stk500v2_getsync(): timeout communicating with programmer](#avrdude-stk500_recv-and-stk500_getsync)
* [avrdude: ser_open(): can't open device "portName": no such file or directory](#avrdude-ser_open-cant-open-device-no-such-file-or-directory)
* [avrdude: ser_open(): can't open device <port>: Resource busy](ser_open-resource-busy)
* [avrdude: ser_open(): can't open device "portName": permission denied](#ser_open-permission-denied)
* [avrdude: butterfly_recv(): programmer is not responding`](#avrdude-butterfly_recv)
* [avrdude: usbhid_open(): No device found
  avrdude: jtag3_open_common()](#usbhid_open_jtag3_open_common)
* [avrdude: jtagmkII_getsync(): sign-on command: status -1](#jtagmkII_getsync)

<!-- TODO:
* [avrdude: ser_open(): can't open device "portName": access is denied.](#check-the-following)
* [avrdude: ser_open(): can't set com-state for "portName"`](#check-the-following)
* [avrdude: ser_open(): can't open device "portName": the system cannot find the file specified](#check-the-following)
* [avrdude: ser_open(): can't open device "portName": the semaphore timeout period has expired.`](#check-the-following)
-->

> **Note:** The error text may be different depending on your system language.

---

<a name="check-the-following"></a>

## General troubleshooting checklist

Most errors can be solved by following these steps. After each step, try uploading your sketch again.

1. Make sure you have [selected the right board and port](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE) correct board under _Tools > Board_ and  _Tools > Port_.

   * For instructions, see [Select board and port in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE)

   * If your board is missing, see [If your board does not appear in the port menu](https://support.arduino.cc/hc/en-us/articles/4412955149586-If-your-board-does-not-appear-in-the-port-menu)

2. Close other instances of Arduino IDE, serial monitors or other software that my be blocking the port. If this doesn't work, try restarting your computer.

3. Reset your board by pressing the RESET button (a white or blue push button).

   ![The reset button on Arduino UNO.](img/uno-reset-button.png)

4. Check port and cable connections:

   * Try disconnecting and reconnecting the board to the computer, and confirm that the power LED (usually labeled on the board "ON") is lit. On most boards, an orange LED will also blink when the board is plugged in. <!-- TODO: Simplify -->

   * If possible, connect the board directly to a USB port. Avoid using a USB hub, or try a dif

   * Make sure you are using a data transfer USB cable (charge-only cables will not work). Try connecting your board with a different cable, or testing your cable with a different device.

   * Remove any unneeded USB devices that may be using the ports.

5. Remove any connections to digital pins **0(RX)** and **1(TX)**. Anything connected to these pins can interfere with the upload transfer.

6. Press the reset button and see if the LED blinks. If the LED doesn't blink there is a high chance that the bootloader of your board is corrupted.

7. Try a complete uninstall (including deleting the [Arduino15 folder](https://support.arduino.cc/hc/en-us/articles/360018448279) of the Arduino IDE. Then reinstall the IDE using the latest version.

8. For some boards, you can do a [loopback test](https://support.arduino.cc/hc/en-us/articles/360020366520) to test the USB to serial chip. If the loopback test passes, or if you can't do a loopback test, the bootloader may be corrupted or missing. In this case, try [burning a fresh bootloader](https://docs.arduino.cc/built-in-examples/arduino-isp/ArduinoISP). The loopback test can be done with these boards:

   * Arduino Uno (classic)
   * Arduino Uno Rev3 <!-- [X] Tested 2022-03-24 -->
   * Arduino Uno Rev3 SMD <!-- [X] Tested 2022-03-24 -->
   * Arduino Mega (classic)
   * Arduino Mega2560 Rev3
   * Arduino Mega ADK Rev3
   * Arduino Nano (classic) <!-- [X] Tested 2022-03-24 -->

---

<a name="avrdude-stk500_recv-and-stk500_getsync"></a>

## avrdude: stk500_recv(): programmer is not responding<br>avrdude: stk500_getsync() attempt \<n> of 10: not in sync

<!-- NOTE: Occurs when uploading to Nano 33 BLE with Nano classic as selected board -->
<!-- NOTE: Occurs when uploading to Nano 33 IoT with Nano classic as selected board -->

```
avrdude: stk500_recv(): programmer is not responding
avrdude: stk500_getsync() attempt 1 of 10: not in sync: resp=0x00
avrdude: stk500_recv(): programmer is not responding
avrdude: stk500_getsync() attempt 2 of 10: not in sync: resp=0x00
...
```

1. Make sure you have [selected the right board and port](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE) correct board under _Tools > Board_ and  _Tools > Port_.

   * For instructions, see [Select board and port in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE)

   * If your board is missing, see [If your board does not appear in the port menu](https://support.arduino.cc/hc/en-us/articles/4412955149586-If-your-board-does-not-appear-in-the-port-menu)

This error can occur when the selected port has no board. For example, the Bluetooth<sup>®</sup> port might be selected instead of the USB port where the Arduino board is connected.

You can select your port in `Tools > Port: "..." > Serial Ports`. The correct port may be labeled with the board name, but not always. If you are unsure which port your board is connected to, try disconnecting it. Then reconnect it, and take note if a new port appears.

> If you're using a classic Arduino Nano you also need to [select the correct processor](https://support.arduino.cc/hc/en-us/articles/4401874304274-Select-the-right-processor-for-Arduino-Nano).

<!-- TODO: Update when dedicated article is deployed -->

If the issue persists, [check these steps](#check-the-following).

---

<a name="stk500v2_ReceiveMessage_getsync"></a>

## avrdude: stk500v2_ReceiveMessage(): timeout<br>avrdude: stk500v2_getsync(): timeout communicating with programmer

<!-- NOTE: Occurs when uploading to Arduino Uno with "Arduino ATmega2560 (Mega 2560)" as selected board. -->
<!-- NOTE: Occurs when uploading to Arduino Nano with "Arduino ATmega2560 (Mega 2560)" as selected board. -->

Make sure you have [selected the right board and port](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE) correct board under _Tools > Board_ and  _Tools > Port_.

---

<a name="avrdude-ser_open-cant-open-device-no-such-file-or-directory"></a>

## avrdude: ser_open(): can't open device: No such file or directory

```
avrdude: ser_open(): can't open device "/dev/cu.usbmodem14101": No such file or directory
Problem uploading to board. See http://www.arduino.cc/en/Guide/Troubleshooting#upload for suggestions.
```

<!-- NOTE: This error can occur when the selected port has become unavailable, e.g. board being disconnected after the port was selected. -->
<!-- NOTE: Can probably be caused by the issue with COM ports being reassigned in Windows -->

1. Make sure the correct port is selected in _Tools > Port_.

   * For step-by-step instructions, see [Select board and port in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE).
   * If you can't find the port, see [If your board does not appear in the port menu](https://support.arduino.cc/hc/en-us/articles/4412955149586-If-your-board-does-not-appear-in-the-port-menu).

2. If using the classic Nano, try selecting a different processor in _Tools > Processor_.

---

<a name="ser_open-resource-busy"></a>

## avrdude: ser_open(): can't open device <port>: Resource busy

<!-- NOTE: Occurs when uploading to /dev/cu.wlan-debug with Arduino Every selected -->

1. Make sure the correct port is selected in _Tools > Port_.

2. Close other instances of Arduino IDE, serial monitors or other software that my be blocking the port.

3. Restart your computer.

4. [Find and stop process blocking a port](https://support.arduino.cc/hc/en-us/articles/4407830972050-Find-and-stop-process-blocking-a-port).

---
<a name="ser_open-permission-denied"></a>

## avrdude: ser_open(): can't open device <port>: Permission denied

<!-- * -->If you get this error on Linux, [make sure your user account is part of the dialout group](https://support.arduino.cc/hc/en-us/articles/360016495679).
<!-- * If you get this error on Windows, try checking port assignment  TODO: Write/link article -->

---

<a name="avrdude-butterfly_recv"></a>

## avrdude: butterfly_recv()

```
avrdude: butterfly_recv(): programmer is not responding
avrdude: error: buffered memory access not supported. Maybe it isn't
a butterfly/AVR109 but a AVR910 device?
avrdude: initialization failed, rc=-1
         Double check connections and try again, or use -F to override
         this check.

avrdude: butterfly_recv(): programmer is not responding
avrdude: error: programmer did not respond to command: leave prog mode
avrdude: butterfly_recv(): programmer is not responding
avrdude: error: programmer did not respond to command: exit bootloader
```

Make sure you have [selected the right board and port](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE) correct board under _Tools > Board_ and  _Tools > Port_.

For instructions, see [Select board and port in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE).

---

<a name="usbhid_open_jtag3_open_common"></a>

## avrdude: usbhid_open(): No device found<br>avrdude: jtag3_open_common()

```
avrdude: usbhid_open(): No device found
avrdude: jtag3_open_common(): Did not find any device matching VID 0x03eb and PID list: 0x2145
An error occurred while uploading the sketch
```

Make sure you have [selected the right board and port](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE) correct board under _Tools > Board_ and  _Tools > Port_. In particular, this error can occur when uploading to a Arduino Uno Rev3 or classic, when having _megaAVR Boards > Arduino Uno WiFi Rev2_ as the selected board.

<!-- TODO: Check other megaAVR boards, and the inverse case with using AVR core of megaAVR -->

---

<a name="jtagmkII_getsync"></a>

## avrdude: jtagmkII_getsync(): sign-on command: status -1

<!-- NOTE: Occurs when uploading to Bluetooth port with Arduino Every selected -->

Make sure you have [selected the right board and port](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE) correct board under _Tools > Board_ and  _Tools > Port_.

---

## Still need help?

* Visit the [Avrdude, stk500, Bootloader issues category](https://forum.arduino.cc/c/using-arduino/avrdude-stk500-bootloader-issues/81) in the Arduino forum.

* [Contact us](https://www.arduino.cc/en/contact-us/).

> **Please include this information:** A [verbose error output](https://support.arduino.cc/hc/en-us/articles/4407705216274), the name of your board, your operating system, your Arduino IDE version.

<p style="display:none;">
   Tags: \\.\com1, \\.\com2, \\.\com3, \\.\com4, \\.\com5, \\.\com6, \\.\com7, \\.\com8, \\.\com9
</p>

<!-- markdownlint-disable-file HC001 -->
