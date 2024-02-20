---
title: "ASEC-24-001 Vulnerabilities in ArduinoModbus Library"
id: 
---

Bulletin ID: ASEC-24-001
Date: Feb 13, 2024
Product / Component: ArduinoModbus library, Arduino Opta
Affected Versions: &lt;= 1.0.8
Fixed Version: 1.0.9

## Summary

This security bulletin provides important information regarding a security update for the [ArduinoModbus](https://github.com/arduino-libraries/ArduinoModbus) library.

It is important to say that this library is used in the Arduino Opta product when the user-developed firmware includes the aforementioned library to perform Modbus communication.

During a security analysis, we identified that the component is impacted by the known vulnerabilities as it implements a vulnerable version of the [libmodbus](https://github.com/stephane/libmodbus) library.
The indirectly inherited known vulnerabilities which affect the [ArduinoModbus](https://github.com/arduino-libraries/ArduinoModbus) component are:

* [CVE-2022-0367](https://nvd.nist.gov/vuln/detail/CVE-2022-0367)
* [CVE-2019-14463](https://nvd.nist.gov/vuln/detail/CVE-2019-14463)

To address these vulnerabilities, we have released an updated library, which includes the required security fixes.
Therefore, to maintain the security of your systems it is advised to update the [ArduinoModbus](https://github.com/arduino-libraries/ArduinoModbus) to the [1.0.9](https://github.com/arduino-libraries/ArduinoModbus/releases/tag/1.0.9) version as soon as possible.

## Impact

The security vulnerabilities in the affected library versions, may, under some circumstances, allow malicious actors to conduct arbitrary read/write out-of-bounds attacks, harming the confidentiality, integrity and availability of the systems which include the vulnerable library.

For these reasons, we highly recommend updating to the latest library version to mitigate these risks and maintain the security of your systems.

## Action Required

Update the component's library to [ArduinoModbus 1.0.9](https://github.com/arduino-libraries/ArduinoModbus/releases/tag/1.0.9) or later as described by the official documentation available [here](https://www.arduino.cc/reference/en/libraries/arduinomodbus/).

## Additional information

For further information visit the following links:

* [https://www.arduino.cc/reference/en/libraries/arduinomodbus/](https://www.arduino.cc/reference/en/libraries/arduinomodbus/) 
* [https://www.arduino.cc/pro/hardware-arduino-opta](https://www.arduino.cc/pro/hardware-arduino-opta) 
* [https://nvd.nist.gov/vuln/detail/CVE-2019-14463](https://nvd.nist.gov/vuln/detail/CVE-2019-14463) 
* [https://nvd.nist.gov/vuln/detail/CVE-2022-0367](https://nvd.nist.gov/vuln/detail/CVE-2022-0367) 
* [https://github.com/arduino-libraries/ArduinoModbus/releases/tag/1.0.9](https://github.com/arduino-libraries/ArduinoModbus/releases/tag/1.0.9) 

## Contact

If you encounter any issues or have questions regarding this security update, please contact our security team at [security@arduino.cc](mailto:security@arduino.cc).
