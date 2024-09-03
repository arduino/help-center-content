---
title: Error on MKR CAN Shield silk
id: 
---

An issue has been identified with the silk (the printed text and markings) on some Arduino MKR CAN Shield boards, where the CANL and CANH pins are mislabeled on the bottom silk, causing the labels to be swapped. To avoid confusion:

* Use the top silk for reference (the top silk is on the side with the 4-pin CAN terminal).
* Note that `CANL` is located next to `-` (or `GND`), and `CANH` is located next to `+` (or `VIN`).
