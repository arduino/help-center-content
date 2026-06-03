---
title: ASEC-26-003 Vulnerabilities Resolved in ArduinoCore-AVR v1.8.8 and ArduinoBLE v2.0.2
id: 27903303955100
---

Bulletin ID: ASEC-26-003

Date: Jun 3, 2026

Products/Components:

- ArduinoCore-AVR
- ArduinoBLE

Affected versions:

- ArduinoCore-AVR \<= 1.8.7
- ArduinoBLE \<= 2.0.1

Fixed version:

- ArduinoCore-AVR \>= 1.8.8
- ArduinoBLE \>= 2.0.2

## Summary

A new version of the Arduino AVR Boards platform is now available at the following link: [ArduinoCore-AVR v1.8.8 Release](https://github.com/arduino/ArduinoCore-avr/releases/tag/1.8.8).

- A dedicated security fix for the [CVE-2026-48490](https://nvd.nist.gov/vuln/detail/CVE-2026-48490) vulnerability that affects the ArduinoCore-AVR versions before version v1.8.8. Further details are available in the official security advisory at the following link: [GHSA-fhp2-f8hw-mgpj](https://github.com/arduino/ArduinoCore-avr/security/advisories/GHSA-fhp2-f8hw-mgpj).

Moreover, a new version of the Arduino BLE library is now available at the following link: [ArduinoBLE v2.0.2](https://github.com/arduino-libraries/ArduinoBLE/releases/tag/2.0.2).

- A dedicated security fix for the [CVE-2026-47773](https://nvd.nist.gov/vuln/detail/CVE-2026-47773) vulnerability that affects the ArduinoBLE library versions before version v2.0.2. Further details are available in the official security advisory at the following link: [GHSA-77v6-cw9f-9whg](https://github.com/arduino-libraries/ArduinoBLE/security/advisories/GHSA-77v6-cw9f-9whg).

## Action Required

To ensure security and stability, users are advised to update ArduinoCore-AVR to version v1.8.8 and ArduinoBLE to version 2.0.2 as soon as possible. These update automatically includes all patches described above.

## Additional Information

For further details regarding the resolved vulnerabilities, refer to the following CVE reports:

- [ArduinoCore-AVR v1.8.8 Release](https://github.com/arduino/ArduinoCore-avr/releases/tag/1.8.8)
- [CVE-2026-48490](https://nvd.nist.gov/vuln/detail/CVE-2026-48490)
- [GHSA-fhp2-f8hw-mgpj](https://github.com/arduino/ArduinoCore-avr/security/advisories/GHSA-fhp2-f8hw-mgpj)
- [ArduinoBLE v2.0.2 Release](https://github.com/arduino-libraries/ArduinoBLE/releases/tag/2.0.2)
- [CVE-2026-47773](https://nvd.nist.gov/vuln/detail/CVE-2026-47773)
- [GHSA-77v6-cw9f-9whg](https://github.com/arduino-libraries/ArduinoBLE/security/advisories/GHSA-77v6-cw9f-9whg)

For any questions or support, please refer to the [Arduino Documentation](https://docs.arduino.cc) or the official support channels.

## Contact

If you encounter any issues or have questions regarding this security update, please contact our security team at <security@arduino.cc>.
