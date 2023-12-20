---
title: "Calibrating the MKR IoT Carrier capacitive buttons"
id: 360021221980
---

The MKR IoT Carrier has five capacitive touch buttons labeled 00, 01, 02, 03, and 04 on the carrier board. These buttons respond to touch when pressed either when the carrier is placed inside the plastic casing or when the carrier is used without the plastic casing.

When any or all of these buttons fail to respond appropriately to touch, the following steps should be taken to calibrate their sensitivity.

## Open the Custom_Sensitivity sketch

Calibration of the button sensitivity can be done in the Arduino IDE or in the [Arduino Cloud Editor](https://create.arduino.cc/editor).

### Using the Arduino IDE

To calibrate the sensitivity of the capacitive buttons via the Arduino IDE, take the following steps.

1. Open the Arduino IDE.

2. Open *Sketch > Include library > Library Manager*. Search for "Arduino_MKRIoTCarrier" and install the latest version.

3. Open *File > Examples > Arduino_MKRIoTCarrier > TouchPads > Custom_Sensitivity*.

### Using the Cloud Editor

1. Open the Cloud Editor

2. Click on **Libraries** and search for "Arduino_MKRIoTCarrier" in the **Search Libraries** field.

3. Under **Arduino_MKRIoTCarrier**, click on **Examples**. Expand the **TouchPads** category and open the `Custom_Sensitivity` sketch.

## Calibrate the button sensitivity

Change the values of the two variables below to calibrate the button sensitivity.

```
unsigned int threshold = 98;
unsigned int threshold_btn_0 = 95;
```

These are then applied with the following lines.

```
carrier.Buttons.updateConfig(threshold);
carrier.Button0.updateConfig(threshold_btn_0);
```

The sensitivity of the `threshold` value will be set for all buttons, except `Button0` which will have its value overwritten by `threshold_btn_0`. By changing these values and uploading the sketch we can change the sensitivity.

If we wanted to set more buttons individually, we could add lines like this.

```
carrier.Buttons.updateConfig(threshold);
carrier.Button0.updateConfig(threshold_btn_0);
carrier.Button1.updateConfig(4);
```

This will set the sensitivity of `Button1` to `4`. You don't need to declare a new variable, you can write it directly as a parameter in `.updateConfig(4)`. But make sure you write this line *after* `carrier.Buttons.updateConfig`, otherwise the changes will be overwritten.

Start with a value of 4 (this is the default value when the plastic case is used). Then, increase or decrease the number until the desired is reached.

---

If the buttons still fail to respond to touch, you may want to rule out hardware failure by [using the serial plotter to monitor the outputs](https://support.arduino.cc/hc/en-us/articles/360021222000).
