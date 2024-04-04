---
title: "Configure your network for Arduino Cloud"
id: 360017279260
---

## Cannot Connect Arduino to a School / Enterprise Wi-Fi Network

Internet access in Schools can vary depending on the end user, device type and the Wi-Fi network type you have installed in schools. Most schools today are switching to using a WEP2-Enterprise networks as a safe and a secure way to access the internet for students, teachers and other staff.

Setting up Arduino to access the internet via the school network can be challenging. This guide aims to walk you through the steps to connect your Arduino board to the school network and access our IoT features.

The WPA2 (Enterprise) RADIUS combination affords networks the highest level of cybersecurity, especially when X.509 digital certificates are used for authentication. WPA2 Enterprise requires an 802.1X authentication server anyway, so it's only logical to implement the best possible authentication security during configuration. However, WPA2 - Enterprise **doesn't work with Arduino Devices**.

### Troubleshooting Solutions

Find out the type of Wi-Fi network implemented on your school premises. If you are using any sort of WEP/WEP2 personal networks in your school besides the main network that essentially only requires an SSID (the name of the Wi-Fi connection) and password, you are good to go.

Reach out to your school administrator and recommend creating a subnetwork specifically for connecting your Arduino devices using WEP/WEP2. This network would have limited access and can only be used for IoT purposes.

If you don't have access to or can't create a separate WEP/WEP2 network, you can create a hotspot using your mobile device and try to connect your devices to it. Keep in mind that this solution is temporary and restrictive, primarily suitable for testing purposes. It's not intended for prolonged deployment.

## Domains and Ports

The Arduino Cloud uses the following domains and ports, which need to be whitelisted in your firewall.

| Domain                    | Port |
| ------------------------- | ---- |
| `mqtts-up.iot.arduino.cc` | 8884 |
| `mqtts-sa.iot.arduino.cc` | 8883 |
| `wss.iot.arduino.cc`      | 8443 |

You will also need to allow NTP access on port 123 UDP for `time.arduino.cc`.

> [!NOTE]
> A home network with a default configuration will usually not prevent any Arduino Cloud connections. You do not need to add any of the configurations above unless you're experiencing problems, or will be using the service on a restricted network.
