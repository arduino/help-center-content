---
title: "If you see a \"jtagmkII_initialize(): Cannot locate 'flash' and 'boot' memories in description\" message when uploading to Nano Every"
id: 4405239282578
---

When uploading a sketch to **Arduino Nano Every**, this warning message may appear in the console output:

```
”avrdude: jtagmkII_initialize(): Cannot locate "flash" and "boot" memories in description"
```

The message is spurious and **does not** indicate a failed sketch upload or any other problem that requires action.

In this article:

* [About the warning message](#about)
* [How to tell if the sketch was uploaded](#how-to-tell-if-the-sketch-was-uploaded)
* [What you can do](#what-you-can-do)

---

## About the warning message {#about}

The warning message occurs because the microcontroller on the Nano Every does not define a boot section that is expected by the version of the **avrdude** upload utility used in the Arduino megaAVR Boards package. Since this does not stop the upload from completing successfully, the warning is spurious, and has been fixed in later versions of avrdude[^1]. Due to compatibility considerations, the Arduino megaAVR Boards package continues to use an older version of avrdude without this fix.

[^1]: <https://github.com/avrdudes/avrdude/pull/789>

---

## How to tell if the sketch was uploaded {#how-to-tell-if-the-sketch-was-uploaded}

If verbose upload output is disabled, a **successful sketch upload** for Nano Every will look something like this:

```
Sketch uses 1118 bytes (2%) of program storage space. Maximum is 49152 bytes.
Global variables use 22 bytes (0%) of dynamic memory, leaving 6122 bytes for local variables. Maximum is 6144 bytes.
avrdude: jtagmkII_initialize(): Cannot locate "flash" and "boot" memories in description
```

If the sketch upload fails, this will be indicated by other error messages, like `avrdude: jtagmkII_getsync(): sign-on command: status -1`. See [Errors when uploading a sketch](https://support.arduino.cc/hc/en-us/articles/4403365313810-Errors-when-uploading-a-sketch) for help.

---

## What you can do {#what-you-can-do}

These are some things you can do if you encounter the warning message:

* Ignore the warning message. It will not prevent your sketch from uploading.
* Enable verbose upload output. This will not remove the warning, but the additional console output from avrdude will provide clearer confirmation of a successful upload. When verbose upload output is enable, a successful sketch upload will look something like this:

  ```
  Writing | ################################################## | 100% 0.01s

  avrdude: 1 bytes of fuse8 written

  avrdude done.  Thank you.
  ```

  To enable verbose output, see [Use verbose output in the Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4407705216274-Use-verbose-output-in-the-Arduino-IDE).

* Use a third-party board package with a newer version of avrdude, such as [MegaCoreX](https://github.com/MCUdude/MegaCoreX).
  * Installation instructions for MegaCoreX can be found [here](https://github.com/MCUdude/MegaCoreX?tab=readme-ov-file#boards-manager-installation).

<!-- markdownlint-disable-file HC006 -->
