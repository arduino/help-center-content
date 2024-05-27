---
title: "Wi-Fi troubleshooting"
---

This guide is intended to help you troubleshoot common Wi-Fi connectivity issues with your devices. Follow the steps below to identify and resolve potential issues.

## 1. Frequency Bands: 2.4 GHz vs 5 GHz

### Use the 2.4 GHz Band for IoT Devices

Arduino boards and most IoT devices work better on the 2.4 GHz band. The 2.4 GHz band offers better range and signal strength through obstacles compared to 5 GHz.

### How to Check if Your Network is 2.4 GHz

Follow these steps to identify the frequency band of your Wi-Fi.

**Windows:**

1. Open the settings menu in Windows and select the **Network and Internet** section.

1. Under the wireless network settings, click on the **Hardware properties** link.

1. A properties page will open. Here you can find details about the wireless network, including the network band (GHz).

**macOS:**

1. Click on the Apple menu in the top-left corner of your screen and select **System Preferences**.

1. In the System Preferences window, click on the **Network** icon.

1. Select the Wi-Fi connection from the list on the left-hand side. Click on the **Advanced** button in the bottom-right corner.

1. In the **Wi-Fi** tab, you'll find information about the Wi-Fi connection, including the frequency band (GHz).

### Creating a 2.4 GHz Network with a Hotspot

If your network operates on the 5 GHz band, a quick solution is to create a 2.4 GHz network using the hotspot feature on an Android or iPhone device. iPhone hotspots typically prioritize the 2.4 GHz band by default. Android devices offer users the option to manually select their preferred band for hotspot connections.

![Andriod hotspot settings page](img/Andriod_hotspot_settings.png)

## 2. Unique SSID for Network

Avoid using generic names like "default" or "home" to prevent interference and confusion with neighboring networks.

## 3. Reset Network Credentials

If the Wi-Fi connection is not stable or not working at all, you might need to reset the [network credentials](https://support.arduino.cc/hc/en-us/articles/360016495559-Add-and-connect-a-device-to-Arduino-Cloud#:~:text=Click%20the%20Network,adding%20the%20device) for your Thing in Arduino Cloud.

1. Navigate to your [Thing](https://app.arduino.cc/things) that is experiencing Wi-Fi issues.

1. Under **Network**, click the button labeled "Change"

1. Re-enter your Wi-Fi credentials with your Wi-Fi Name (SSID) and Password (Encryption Key). Ensure there are no typos and the credentials match those set on your router.

1. Open the sketch and click **Upload** button to properly apply the new network settings to your device.

Additionally, you can check the console (serial) output for error messages. This can provide insight into what might be going wrong during the connection process.
