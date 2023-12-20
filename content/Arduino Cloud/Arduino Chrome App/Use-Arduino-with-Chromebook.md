---
title: "Use Arduino with Chromebook"
id: 360016495639
---

You can write and upload sketches on Chrome OS with the Cloud Editor in Arduino Cloud. The Cloud Editor has an extensive feature set similar to the desktop IDE. While many popular boards are compatible, you should check [the list of compatible boards here](https://support.arduino.cc/hc/en-us/articles/360014779899).

---

## Install Arduino Cloud for Chromebook

To use Arduino boards on Chromebook, you need to install the **Arduino Cloud for Chromebook** app. This app handles serial communication with the board, and is replacing the previous Chrome Apps[^chrome-apps].

Follow these steps to install Arduino Cloud for Chromebook:

1. Open <a class="link-up-right" href="https://play.google.com/store/apps/details?id=cc.arduino.create_editor">Arduino Cloud for Chromebook (Google Play)</a>
2. Click the **Install** button on the page.
3. Choose the device and click **Install**.
4. Find the app in the **Launcher** to open it.
5. Sign into your Arduino account

The currently supported boards include:

* Arduino UNO R4 Minima
* Arduino UNO R4 WiFi
* Arduino UNO (R3 and older revisions)
* Arduino MKR WiFi 1010
* Arduino Nano 33 IoT
* Arduino RP2040 Connect
* Arduino UNO WiFi Rev2

<a class="link-chevron-right" href="https://support.arduino.cc/hc/en-us/articles/360014779899-Boards-compatible-with-the-Web-Editor">Learn more about boards compatible with the Cloud Editor</a>

[^chrome-apps]: Chrome Apps are being [deprecated](https://blog.chromium.org/2020/08/changes-to-chrome-app-support-timeline.html), but are currently still available in the Chrome web store: see <a class="link-up-right" href="https://chrome.google.com/webstore/detail/arduino-create/dcgicpihgkmccjigalccipmjlnjopdfe">Arduino Create</a> and <a class="link-up-right" href="https://chrome.google.com/webstore/detail/elmgohdonjdampbcgefphnlchgocpaij">Arduino Create for Education</a>.

---

## Use the Cloud Editor

1. Go to [create.arduino.cc/editor](https://create.arduino.cc/editor).
2. If you're not signed into an Arduino account, you will be asked to do so.
3. Connect a [compatible board](https://support.arduino.cc/hc/en-us/articles/360014779899#chromebook) to a USB port on your computer.
4. Select your board in the Boards Dropdown.

   ![The Boards Dropdown in the Cloud Editor.](img/web-editor-boards-dropdown.png)

5. Start writing a new sketch in the editor, or use a sketch from the _Examples_ sidebar.

Learn more about Cloud Editor:

* [Cloud Editor in Arduino Docs](https://docs.arduino.cc/arduino-cloud/guides/cloud-editor)
