---
title: "Use Arduino with Chromebook"
id: 360016495639
---

<!-- markdownlint-disable MD028 -->
> [!IMPORTANT]
> **Arduino Cloud for Chromebook** has been removed from Google Play and is currently unavailable. We are actively working to resolve the issue.

> [!TIP]
> You can now use the Cloud Editor on ChromeOS directly in the Chrome browser. No installation of apps or extensions is required.
>
> [Use the Cloud Editor in the Chrome browser](#use-the-cloud-editor-in-the-chrome-browser){.link-chevron-right}
<!-- markdownlint-enable MD028 -->

You can write and upload sketches on ChromeOS with the Cloud Editor in Arduino Cloud. The Cloud Editor has an extensive feature set similar to the desktop IDE. While many popular boards are compatible, you should check [the list of compatible boards here](https://support.arduino.cc/hc/en-us/articles/360014779899).

---

## About Arduino on Chromebook

The currently supported boards include:

* Arduino UNO R4 Minima
* Arduino UNO R4 WiFi
* Arduino UNO (R3 and older revisions)
* Arduino MKR WiFi 1010
* Arduino Nano 33 IoT
* Arduino RP2040 Connect
* Arduino UNO WiFi Rev2

You can use supported Arduino boards on ChromeOS in the following ways[^chrome-apps]:

* [Use the Arduino Cloud Editor in the Chrome Browser](#use-the-cloud-editor-in-the-chrome-browser)
* ~~[Use the Arduino Cloud for Chromebook app](https://play.google.com/store/apps/details?id=cc.arduino.create_editor)~~ (currently unavailable)

<a id="compatible"></a>

[Learn more about boards compatible with the Cloud Editor](https://support.arduino.cc/hc/en-us/articles/360014779899-Boards-compatible-with-the-Web-Editor){.link-chevron-right}

[^chrome-apps]: The previous "Chrome Apps" are no longer supported, but are still available in the Chrome web store. See <a class="link-external" href="https://chrome.google.com/webstore/detail/arduino-create/dcgicpihgkmccjigalccipmjlnjopdfe">Arduino Create</a> and <a class="link-external" href="https://chrome.google.com/webstore/detail/elmgohdonjdampbcgefphnlchgocpaij">Arduino Create for Education</a>. Note that Chrome Apps will be fully [deprecated](https://blog.chromium.org/2020/08/changes-to-chrome-app-support-timeline.html)

---

## Use the Cloud Editor in the Chrome browser {#use-the-cloud-editor-in-the-chrome-browser}

Follow these steps:

1. Open the Chrome browser and go to [app.arduino.cc](https://app.arduino.cc/).

1. In the sidebar, select the **Sketches** tab.

1. Choose a sketch to open in the Cloud Editor:

   * **Create a new sketch:** Click on the Create button in the top-right corner and choose New Sketch.
   * **Open a saved sketch:** Click on a sketch you want to open.

1. Connect a [compatible board](https://support.arduino.cc/hc/en-us/articles/360014779899#chromebook) to one of the USB ports on your Chromebook.

1. Click on the **Detect Device** button.

   ![The Detect Device button.](img/detect-device-button.png)

1. Select the serial port for the board you're using and click **Connect**.

   > [!TIP]
   > If you're unsure which serial port to use, try disconnecting and reconnecting your device. The serial port for your board will disappear and reappear in the list.

   ![ChromeOS serial port selection prompt with the text "app.arduino.cc wants to connect to a serial port"](img/allow.png)

1. Click the **Upload** button to start uploading your sketch to the board.

1. Depending on your board, additional steps may be required:

   * **If you get an "Authorize USB connection" prompt:**
     1. **If you're using a UNO R4 WiFi:** Double-press the reset button before continuing.
     1. Click on **Select Port** and select your board in the list. The board may appear with a different name than before. Avoid disconnecting your board at this point, since this will cause it to exit the upload mode.

   * **If a Save File dialog opens:** Select **RPI-RP2** and click **Save**.

     ![Saving the sketch to the RP2040 mass storage device.](img/rp2040-save-file.png)

---

## Troubleshooting

* Verify that the board is [compatible](https://support.arduino.cc/hc/en-us/articles/360014779899-Boards-compatible-with-the-Web-Editor).
* Make sure your device is connected using a functional data USB cable and that one or more LEDs on the board are lit.
* If you're a **UNO WiFi Rev2**, please follow these [instructions to enable ChromeOS uploads](https://docs.arduino.cc/tutorials/uno-wifi-rev2/uno-wifi-r2-chromebook-installation).
* Ensure that the board is not [counterfeit](https://support.arduino.cc/hc/en-us/articles/360020652100-How-to-spot-a-counterfeit-Arduino) and note that some third-party derivates of official Arduino boards are not compatible.
