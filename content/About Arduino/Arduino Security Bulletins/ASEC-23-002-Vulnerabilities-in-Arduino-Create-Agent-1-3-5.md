---
title: "ASEC-23-002 - Vulnerabilities in Arduino Create Agent 1.3.5"
---

Bulletin ID: ASEC-23-002  
Date: Dec 13, 2023  
Product/Component: Arduino Create Agent  
Affected versions: &lt;= 1.3.5  
Fixed version: 1.3.6

## Summary

This security bulletin provides information on a series of security vulnerabilities that have been identified in the Arduino Create Agent version 1.3.5 and below.

Details on the security vulnerabilities and related advisories can be found below.

### Medium risk

* [CVE-2023-49296](https://www.cve.org/CVERecord?id=CVE-2023-49296): Reflected Cross-Site Scripting (CWE-35), CVSS v3.1 Base Score 7.3 (CVSS:3.1 AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:L)

## Impact

The identified vulnerabilities may allow an attacker to persuade a victim into clicking on a malicious link and perform a Reflected Cross-Site Scripting attack on the web interface of the create agent, which would allow the attacker to execute arbitrary browser client side code.

## Action Required

All users are advised to update the Arduino Create Agent to version 1.3.6 or later. An update is automatically initiated when visiting the Arduino Cloud Editor or when setting up a new device via Arduino Cloud. Alternatively, a manual update can be performed by downloading the new version of the software [here](https://github.com/arduino/arduino-create-agent/releases).

## Additional information

* [Security Advisory - Reflected Cross-Site Scripting](https://github.com/arduino/arduino-create-agent/security/advisories/GHSA-j5hc-wx84-844h) (CWE-79)

## Contact

If you encounter any issues or have questions regarding this security update, please contact our security team at [security@arduino.cc](mailto:security@arduino.cc).
