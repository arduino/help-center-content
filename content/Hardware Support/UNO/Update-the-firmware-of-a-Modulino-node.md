---
title: "Update the firmware of a Modulino node"
id: 16205756022172
---

Learn how to update the firmware of a [Modulino node](https://store-usa.arduino.cc/products/plug-and-make-kit?srsltid=AfmBOopomr-DZVLRzl_VhXSSemiNa75qfABCHjqhvLQs7vz9_2PLgQN9#:~:text=technology%20%E2%80%93%20and%20yours.-,What%20are%20Modulino%C2%AE%3F,-Modulino%C2%AE%20are%20sensors).

Updating the firmware may be necessary to resolve issues with Modulino nodes.

In this article:

* [Update Modulino firmware in Arduino IDE](#ide)
* [Update Modulino firmware in Arduino Cloud Editor](#iot)

---

## Update Modulino firmware in Arduino IDE {#ide}

1. Connect the Modulino to your Arduino UNO R4 WiFi.

2. Connect the board to your computer and open Arduino IDE.

3. [Go to the Library Manager](https://support.arduino.cc/hc/en-us/articles/5145457742236-Add-libraries-to-Arduino-IDE) and install the [Modulino](https://docs.arduino.cc/libraries/modulino/) and [ArduinoGraphics](https://docs.arduino.cc/libraries/arduinographics/) libraries.

4. In the top menu bar, open **File > Examples > Modulino > Utilities > FirmwareUpdater**.

5. Click ![Upload button](img/symbol_upload2.png) **Upload** to upload the sketch to your Arduino UNO R4 WiFi.

6. The firmware update is complete when the sketch is successfully uploaded to the board and the text `PAS` is displayed on the LED matrix.

7. You can now test the Modulino by uploading an example from **File > Examples > Modulino**.

---

## Update Modulino firmware in Arduino Cloud Editor {#iot}

1. Connect the Modulino to your Arduino UNO R4 WiFi.

2. Connect the board to your computer.

3. Open the FirmwareUpdater example:

    * Click [here to open it directly](https://app.arduino.cc/sketches/examples?nav=Examples&eid=modulino_0_4_2%2Fexamples%2FUtilities%2FFirmwareUpdater&slid=modulino_0_4_2){.link-external}
    * Alternatively, open the Cloud Editor, go to **Examples > From Libraries**, search for "Modulino," and open **Modulino > Utilities > FirmwareUpdater**.

4. Click ![Upload button](img/symbol_upload_cloud.png) **Upload** to upload the sketch to your Arduino UNO R4 WiFi.

5. The firmware update is complete when the sketch is successfully uploaded to the board and the text `PAS` is displayed on the LED matrix.

6. You can now test the Modulino by [importing a Modulino Template](https://support.arduino.cc/hc/en-us/articles/14826942993308-Import-an-Arduino-Cloud-Template).
