---
title: "Find the port your board is connected to"
---

Learn how to find the name of the port your board is connected to.

---

## Using the Arduino IDE

1. Open the **Arduino IDE**

2. In the menu, click on `Tools`. The currently selected port is displayed in the `Port` row.

3. Hover over the `Port` row to display all ports. For Arduino devices, the board name will typically be displayed after the port.

Port naming varies by system:

* Windows: `COM3 (Arduino Uno)`
* macOS: `/dev/cu.usbmodem14101 (Arduino Uno)`
* Linux: `/dev/ttyACM0 (Arduino Uno)`

![The tools menu with the Port row highlighted.](img/tools_menu_highlight_port.png)

## If your board name is not in the list

If your board is not recognized by the system the name may not be displayed. Also, some boards such as the Arduino Nano will not display the board name next to the port.

1. Disconnect your board from your computer.

2. Open the port list `Tools > Port`. Some ports may still be listed. Take note of this, and close the menu.

3. Connect your board to your computer.

4. Open `Tools > Port`. The port your board is connected to should now appear as a new port in the list.
