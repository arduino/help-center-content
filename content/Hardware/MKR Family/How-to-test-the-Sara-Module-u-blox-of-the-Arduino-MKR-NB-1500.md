---
title: "How to test the Sara Module, u-blox, of the Arduino MKR NB 1500"
---

The Narrowband connectivity is performed with a module from u-blox, the SARA-R410M-02B, a low power chipset operating in the different bands of the IoT LTE cellular range.

## Before testing

Key points to check before performing the Sara Module test:

* Make sure that the sim card supports CAT-M1 or NB-IoT and there is enough credit in the sim card.
* Please double check that your sim card is not locked with PUK number. To verify it, insert the sim card in your mobile and unlock it with a PUK number provided by an operator.
* Keep the 4 digit PIN number of your NB-IoT sim card.
* Connect the LiPo battery and an antenna to the NB 1500 board.
* Make sure you have selected the **preferred RAT of the SIM card you are using**. You can check how to do it [here](https://support.arduino.cc/hc/en-us/articles/360014776540-How-to-change-the-Radio-Access-Technology-RAT-on-MKR-NB-1500s).

## Steps

1. Go to `File > Examples > MKRNB > Tools > SerialSarapassThrough` and upload the sketch.

   ![IDE with Examples > MKRNB > Tools > SerialSarapassThrough selected in File menu](img/MKRNB_SerialSaraPassthroughExample.png)

2. Open the Serial monitor and send the following AT commands in the input box and press SEND.
   * AT
   * AT+URAT=7
   * AT+URAT=8

   The output will show an “OK” confirmation which depicts that the “Sara module” is working properly. For the LTE CAT M1 network, set +URAT=7 whereas +URAT=8 for the NB-IoT network only.

   ![Serial Monitor with input box and Send button highlighted](img/SaraTest4.png)
