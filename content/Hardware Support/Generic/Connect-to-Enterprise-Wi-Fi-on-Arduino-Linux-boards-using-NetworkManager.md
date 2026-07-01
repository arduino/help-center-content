---
title: Connect to Enterprise Wi-Fi on Arduino Linux boards using NetworkManager
id: 28585259202716
---

This article explains how to manually connect an Arduino board running Linux (such as the Portenta X8 or Arduino UNO Q) to a Wi-Fi network using NetworkManager from the command line with nmcli. The focus is on Enterprise (802.1X) Wi-Fi networks, which are commonly used in corporate or institutional environments.

For simpler WPA/WPA2-PSK networks, refer to your board's documentation, such as the [Portenta X8 User Manual](https://docs.arduino.cc/tutorials/portenta-x8/user-manual/#manage-your-network-via-cli).

## Requirements

- An Arduino board running a Linux-based operating system (such as the Portenta X8 or Arduino UNO Q)
- Shell access to the device (via ADB, SSH, or Web Shell)
- A Wi-Fi interface available (typically wlan0)
- Enterprise Wi-Fi credentials (SSID, username, password, and authentication method)

## Check Wi-Fi Status and Available Networks

Before configuring a connection, verify that Wi-Fi is enabled and list available access points:

    nmcli radio wifi on
    nmcli device wifi rescan
    nmcli device wifi list

To check the overall NetworkManager status:

    nmcli device

## Connect to an Enterprise Wi-Fi Network Using nmcli

Enterprise networks require creating a connection profile and configuring 802.1X parameters explicitly.

### Example: WPA-Enterprise (PEAP + MSCHAPv2)

First, define the required variables in your shell. These values will be reused in the following commands.

Replace the placeholders with your actual network settings:

    connectionName="enterprise_wifi"
    mySSID="<SSID>"
    myUser="<USERNAME>"
    myPass="<PASSWORD>"

Create the Wi-Fi connection:

    nmcli connection add type wifi ifname wlan0 con-name "$connectionName" ssid "$mySSID"

Configure 802.1X authentication:

    nmcli connection modify "$connectionName" \
      ipv4.method auto \
      wifi-sec.key-mgmt wpa-eap \
      802-1x.eap peap \
      802-1x.phase2-auth mschapv2 \
      802-1x.identity "$myUser" \
      802-1x.password "$myPass"

Once configured, the connection is activated automatically. If not, you can bring it up manually:

    nmcli connection up "$connectionName"

## Manage Saved Connections

List all saved network profiles:

    nmcli connection show

Disconnect from a network:

    nmcli connection down "$connectionName"

Delete a saved connection:

    nmcli connection delete "$connectionName"

## Troubleshooting

If the network does not appear, rescan the access points:

    nmcli device wifi rescan

Check connection status and logs if authentication fails:

    nmcli device
    sudo journalctl -u NetworkManager

Remove and recreate the connection if settings were incorrect.

Enterprise networks can vary significantly in configuration. If your network uses certificates, TLS, or custom EAP methods, consult your network administrator and the NetworkManager documentation for advanced configuration options.
