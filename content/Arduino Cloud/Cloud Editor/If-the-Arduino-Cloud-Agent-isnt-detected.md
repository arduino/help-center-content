---
title: "If the Arduino Cloud Agent isn't detected"
id: 360016466600
---

Learn what to do if the Arduino Cloud Agent isn't detected by the [Arduino Cloud](https://cloud.arduino.cc/).

If you haven't done so, [install the Arduino Cloud Agent](https://create.arduino.cc/getting-started/plugin/welcome). If you still encounter one of the warnings bellow, follow the [troubleshooting steps](#troubleshooting).

* `Arduino Cloud Agent not found`
* `To upload a sketch via USB port, make sure the Agent is installed and running on this computer`

---

<a id="troubleshooting"></a>

## Troubleshooting

1. Check if the [Arduino Cloud Agent is running](https://support.arduino.cc/hc/en-us/articles/4980687506844), since sometimes it may be **off** or **paused**.

2. If you are using [Brave Browser](https://brave.com/), see [Use Arduino Cloud with Brave Browser](https://support.arduino.cc/hc/en-us/articles/10482021304988-Use-Arduino-Cloud-with-Brave-Browser).

3. **If you're using Safari on macOS:** Check if the HTTPS certificate for Safari has been installed:
    1. Open the Arduino Cloud Agent menu (Look for the ![Arduino Cloud Agent icon](img/cloud-agent-logo-mac.png) icon in the top-right of the menu bar of macOS).
    2. Click on the **Manage HTTPS certificate** menu and make sure that the certificate is installed and trusted.  
       If it’s not, you can click on the button "Install the certificate for Safari".
    3. Enter the administrative credentials, if prompted.
    4. Refresh the Safari browser window.

4. If you're using the [Cloud Agent on a Mac computer with an Apple Silicon processor](https://github.com/arduino/arduino-create-agent#apple-m1-support) (e.g. Apple M1 chip), make sure to [install Rosetta 2](https://support.apple.com/en-us/HT211861).

If you are still having issues, [uninstall the Arduino Cloud Agent](https://support.arduino.cc/hc/en-us/articles/360014869840) and [reinstall it](https://create.arduino.cc/getting-started/plugin/welcome).
