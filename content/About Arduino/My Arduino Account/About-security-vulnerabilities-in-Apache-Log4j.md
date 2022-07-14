---
title: "About security vulnerabilities in Apache Log4j"
id: 4412377144338
---

In late 2021 a series of security vulnerabilities were found in **Apache Log4j**, a logging utility used by Arduino IDE 1.8.x at the time. As of version 1.8.19, Log4j is no longer used by the IDE.

> Arduino IDE 2.0.x and Cloud services do not use Log4j and were not affected.

---

## Fixed in Arduino IDE 1.8.19

The Log4j library was removed in Arduino IDE 1.8.19.

[You can download the latest IDE release here](https://www.arduino.cc/en/software).

## History

| Date        | IDE release                                                                     | Note                                                                                                                                                                                                                                                                                        |
|:------------|:--------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2021-12-21  | [1.8.19](https://github.com/arduino/Arduino/releases/tag/1.8.19)                | Log4j dependencies removed, resolving [CVE-2021-44228](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228), [CVE-2021-45046](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046), and [CVE-2021-45105](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45105). |
| 2021-12-14  | [1.8.18](https://github.com/arduino/Arduino/releases/tag/1.8.18)                | Upgraded Log4j to 2.16.0, resolving [CVE-2021-45046](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046)                                                                                                                                                                         |
| 2021-12-14  | [1.8.17](https://github.com/arduino/Arduino/releases/tag/1.8.17)                | Upgraded Log4j to 2.15.0, resolving [CVE-2021-44228](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228)                                                                                                                                                                         |
| 2021-09-06  | [1.8.16](https://github.com/arduino/Arduino/releases/tag/1.8.16)                | Using Log4j 2.12.0                                                                                                                                                                                                                                                                          |

> **Note:** The record creation date may reflect when the CVE ID was allocated or reserved, and does not necessarily indicate when this vulnerability was discovered, shared with the affected vendor, publicly disclosed, or updated in CVE.
