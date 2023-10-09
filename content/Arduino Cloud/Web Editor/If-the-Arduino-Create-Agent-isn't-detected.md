---
title: "If the Arduino Create Agent isn't detected"
id: 360016466600
---

Learn what to do if the Arduino Create Agent isn't detected by the [Arduino Cloud](https://cloud.arduino.cc/). 

If you haven't done so, [install the Arduino Create Agent](https://create.arduino.cc/getting-started/plugin/welcome). If you still encounter one of the warnings bellow, follow the [troubleshooting steps](#troubleshooting). 

  * `Arduino Create Agent not found`
  * `To upload a sketch via USB port, make sure the Agent is installed and running on this computer` 

---

<a id="troubleshooting"></a>

## Troubleshooting 

1. Check if the [Arduino Create Agent is running](https://support.arduino.cc/hc/en-us/articles/4980687506844-Check-if-the-Arduino-Create-Agent-is-installed-and-running), since sometimes it may be **off** or **paused**.

2. Ensure you are using a [suported browser](https://support.arduino.cc/hc/en-us/articles/360020454099-What-browsers-are-supported-by-the-Web-Editor-). If you are using [Brave Browser](https://brave.com/), see [Use Arduino Cloud with Brave Browser](https://support.arduino.cc/hc/en-us/articles/10482021304988-Use-Arduino-Cloud-with-Brave-Browser).

3. Make sure that the HTTPS Certificates are installed:
    <ol type="I">
      <li>Open the Arduino Create Agent menu (Look for the <img src="img/create-agent-logo-mac.png" alt="Arduino Create Agent icon"> icon in the top-right of the menu bar for macOS and Linux or in the bottom-right of the taskbar within the system tray, for Windows).</li>
      <li>If the <b>Generate and Install HTTPS Certificates</b>option is available, click it. If it's disabled, the certificates are already installed.</li>
      <li>Enter the password if prompted.</li>
      <li>Refresh the browser window.</li>
    </ol>

4. If you're using the [Create Agent on a Mac computer with an Apple Silicon processor](https://github.com/arduino/arduino-create-agent#apple-m1-support) (e.g. Apple M1 chip), make sure to [install Rosetta 2](https://support.apple.com/en-us/HT211861).

If you are still having issues, [uninstall the Arduino Create Agent](https://support.arduino.cc/hc/en-us/articles/360014869840) and [reinstall it](https://create.arduino.cc/getting-started/plugin/welcome).
