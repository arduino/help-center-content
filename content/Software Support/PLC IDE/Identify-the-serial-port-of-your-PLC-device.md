---
title: "Identify the serial port of your PLC device"
id: 16724283965596 
---

Learn how to find the serial ports to use for your device in Arduino PLC IDE.

---

## About serial ports in Arduino PLC IDE

> [!TIP]
> For instructions on how to set up your PLC device in PLC IDE, see [Arduino PLC IDE Setup & Device License Activation](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license).

When using Arduino PLC devices you may see two different serial ports:

* _The standard serial port._
  * Port for serial communication, same as any Arduino board.
  * Target this port when [installing the runtime](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license/#3-download-the-runtime).
* _The virtual Modbus port._
  * This port is created when the runtime is installed and running.
  * Target this port when [configuring the connection](https://docs.arduino.cc/software/plc-ide/tutorials/plc-ide-setup-license/#4-connect-to-the-device) (**On-line > Set up communication**).
  * Because this port is created later, it will usually have a higher "COM port" number.

Here are some tips for using serial ports in Arduino PLC IDE:

* All serial ports on your system will be available Arduino PLC IDE. This includes those of other Arduino boards, or virtual communication ports for built-in connectivity interfaces.
* Arduino PLC IDE only displays the COM port number for each port, so it can be helpful to limit the number of serial ports to choose from by disconnect unused USB devices.
* To refresh the list of ports in the runtime installation widget, select **Project > Refresh current target**.
* To refresh the list of ports when configuring the connection (**On-line > Set up communication**), close and reopen the **Modbus Config** window.

## Check COM port numbers in Device Manager

If you are unsure what the COM port number of your PLC device ports are, you can check them in Windows Device Manager:

1. Press <kbd>Win</kbd> + <kbd>X</kbd> and select Device Manager, or search for "Device Manager" in the Start menu.
1. Select **View > Devices by container**.
1. Look for an **Arduino Opta** or **Portenta H7 MCUboot** container.
1. Click to expand the container:

   ![Arduino Opta ports in Device Manager.](img/device-manager.png)

1. Look for **USB Serial Device** items, and note the COM port numbers:

### Tip: Distinguish between the serial and Modbus port

If you are unsure which of the two ports to use when configuring the device in Arduino PLC IDE, try opening the serial port with a serial monitor, such as the one built into Arduino IDE. After you've opened the port, reset the device and observe the output:

* _The standard serial port_ will print debug information:

  ```
  ** Initializing FileSystem QSPI in 2...
  ** Initializing FileSystem QSPI in 1...
  Checking QSPIF partition scheme... 
  Wifi Data:
       Partition type 11
       Partition num 1
       Partition size 1044480
       Partition start 4096
       Partition stop 1048576
  [...]
  ```
* _The virtual Modbus port_ will not print anything to serial on boot.