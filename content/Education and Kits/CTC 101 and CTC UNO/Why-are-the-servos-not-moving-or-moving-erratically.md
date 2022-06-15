---
title: "Why are the servos not moving or moving erratically"
id: 360017053760
---

The boards are made for controlling, so if there is more than 1 servo connected and trying to move at the same time, the board will not be able to supply enough energy. This can be avoided connecting a battery. You have more information about how to implement it in the [continuous servo reference](https://create.arduino.cc/ctc/101/course/view.php?id=250&section=7).
