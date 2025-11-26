---
title: ASEC-25-003 - Arduino-IDE v2.3.5 Resolves Multiple Vulnerabilities
id: xxxx
---

Bulletin ID: ASEC-25-004
Date: Nov 29, 2025  
Product/Component: Arduino-IDE  
Affected versions: \<= 2.3.6  
Fixed version: \>= 2.3.7

## Summary

A new version of the Arduino IDE is now available at the following link: [Arduino IDE v2.3.7 Release](https://github.com/arduino/arduino-ide/releases/tag/2.3.7).

This release includes following updates:
* A dedicated security fix for the [CVE-2025-64724](https://nvd.nist.gov/vuln/detail/CVE-2025-64724) vulnerability that affects all Arduino IDE versions before version v2.3.7. Further details are available in the official security advisory at the following link: [GHSA-3fvj-pgqw-fgw6](https://github.com/arduino/arduino-ide/security/advisories/GHSA-3fvj-pgqw-fgw6).
* Moreover, a dedicated security fix for the [CVE-2025-64725](https://nvd.nist.gov/vuln/detail/CVE-2025-64725) vulnerability that affects all Arduino IDE versions before version v2.3.7. Further details are available in the official security advisory at the following link: [GHSA-vf5j-xhwq-8vqj](https://github.com/arduino/arduino-ide/security/advisories/GHSA-vf5j-xhwq-8vqj).



## Action Required

To ensure security and stability, users are advised to update Arduino-IDE to version v2.3.7 as soon as possible. This update automatically includes all patches described above.

**Update Steps:**

1. Download the latest version from the official release page: [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)
2. Follow the installation instructions provided in the documentation.
3. Verify that the update was successful.

## Additional Information

For further details regarding the resolved vulnerabilities, refer to the following CVE reports:

* [Arduino-IDE v2.3.7 Release](https://github.com/arduino/arduino-ide/releases/tag/2.3.7)
* [CVE-2025-64724](https://nvd.nist.gov/vuln/detail/CVE-2025-64724)
* [GHSA-3fvj-pgqw-fgw6](https://github.com/arduino/arduino-ide/security/advisories/GHSA-3fvj-pgqw-fgw6)
* [CVE-2025-64725](https://nvd.nist.gov/vuln/detail/CVE-2025-64725)
* [GHSA-vf5j-xhwq-8vqj](https://github.com/arduino/arduino-ide/security/advisories/GHSA-vf5j-xhwq-8vqj)

For any questions or support, please refer to the [Arduino-IDE GitHub repository](https://github.com/arduino/arduino-ide) or the official support channels.

## Contact

If you encounter any issues or have questions regarding this security update, please contact our security team at security@arduino.cc.
