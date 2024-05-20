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
> If you are using a Chromebook, make sure to install the <a class="link-up-right" href="https://play.google.com/store/apps/details?id=cc.arduino.create_editor">Arduino Cloud for Chromebook app</a>.

1. Make sure to select the connected board in the board selector. Sometimes the Cloud Editor will show the red cross icon and the name of a board that has been previously connected:

    ![Showcasing the board selector interface with a previously detected device highlighted](img/WebEditor_Dropdown_menu.png)

2. Check that your device is powered. One or more more LEDs should be lit.
3. Ensure you've connected your board with a working data USB cable.
4. If you haven't done so already, [install Arduino Create Agent](https://create.arduino.cc/getting-started/plugin/welcome).
5. [Check if the Arduino Create Agent is installed and running](https://support.arduino.cc/hc/en-us/articles/4980687506844-Check-if-the-Arduino-Create-Agent-is-installed-and-running).
6. Check if the HTTPS certificate for macOS Safari has been installed:
    1. Open the Arduino Create Agent menu (Look for the ![Arduino Create Agent icon](img/create-agent-logo-mac.png) icon in the top-right of the menu bar of macOS).
    2. Click on the **Manage HTTPS certificate** menu and make sure that the certificate is installed and trusted.  
       If it’s not, you can click on the button "Install the certificate for Safari".
    4. Enter the administrative credentials, if prompted.
    5. Refresh the Safari browser window.

### Classic Nano boards and boards with generic USB chips

Classic Nano boards and some clone boards with generic USB chips will show up as **"Unknown"** in the board selector. When selecting a **"Unknown"** port you will be prompted to select the board type manually.

Note that:

* If you're using a classic Arduino Nano, you may need to [manually install FTDI drivers](https://support.arduino.cc/hc/en-us/articles/4411305694610-Install-or-update-FTDI-drivers).
* If you're using an Arduino-based "clone" board with a CH340 USB chip, you may need to [manually install CH340 drivers](https://sparks.gogo.co.nz/ch340.html).
