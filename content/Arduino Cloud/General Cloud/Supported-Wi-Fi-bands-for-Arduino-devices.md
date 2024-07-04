---
title: "Supported Wi-Fi bands for Arduino devices"
id: 14144656051740
---

Arduino boards and most IoT devices can only be used with 2.4 GHz band networks. The 2.4 GHz band offers better range and signal strength through obstacles compared to 5 GHz.

In this article:

- [How to check if your network is 2.4 GHz](#about-network)
- [Creating a 2.4 GHz network with a hotspot](#create-hotspot)

## How to check if your network is 2.4 GHz {#about-network}

Follow these steps to identify the frequency band of your Wi-Fi network.

**Windows:**

1. Open the settings menu in Windows and select the **Network and Internet** section.

1. Under the wireless network settings, click on the **Hardware properties** link.

1. A properties page will open. Here, you can find details about the wireless network, including the network band (GHz).

**macOS:**

1. Connect to the Wi-Fi network.

1. Click on the Wi-Fi icon on the right side of the top navigation bar while holding down the Option/Alt key.

1. Look for the entry starting with **Channel**. This will specify if the network is in the 2.4 GHz or 5 GHz band.

## Creating a 2.4 GHz network with a hotspot {#create-hotspot}

If your network operates on the 5 GHz band, a quick solution is to create a 2.4 GHz network using the hotspot feature on an Android or iPhone device.

### Android Devices

1. Open the hotspot settings on your Android device.

1. Look for an option similar to **Band** and select 2.4 GHz.

![Andriod hotspot settings page](img/Andriod_hotspot_settings.png)

For more information about sharing a mobile connection using a hotspot on Android, see [this guide](https://support.google.com/android/answer/9059108).

### iPhone

1. Open **Settings** and tap **Personal Hotspot**.

1. Toggle Personal Hotspot on.

1. If this option is displayed, tap on **Maximise Compatibility** to use a 2.4 GHz connection (iPhone 11 and earlier models automatically prioritize the 2.4 GHz band for hotspot connections).

1. Edit the "Wi-Fi Password" if needed.

For more information about using a personal hotspot on iPhone, see [this guide](https://it-training.apple.com/tutorials/support/sup040/).
