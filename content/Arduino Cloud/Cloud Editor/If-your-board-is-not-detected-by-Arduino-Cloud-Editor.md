---
title: "If your board is not detected by Arduino Cloud Editor"
id: 360018131160
---

If the selected board in Arduino Cloud Editor could not be detected, the board selector will display a red cross.

![Cloud Editor with red cross icon showing in the board selector menu ](img/WebEditor_Red_cross.png)

Learn how to troubleshoot possible issues when connecting a board to the Cloud Editor.

---

## Troubleshooting

> [!NOTE]
> If you are using a Chromebook, see [Use Arduino with Chromebook](https://support.arduino.cc/hc/en-us/articles/360016495639-Use-Arduino-with-Chromebook).

1. Make sure to select the connected board in the board selector. Sometimes the Cloud Editor will show the red cross icon and the name of a board that has been previously connected:

    ![Showcasing the board selector interface with a previously detected device highlighted](img/WebEditor_Dropdown_menu.png)

2. Check that your device is powered. One or more more LEDs should be lit.
3. Ensure you've connected your board with a working data USB cable.
4. If you haven't done so already, [install Arduino Cloud Agent](https://create.arduino.cc/getting-started/plugin/welcome).
5. [Check if the Arduino Cloud Agent is installed and running](https://support.arduino.cc/hc/en-us/articles/4980687506844).
6. **If you're using Safari on macOS:** Check if the HTTPS certificate for Safari has been installed:
    1. Open the Arduino Cloud Agent menu (Look for the ![Arduino Cloud Agent icon](img/cloud-agent-logo-mac.png) icon in the top-right of the menu bar of macOS).
    2. Click on the **Manage HTTPS certificate** menu and make sure that the certificate is installed and trusted.  
       If it’s not, you can click on the button "Install the certificate for Safari".
    3. Enter the administrative credentials, if prompted.
    4. Refresh the Safari browser window.

### Classic Nano boards and boards with generic USB chips

Classic Nano boards and some clone boards with generic USB chips will show up as **"Unknown"** in the board selector. When selecting a **"Unknown"** port you will be prompted to select the board type manually.

Note that:

* If you're using a classic Arduino Nano, you may need to [manually install FTDI drivers](https://support.arduino.cc/hc/en-us/articles/4411305694610-Install-or-update-FTDI-drivers).
* If you're using an Arduino-based "clone" board with a CH340 USB chip, you may need to [manually install CH340 drivers](https://sparks.gogo.co.nz/ch340.html).
