---
title: "What is the purpose of the CR2032 battery mount on the Edge Control?"
---


The Arduino Edge Control board features a mount to hold a CR2032 battery that serves as a backup for the external RTC clock (Real Time Clock) to keep the time running when the board is switched off and to retain internal configuration data such as date and time.

Remember to keep the CR2032 battery inserted at all times for best performance. Without the battery pressing the reset button will cause a short circuit.

**Operating the board without a CR2032 battery could cause undesired behaviors with the RESET button and might also brick the board.**
