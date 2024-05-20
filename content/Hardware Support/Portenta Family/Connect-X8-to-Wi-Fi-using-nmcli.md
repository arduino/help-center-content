---
title: "Connect X8 to Wi-Fi using nmcli"
---

Learn how to connect and configure a Wi-Fi connection for Portenta X8 using `nmcli` (Network Manager tool).

> [!TIP]
> Portenta X8 features an [Out-of-the-box experience](https://docs.arduino.cc/tutorials/portenta-x8/user-manual/#out-of-the-box-experience) that helps you set up a Wi-Fi connection.

---

## Using nmcli to manage Wi-Fi connections

Managing Wi-Fi connections allows you to create and delete custom connections on your board.

### Open the Android Debug Bridge shell

Before starting, open the [Android Debug Bridge shell](https://support.arduino.cc/hc/en-us/articles/14013004356124-Access-the-Linux-command-line-shell-on-Portenta-X8)

### Set up variables

Define variables to customize your Wi-Fi connection

```
connectionName= <custom_connection_id>
mySSID= <ssid>
myPass= <password>
```

### Create connection

With your variables set, you can establish a Wi-Fi connection using this command:

```
nmcli con add type Wi-Fi ifname wlan0 con-name $connectionName ssid $mySSID password $myPass
```

If the board successfully connects to Wi-Fi, [The Status LED should be green](https://docs.arduino.cc/tutorials/portenta-x8/user-manual/#first-use-of-your-portenta-x8).

### Delete connection

To remove a previously created connection, use the following command.

```
nmcli con del $connectionName
```

## For Enterprise Access Points

When connecting to enterprise access points, the process differs slightly. Use these commands to create and manage connections for enterprise networks.

### Set up variables

Define variables to configure your enterprise Wi-Fi connection.

```
connectionName="<custom_connection_id>"
mySSID="<ssid>"
myUser="<user>"
myPass="<password>"
```

### Create and configure connection

With your variables set, use the following commands to configure the connection to the enterprise network.

```
nmcli con add type Wi-Fi ifname wlan0 con-name $connectionName ssid $mySSID
nmcli con modify $connectionName +ipv4.method auto +802-1x.eap peap +802-1x.phase2-auth mschapv2 +802-1x.identity $myUser +802-1x.password $myPass +Wi-Fi-sec.key-mgmt wpa-eap
```

### Delete connection

To remove a previously created enterprise connection, use the following command.

```
nmcli con del $connectionName
```

## Connecting or Disconnecting from an existing connection

If you already have a connection set up, you can easily connect or disconnect using the following commands.

### Connect

```
nmcli con up <connectionName>
```

### Disconnect

```
nmcli con down <connectionName>
```

## Rescanning Wi-Fi access points

If you're having trouble connecting via the local web host or `nmcli`, you may need to refresh the list of available Wi-Fi networks. To do this, simply use the following command.

`nmcli device Wi-Fi`

This command instructs the system to search for nearby Wi-Fi networks again, which updates the list of available networks.

---

For further details, please refer to the [documentation](https://developer-old.gnome.org/NetworkManager/stable/nmcli.html).
