---
title: "Add a device to Arduino Cloud"
id: 360016495559
---

Learn how to add supported devices to Arduino Cloud. For a more comprehensive introduction to Arduino Cloud, see [Getting Started With the Arduino Cloud](https://docs.arduino.cc/cloud/iot-cloud/tutorials/iot-cloud-getting-started).

In this article:

- [Add an Arduino board via serial (USB)](#add-an-arduino-board-via-serial-usb)
- [Add an Arduino board via Bluetooth](#add-an-arduino-board-via-bluetooth)
- [Add a compatible ESP32, ESP8266, or LoRaWAN device](#add-a-compatible-esp32-esp8266-or-lorawan-device)
- [Add a manually configured device running Python, MicroPython, or Node.js](#add-a-manually-configured-device-running-python-micropython-or-nodejs)

For troubleshooting, see [If your device can't be added to Arduino Cloud](https://support.arduino.cc/hc/en-us/articles/360019355679-If-your-device-can-t-be-added-to-Arduino-Cloud).

---

## Add an Arduino board via serial (USB)

All Arduino boards supported by Arduino Cloud can be added via USB from a computer running the [Arduino Cloud Agent](https://support.arduino.cc/hc/en-us/articles/360014869820-Install-the-Arduino-Cloud-Agent).

Follow these steps:

1. Open the [Devices tab](https://app.arduino.cc/devices) in Arduino Cloud.

1. Click on the **Add Device** button.

1. Select **Arduino boards**.

1. Connect your board to your computer and select it from the list.

   - If you don't see your board, try disconnecting and reconnecting it.

   - If your board is still not detected, try double-pressing the reset button.

1. Confirm the board selection by clicking **Continue**.

1. Wait for Arduino Cloud to make any needed firmware updates. If prompted, disconnect and reconnect the board.

1. **Device configuration**.

   - _Device name._ Use the default name, or change it. The device name can be changed later.
   - _Network._ Input network credentials. If the option does not appear, you can [configure this later in the device tab](https://support.arduino.cc/hc/en-us/articles/14416141314332-Configure-or-change-the-network-credentials-of-a-Thing).
   - _Device Setup / Device Provisioning._

1. After the configuration is complete, the device details page will open automatically.

   - If you configured the network credentials in a previous step (available on supported devices only), it will connect to Arduino Cloud and appear as ONLINE after a few seconds.
   - If the network credentials were not configured in the previous step, the device will be OFFLINE until you associate the device to a **Thing** and upload the sketch to the device. <!-- TODO: Link to article -->

<!-- TODO:

- Save secrets for Nano ESP32

-->

---

## Add an Arduino board via Bluetooth

You can add supported devices via Bluetooth if they are running the preflashed [provisioning sketch](https://docs.arduino.cc/arduino-cloud/hardware/device-provisioning/). When this sketch is active, the onboard LED blinks in a heartbeat pattern (one long pulse followed by two short pulses). If your board is running a different sketch, [add it via USB instead](add-an-arduino-board-via-serial-usb).

Supported boards:

- Arduino Opta WiFi
- Arduino UNO R4 WiFi

Follow these steps:

1. Open the [Devices tab](https://app.arduino.cc/devices) in Arduino Cloud.

2. Click on the **Add Device** button.

3. Select **Arduino boards**.

4. Select **Via Bluetooth**.

5. Select **Select Device**.

   - If prompted, enable Bluetooth for your web browser. Then, restart your web browser and repeat the previous steps.

6. Select and pair your device in the browser dialog.

   If your device does not appear, try the following:

   - Ensure that your device is powered.
   - Reset the board's Cloud configuration:
     - UNO R4 WiFi: Connect Pin 2 and GND, until the LED turns off.
     - Opta: Press and hold the user button (BTN_USER) until the led (LED_USER) turns off.
   - Add the board via Serial (USB) instead.

7. Confirm that the LED on your device is solid and select **Continue**.

8. **Device configuration**.

   - _Device name._ Use the default name, or change it. The device name can be changed later.
   - _Network._ Input network credentials.
   - _Device Setup / Device Provisioning._

9. After completing the device configuration, the device status page will open automatically. The device will connect to Arduino Cloud and appear as ONLINE after a few seconds.

---

## Add a compatible ESP32, ESP8266, or LoRaWAN device

> _Secrets:_ Secret keys cannot be recovered if lost. Make sure to save any Device ID and Secret key that's provided when adding an Arduino UNO R4 WiFi, Arduino Nano ESP32, or a 3rd party device (ESP32 and ESP8266).

1. Open the [Devices tab](https://app.arduino.cc/devices) in Arduino Cloud.

2. Click on the **Add Device** button.

3. Select **Compatible device**.

4. **Device provisioning.**

   1. **Select device type**

      - _ESP8266._ Select your ESP8266 in the list, then click Continue.
      - _ESP32._ Select your ESP32 in the list, then click Continue.
      - _LoRaWAN._ Select the following:
        - _Select region._ Make sure you select the [right frequency band for your region](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country/).
        - _DevEUI._ A unique 64-bit identifier for your LoRaWAN device. Once you've registered a device, you can find its DevEUI within the device's details page in your TTN application. Many LoRaWAN devices also have their DevEUI printed on a label or sticker on the device itself.

   2. **Device name.** Use the default name, or change it. The device name can be changed later.

   3. **Set up device.** Wait for the process to complete. If prompted, save your **Device ID** and **Secret Key**.

5. After the configuration is complete, the device details page will open automatically. The device will be OFFLINE until you associate the device to a **Thing** and upload the sketch to the device.

<!-- If it's the first LoRaWAN device you set up, you will receive an email with the credentials to access [The Things Stack](https://arduino.eu1.cloud.thethings.industries/console/) console, to check the gateways nearby, or set up a new one. -->

Troubleshooting:

- **Error creating Lora device.** Ensure that the DevEUI is correct and not already in use.

---

## Add a manually configured device running Python, MicroPython, or Node.js

1. Open the [Devices tab](https://app.arduino.cc/devices) in Arduino Cloud.

2. Click on the **Add Device** button.

3. Select **Any device** under the Manual Setup section.

4. Confirm the information about manually configured devices by selecting **Continue**.

5. **Device provisioning.**

   - _Select device type._ No input required.
   - _Give a name to the Device._ Use the default name, or change it. The device name can be changed later.
   - _Set up device._ Save your **Device ID** and **Secret Key**. Tick the checkbox to confirm and click **Confirm**.

6. After the configuration is complete, the device details page will open automatically. The device will be OFFLINE until you've configured it to connect to Arduino Cloud using the Device ID and Secret Key you saved in the previous step.

Learn more about manually configured devices:

- [Connect to Arduino Cloud (Python)](https://docs.arduino.cc/arduino-cloud/guides/python)
- [Connect to Arduino Cloud (MicroPython)](https://docs.arduino.cc/arduino-cloud/guides/micropython)
- [Connect to Arduino Cloud (Node.js)](https://docs.arduino.cc/arduino-cloud/guides/javascript)

---

## If you need help

See [If your device can't be added or won't connect to Arduino Cloud](https://support.arduino.cc/hc/en-us/articles/360019355679-If-your-device-is-not-connecting-to-IoT-Cloud).

<!-- markdownlint-disable-file HC001 -->
