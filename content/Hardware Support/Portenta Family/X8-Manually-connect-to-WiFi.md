---
title: "X8 - Manually connect to WiFi"
---

To manually connect your board to WiFi, you have to utilize the command-line tool 'nmcli'.

## Using the network manager tool

To connect your board to a WiFi network using the network manager tool, use the following command:

`nmcli device wifi connect <SSID> password <PASSWORD>`

You can check the connection status by using this command:

`nmcli de`

It provides an overview of the current network connections managed by Network Manager.

## Rescanning WiFi access points

If you're having trouble connecting via the local web host or 'nmcli', you may need to refresh the list of available WiFi networks. To do this, simply use the following command:

`nmcli device wifi rescan`

This command instructs the system to search for nearby WiFi networks again, which updates the list of available networks.

## Manage WiFi connections

Managing WiFi connections allows you to create and delete custom connections on your board.

```
connectionName="<custom_connection_id>"
mySSID="<ssid>"
myPass="<password>"

#Create
nmcli con add type wifi ifname wlan0 con-name $connectionName ssid $mySSID password $myPass

#Delete connection id
nmcli con del $connectionName
```

### For Enterprise Access Points

When connecting to enterprise access points, the process differs slightly. Use these commands to create and manage connections for enterprise networks.

```
connectionName="<custom_connection_id>"
mySSID="<ssid>"
myUser="<user>"
myPass="<password>"
#Create and modify, it will connect autoamtically
nmcli con add type wifi ifname wlan0 con-name $connectionName ssid $mySSID
nmcli con modify $connectionName +ipv4.method auto +802-1x.eap peap +802-1x.phase2-auth mschapv2 +802-1x.identity $myUser +802-1x.password $myPass +wifi-sec.key-mgmt wpa-eap
#Delete connection id
nmcli con del $connectionName
```

### Connecting or Disconnecting from an existing connection

If you already have a connection set up, you can easily connect or disconnect using the following commands:

```
#Connect
ncmli con up <connectionName>
```

```
#Disconnect
nmcli con down <connectionName>
```
