---
title: "About mdns-discovery"
id: 4506515275548
---

Arduino IDE includes an [mDNS discovery tool](https://github.com/arduino/mdns-discovery) used to identify the ports of boards that support the Over-The-Air (OTA) feature. This tool helps Arduino IDE communicate with compatible network-connected boards for tasks like OTA uploads. It detects the addition and removal of these ports on the local network, allowing the IDE to keep the list of available ports updated. This ensures that the port listings, such as those found in the _Tools > Port_ menu and the board selector in the IDE, are up-to-date.

When a new version of mdns-discovery is available, it will automatically be installed by Arduino IDE. The new version may be treated as a new application by your computer. For this reason, you may have to allow the application to communicate on the network after an update. You can see the [release history for mdns-discovery here](https://github.com/arduino/mdns-discovery/releases).

## Further reading

* [mdns-discovery (GitHub)](https://github.com/arduino/mdns-discovery)
