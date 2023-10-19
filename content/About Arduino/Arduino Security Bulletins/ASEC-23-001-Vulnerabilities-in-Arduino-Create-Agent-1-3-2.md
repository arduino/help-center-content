---
title: "ASEC-23-001 - Vulnerabilities in Arduino Create Agent 1.3.2"
---

Bulletin ID: ASEC-23-001  
Date: Oct 18, 2023
Product/Component: Arduino Create Agent
Affected versions: &lt;= 1.3.2
Fixed version: 1.3.3

## Summary

This security bulletin provides information on a series of security vulnerabilities that have been identified in the Arduino Create Agent version 1.3.2 and below.

Details on the security vulnerabilities and related advisories can be found below. The vulnerabilities were identified by Nozomi Networks Labs and promptly fixed by Arduino.

### High risk

* [CVE-2023-43802](https://www.cve.org/CVERecord?id=CVE-2023-43802) : Path Traversal (CWE-35), CVSS v3.1 Base Score 7.3 (CVSS:3.1/A

    AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:L)

* [CVE-2023-43800](https://www.cve.org/CVERecord?id=CVE-2023-43800): Insufficient Verification of Data Authenticity (CWE-345), CVSS v3.1 Base Score 7.3 (CVSS:3.1/

    AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:L)

### Medium risk

* [CVE-2023-43801](https://www.cve.org/CVERecord?id=CVE-2023-43801): Path Traversal (CWE-35), CVSS v3.1 Base Score 6.1 (CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:L)
* [CVE-2023-43803](https://www.cve.org/CVERecord?id=CVE-2023-43803): Path Traversal (CWE-35), CVSS v3.1 Base Score 6.1 (CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:L)

## Impact

The identified vulnerabilities may allow an attacker, with local access to the victim machine, the following actions:

* escalation of privileges to that of a user with credentials for the Arduino Create Agent service;
* Arbitrary code execution with the permissions of the user running the Arduino Create Agent service;
* Arbitrary file deletion of files accessible by the user running the Arduino Create Agent service.

## Action Required

All users are advised to update the Arduino Create Agent to version 1.3.3 or later. An update is automatically initiated when visiting the Arduino Web Editor or when setting up a new device via the Arduino IoT Cloud. Alternatively, a manual update can be performed by downloading the new version of the software [here](https://github.com/arduino/arduino-create-agent/releases).

## Additional information

* [Security Advisory - Path Traversal](https://github.com/arduino/arduino-create-agent/security/advisories/GHSA-75j7-w798-cwwx) (CWE-35)
* [Security Advisory - Insufficient Verification of Data Authenticity](https://github.com/arduino/arduino-create-agent/security/advisories/GHSA-4x5q-q7wc-q22p) (CWE-345)
* [Security Advisory - Path Traversal](https://github.com/arduino/arduino-create-agent/security/advisories/GHSA-mjq6-pv9c-qppq) (CWE-35)
* [Security Advisory - Path Traversal](https://github.com/arduino/arduino-create-agent/security/advisories/GHSA-m5jc-r4gf-c6p8) (CWE-35)

## Contact

If you encounter any issues or have questions regarding this security update, please contact our security team at [security@arduino.cc](mailto:security@arduino.cc).
