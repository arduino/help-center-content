---
title: "If the Arduino Cloud Agent isn't detected"
id: 360016466600
---

If the Arduino Cloud Agent isn't detected by the [Arduino Cloud](https://cloud.arduino.cc/), you may encounter one of the following warnings:

* `No Cloud Agent Connection`
* `To upload a Sketch via USB port, make sure the Cloud Agent is installed and running on this computer.`
* `Latest Arduino Cloud Agent required`
* `To use Arduino Cloud effectively, you need to install the latest Arduino Cloud Agent. This ensures your device is discoverable and allows you to upload sketches.`

To resolve this issue, follow the [troubleshooting steps](#troubleshooting) below.

---

<a id="troubleshooting"></a>

## Troubleshooting

1. **Install the Arduino Cloud Agent:**  If you haven't already done so, [install the Arduino Cloud Agent](https://create.arduino.cc/getting-started/plugin/welcome). If the Cloud Agent is still not detected, follow the next troubleshooting steps.

2. **Ensure the Arduino Cloud Agent is Running:** Check if the [Arduino Cloud Agent is running](https://support.arduino.cc/hc/en-us/articles/4980687506844), as it may be *off* or *paused*.

3. **Brave Browser Users:** If you are using [Brave Browser](https://brave.com/), see [Use Arduino Cloud with Brave Browser](https://support.arduino.cc/hc/en-us/articles/10482021304988-Use-Arduino-Cloud-with-Brave-Browser) for specific instructions.

4. **Safari on macOS Users:** Ensure the HTTPS certificate for Safari is installed:  
    1. Open the Arduino Cloud Agent menu (Look for the ![Arduino Cloud Agent icon](img/cloud-agent-logo-mac.png) icon in the top-right of the menu bar of macOS).
    2. Click on the *Manage HTTPS certificate* menu and make sure that the certificate is installed and trusted.  
       If it’s not, you can click on the button "Install the certificate for Safari".
    3. Enter the administrative credentials, if prompted.
    4. Refresh the Safari browser window.

5. **Mac Computers with Apple Silicon (e.g., M1 chip):** Ensure you have [installed Rosetta 2](https://support.apple.com/en-us/HT211861).

If you are still experiencing issues, [uninstall the Arduino Cloud Agent](https://support.arduino.cc/hc/en-us/articles/360014869840) and then [reinstall it](https://create.arduino.cc/getting-started/plugin/welcome).
