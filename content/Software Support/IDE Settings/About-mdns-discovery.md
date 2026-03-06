---
title: "About mdns-discovery"
id: 4506515275548
---

Some Arduino software use an [mDNS discovery tool](https://github.com/arduino/mdns-discovery) to identify and communicate with compatible network-connected boards for tasks like OTA uploads. mDNS is used to detect the addition and removal of these ports on the local network.

The following software application uses mDNS discovery:

- Arduino CLI
- Arduino IDE
- Arduino App Lab

## If you are prompted to allow mdns-discovery.exe

You may be asked to allow **mdns-discovery.exe** to communicate on the network when:

- You install Arduino software for the first time
- A new mDNS version is included in an update for your Arduino software

Allow mdns-discovery.exe to access the network if you want to use network-connected boards.

## Manually allow mdns-discovery through Windows Firewall {#allow-manually}

If you declined the Windows Defender Firewall prompt when the tool first ran, or if network discovery isn't working, Windows may be blocking the application. You can fix this by manually allowing the app:

1. Press the **Windows Key**, type **Allow an app through Windows Firewall**, and press Enter.

2. Click the **Change settings** button at the top right (you may be prompted for administrator privileges).

3. Scroll down the list of apps and features to find **mdns-discovery.exe** (or **mdns-discovery**).

4. Check the box to the left of its name to allow it.

5. Check the box under the **Private** column (checking **Public** is generally not recommended unless you are on a trusted public network).

6. Click **OK** to save your changes.

## Further reading

You can see the [release history for mdns-discovery here](https://github.com/arduino/mdns-discovery/releases).
