---
title: ASEC-26-004 - Update needed for compromised eMudhra CA Certificates
id: 31530185009820
---

Bulletin ID: ASEC-26-004  
Date: Nov 03, 2026  
Impact: Potential Man-in-the-Middle (MitM) / TLS spoofing

Products/Components:

- NINA-FW (connectivity firmware for Arduino UNO WiFi Rev2, Arduino MKR WiFi 1010, Arduino Nano 33 IoT, and Arduino Nano RP2040 Connect)
- uno-r4-wifi-usb-bridge (connectivity firmware for Arduino UNO R4 WiFi)

Affected versions:

- NINA-FW \<= 3.0.1
- uno-r4-wifi-usb-bridge \<= 0.6.0

Fixed version:

- NINA-FW \>= 3.0.2
- uno-r4-wifi-usb-bridge \>= 0.6.1

## Summary

A cryptographic weakness was recently disclosed affecting eight intermediate Certificate Authority (CA) certificates issued by the third-party provider eMudhra. Further details are available in the official security notice at the following link: [eMudhra Certificate Security Incident](https://emudhra.com/en/post/certificate-security-incident). The private keys of these third-party certificates were generated with insufficient entropy, allowing potential adversaries to forge trusted TLS certificates.

**This issue does not originate from Arduino systems or internal infrastructure.**

However, the affected versions of the Arduino connectivity firmware ship with embedded root and intermediate CA bundles that trust these third-party certificates. As a result, a device could establish what appears to be a trusted connection to a website, while actually connecting to a malicious website using a forged TLS certificate derived from the untrustworthy CAs. This could enable Man-in-the-Middle (MitM) or TLS spoofing attacks. The severity of this issue is rated as Medium/High.

The following boards are impacted **only if they open TLS connections to websites other than Arduino Cloud**:

- Arduino UNO WiFi Rev2
- Arduino UNO R4 WiFi
- Arduino MKR WiFi 1010
- Arduino Nano 33 IoT
- Arduino Nano RP2040 Connect

> [!NOTE]
> This type of attack cannot be applied to Arduino Cloud, because Arduino devices use mTLS authentication with a certificate issued by the Arduino CA to connect to Arduino Cloud. **Devices connected to Arduino Cloud are not impacted by this issue.**

New versions of the affected connectivity firmware are now available. These releases permanently remove and distrust the compromised certificates from the embedded trust store:

- [NINA-FW v3.0.2](https://github.com/arduino/nina-fw/releases/tag/3.0.2)
- [uno-r4-wifi-usb-bridge v0.6.1](https://github.com/arduino/uno-r4-wifi-usb-bridge/releases/tag/0.6.1)

## Actions Required

If an impacted board opens TLS connections to external websites (other than Arduino Cloud), users are strongly advised to update the connectivity firmware to the fixed version as soon as possible.

To update the firmware, follow these steps:

1. Connect the board to your computer via USB.
2. Open Arduino IDE v2.x and make sure the board is selected.
3. In the top menu bar, open **Tools > Firmware Updater** and update the connectivity firmware to the latest version.

For detailed instructions, see [Use the Firmware Updater in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/360013896579-Use-the-Firmware-Updater-in-Arduino-IDE).

If your devices operate in isolated environments or communicate exclusively with pinned endpoints, the immediate risk is reduced. However, upgrading remains essential to maintain end-to-end transport security.

## Contact

If you encounter any issues or have questions regarding this security update, please contact our security team at <security@arduino.cc>.
