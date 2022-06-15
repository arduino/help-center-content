---
title: "How to burn the bootloader to Arduino MKR1000 using a programmer"
id: 360014905199
---

## Overview

If you would like to burn bootloader to your MKR 1000 board using an ATMEL ICE programmer.

## What you’ll need

- Arduino IDE
- MKR 1000
- 2 USB micro cable.
- Atmel ICE Programmer

  ![programmer](img/programmer.jpg)

## Steps

1. Connect one USB cable to the Programmer and other USB to the MKR1000

2. From the Programmer make sure you connect the pins as seen in the picture below.
   > Note: Pay special attention to the red wire connection.

   ![programmerconnection](img/programmerconnection.jpg)

3. Open Arduino IDE

4. Click on Tools → Select Board 'MKR1000'

5. Again Click on tools → select programmer ‘Atmel ICE’.

   ![ide](img/ide.png)

6. Then click on Tools → Burn Bootloader
