---
title: "Use Arduino with Chromebook"
id: 360016495639
---

> [!WARNING]
> **Arduino Cloud for Chromebook** has been removed from Google Play and is currently unavailable. We are actively working to resolve the issue. In the meantime, you can use the [Arduino Create for Education extension](https://chrome.google.com/webstore/detail/elmgohdonjdampbcgefphnlchgocpaij){.link-external}.

You can write and upload sketches on Chrome OS with the Cloud Editor in Arduino Cloud. The Cloud Editor has an extensive feature set similar to the desktop IDE. While many popular boards are compatible, you should check [the list of compatible boards here](https://support.arduino.cc/hc/en-us/articles/360014779899).

---

## Install Arduino Cloud for Chromebook{#install-arduino-cloud-for-chromebook}

> [!WARNING]
> **Arduino Cloud for Chromebook** has been removed from Google Play and is currently unavailable. We are actively working to resolve the issue. In the meantime, you can use the [Arduino Create for Education extension](https://chrome.google.com/webstore/detail/elmgohdonjdampbcgefphnlchgocpaij){.link-external}.

To use Arduino boards on Chromebook, you need to install the **Arduino Cloud for Chromebook** app. This app handles serial communication with the board and is replacing the previous Chrome Apps[^chrome-apps].

Follow these steps to install Arduino Cloud for Chromebook:

1. Open [Arduino Cloud for Chromebook (Google Play)](https://play.google.com/store/apps/details?id=cc.arduino.create_editor){.link-external}
2. Click the **Install** button on the page.
3. Choose the device and click **Install**.
4. Find the app in the **Launcher** to open it.
5. Sign in to your Arduino account

<a id="compatible"></a>

The currently supported boards include:

* Arduino UNO R4 Minima
* Arduino UNO R4 WiFi
* Arduino UNO (R3 and older revisions)
* Arduino MKR WiFi 1010
* Arduino Nano 33 IoT
* Arduino RP2040 Connect
* Arduino UNO WiFi Rev2

[Learn more about boards compatible with the Cloud Editor](https://support.arduino.cc/hc/en-us/articles/360014779899-Boards-compatible-with-the-Web-Editor){.link-chevron-right}

[^chrome-apps]: Chrome Apps are being [deprecated](https://blog.chromium.org/2020/08/changes-to-chrome-app-support-timeline.html), but are currently still available in the Chrome web store: see <a class="link-external" href="https://chrome.google.com/webstore/detail/arduino-create/dcgicpihgkmccjigalccipmjlnjopdfe">Arduino Create</a> and <a class="link-external" href="https://chrome.google.com/webstore/detail/elmgohdonjdampbcgefphnlchgocpaij">Arduino Create for Education</a>.

---

## Use the Cloud Editor on Chromebook

Follow these steps:

1. Open **Arduino Cloud for Chromebook** from the Launcher or go to [app.arduino.cc](https://app.arduino.cc/) in your browser.

1. If you're not already signed into your Arduino account, you'll be prompted to do so.

1. In the sidebar, select the **Sketches** tab.

1. Choose a sketch to open in the Cloud Editor:

   * **Create a new sketch:** Click on the Create button in the top-right corner and choose New Sketch.
   * **Open a saved sketch:** Click on a sketch you want to open.

1. Connect a [compatible board](https://support.arduino.cc/hc/en-us/articles/360014779899#chromebook) to one of the USB ports on your Chromebook.

1. In the board selector menu, click on the **Detect Device** button.

   ![The Detect Device button.](img/detect-device-button.png)

1. Select the serial port for your board board you're using and click **Connect**. If you're unsure which serial port to use, try disconnecting and reconnecting your device. The serial port for your board will disappear and reappear in the list.

   ![ChromeOS serial port selection prompt with the text "app.arduino.cc wants to connect to a serial port"](img/allow.png)

## Troubleshooting

* Make sure your device is connected using a functional data USB cable and that one or more LEDs on the board are lit.
* Even if no board is detected, try clicking the Upload button to open the **Authorise USB connection** prompt.
* Make sure you’re using the [Arduino Cloud for Chromebook](https://play.google.com/store/apps/details?id=cc.arduino.create_editor) app, **not** the Arduino Create for Education Chrome app.
* Verify that the board is [compatible](https://support.arduino.cc/hc/en-us/articles/360014779899-Boards-compatible-with-the-Web-Editor).
* If you're using either **Nano RP2040 Connect** or **UNO WiFi Rev2**, please follow the special [setup instructions](https://support.arduino.cc/hc/en-us/articles/360014779899-Boards-compatible-with-the-Cloud-Editor#chromebook) for those boards.
* Ensure that the board is not [counterfeit](https://support.arduino.cc/hc/en-us/articles/360020652100-How-to-spot-a-counterfeit-Arduino).

---

Learn more about the Cloud Editor:

* [Cloud Editor in Arduino Docs](https://docs.arduino.cc/arduino-cloud/guides/cloud-editor)
