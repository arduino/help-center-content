---
title: 'Error "Could not find the main class." when launching the Arduino IDE'
---

If you get this error when launching Arduino:

`Java Virtual Machine Launcher: Could not find the main class. Program will exit.`

make sure that you correctly extracted the contents of the Arduino .zip file - in particular that the `lib` directory is directly inside of the Arduino directory and contains the file `pde.jar`.
