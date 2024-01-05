---
title: "If your device can't be added or won't connect to Arduino Cloud"
id: 360019355679
---

Learn how to resolve problems [adding and connecting devices to Arduino Cloud](https://support.arduino.cc/hc/en-us/articles/360016495559).

In this article:

* [Problems when adding the device to Arduino Cloud](#add-device)
* [Problems uploading the sketch](#sketch-upload)
* [If the device doesn't come online](#device-status)

---

<a id="add-device"></a>

## Problems when adding the device to Arduino Cloud

If there's a problem during the **"Add device"** set-up process, or the device doesn't appear in the Device tab.

### "We could not find any Arduino device"

1. Make sure you're using a [compatible device](https://support.arduino.cc/hc/en-us/articles/360016077320-What-devices-can-be-used-with-Arduino-IoT-Cloud-).

2. [Check if the Arduino Create Agent is installed and running](https://support.arduino.cc/hc/en-us/articles/4980687506844-Check-if-the-Arduino-Create-Agent-is-installed-and-running), then click **Try again**.

3. Double-press the reset button on the board, then click **Try Again**.

4. Try uploading an Example sketch (such as _Examples > Built in > 01.Basics > Blink_) in the [Cloud Editor](https://create.arduino.cc/editor).

   * If your board isn't detected by the Cloud Editor, see [If your board does not appear in the port menu](https://support.arduino.cc/hc/en-us/articles/4412955149586-If-your-board-does-not-appear-in-the-port-menu).

   * If you get an error message when uploading, see [Errors when uploading a sketch](https://support.arduino.cc/hc/en-us/articles/4403365313810-Errors-when-uploading-a-sketch).

### "We were not able to configure your device<br>Something went wrong!"

1. Close any instances Arduino IDE and other applications that may be using the port.

2. [Check if the Arduino Create Agent is installed and running](https://support.arduino.cc/hc/en-us/articles/4980687506844-Check-if-the-Arduino-Create-Agent-is-installed-and-running).

3. Reconnect the device to the computer and make sure the power LED lights up.

### "Arduino Create Agent not found"

1. If you haven't done so already, [install the agent](https://create.arduino.cc/getting-started/plugin/welcome).
2. If you have installed the agent but you still encounter this warning, see [If Arduino Create Agent isn't detected](https://support.arduino.cc/hc/en-us/articles/360016466600-Warning-To-upload-a-sketch-via-USB-port-make-sure-the-Agent-is-installed-and-running-on-this-computer).

### If you don't know the DevEUI for your Arduino board

Make sure to set up your Arduino board as an Arduino device.

![Setup prompt, "Set up an Arduino device" is highlighted](img/setup-device-menu-highlighted.png)

The DevEUI will be automatically added to the device.

### If you don't know the secret key for your device

> _Secrets:_ Secret keys cannot be recovered if lost. Make sure to save any Device ID and Secret key that's provided when adding an Arduino UNO R4 WiFi, Arduino Nano ESP32, or a 3rd party device (ESP32 and ESP8266). 

* Generate a new key by [deleting the device](https://support.arduino.cc/hc/en-us/articles/360018324700-How-to-delete-a-device-from-Arduino-IoT-cloud), then adding it again.

### "We were not able to configure..." during device set-up

When adding your device, you may see one of these messages:

* `Couldn't get the firmware info: Start command: exec: "{runtime.tools.fwupdater.path}/FirmwareUploader": file does not exist`
* `Reset before upload: 1200bps Touch: Open port COMB: Serial port not found`
* `Can't update firmware: Executing command: exit status 1`

These errors can occur if the wireless connectivity module on your board is using an old version[^nina] of the WiFiNINA firmware, that cannot be automatically updated by Arduino Cloud.

[^nina]: 1.4.1 or earlier. To find out which version is on your board, see [Check the WiFiNINA firmware version](https://support.arduino.cc/hc/en-us/articles/9398559561244-Check-the-WiFiNINA-firmware-version).

Solve the issue by updating to the latest firmware version using the **Firmware Updater** in Arduino IDE:

<a class="link-chevron-right" href="https://support.arduino.cc/hc/en-us/articles/360013896579-Use-the-Firmware-Updater-in-Arduino-IDE">Update the firmware in Arduino IDE</a>

---

<a id="sketch-upload"></a>

## Problems uploading the sketch

If there's a problem when uploading the Thing sketch to your device.

### No associated device found

1. Open the [Things tab](https://app.arduino.cc/things) to see which device is associated with the Thing.

2. Make sure the associated device is connected to your computer. To associate a different device, open the Thing and click the **Device selection** button.

### Executing command: exit status 1

This is a generic error message indicating that a process has failed.

1. Click the **Open full editor** button. This will open the same sketch in the Cloud Editor.

2. Upload the sketch and observe the console output.

3. If you get an error message, see [Errors when uploading a sketch](https://support.arduino.cc/hc/en-us/articles/4403365313810-Errors-when-uploading-a-sketch).

### "To upload a sketch via USB port, make sure the Agent is installed and running on this computer"

1. If you haven't done so already, [install the agent](https://create.arduino.cc/getting-started/plugin/welcome).
2. If you have installed the agent but you still encounter this warning, see [If Arduino Create Agent isn't detected](https://support.arduino.cc/hc/en-us/articles/360016466600-Warning-To-upload-a-sketch-via-USB-port-make-sure-the-Agent-is-installed-and-running-on-this-computer).

---

<a id="device-status"></a>

## If the sketch uploads but the device isn't online

If the sketch uploads but the device doesn't come online.

> **Note:** Device status is not supported by the LoRa protocol, see [About device status in Arduino Cloud](https://support.arduino.cc/hc/en-us/articles/4407169649682-About-device-status-in-IoT-Cloud).

1. Go to the [Devices tab](https://app.arduino.cc/devices) and verify that your device has an associated Thing. If not, you must either create and new Thing, or associate an existing Thing with the device.

   ![A linked Thing in the Devices tab.](img/arduino-cloud-device-thing-example-offline.png)

2. Go to the [Things tab](https://app.arduino.cc/things) and open the Thing that's associated to your device. Then go to the [Devices tab](https://app.arduino.cc/devices), and find your device in the list. Under **Network**, click on **Change** and verify that your credentials are correct.

   * **Wi-Fi:** Make sure the name (also called _SSID_) and password (also called _encryption key_ or just _key_) are correct. The password can be revealed by clicking the eye symbol. If you don't know your network name or password, contact your network administrator or the manufacturer of your Wi-Fi access point. If your device has a secret key, make sure it's entered correctly (if you're unsure, remove and re-add the device to generate a new key).
   * **Arduino SIM:** [Use these credentials](https://support.arduino.cc/hc/en-us/articles/360013825159). Make sure a working GSM antenna is connected to the board and that an Arduino SIM plan is activated with [your account](https://store.arduino.cc/digital/subscriptions/plans).

3. Open the Thing's **Sketch tab**. Make sure the right device is selected and re-upload the sketch.

   ![Uploading a sketch in Arduino Cloud.](img/iot-sketch-upload.png)

4. Fully [delete the device](https://support.arduino.cc/hc/en-us/articles/360018324700), then add it again as a new device. For detailed instructions, see [Add and connect a device to Arduino Cloud](https://support.arduino.cc/hc/en-us/articles/360016495559).

5. Test your setup with an example from the [ArduinoIoTCloud library](https://www.arduino.cc/reference/en/libraries/arduinoiotcloud/). Upload using Arduino IDE or the [Cloud Editor](https://create.arduino.cc/editor).

---

## Still need help?

[Contact us](https://www.arduino.cc/en/contact-us/).

<!-- markdownlint-disable-file HC001 -->
<!-- markdownlint-disable-file MD026 -->
