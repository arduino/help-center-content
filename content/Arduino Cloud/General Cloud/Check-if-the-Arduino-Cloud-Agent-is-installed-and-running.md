---
title: "Check if the Arduino Cloud Agent is installed and running"
id: 4980687506844
---

Learn how to check if the **Arduino Cloud Agent** is installed and running on your computer.

---

1. **Find and start the Cloud Agent:** Try searching for "Arduino Cloud Agent" or looking for it in your application menu. Alternatively, use the system's file browser and look in the default installation paths:

   * *Windows:* `C:\Users\{username}\AppData\Roaming\ArduinoCloudAgent\Arduino_Cloud_Agent.exe`

   * *macOS:* `/Applications/ArduinoCloudAgent.app` [^1]

   * *Linux* `home/{username}/ArduinoCloudAgent/ArduinoCloudAgent`

   If you **can't find the application**, follow the [online installation guide](https://create.arduino.cc/getting-started/plugin/welcome) to install the agent.

2. **Make sure the Cloud Agent is running:**

   * **Find the Cloud Agent icon:**  Look for the ![Arduino Cloud Agent icon](img/cloud-agent-logo-mac.png) icon. On *macOS* and *Linux*, it is located in the top-right corner of the menu bar. On *Windows*, you will find it in the bottom-right corner of the taskbar, usually within the system tray.

     ![The Cloud Agent in the system tray on Windows.](img/cloud-agent-system-tray.png)

   * **Resume if paused:** Click the ![Arduino Cloud Agent icon](img/cloud-agent-logo-mac.png) icon to open the menu. If you see the option _Resume Agent_, it indicates the agent is paused. Click _Resume Agent_ to resume.

[^1]: In macOS, older versions of the agent can be found at:

      * `/Applications/ArduinoCreateAgent.app`
      * `Users/{username}/Applications/ArduinoCreateAgent`
