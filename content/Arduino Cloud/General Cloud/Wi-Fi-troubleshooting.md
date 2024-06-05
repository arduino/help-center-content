---
title: "Wi-Fi troubleshooting"
---

This guide is intended to help you troubleshoot common Wi-Fi connectivity issues with your devices. Follow the steps below to identify and resolve potential issues.

## 1. Frequency Bands: 2.4 GHz vs 5 GHz

read more about that [here](LINK)

## 2. Unique SSID for Network

Avoid using generic names like "default" or "home" to prevent interference and confusion with neighboring networks.

## 3. Reset Network Credentials

If the Wi-Fi connection is not working, you might need to reset the [network credentials](https://support.arduino.cc/hc/en-us/articles/360016495559-Add-and-connect-a-device-to-Arduino-Cloud#:~:text=Click%20the%20Network,adding%20the%20device) for your Thing in Arduino Cloud.

1. Navigate to your [Thing](https://app.arduino.cc/things) that is experiencing Wi-Fi issues.

1. Under **Network**, click the button labeled "Change"

1. Re-enter your Wi-Fi credentials with your Wi-Fi Name (SSID) and Password (Encryption Key). Ensure there are no typos and the credentials match those set on your router.

1. Open the sketch and click the **Upload** button to properly apply the new network settings to your device.

Additionally, you can check the console (serial) output for error messages. This can provide insight into what might be going wrong during the connection process.

## 4. Check Your Power Supply

Wi-Fi connectivity problems are often caused by insufficient power. Since Wi-Fi usage demands more power than normal operations, ensure your device is adequately powered.

- USB hubs might not supply sufficient power, especially if multiple devices are connected. Connect your device directly to a USB port on your computer or a dedicated power source.

- Ensure you are using a high-quality USB cable capable of delivering consistent power.

- Verify that your power supply meets the necessary input voltage for your device. You can find hardware information for your device [here](https://docs.arduino.cc/hardware/).

For more detailed information about power supplies, you can find additional guidance [here](https://support.arduino.cc/hc/en-us/articles/360018922259-What-power-supply-can-I-use-with-my-Arduino-board).
