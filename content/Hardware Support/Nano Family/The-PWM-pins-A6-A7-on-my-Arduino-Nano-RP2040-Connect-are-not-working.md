---
title: "The PWM pins A6,A7 on my Arduino Nano RP2040 Connect are not working"
id: 4403365230482
---

PWM on Nano RP2040 Connect is available on all digital & analog pins apart from A6 and A7. Pins A6 and A7 are handled by Nina module W102 on the board and due to the limitation in the Nina module W102 these pins can only be used as inputs.
