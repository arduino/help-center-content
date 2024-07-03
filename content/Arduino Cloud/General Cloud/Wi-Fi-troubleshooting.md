---
title: "If your Arduino device can’t connect to a Wi-Fi network"
---

Learn how to troubleshoot Wi-Fi connectivity issues if your Arduino device can't connect to a network. Check the sections below to identify and resolve potential issues.

## 1. Connect to a 2.4 GHz network

Learn more about it [here](https://support.arduino.cc/hc/en-us/articles/14144656051740-Supported-Wi-Fi-bands)

## 2. Avoid common network names

Make sure your Wi-Fi network has a distinct name. Avoid using generic names like 'default' or 'home' to prevent your device from accidentally connecting to a different network with the same name, which can lead to performance issues.

## 3. Reset network credentials for your Thing

### Verifying or changing network credentials in Arduino Cloud

If the Wi-Fi connection is not working, you might need to reset the [network credentials](https://support.arduino.cc/hc/en-us/articles/360016495559-Add-and-connect-a-device-to-Arduino-Cloud#:~:text=Click%20the%20Network,adding%20the%20device) for your Thing in Arduino Cloud.

1. Navigate to the [Thing](https://app.arduino.cc/things) that is experiencing Wi-Fi issues.

1. Under **Network**, click the button labeled "Change"

1. Re-enter your Wi-Fi credentials with your Wi-Fi Name (SSID) and Password (Encryption Key). Ensure there are no typos and the credentials match those set on your router.

1. Open the sketch and click the **Upload** button to properly apply the new network settings to your device.

### Veryfing or changing the credentials defined in the sketch

To verify or change the network credentials directly defined in a sketch, whether the sketch was created in Arduino Cloud or IDE, follow these steps:

1. Locate the section in your Arduino sketch where the network credentials are defined. This is typically found in the main sketch file or inside an `arduino_secrets.h` file.

1. Check the variables for SSID and password to ensure they match your network credentials. You may also need to modify key index if you're using a WEP encrypted network.

1. After making any necessary changes, save the sketch.

1. Upload the modified sketch by clicking the Upload button in the Arduino IDE or Cloud Editor.

Additionally, you can check the console (serial) output for error messages. This can provide insight into what might be going wrong during the connection process.

## 4. Check your power supply

Wi-Fi connectivity problems are often caused by insufficient power. Since Wi-Fi usage demands more power than other operations, ensure your device is adequately powered by:

- USB hubs might not supply sufficient power, especially if multiple devices are connected. Connect your device directly to a USB port on your computer or a dedicated power source.

- Ensure you are using a high-quality USB cable capable of delivering consistent power.

- Verify that your power supply meets the necessary input voltage for your device. You can find hardware information for your device [here](https://docs.arduino.cc/hardware/).

For more detailed information about power supplies, you can find additional guidance [here](https://support.arduino.cc/hc/en-us/articles/360018922259-What-power-supply-can-I-use-with-my-Arduino-board).
