---
title: "Arduino-Processing communication problem with ports"
---

If you are having problems using the webcam, or communicating Arduino and Processing, please check that:

1. Once the code is uploaded to the board, the IDE has to be closed.

2. In processing: run the program once, identify the camera in the output list (which are your computer’s ports) and change the `index` in the following code line for the number associated to the camera:

   ```cpp
   initializeCamera(index);
   myPort = new Serial(this, Serial.list()[index], 9600);
   ```
