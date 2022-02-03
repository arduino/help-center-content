---
title: "Why am I only getting 2.1V in the 5V pin in my board? "
---

Low power boards, like MKR WAN 1310 and MKR NB 1500, when powered with battery alone will have only 2.1V on the pin marked as 5V.

This happens because the diode (D3, marked as DNP in the schematics) that is used to get 5V from the battery is avoided using an internal power path. This alternative power path prevents the battery from being discharged.
