---
title: "What power supply can I use with my Arduino board?"
id: 360018922259
---

All Arduino boards need electric power to function. A power supply is what is used to provide electric power to the boards and typically can be a battery, USB cable, DC power adapter or a regulated power source device.

There are different ways to power your Arduino board. The most common way is through the USB connector available on every board, but there are a few other possibilities to power your board. If you like to know more about this, the different ways to supply power to your board are listed below:

> [!NOTE]
> Incorrect input voltage can damage your board. Never connect an external power supply before checking the input voltage limits. Look for technical specifications in [Arduino Documentation](https://docs.arduino.cc/).

---

## 1. USB

The most common way to power an Arduino is through the USB connector.

* **Voltage:** 5V DC.
* **Source:** Can be powered by a computer USB port, a USB wall adapter (like a phone charger), or a portable power bank.
* **Compatibility:** Every Arduino board features a USB port for both programming and power.

---

## 2. DC Barrel Jack

Some Arduino boards (such as the **Uno, Mega, and Due**) feature a dedicated barrel jack for external power. This allows the board to operate independently of a computer.

* **Voltage:** 7V to 12V DC is recommended.
* **Connector Type:** 5.5mm cylindrical plug with a 2.1mm center pin hole.
* **Polarity:** The adapter **must** be **Center-Positive** (the inside pin is positive, and the outside sleeve is negative/ground).

**Make sure the power adapter complies with your Arduino board specifications.**

If you find that additional power is required from your Arduino board to operate it properly, or if you need to operate the Arduino board disconnected from a USB port.

**Important:** While the adapter plugs into an AC wall outlet, it must be a **DC Power Adapter** that converts high-voltage AC into the low-voltage DC required by the board. Never connect AC voltage directly to the board.

---

## 3. Battery Socket (Li-Po)

Many modern and portable boards, such as the **MKR family** (excluding MKR FOX and WAN 1300), include a dedicated battery connector.

* **Voltage:** 3.7V (standard for Lithium-ion Polymer batteries).
* **Connector Type:** JST PHR-2.
* **Feature:** These boards typically include a built-in charging circuit, allowing the battery to charge whenever the board is plugged into USB.

---

## 4. VIN Pin

The **VIN** pin allows you to power the board using a regulated power source or a battery pack by connecting directly to the board's internal voltage regulator.

* **Connection:** Connect the positive (+) wire to **VIN** and the negative (-) wire to **GND**.
* **Voltage:** Check your specific board's documentation for the allowed VIN range (usually 7-12V for boards like the Uno).
* **Warning:** The VIN pin is an **INPUT only**. Never connect a power source here while also providing power through the Barrel Jack, as they are often connected to the same circuit.

---

## 5. Screw terminal (MKR FOX and WAN 1300)

These specific boards feature screw terminals designed for a 3V battery pack (usually 2x AA or AAA batteries).

* **Note:** Ensure you respect the polarity (+/-) labeled on the board's silk-screen.

---

## Current Requirements (Amperage)

For most basic applications, a power supply capable of providing **1A (Ampere)** is sufficient. However, you may need more current if your project includes:

* Multiple Shields stacked on top of the board.
* High-power components like motors, servos, or large LED strips.
**Total Current Calculation:**

You should sum the current requirements of the Arduino board (roughly 50mA) plus the maximum draw of every component or Shield attached. Choose a power supply that meets or exceeds this total.

> **Tip:** Using a power supply with a *higher* current capacity (e.g., a 2A supply for a 1A project) is perfectly safe; the board will only "draw" what it needs.

---

## Thermal Limitations

The on-board 5V regulator handles the task of stepping down higher voltages (like 12V) to the 5V the chips need. This process generates heat.

* To prevent the board from overheating, it is best to keep the total current draw from the on-board 5V pin below **800mA**.
* If your project requires significant power (e.g., several servos), use an external power supply for those components and connect the grounds (GND) of all power supplies together to ensure a common reference point.
