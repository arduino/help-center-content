---
title: "About mdns-discovery"
id: 4506515275548
---

Arduino IDE includes an [mDNS discovery tool](https://github.com/arduino/mdns-discovery) which is used to find available network ports. These ports are essential for enabling communication between the IDE and connected devices, particularly for tasks like over-the-air (OTA) uploads. For example, the Board Manager and Library Manager rely on network ports to detect and manage Arduino boards and libraries connected to the network, ensuring seamless communication and updates. By using mDNS discovery, the Arduino IDE can dynamically detect the presence of compatible devices, making the development process more efficient and streamlined.

When a new version of mdns-discovery is available, it will automatically be installed by Arduino IDE. The new version may be treated as a new application by your computer. For this reason, you may have to allow the application to communicate on the network after an update. You can see the [release history for mdns-discovery here](https://github.com/arduino/mdns-discovery/releases).

## Further reading

* [mdns-discovery (GitHub)](https://github.com/arduino/mdns-discovery)
