---
title: "'Error: avrdude' when uploading"
---

The tool **avrdude** is used to upload sketches to the Arduino boards which use microcontrollers of the AVR architecture. When uploading code to your board in the IDE, avrdude may give an error. Some of the most common errors are listed below.

* [`avrdude: stk500_recv(): programmer is not responding`](#avrdude-stk500_recv-and-stk500_getsync)
* [`avrdude: stk500_getsync() attempt X of 10: not in sync`](#avrdude-stk500_recv-and-stk500_getsync)
* [`avrdude: stk500v2_getsync(): timeout communicating with programmer`](#avrdude-stk500_recv-and-stk500_getsync)
* [`avrdude: butterfly_recv(): programmer is not responding`](#avrdude-butterfly_recv)
* [`avrdude: ser_open(): can't open device "portName": no such file or directory`](#avrdude-ser_open-cant-open-device-no-such-file-or-directory)
* [`avrdude: ser_open(): can't open device "portName": the system cannot find the file specified.`](#check-the-following)
* [`avrdude: ser_open(): can't open device "portName": access is denied.`](#check-the-following)
* [`avrdude: ser_open(): can't open device "portName": permission denied`](#check-the-following)
* [`avrdude: ser_open(): can't open device "portName": the semaphore timeout period has expired.`](#check-the-following)
* [`avrdude: ser_open(): can't set com-state for "portName"`](#check-the-following)

> Text following `avrdude: ser_open():` can appear in a different language if your system language is not set to English.

While these errors can be somewhat ambiguous, they are most often caused by failing or incorrectly configured hardware. It is likely that the error can be solved by following this troubleshooting procedure.

---

<h2 id="check-the-following">Check the following</h2>

1. Make sure you have selected the correct board under `Tools > Board`.

2. Make sure to select the correct port under `Tools > Port`.

3. Make sure the board is powered. Try disconnecting and reconnecting the board to the computer, and confirm that the power LED (usually labeled on the board "ON") is lit. On most boards, an orange LED will also blink when the board is plugged in.

4. Make sure that you are using a USB data cable (a charge-only cable will not work). Also, check the cable for physical damage.

5. Remove any connections to digital pins **0(RX)** and **1(TX)**. These pins are used for communication with your computer. Connecting anything to these pins can interfere with uploading. You can attach the components back to these pins once the program has been successfully uploaded.

6. Make sure that you have closed the serial monitor.

7. Press the reset button and see if the LED blinks. If the LED doesn't blink there is a high chance that the bootloader of your board is corrupted.

8. Make sure you have updated and installed all the necessary drivers for the board. If you already have the drivers, try reinstalling them.

9. Try a complete uninstall (including deleting the [Arduino15 folder](https://support.arduino.cc/hc/en-us/articles/360018448279) of the Arduino IDE. Then reinstall the IDE using the latest version.

10. If your board is an Uno, Mega, or Nano board, you can do a [loopback test](https://support.arduino.cc/hc/en-us/articles/360020366520). This will rule out faulty hardware.

11. If the loopback test passes, the problem may be due to a corrupted bootloader. In this case, burning a fresh bootloader may solve the issue. Keep in mind that this is an advanced procedure. Use the links below to get started.

    * [General overview on bootloader burning](https://www.arduino.cc/en/Tutorial/BuiltInExamples/ArduinoISP)
    * [Using two Arduino Mega boards](https://support.arduino.cc/hc/en-us/articles/360012048060)
    * [Using two Arduino UNO boards](https://support.arduino.cc/hc/en-us/articles/360012048080)

---

## Learn more about specific errors

<h3 id="avrdude-stk500_recv-and-stk500_getsync">avrdude: stk500_recv() and stk500_getsync()</h3>

```
avrdude: stk500_recv(): programmer is not responding
avrdude: stk500_getsync() attempt 1 of 10: not in sync: resp=0x00
avrdude: stk500_recv(): programmer is not responding
avrdude: stk500_getsync() attempt 2 of 10: not in sync: resp=0x00
...
```

This error can occur when the selected port has no board. For example, the Bluetooth port might be selected instead of the USB port where the Arduino board is connected.

You can select your port in `Tools > Port: "..." > Serial Ports`. The correct port may be labeled with the board name, but not always. If you are unsure which port your board is connected to, try disconnecting it. Then reconnect it, and take note if a new port appears.

> If you're using an Arduino Nano you also need to [select the correct processor](https://support.arduino.cc/hc/en-us/articles/4401874304274-Select-the-right-processor-for-Arduino-Nano).

<!-- TODO: Update when dedicated article is deployed -->

If the issue persists, [check these steps](#check-the-following).

<h3 id="avrdude-butterfly_recv">avrdude: butterfly_recv()</h2>

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

Check that you have selected the correct board in `Tools > Board`.

If the issue persists, [check these steps](#check-the-following).

<h3 id="avrdude-ser_open-cant-open-device-no-such-file-or-directory">avrdude: ser_open(): can't open device: No such file or directory</h3>

```
avrdude: ser_open(): can't open device "/dev/cu.usbmodem14101": No such file or directory
Problem uploading to board. See http://www.arduino.cc/en/Guide/Troubleshooting#upload for suggestions.
```

This error can occur when the board has been disconnected from a selected port. Make sure that the board is connected, and that the correct port is selected from the `Tools > Port` menu.

If the issue persists, [check these steps](#check-the-following).

## Still need help?

You're welcome to ask in the forum, or contact us. Please include this information: Board name, Operation System, IDE or Create Agent version, and error output.

* Visit the [Avrdude, stk500, Bootloader issues category](https://forum.arduino.cc/c/using-arduino/avrdude-stk500-bootloader-issues/81) in the Arduino forum.

* [Contact us](https://www.arduino.cc/en/contact-us/).

<p style="display:none;">
   Tags: \\.\com1, \\.\com2, \\.\com3, \\.\com4, \\.\com5, \\.\com6, \\.\com7, \\.\com8, \\.\com9
</p>
