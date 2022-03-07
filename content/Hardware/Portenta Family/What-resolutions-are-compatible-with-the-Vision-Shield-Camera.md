---
title: "What resolutions are compatible with the Vision Shield Camera?"
---

The camera module captures 324 x 324 pixels images. However, this image is cropped down to support OpenMV standard resolutions.
The image resolution standard that OpenMV supports is called QVGA. This is a common resolution used in digital video recording equipment that requires less data storage capacity than higher resolutions. QVGA (quarter-VGA 320 x 240) is a convention name commonly used to indicate that the resolution is a quarter of a standard VGA (640 x 480) image .

Supported resolution / FPS for the Arduino Portenta Vision Shield on OpenMV:

- QQVGA (160x120) at 15, 30, 60 and 120 FPS
- QVGA (320x240) at 15, 30, and 60 FPS
