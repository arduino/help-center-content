---
title: "Opta FAQ"
---

1. What programming languages does Opta™ support?

Answer: Opta™ supports a variety of programming languages, including the Arduino programming language and standard IEC-61131-3 PLC programming languages such as Ladder Diagram (LD), Sequential Function Chart (SFC), Function Block Diagram (FBD), Structured Text (ST), and Instruction List (IL). This flexibility makes it suitable for automation engineers with different programming preferences.

1. What are the connectivity options for the Opta™ variants?

Answer: The Opta™ variants offer different connectivity options to meet various industry needs. All variants can connect to the Cloud or to field devices using onboard Ethernet. Opta™ Lite does not include RS-485 or wireless connectivity. Opta™ RS485 supports RS-485 for Modbus RTU bus without wireless communication. Opta™ WiFi provides full wireless Wi-Fi® and Bluetooth® Low Energy connectivity for comprehensive and flexible communication options.

1. What is the main processor used in the Opta™ micro PLC?

Answer: The Opta™ micro PLC is based on the STM32H747XI microcontroller from STMicroelectronics. This high-performance microcontroller features an Arm® Cortex®-M7 and Cortex®-M4, making it well-suited for a wide range of applications, including real-time control and predictive maintenance

1. How is the Opta™ PLC installed?

Answer: The Opta™ PLC is designed for EN60715 DIN rail mounting. DIN rail mounting provides a standardized method for installing industrial control equipment on a mounting rail. This feature enhances the ease of installation in industrial settings where DIN rail systems are commonly used.

1. Can I connect the Opta™ PLC to the Cloud?

Answer: Yes, all variants of the Opta™ PLC are capable of connecting to the Cloud using the onboard Ethernet and WiFi. This connectivity features allow users to integrate their Opta™ devices into broader IoT and industrial automation systems, facilitating data monitoring, analysis, and remote management.

1. Can Opta network together by BLE to a WiFi/Ethernet connected Opta that can communicate to the cloud? Can the range of a wifi connected Opta be extended though a WiFi mesh network of Optas?

Answer: Networking Opta through BLE to WiFi/Ethernet-connected can be possible. Extending the WiFi Range is not possible, there are specific network equipment (namely range Extender) that allow it.

1. Which is the MQTT version supported by Opta?

Answer: MQTT 4.x.

1. Which are the characteristics of Opta outputs?

Answer: Opta controller has 4 Electromechanical Relays Outputs, dry (volt free) contact monostable with a rated voltage of 250V and a rated current of 10A.

1. What’s the minimum load for an Opta output?

Answer: 300mW is the minimum load that the Opta relay contact can reliably switch.

1. Which is the cycle time for an Opta programmed using IEC 61131-3 through PLC IDE?

Answer: PLC IDE offers two cyclical tasks. The Fast task lowest cycle time, and set as default, is 10ms, but it can also be configured to use 20ms or 50ms execution period. A Slow task is also available, for less prioritary operations, with a 100ms execution period.

1. Which type of inputs are available on Opta?

Answer: Opta has 8 programmable voltage inputs, antipolarity and overvoltage protected. When used as digital, they can operate in the range of 0-24V, when used as analog they operate in the range 0-10V with a resolution configurable between 12 and 16 bits.

1. In which environmental condition Opta can be operated?

Answer: Opta can operate between a minimum environment temperature of -20°C (-4°F) to a maximum of +50°C (122°F) according to cULus safety standards with a humidity rate 5-95 RH%. It has an IP20 degree of protection. Opta is not meant to be used in hazardous or explosive environments.

1. Is a specific interface needed to program Opta? Is it possible to update a program remotely?

Answer: Opta can be programmed using the USB-C® port when connected locally or, after a first local provisioning, it can be updated via OTA through Arduino Cloud.

1. Which are the main Opta applications?

Answer: Opta is very versatile and can be used by OEM to control small industrial machines, as a micro PLC to control processes, from the most basic ones, thanks to its configuration easiness and flexibility (it can be programmed basically as an Arduino Uno or with the PLC IDE with all the IEC 61131-3 languages), to more complex ones requiring high calculation power or even machine learning capabilities (it can do AI on the edge). Opta can be used as a gateway thanks to its connectivity capabilities (Modbus TCP/RTU - Ethernet for + WiFi/Bluetooth Low Energy), to send telemetry from the equipment / from sensors and to retrofit existing industrial machines lacking of connectivity capabilities. Other use cases are also in building automation for example for access control, lights/HVAC control, artificial ponds control.

1. Is it possible to do data logging? How?

Answer: Yes, to do data logging is possible through USB-C® memory stick.

1. Which is Opta LEDs functions?

Answer: Opta LEDs can be programmed by the user for any signaling purpose desired. The WiFi variant has one Blue LED in addition to the other two variants. There is no difference in its use and can be programmed for any scope. To use the led above the reset button to show the device is powered on, the user can use the command digitalWrite(LED_USER, HIGH) as the first command in the `setup()`.

1. Are there reliability data about Opta?

For Opta, there are reliability data based on MIL-HDBK-217F standards and component information. Opta Lite and Opta RS485 have MTBF = 87 years (766,000 h) at 25 °C. They have survival probability = 92% after 7 years and 89% after 10 years, at 25 C. Data for different temperatures are also available on demand.
