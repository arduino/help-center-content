---
title: "How to show video on HDMI with MKR 4000 Vidor"
---

The Vidor includes a Micro HDMI connector for audio and video output, and a MIPI camera connector for video input.

FPGA requires clock from SAM D21 in order to work and this is initialized with `FPGA.begin()`.

## Overview

### What you’ll learn

The MKR Vidor 4000 [Camera enabling example](https://www.arduino.cc/en/Tutorial/LibraryExamples/VidorEnableCam) activates a compatible camera connected to the MIPI Camera Connector and routes the image in real time to the microHDMI connector. It is a very basic example that shows how simple may be the usage of the advanced features of the Arduino MKR Vidor 4000 board.

### What you’ll need

* Hardware:
  * MKR Vidor 4000
  * Micro HDMI connector cable
  * Raspberry Pi v1.3 camera
* Software
  * Arduino IDE

## Steps

1. Check that you have the basics.

   * Make sure you have latest SAMD Beta core. If you don’t, go to Arduino `IDE > Tools > Board > Boards Manager: search for ‘Arduino SAMD Beta Boards’ > Update/Install`.

   * Make sure you have the latest update of the **MKR VIDOR Graphics** library: Go to Arduino `IDE > Sketch > Include Library > Manage Libraries: search for ‘VidorGraphics’ > Update/Install`.

2. Upload the `VideoEnableCam` sketch.

   Go to `Arduino > File > Examples > VidorGraphics > VidorEnableCam` and upload it.

   ![](img/cam_vidor.png)

3. In our example, we create the object **vcam** and then we simply enable I2C communication and initialize the camera with the `vcam.begin()` function. Please note that this function returns a value and we use it to print out an error message if initialization fails.

4. When the video stream is active and it is routed to the **HDMI** port, you can stop the video opening the serial monitor and typing **STOP**. This activates the `vcam.end();` function.

> If get an upload error, try resetting the board and try again.
