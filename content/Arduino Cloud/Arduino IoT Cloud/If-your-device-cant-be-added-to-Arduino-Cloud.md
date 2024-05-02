---
title: "If your device can't be added to Arduino Cloud"
id: 360019355679
---

Learn how to resolve problems [adding and connecting devices to Arduino Cloud](https://support.arduino.cc/hc/en-us/articles/360016495559).

---

## If you don't know the DevEUI for your Arduino board

Make sure to set up your Arduino board as an Arduino device.

![Setup prompt, "Set up an Arduino device" is highlighted](img/setup-device-menu-highlighted.png)

The DevEUI will be automatically added to the device.

---

## If you don't know the secret key for your device

Secret keys cannot be recovered if lost. Make sure to save any Device ID and Secret key that's provided when adding an Arduino UNO R4 WiFi, Arduino Nano ESP32, or a 3rd party device (ESP32 and ESP8266). If you've lost your secret key, you can generate a new key by [deleting the device](https://support.arduino.cc/hc/en-us/articles/360018324700-How-to-delete-a-device-from-Arduino-IoT-cloud), then adding it again.

---

## If you get an error when adding the device

### "We could not find any Arduino device"

1. Make sure you're using a [compatible device](https://support.arduino.cc/hc/en-us/articles/360016077320-What-devices-can-be-used-with-Arduino-IoT-Cloud-).

2. [Check if the Arduino Create Agent is installed and running](https://support.arduino.cc/hc/en-us/articles/4980687506844-Check-if-the-Arduino-Create-Agent-is-installed-and-running), then click **Try again**.

   > [!NOTE]
   > If you're using a **Chromebook** and [Arduino Cloud for Chromebook](https://support.arduino.cc/hc/en-us/articles/360016495639-Use-Arduino-with-Chromebook), there's no need to install the Arduino Create Agent.

3. Double-press the reset button on the board to put the board in [bootloader mode](https://support.arduino.cc/hc/en-us/articles/5779192727068-Reset-your-board#bootloader-mode), then click **Try Again**.

4. Try uploading an Example sketch (such as _Examples > Built in > 01.Basics > Blink_) in the [Cloud Editor](https://app.arduino.cc/).

   * If your board isn't detected by the Cloud Editor, see [If your board does not appear in the port menu](https://support.arduino.cc/hc/en-us/articles/4412955149586-If-your-board-does-not-appear-in-the-port-menu).

   * If you get an error message when uploading, see [Errors when uploading a sketch](https://support.arduino.cc/hc/en-us/articles/4403365313810-Errors-when-uploading-a-sketch).

### "We were not able to configure your device<br>Something went wrong!"

1. Close any instances of Arduino IDE and other applications that may be using the port.

2. [Check if the Arduino Create Agent is installed and running](https://support.arduino.cc/hc/en-us/articles/4980687506844-Check-if-the-Arduino-Create-Agent-is-installed-and-running). If you're using [Arduino Cloud for Chromebook](https://support.arduino.cc/hc/en-us/articles/360016495639-Use-Arduino-with-Chromebook), you can skip this step.

3. Reconnect the device to the computer and make sure the power LED lights up.

### "We were not able to configure..." during device set-up

When adding your device, you may see one of these messages:

* `Couldn't get the firmware info: Start command: exec: "{runtime.tools.fwupdater.path}/FirmwareUploader": file does not exist`
* `Reset before upload: 1200bps Touch: Open port COMB: Serial port not found`
* `Can't update firmware: Executing command: exit status 1`

These errors can occur if the wireless connectivity module on your board is using an old version[^nina] of the WiFiNINA firmware, that cannot be automatically updated by Arduino Cloud.

[^nina]: 1.4.1 or earlier. To find out which version is on your board, see [Check the WiFiNINA firmware version](https://support.arduino.cc/hc/en-us/articles/9398559561244-Check-the-WiFiNINA-firmware-version).

Solve the issue by updating to the latest firmware version using the **Firmware Updater** in Arduino IDE:

<a class="link-chevron-right" href="https://support.arduino.cc/hc/en-us/articles/360013896579-Use-the-Firmware-Updater-in-Arduino-IDE">Update the firmware in Arduino IDE</a>

### "Arduino Create Agent not found"

> [!NOTE]
> If you're using a **Chromebook** and [Arduino Cloud for Chromebook](https://support.arduino.cc/hc/en-us/articles/360016495639-Use-Arduino-with-Chromebook), you can skip this step.

1. If you haven't done so already, [install the agent](https://create.arduino.cc/getting-started/plugin/welcome).
2. If you have installed the agent but still encounter this warning, see [If Arduino Create Agent isn't detected](https://support.arduino.cc/hc/en-us/articles/360016466600-Warning-To-upload-a-sketch-via-USB-port-make-sure-the-Agent-is-installed-and-running-on-this-computer).

---

## Still need help?

Please [contact us](https://www.arduino.cc/en/contact-us/).

<!-- markdownlint-disable-file HC001 -->
<!-- markdownlint-disable-file MD026 -->
