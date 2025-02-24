---
title: "ASEC-25-001 - Security incident on Arduino infrastructure"
---

Bulletin ID: ASEC-25-001  
Date: Feb 24th, 2025  
Product / Component: Arduino web infrastructure

## Summary

As announced in a previous bulletin [ASEC-24-002](https://support.arduino.cc/hc/en-us/articles/17406271222684-ASEC-24-002-Security-incident-on-Arduino-infrastructure), we had been made aware that a threat actor has published a set of information related to our infrastructure on a dark web forum. After a deep investigation with our Security Team we have determined that, as a consequence of an attack on our web services:

* A set of data related to users of Arduino Cloud services has been exfiltrated. The data were related to a backup taken before 2018, containing user sketches and usernames; no relevant personal data (such as user’s identity information, email, passwords) have been exfiltrated.
* Some internal infrastructure configuration information including the certificate authority of Arduino Cloud, used to verify the identity of Internet-Of-Things (IoT) devices connected to Arduino Cloud, have been exfiltrated.

As a consequence, we took the following actions:

* We immediately responded to the incident and identified the root cause of the attack, which was related to an API key from one of the SaaS providers involved in providing Arduino services. Furthermore, we conducted thorough internal security analysis and forensic investigations to ensure that no unmanaged risks remained from the leaked data.
* We informed the GDPR authority about the exfiltrated user data.
* We informed via email all users affected by the issue related to Arduino Cloud IoT devices. An update was provided, instructing them to regenerate device credentials for Arduino Cloud.

## What happens now?

* Login security has not been impacted; Arduino users can rest assured that their login credentials remain valid.
* The secure channel for Arduino Cloud connectivity has been updated, ensuring that IoT device owners can trust their connections are secure and validated through a newly implemented identity certificate authority.
  * If you are an Arduino Cloud user and you are unsure about your device's status, visit the Device page on Arduino Cloud at the following link: [https://app.arduino.cc/devices](https://app.arduino.cc/devices). If an update is required, the page will highlight this with an attention mark and provide all the necessary information.

We remain committed to provide the highest security standards and thank you, our community, for your trust and support.

## Contact

If you encounter any issues or have questions regarding this security update, please contact our security team at security@arduino.cc.
