---
title: ASEC-25-003 - Arduino-IDE v2.3.5 Resolves Multiple Vulnerabilities
id: 19367547630748
---

Bulletin ID: ASEC-25-003  
Date: Apr 3, 2025  
Product/Component: Arduino-IDE  
Affected versions: \<= 2.3.4  
Fixed version: \>= 2.3.5

## Summary

A new version of the Arduino IDE (v2.3.5) is now available at the following link: [Arduino IDE v2.3.5 Release](https://github.com/arduino/arduino-ide/releases/tag/2.3.5).

This release includes several improvements and updates, notably:

* Upgrading the underlying Theia IDE to version v1.57.0.
* Updating the Arduino CLI component to version v1.2.0, which addresses multiple security vulnerabilities affecting external components.
* Additionally, this update includes a dedicated security fix for the CVE-2025-27608 vulnerability that affects all Arduino IDE versions before version v2.3.5. Further details are available in the official security advisory at the following link: [GHSA-252h-4j5q-88pc](https://github.com/arduino/arduino-ide/security/advisories/GHSA-252h-4j5q-88pc).

Specifically, this update mitigates the following Common Vulnerabilities and Exposures (CVEs):

* CVE-2025-21614
* CVE-2025-21613
* CVE-2025-27608

## Action Required

To ensure security and stability, users are advised to update Arduino-IDE to version v2.3.5 as soon as possible. This update automatically includes all patches described above.

**Update Steps:**

1. Download the latest version from the official release page: [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)
2. Follow the installation instructions provided in the documentation.
3. Verify that the update was successful.

## Additional Information

For further details regarding the resolved vulnerabilities, refer to the following CVE reports:

* [Arduino-IDE v2.3.5 Release](https://github.com/arduino/arduino-ide/releases/tag/2.3.5)
* [CVE-2025-27608](https://nvd.nist.gov/vuln/detail/CVE-2025-27608)
* [GHSA-252h-4j5q-88pc](https://github.com/arduino/arduino-ide/security/advisories/GHSA-252h-4j5q-88pc)
* [Arduino-CLI v1.2.0 Release](https://github.com/arduino/arduino-cli/releases/tag/v1.2.0)
* [CVE-2025-21614](https://nvd.nist.gov/vuln/detail/CVE-2025-21614)
* [CVE-2025-21613](https://nvd.nist.gov/vuln/detail/CVE-2025-21613)

For any questions or support, please refer to the [Arduino-IDE GitHub repository](https://github.com/arduino/arduino-ide) or the official support channels.

## Contact

If you encounter any issues or have questions regarding this security update, please contact our security team at security@arduino.cc.
