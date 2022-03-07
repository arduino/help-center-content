---
title: "How to burn the bootloader between two Arduino UNO"
---

The bootloader is a piece of code that is stored in a reserved space of the memory of your Arduino board. Basically, this code initiates the sketch as soon as the board is powered on and also allows new sketches to be uploaded from the PC.

It can happen that this piece of code gets corrupted when attempting to upload a bad sketch, applying too high/low voltage to I/O pins or power inputs. If this is the case, the board will not be detected by your PC any more and the port will show grayed out on Arduino IDE.

If by chance you happen to have an additional Arduino UNO and 6 jumper wires you can easily reprogram your board using the extra UNO board as a programmer. Just need to upload ‘Arduino ISP’ sketch, connect the boards and click ‘Burn Bootloader’.

## Material needed

* Programmer board (Arduino UNO)
* 6 jumper wires: If you choose to connect ICSP pins you need female jumpers on both ends (except for pin 10 - reset connection for which one end is male). Otherwise, I/O pin connection requires 6 male jumper wires.
* PC with Arduino IDE installed
* Target board (Arduino UNO)

## Steps

1. Open the Arduino IDE.

2. Connect the programmer board to your PC.

   > Note: Make sure to select Arduino Uno as the Board and to select its corresponding Port.

3. Upload the `ArduinoISP` sketch to the Arduino UNO programmer board.

   Find the sketch in Arduino IDE top menu: *File > Examples > 11.Arduino ISP > ArduinoISP*.

4. After uploading the code. Go to `Tools > Programmer > 'Arduino as ISP'`.

5. Disconnect the programmer board from your PC.

6. Connect the two boards as follows:

   ![Target-Programmer interconnection using I/O PINS](img/ICSP.png)

   | PROGRAMMER PINS | TARGET PINS |
   |:---------------:|:-----------:|
   | PIN 10          | RESET       |
   | PIN 11          | PIN 11      |
   | PIN 12          | PIN 12      |
   | PIN 13          | PIN 13      |
   | 5V              | 5V          |
   | GND             | GND         |

7. Connect the programmer board to your PC again.

8. Click on: `Tools > Burn Bootloader`

   The following confirmation message will show at the bottom of Arduino IDE if successful:

   ![Success message](img/SuccessBootloader.png)

Note that you can also connect the boards using the ICSP pins on each board, as these are interconnected to respective I/O pins. For example, 1 - CIPO ICSP is internally connected to the same electric node as I/O PIN 12 and so on. So it doesn't matter which connection type you use (I/O pins or ICSP) as long as they follow one of the tables. The ICSP connector has 6 pins that are arranged as the diagram 1 shows (placing the UNO board so the ICSP label above the connector is straight as you would normally read it).

![ICSP connection](img/ICSP.png)

| PROGRAMMER PINS | TARGET ICSP |
|:---------------:|:-----------:|
| PIN 10 | ICSP 5 |
| ICSP 4 | ICSP 4 |
| ICSP 1 | ICSP 1 |
| ICSP 3 | ICSP 3 |
| ICSP 2 | ICSP 2 |
| ICSP 6 | ICSP 6 |
