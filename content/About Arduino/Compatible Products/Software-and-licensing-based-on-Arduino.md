---
title: "Software and licensing based on Arduino"
---

This article describes the rules under which you can distribute a product based on Arduino. These rules apply to all derived products regardless of them being commercial or not, open-source or not.

> **Note:** you can freely use Arduino hardware and software for your personal or internal purposes with no restrictions. These rules apply only when you distribute products based on Arduino to third parties. If you comply with these rules, you can distribute your software/hardware products for free or under commercial conditions.

A derived product can be based on Arduino hardware designs, Arduino software components, or both. For each category, different rules apply and your product must comply with all of them.

---

## Hardware products

If you’re designing your own board based on the open-source Arduino designs, the following rules apply:

* Keep your board open-source hardware. When publishing your design files, make sure that their license is compatible with the original license of the Arduino designs. See the [Find license information](#find-license-information) section below.

* Do not use the “Arduino” trademark in your design files or on the product itself since this may suggest that your board is made or approved by Arduino.

* When using original Arduino hardware inside a derived product, no restrictions apply and mentioning Arduino is optional. See the [trademark policy](https://www.arduino.cc/en/trademark) if you want to mention Arduino.

---

## Software products

If you are distributing the Arduino tools (IDE, CLI) inside your product or you are using them within a cloud-based product, make sure to [review their licenses](#find-licence-information) to understand possible restrictions.

Certain rules apply if you use the Arduino tools (IDE, CLI or Cloud) and/or the Arduino software stack (cores, libraries) to create the software for a product that you distribute to third parties. In this context, by “derived product” or “product based on Arduino” we refer to any of the following:

* products distributed in binary form:
  * a hardware product that is pre-loaded with a sketch based on Arduino cores and/or libraries
  * a pre-compiled binary sketch based on Arduino cores and/or libraries
* products distributed in source code form:
  * a project deriving from modified Arduino cores and/or libraries

### Determine license terms for a derived software product

To determine the licensing terms of a derived product that uses Arduino software components, follow these steps:

1. Assess the original license of each component included in the build.
2. Check the compatibility between the licenses:

   * **Official Arduino repositories:** The official Arduino repositories contain different licenses, but all of them are compatible with each other. Any combination of licenses used in official cores and libraries is allowed, as long as you follow the specific requirements of each license term.
   * **Third-party libraries:** Third-party libraries or third-party code that uses other libraries might contain incompatible licenses. In case of doubt, only use code written by yourself or third-party code that is licensed under the same rules of the Arduino components included in your build.

3. Determine the licensing terms of the whole combination by comparing and summing the requirements of each license used in your project.

As of now, we don’t provide a tool to list all the components and their licenses, so you will have to perform the assessment manually.

### Software components that affect licensing of derived products

The components whose licenses affect derived products are the ones that get compiled and linked with your custom code.

Generally speaking, a derived product is the combination of these components:

* Provided by Arduino: Core and official libraries.
* Provided by user: Third-party libraries or code, user code.

#### This includes

* all the files under the `cores/arduino/` directory in platforms
* all the files under the `patches/ directory` in platforms
* all the files under the directory pertaining to the used board under the `variants/ directory` in platforms
* all the files under the `src/ directory` in libraries
* examples (when copied verbatim or in part)

#### This does not generally include

* all the files that are stored in repositories for packaging/release purposes
* documentation
* bootloaders
* firmwares of separate chips
* drivers
* unit tests

### Find license information

#### Arduino IDE

The [source code](https://github.com/arduino/Arduino) for **Arduino IDE** is open-source, however other repositories are used in the build process and made available through the Library Manager and the Board Manager. See the [README](https://github.com/arduino/Arduino#readme) and the [license information](https://github.com/arduino/Arduino/blob/master/license.txt) for more information.

#### Libraries

* [Official Arduino libraries](https://github.com/arduino-libraries/)

#### Cores

* The AVR core can be found in the [Arduino github repository](https://github.com/arduino/ArduinoCore-avr).
* Other cores are not included by default but installed through the board manager. Their repositories can also be found in the [Arduino github repository](https://github.com/arduino/).

## Still need help?

If the licensing terms are too restrictive for your project, or if you need further help [contact us](mailto:license@arduino.cc) to explore possible licensing options.
