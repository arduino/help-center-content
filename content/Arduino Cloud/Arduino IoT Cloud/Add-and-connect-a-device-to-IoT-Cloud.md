---
title: "Add and connect a device to IoT Cloud"
id: 360016495559
---

> Also see [Getting Started With the Arduino IoT Cloud](https://docs.arduino.cc/cloud/iot-cloud/tutorials/iot-cloud-getting-started) in Arduino Docs.

Connecting a new device to Arduino IoT Cloud consists of three steps:

1. [Add the device to IoT Cloud](#add-the-device). Enables the device for use with IoT Cloud.
2. [Configure the device as a Thing](#create-thing). This will generate a sketch that can be uploaded to the device, allowing it to connect to IoT Cloud.
3. [Upload the sketch to the device](#upload-sketch). Upload the Thing sketch to the device.

You'll need an Arduino account and the [Arduino Create Agent](https://support.arduino.cc/hc/en-us/articles/360014869820) installed and running on your computer.

---

## Set-up instructions

<a id="add-the-device"></a>

### Step 1: Add the device

1. Go to Arduino IoT Cloud and open the [Devices tab](https://create.arduino.cc/iot/devices).

2. Click the **Add Device** button in the top-right or middle of the page.

   ![The two location that the "Add Device" button can appear.](img/device-add-button.png)

3. Select your device type:

   * _Set up an Arduino device:_ For Arduino boards.
   * _Set up a 3rd Party Device:_ ESP8266, ESP32, and more.

   > Hover over the <kbd>i</kbd> for a full list of compatible devices.

4. **Proceed with the instructions to add your device.**

   * _ESP32 and ESP8266:_ Make sure to save any Device ID and Secret key that's provided.
   * _LoRaWAN<sup>®</sup>:_ Make sure you select the [right frequency band for your region](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country/). When completing the setup you'll receive a registration email for your [The Things Stack Network Account](https://docs.arduino.cc/cloud/iot-cloud/tutorials/cloud-lora-getting-started#step-2-registering-the-things-stack-network-account).

5. When finished, your new device will be added to your list of devices. Note that it will have an _offline_ status at this point.

   ![A MKR WiFi 1010 in the Device tab.](img/iot-device-added.png)

<a id="create-thing"></a>

### Step 2: Create and configure a Thing

1. Open the [Things tab](https://create.arduino.cc/iot/things).

2. Click **Create Thing**.

   ![The two location that the "Create Thing" button can appear.](img/iot-thing-create.png)

3. Configure **Device** and **Network** for the new Thing:

   ![A new, unconfigured Thing.](img/thing-setup-before.png)

   * Click the **Device selection** button and select your device.

   * Click the **Network configure** button and enter the network credentials.

      * _Wi-Fi:_ Enter your Wi-Fi name (SSID) and password (encryption key).
      * _Arduino SIM:_ [Use these credentials](https://support.arduino.cc/hc/en-us/articles/360013825159-What-are-the-credentials-for-the-Arduino-SIM-card).
      * _Arduino with LoRa<sup>®</sup>:_ The credentials are added automatically.
      * _ESP32 and ESP8266:_ Enter the secret key that was provided when adding the device.

   ![A Thing with an associated device, network configuration, and added variable.](img/thing-setup-after.png)

<a id="upload-sketch"></a>

### Step 3: Upload the Thing sketch

1. With the Thing open, open the **Sketch** tab.

2. Click the **Upload button** and wait for the process to complete.

   ![Uploading the Thing sketch.](img/iot-sketch-upload.png)

3. When the upload is finished, go back to the Thing setup tab.

4. After a short while, your device should come online. You may have to refresh the page.

   ![A thing in IoT Cloud. The associated device is online.](img/iot-device-online.png)

   > **Note:** Device status is not supported by the LoRa protocol, see [About device status in IoT Cloud](https://support.arduino.cc/hc/en-us/articles/4407169649682-About-device-status-in-IoT-Cloud).

---

## Troubleshooting

See [If your device can't be added or won't connect to IoT Cloud](https://support.arduino.cc/hc/en-us/articles/360019355679-If-your-device-is-not-connecting-to-IoT-Cloud).
