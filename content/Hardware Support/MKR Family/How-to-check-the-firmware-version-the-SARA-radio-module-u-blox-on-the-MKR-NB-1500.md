---
title: "How to check the firmware version the SARA radio module, u-blox, on the MKR NB 1500"
id: 360016119159
---

In case you need to know the firmware version of the u-blox SARA radio module of your MKR NB 1500, here is how to find it:

## Using the Arduino Desktop IDE

1. Ensure that the `MKRNB` library is installed in the Library Manager (`Tools > Manage libraries`).

   ![MKRNB_LibraryManager](img/MKRNB_LibraryManager.png)

2. Select the Arduino MKR NB 1500 as the Board (`Tools > Board: > Arduino SAMD (32-bits ARM Cortex-M0+) Boards > Arduino MKR NB 1500`) and its corresponding Port in (`Tools > Port`).

3. Open the `SerialSARAPassthrough` in `File > Examples > MKRNB`, under _Examples from Custom Libraries_.

   ![Sketch SerialSARAPassthrough](img/MKRNB_SerialSaraPassthroughExample.png)

4. Open serial monitor

5. Set serial monitor dropdown to ‘Both NL & CR’

6. Use AT commands **ATI9** or **AT+CGMR** and press _ENTER_

   * **ATI9:** returns the modem firmware version and the application version of the module:

     ![ATcommand_ATI9](img/ATcommand_ATI9.png)

   * **AT+CGMR:** returns the firmware version of the module together with its release date reported within square brackets:

     ![ATcommand_AT+CGMR](img/ATcommand_AT-CGMR.png)

## Using the Arduino Cloud Editor

1. Click on Libraries and type "MKRNB" in the search box

   ![MKRNB_LibraryManager](img/MKRNB_WebEditorLibrary_0.png)

2. In the MKRNB Library click on `Examples > Tools > SerialSARAPassthrough`

   ![MKRNB_LibrarySerialSARAPassthrough](img/MKRNB_WebEditorLibrary_1.png)

3. Upload ‘SerialSARAPassthrough’ sketch

4. Open serial monitor

5. Set serial monitor dropdown to ‘Both NL & CR’

6. Use AT commands **ATI9** or **AT+CGMR** and press _SEND_

   * **ATI9:** returns the modem firmware version and the application version of the module:

     ![ATcommand_ATI9](img/MKRNB_WebEditorLibrary_2.png)

   * **AT+CGMR:** returns the firmware version of the module together with its release date reported within square brackets:

     ![ATcommand_AT+CGMR](img/MKRNB_WebEditorLibrary_3.png)
