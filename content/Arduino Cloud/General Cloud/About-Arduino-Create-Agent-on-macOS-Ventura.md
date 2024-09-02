---
title: About Arduino Cloud Agent on macOS Ventura
id: 6489572696220
---

> [!NOTE]
> MacOS Ventura introduced new security requirements that resulted in issues running or installing the Arduino Cloud Agent. As a temporary solution, a special release[^1] was made for macOS Ventura with the auto-update feature disabled. These issues have been resolved in newer releases (1.3.0+).

Learn about using the Arduino Cloud Agent on macOS Ventura.

---

## Arduino Cloud Agent 1.3.0+ supports macOS Ventura

[^1]: <https://github.com/arduino/arduino-create-agent/releases/tag/1.2.7-ventura>

Here's how to get the latest version:

* If you're installing Arduino Coud Agent for the first time, use the **[Arduino Cloud agent installation guide](https://create.arduino.cc/getting-started/plugin/welcome)** to get the latest version.
* If you previously installed the **1.2.7-ventura** version, see [Manually upgrade from Cloud Agent 1.2.7-ventura on macOS](#1.2.7-ventura-upgrade).
  * Unsure which version you have? See [Check your Cloud Agent version](#check-version).

---

<a id="check-version"></a>

## Check your Cloud Agent version

  [Find more information here](https://support.arduino.cc/hc/en-us/articles/4407002993426)

<a id="1.2.7-ventura-upgrade"></a>

## Manually upgrade from Cloud Agent 1.2.7-ventura on macOS

Follow these steps to uninstall 1.2.7-ventura:

1. If the Cloud Agent is running, select ![Cloud Agent icon](img/cloud-agent-logo-mac.png) **> Quit Agent** in the menu bar.

2. Open Finder and go to your user folder. If you're having trouble finding it, right-click Downloads or Documents in the sidebar, and select _Show in Enclosing Folder_, or press <kbd>Shift</kbd> + <kbd>⌘</kbd> + <kbd>H</kbd>.

3. Open the Applications folder (`~/Applications`) within your user folder.

4. Manually remove the ArduinoCloudAgent folder, or run the `uninstall.app` inside it.

Now you're ready to install the latest Cloud Agent release:

1. Open the [Arduino Cloud agent installation guide](https://create.arduino.cc/getting-started/plugin/welcome).

2. Follow the instructions. If you need help, see [Install the Arduino Cloud Agent](https://support.arduino.cc/hc/en-us/articles/360014869820).
