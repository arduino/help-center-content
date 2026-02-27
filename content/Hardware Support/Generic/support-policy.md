---
title: 'Arduino Support Policy for Products with Digital Elements'

---

At Arduino, we are committed to the security and longevity of our hardware products.

This policy outlines our commitment to providing security updates and maintenance for products that include or are used in combination with Arduino official Firmware or Linux software.

## Scope of Support

This policy applies to **official Arduino hardware boards** capable of running an Operating System or Firmware and in particular:

* Micro-controller (MCU) based devices running a firmware based on an official **Arduino Core**
* Micro-processor (MPU) based devices running **Arduino Debian Linux**, which is Arduino official Linux distribution, based on Debian Linux
* Micro-processor (MPU) based devices running **Linux LmP (Yocto-based)** distribution

Support covers in particular the following components:

* **Firmware Updates:** Bootloaders and low-level hardware abstraction layers, Arduino cores and Arduino-developed libraries
* **Operating System (OS):** Security patches for the Linux kernel and OS components
* **Any additional Arduino component** if included in the distributed Linux image (for example Arduino cores, Arduino IDEs, tooling or similar components)

Supported components are only those downloaded from the official Arduino software page at [https://www.arduino.cc/en/software/](https://www.arduino.cc/en/software/)

## Support Duration

In accordance with our commitment to product longevity, Arduino will provide security updates for a period defined considering two dates:

* At least **two (2) years** from the official **release date** of the associated product (Release Date + 5 years)
* At least **two (2) years** after the last date that the product is **distributed** by Arduino to the market (End of Distribution + 2 years)

**Arduino will provide support until whichever date is later (End of Support).**

> **Example:** If a product is launched in January 2024 and ceases distribution in January 2030, security updates will be provided until at least January 2032.

## How Updates are Provided

Security updates are delivered to users through two primary methods:

* **Package Management - for Arduino Debian Linux:** Critical patches are delivered via the standard package manager (apt) through our hosted repositories
* **System Images:** Periodic releases of full OS images containing all cumulative security updates and firmware improvements.

According to the specific fixing strategy decided for a vulnerability, Arduino might recommend a full re-image of the device or standard package updates.

## Vulnerability Management & Reporting

Arduino monitors vulnerabilities for third parties included in the Firmware/Linux distributions used. In addition, Arduino monitors vulnerabilities in the specific Arduino-provided components, and in particular prioritizes fixes for Critical and High-severity vulnerabilities.

If you want to report vulnerabilities in Arduino components, please review our Coordinated Vulnerability Disclosure policy at [https://www.arduino.cc/en/security_cvd/](https://www.arduino.cc/en/security_cvd/).

## End-of-Life (EOL) Transparency

When a product reaches its end-of-support date, Arduino will update the product's documentation page to reflect its "**End-Of-Life**" or “**End-Of-Support**” status. While the hardware may continue to function, no further security updates will be provided, and users are encouraged to isolate these devices from their networks or public networks, or execute an update. Software releases will have the indication “End-Of-Life” or “End-Of-Support” with the same meaning, when applicable.

On software components, such as specific versions of libraries or firmware or other components, the indication “**Deprecated**” might be provided to suggest that the specific software version is still supported, but users are recommended to migrate to a more recent version because the version marked “Deprecated” is planned for End-Of-Support. This marker is not mandatory.
