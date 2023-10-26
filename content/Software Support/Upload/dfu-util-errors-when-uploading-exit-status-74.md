---
title: "dfu-util errors when uploading (exit status 74)"
---

Many Arduino boards use the **dfu-util** utility to upload sketches to the board. Some of these include:

* Arduino UNO R4 Minima
* Arduino GIGA R1 WiFi

In this article:

* [`Failed uploading: uploading error: exit status 74`](#exit-status-74)
* [`dfu-util: No DFU capable USB device available`](#no-dfu-capable-usb-device-available)
* [`dfu-util: Cannot open DFU device {vid}:{pid} found on devnum {n} (LIBUSB_ERROR_ACCESS)`](#libusb-error-access)
* [`dfu-util: More than one DFU capable USB device found!`](#more-than-one-dfu-capable-usb-device)
* [`Warning: Invalid DFU suffix signature`](#invalid-dfu-suffix-signature)

---

<a id="exit-status-74"></a>

## `Failed uploading: uploading error: exit status 74`

When an upload fails, you may see the message `Failed uploading: uploading error: exit status 74`. This is a generic message indicating that the upload process has failed. The specific exit status code (74) is used by the dfu-util upload utility. To understand the issue, always review the messages that appear before this notification, as they offer more detailed context about the failure.

---

<a id="no-dfu-capable-usb-device-available"></a>

## `dfu-util: No DFU capable USB device available`

This message indicates that no USB devices supporting the DFU upload protocol were found by dfu-util.

Follow these steps to resolve the error:

1. Make sure you have the right board selected in the board selector, or the **Tools > Board** menu. If you're unsure about which board you should use, see [Select board and port in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE).

2. Make sure the device you're using is properly connected with a working USB data cable. Try using a different USB cable, and avoid using USB hubs if possible.

---

<a id="libusb-error-access"></a>

## `dfu-util: Cannot open DFU device {vid}:{pid} found on devnum {n} (LIBUSB_ERROR_ACCESS)`

The message varies depending on the board you are using.

On Linux, this error can be caused by missing udev rules (This is more likely to be the cause if the error appears on the first time you're uploading from the system).

   <a class="link-chevron-right" href="https://support.arduino.cc/hc/en-us/articles/9005041052444-Fix-udev-rules-on-Linux">Fix udev rules on Linux</a>

---

<a id="more-than-one-dfu-capable-usb-device"></a>

## `dfu-util: More than one DFU capable USB device found!`

When uploading a sketch, you may see this error:

```
dfu-util: More than one DFU capable USB device found! Try `--list' and specify the serial number or disconnect all but one device
```

To resolve the error, disconnect any extra boards or dfu capable devices you have connected to your computer.

> **Note:** The port selection is not considered when dfu-util is used for uploading the sketch.

---

<a id="invalid-dfu-suffix-signature"></a>

## `Warning: Invalid DFU suffix signature`

When uploading a sketch, you may receive this warning in the console:

```
Warning: Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release
```

This warning is expected and does not indicate a problem. It is only displayed if [verbose output is enabled](https://support.arduino.cc/hc/en-us/articles/4407705216274) in Preferences. If there are no other warnings or errors in the output, the sketch most likely **uploaded successfully**.

<!-- markdownlint-disable-file HC001 -->
