---
title: "FTDI driver installation fails in IDE 1.8 (Windows)"
---

Installing the drivers for an FTDI FT232R-based board, such as an official Classic Arduino Nano, involves pointing the driver installation wizard to the Arduino IDE installation driver subfolder. In some cases, the installation may fail with the below error message.

```
The hash for the file is not present in the specified catalog file. The file is likely corrupt or the victim of tampering.
```

Use one of the methods below to resolve the problem.

---

## Download and install the latest FTDI driver

1. Download the driver executable file from FTDI's website [here](https://ftdichip.com/drivers/vcp-drivers/) into the Arduino drivers folder on your computer and run it from there.
2. In the dialogue box that opens, extract the executable installation file.
3. On the **FTDI CDM Drivers** dialogue page, click on **Extract**.
4. Click on **Next** in the **Device Driver Installation Wizard** dialogue page.
5. Click **I accept this agreement** and click **Next** in the **License Agreement** dialogue page.
6. Click **Finish** to complete the installation.

## Disable driver signature enforcement in Windows

Temporarily disable driver signature enforcement in Windows and then install the driver.

* For Windows 8 and 8.1, follow the steps [here](https://www.manula.com/manuals/tridentrfid/timemachine/1/en/topic/how-to-disable-driver-signature-enforcement-under-windows-8-and-8-1).
* For Windows 10, follow the steps [here](https://www.auslogics.com/en/articles/disable-driver-signature-enforcement-on-windows-10/).
