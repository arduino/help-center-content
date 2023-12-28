---
title: "Configure a device for a network that doesn't use all the parameters in Arduino Cloud"
id: 5940204842780
---

> **Note:** Open Wi-Fi networks that require you to interact with a web page (captive portal) before you can access the Internet cannot be used by Arduino Cloud devices.

A network configuration in Arduino Cloud cannot be saved unless network parameters for all fields are provided. Some networks may not have all parameters, such as:

* Open (unencrypted) Wi-Fi networks
* GSM connections not requiring SIM PIN, or account credentials (username and password).

To use a device with these networks, you can [set the network parameters in the Cloud Editor](#set-with-cloud-editor) instead.

---

<a id="set-with-cloud-editor"></a>

## Set network parameters in the Cloud Editor

1. Open your Thing in [Arduino Cloud](https://app.arduino.cc/things).

2. Click the **Sketch** tab.

3. Click **Open full editor** to view the sketch in the Cloud Editor.

   ![The "Open full editor" button.](img/iot-open-full-editor.png)

4. Open the `thingsProperties.h` tab.

   ![The SSID[] and PASS[] variables.](img/web-editor-properties-open-wifi.png)

5. Find the rows where the `SECRET` variables are assigned, like:

   ```arduino
   const char SSID[]     = SECRET_SSID;    // Network SSID (name)
   const char PASS[]     = SECRET_PASS;    // Network password (use for WPA, or use as key for WEP)
   ```

6. Assign an empty string (`""`) to the parameters you **don't** want to use.

   ```arduino
   const char SSID[]     = SECRET_SSID;    // Network SSID (name)
   const char PASS[]     = "";    // Network password (use for WPA, or use as key for WEP)
   ```

7. Go to the `Secret` tab and verify that remaining secrets (such as `SECRET_APN` or `SECRET_SSID`) are correct.

   ![The "Secret" tab with a SECRET_SSID variable.](img/web-editor-secrets-open-wifi.png)

8. Click the ![Cloud Editor Upload button](img/icon_web-editor-upload.png) **Upload** button to upload directly from the Cloud Editor, or go back to Arduino Cloud and upload from the sketch tab.

> **Note:** Each time the sketch is updated from Arduino Cloud (by adding or changing Variables), the changes made to `thingsProperties.h` in the Cloud Editor will be overwritten. To upload the sketch again, simply repeat the steps above.

---

## Examples

Here are some example network configurations that can be declared in `thingsProperties.h`.

Remember to set the remaining secrets in the `Secret` tab.

### Open Wi-Fi network

> **Note:** Open Wi-Fi networks that require you to interact with a web page (captive portal) before you can access the Internet cannot be used by Arduino Cloud devices.

```arduino
const char SSID[]     = SECRET_SSID; // Network SSID (name)
const char PASS[]     = "";          // Network password (use for WPA, or use as key for WEP)
```

### Open Wi-Fi network (ESP32)

> **Note:** Open Wi-Fi networks that require you to interact with a web page (captive portal) before you can access the Internet cannot be used by Arduino Cloud devices.

```arduino
const char SSID[]        = SECRET_SSID;          // Network SSID (name)
const char PASS[]        = "";                   // Network password (use for WPA, or use as key for WEP)
const char DEVICE_KEY[]  = SECRET_DEVICE_KEY;    // Secret device password
```

### Third-party GSM provider

```arduino
const char GPRS_APN[]      = SECRET_APN; // "APN"
const char PINNUMBER[]     = "";         // "PIN"
const char GPRS_LOGIN[]    = "";         // "Username"
const char GPRS_PASSWORD[] = "";         // "Password"
```

---

## Save the modified lines in a tab for quick access

To make it easier to restore your configuration after updating your sketch, you can keep the modified lines in a different tab:

1. To the right of the tab row, click ▼.

2. Click _Add Tab_.

3. Give the new tab a name like "NetworkConfig".

4. Copy and paste the modified lines from `thingsProperties.h` and paste them in this file.

   ![A custom tab named "NetworkConfig" in the Cloud Editor.](img/web-editor-network-config-tab.png)

5. When you need to restore your network configuration, copy and paste the edited lines into the `thingsProperties.h` tab.
