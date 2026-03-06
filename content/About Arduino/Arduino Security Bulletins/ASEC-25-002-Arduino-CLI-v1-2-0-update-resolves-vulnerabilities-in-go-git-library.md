---
title: ASEC-25-002 - Arduino-CLI v1.2.0 update resolves vulnerabilities in go-git library
id: 18707958449692
---

Bulletin ID: ASEC-25-002  
Date: Feb 24, 2025  
Product/Component: Arduino-CLI  
Affected versions: \<= 1.1.1  
Fixed version: 1.2.0

## Summary

A new release of **Arduino-CLI (v1.2.0)** is now available at the following link: [Arduino-CLI v1.2.0 Release](https://github.com/arduino/arduino-cli/releases/tag/v1.2.0). This release includes several improvements and updates, notably the upgrade of the **go-git** library to version **5.13.2**, which addresses multiple security vulnerabilities affecting earlier versions of the library. Specifically, this update mitigates the following Common Vulnerabilities and Exposures (CVEs):

* **CVE-2025-21614**
* **CVE-2025-21613**

## Action Required

To ensure security and stability, users are advised to **update Arduino-CLI to version v1.2.0** as soon as possible. This update automatically includes the patched version of **go-git (v5.13.2)**, eliminating the associated vulnerabilities.

**Update Steps:**

1. Download the latest version from the official release page: [Arduino-CLI v1.2.0](https://github.com/arduino/arduino-cli/releases/tag/v1.2.0).
2. Follow the installation instructions provided in the documentation.
3. Verify that the update was successful by running `arduino-cli version` to ensure it reflects v1.2.0.

Additionally, Arduino-CLI version v1.2.0 will be included starting from Arduino IDE v2.3.5.

## Additional Information

For further details regarding the resolved vulnerabilities, refer to the following CVE reports:

* [CVE-2025-21614](https://nvd.nist.gov/vuln/detail/CVE-2025-21614)
* [CVE-2025-21613](https://nvd.nist.gov/vuln/detail/CVE-2025-21613)
* [Arduino-CLI v1.2.0 Release](https://github.com/arduino/arduino-cli/releases/tag/v1.2.0)

For any questions or support, please refer to the [Arduino-CLI GitHub repository](https://github.com/arduino/arduino-cli) or the official support channels.

## Contact

If you encounter any issues or have questions regarding this security update, please contact our security team at security@arduino.cc.
