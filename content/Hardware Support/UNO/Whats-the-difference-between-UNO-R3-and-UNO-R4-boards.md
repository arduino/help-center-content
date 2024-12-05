---
title: What's the difference between UNO R3 and UNO R4 boards?
id: 9350551575964
---

Learn about the differences between the Arduino UNO R3, UNO R4 Minima and UNO R4 WiFi boards.

In this article:

- Board overview (#overview)
- Compatibility (#compatibility)
- Technical specifications comparison (#tech-specs)

---

## Board overview {#overview}

The UNO R4 boards maintain the same form factor, pinout and 5 V operating voltage as the UNO R3. Here's a quick overview:

- **UNO Rev3**: A classic board with an 8-bit architecture, offering straightforward functionality and broad library compatibility.

- **UNO R4 Minima**: Focused on simplicity, it offers essential functions ideal for prototyping and basic learning. It includes advanced features such as an SWD port for program debugging, along with increased processing power and additional memory.

- **UNO R4 WiFi**: Equipped with WiFi and Bluetooth connectivity, it is ideal for IoT and wireless projects. The Qwiic I2C Connector and 12x8 Red LED Matrix enable project creation without soldering, manual wiring, or using a breadboard.

### Does the UNO R4 replace the UNO R3?

No, the Arduino UNO R3 will still be available and supported for makers who want to work with its 8-bit AVR microcontroller.

### Selected differences

#### Different behavior on runtime errors

If the board encounters a runtime error while running an uploaded sketch, you need to double-press the reset button to put it into bootloader mode before uploading a new sketch.

Note that unlike some Mbed OS boards, runtime errors do not result in a flashing LED.

The UNO R4 WiFi board features an error-catching mechanism that detects operations that caused a runtime crash, as opposed to the usual silent behavior of a crashed board.

#### Different board package

Previous UNO boards (except the UNO WiFi Rev2) were AVR-based, and used the **Arduino AVR Boards** package. For UNO R4, install the **Arduino UNO R4 Boards** package.

## Compatibility {#compatibility}

### Can I use hardware compatible with the UNO R3 with an UNO R4 board?

UNO R4 boards maintain the same mechanical and electrical compatibility, allowing you to seamlessly use your existing shields and hardware with the new board.

> [!NOTE]
> Third-party UNO shields are compatible with R4 in terms of voltage and pinout. However,  software compatibility might require some porting work, so it should be checked with shield manufacturers before purchase.

### Can I use my sketch developed for UNO R3 with an UNO R4 board?

Yes, if your sketch was developed using the [Arduino API](https://docs.arduino.cc/language-reference/). If your sketch uses instructions specific to the AVR architecture, they will have to be changed to ensure compatibility.

### Are libraries for UNO R3 also compatible with the UNO R4 boards?

- Libraries that are based on the [Arduino API](https://docs.arduino.cc/language-reference/) will work as is.

- Libraries that use AVR-specific instructions are not compatible with the architecture of UNO R4 boards. However, some of these libraries have already been ported. For more details, refer to the [UNO R4 Library Compatibility repository](https://github.com/arduino/uno-r4-library-compatibility).

## Technical specifications comparison {#tech-specs}

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0mi1{background-color:#F6F9F9;font-weight:bold;text-align:left;vertical-align:bottom}
.tg .tg-kz3h{background-color:#F6F9F9;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-4bam{background-color:#FFF;text-align:center;vertical-align:bottom}
.tg .tg-8pu1{background-color:#F6F9F9;font-weight:bold;text-align:center;vertical-align:bottom}
.tg .tg-8d8j{text-align:center;vertical-align:bottom}
.tg .tg-7yig{background-color:#FFF;text-align:center;vertical-align:top}
</style>
<table class="tg"><thead>
  <tr>
    <th class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Board</span></th>
  </tr></thead>
<tbody>
  <tr>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Arduino UNO R3</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Arduino UNO R4 Minima</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Arduino UNO R4 WiFi</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Microcontroller</span></td>
  </tr>
  <tr>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">ATmega328P</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Renesas RA4M1 (Arm Cortex-M4)</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Renesas RA4M1 (Arm Cortex-M4)</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Radio Module (WiFi/Bluetooth)</span></td>
  </tr>
  <tr>
    <td class="tg-8d8j" colspan="2">No</td>
    <td class="tg-8d8j" colspan="2">No</td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">ESP32-S3-MINI-1-N8</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">USB Connector</span></td>
  </tr>
  <tr>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">USB-B</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">USB-C</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">USB-C</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Mouse/Keyboard Emulation (HID)</span></td>
  </tr>
  <tr>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">No</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Real-Time Clock (RTC)</span></td>
  </tr>
  <tr>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">No</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Pins</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">Built-in LED Pin</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">13</span></td>
    <td class="tg-8d8j" colspan="2">No</td>
    <td class="tg-8d8j" colspan="2">No</td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">Digital I/O Pins</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">14</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">14</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">14</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">Analog input pins</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">6</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">6</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">6</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">PWM pins</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">6</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">6</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">6</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">DAC</span></td>
    <td class="tg-8d8j">No</td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">1</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">1</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">External interrupts</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">No</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">2,3</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">2,3</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Communication</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">UART</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">I2C</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">SPI</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">CAN</span></td>
    <td class="tg-8d8j">No</td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
    <td class="tg-4bam" colspan="2"><span style="font-weight:normal;background-color:#FFF">Yes</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Power</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">I/O Voltage</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">5V</span></td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">Circuit operating voltage</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">5 V</span></td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">Circuit operating voltage</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">5 V (ESP32-S3 is 3.3 V)</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">Input voltage (nominal)</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">7-12V</span></td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">Input voltage (VIN)</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">6-24 V</span></td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">Input voltage (VIN)</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">6-24 V</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">DC Current per I/O Pin</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">20 mA</span></td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">DC Current per I/O Pin</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">8 mA</span></td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">DC Current per I/O Pin</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">8 mA</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Clock speed</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">ATmega328P</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">16 MHz</span></td>
    <td class="tg-kz3h" rowspan="2">RA4M1</td>
    <td class="tg-7yig" rowspan="2">48 MHz</td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">RA4M1</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">48 MHz</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">ATmega16U2</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">16 MHz</span></td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">ESP32-S3-MINI-1-N8</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">up to 240 MHz</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">Memory</span></td>
  </tr>
  <tr>
    <td class="tg-kz3h" rowspan="2">ATmega328P</td>
    <td class="tg-7yig" rowspan="2">2KB SRAM, 32KB FLASH, 1KB EEPROM</td>
    <td class="tg-kz3h" rowspan="2">RA4M1</td>
    <td class="tg-7yig" rowspan="2">256 kB Flash, 32 kB RAM</td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">RA4M1</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">256 kB Flash, 32 kB RAM</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">ESP32-S3-MINI-1-N8</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">384 kB ROM, 512 kB SRAM</span></td>
  </tr>
  <tr>
    <td class="tg-8pu1" colspan="6"><span style="font-weight:bold;background-color:#F6F9F9">MCU Resolution</span></td>
  </tr>
  <tr>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">ATmega328P</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">8-bit</span></td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">RA4M1</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">32-bit</span></td>
    <td class="tg-0mi1"><span style="font-weight:bold;background-color:#F6F9F9">RA4M1</span></td>
    <td class="tg-4bam"><span style="font-weight:normal;background-color:#FFF">32-bit</span></td>
  </tr>
</tbody></table>

<!-- markdownlint-disable-file HC001 -->