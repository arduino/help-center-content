---
title: "Opta FAQ"
---

The frequently asked questions covered in this article are focused on providing essential information about The Arduino Opta® and how to operate it with ease.

## FAQ

**What programming languages does Opta® support?**

Opta® supports a variety of programming languages, including the Arduino programming language and standard IEC-61131-3 PLC programming languages such as Ladder Diagram (LD), Sequential Function Chart (SFC), Function Block Diagram (FBD), Structured Text (ST), and Instruction List (IL). This flexibility makes it suitable for automation engineers with different programming preferences.

**What are the connectivity options for the Opta® variants?**

The Opta® variants offer different connectivity options to meet various industry needs. All variants can connect to the Cloud or field devices using onboard Ethernet. Opta® Lite does not include RS-485 or wireless connectivity. Opta® RS485 supports RS-485 for Modbus RTU buses without wireless communication. Opta® Wi-Fi provides full wireless Wi-Fi® and Bluetooth® Low Energy connectivity for comprehensive and flexible communication options.

**What's the main processor used in the Opta® micro PLC?**

The Opta® micro PLC is based on the STM32H747XI microcontroller from STMicroelectronics. This high-performance microcontroller features an Arm® Cortex®-M7 and Cortex®-M4, making it well-suited for a wide range of applications, including real-time control and predictive maintenance.

**How is the Opta® PLC installed?**

The Opta® PLC is designed for EN60715 DIN rail mounting. DIN rail mounting provides a standardized method for installing industrial control equipment on a mounting rail. This feature enhances the ease of installation in industrial settings where DIN rail systems are commonly used.

**Can I connect the Opta® PLC to the Cloud?**

Yes, all variants of the Opta® PLC can connect to the Cloud using the onboard Ethernet and Wi-Fi. These connectivity features allow users to integrate their Opta® devices into broader IoT and industrial automation systems, facilitating data monitoring, analysis, and remote management.

**Can Opta® units use a BLE connection to a Wi-Fi-equipped Opta® device for Cloud communication?**

Yes, Opta® devices can network together using BLE with a Wi-Fi/Ethernet-connected Opta® that communicates with the cloud.

**Can multiple Opta® devices form a Wi-Fi mesh network to extend the range of a Wi-Fi-connected Opta®?**

No, the range of a Wi-Fi-connected Opta® cannot be extended through a Wi-Fi mesh network of Optas. Specific network equipment, such as range extenders, would be required for that purpose.

**What version of MQTT does Opta® support?**

Opta® supports MQTT version 4.x.

**What are the specifications of Opta® outputs?**

Opta® controller features four Electromechanical relay outputs. These outputs are dry (volt-free) contact monostable with a rated voltage of 250V and a rated current of 10A.

**What’s the minimum load for an Opta® output?**

The Opta® relay contact reliably switches loads with a minimum power of 300mW.

**What is the cycle time for an Opta® programmed using IEC 61131-3 through PLC IDE?**

PLC IDE offers two cyclical tasks. The Fast task's lowest cycle time, set as default, is 10ms, but it can also be configured to use a 20ms or 50ms execution period. A Slow task is also available, for less priority operations, with a 100ms execution period.

**What input options are available on Opta®?**

Opta® has 8 programmable voltage inputs, antipolarity, and overvoltage protection. When used as digital, they can operate in the range of 0-24V. When used as analog, they operate in the range 0-10V with a resolution configurable between 12 and 16 bits.

**What are the operating conditions suitable for Opta®?**

Opta® is engineered to operate between a minimum environment temperature of -20°C (-4°F) to a maximum of +50°C (122°F) according to cULus safety standards with a humidity rate of 5-95 RH%. It has an IP20 degree of protection. Opta® is not meant to be used in hazardous or explosive environments.

**What interface is required for programming Opta®? Can programs be updated remotely?**

Opta® can be programmed using the USB-C® port when connected locally. After an initial local setup, program updates can be performed remotely via OTA (Over-The-Air) through Arduino Cloud.

**What are the main Opta® applications?**

Opta® is very versatile and can be used by OEM to control small industrial machines, as a micro PLC to control processes, from the most basic ones, thanks to its configuration easiness and flexibility (it can be programmed basically as an Arduino Uno or with the PLC IDE with all the IEC 61131-3 languages), to more complex ones requiring high calculation power or even machine learning capabilities (it can do AI on the edge). Opta® can be used as a gateway thanks to its connectivity capabilities (Modbus TCP/RTU - Ethernet for + Wi-Fi/Bluetooth Low Energy), to send telemetry from the equipment / from sensors and to retrofit existing industrial machines lacking connectivity capabilities. Other use cases are also in building automation for example for access control, lights/HVAC control, and artificial ponds control.

**Can data be logged? If so, how?**

Yes, data logging is achievable using a USB-C® memory stick."

**What functions do Opta®'s LEDs have?**

Opta® LEDs can be programmed by the user for any desired signaling purpose. The Wi-Fi variant has one Blue LED in addition to the other two variants. There is no difference in its use and can be programmed for any scope. To use the LED above the reset button to indicate that the device is powered on, the user can use the command `digitalWrite(LED_USER, HIGH)` as the initial command in the `setup()`.

**Are there reliability data available for Opta®?**

Yes, the reliability data is provided under MIL-HDBK-217F standards and component information. Opta® Lite and Opta® RS485 have MTBF (Mean Time Between Failures) of 87 years (766,000 h) at 25 °C. They have a survival probability of 92% after 7 years and 89% after 10 years at 25 C. Additional data for other temperatures can be provided upon request.
