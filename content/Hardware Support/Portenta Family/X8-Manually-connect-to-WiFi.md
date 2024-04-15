---
title: "X8 - Manually connect to WiFi"
---

To manually connect your board to WiFi, you have to utilize the command-line tool `nmcli` through the Network Manager tool.

## Setting up the Network Manager tool

the Network Manager tool should be available in the Arduino IDE folder. Here's the path: `%localappdata%\Arduino15\packages\arduino\tools\adb\32.0.0`

**For Windows:**

1. Open Command Prompt.

1. Use the `cd` command to navigate to the extracted folder's location. `cd <path>`

1. Run `adb.exe shell`.

**For Mac:**

1. Open Terminal.

1. Use the `cd` command to navigate to the extracted folder's location. `cd <path>`

1. Run `./adb shell`.

If you don't have the Network Manager tool, you can download it [here](https://developer.android.com/tools/releases/platform-tools#downloads).

After downloading, follow these steps:

1. Unzip the downloaded package to a convenient location on your computer.

1. Copy the path to the extracted folder. You'll need this to navigate to the adb tool in the terminal.

## Manage WiFi connections

Managing WiFi connections allows you to create and delete custom connections on your board.

### Set up variables

Define variables to customize your WiFi connection

```
connectionName= <custom_connection_id>
mySSID= <ssid>
myPass= <password>
```

### Create connection

With your variables set, you can establish a WiFi connection using this command:

```
nmcli con add type wifi ifname wlan0 con-name $connectionName ssid $mySSID password $myPass
```

If the board successfully connects to WiFi, [The Status LED should be green](https://docs.arduino.cc/tutorials/portenta-x8/user-manual/#first-use-of-your-portenta-x8).

### Delete connection

To remove a previously created connection, use the following command.

```
nmcli con del $connectionName
```

## For Enterprise Access Points

When connecting to enterprise access points, the process differs slightly. Use these commands to create and manage connections for enterprise networks.

### Set up variables

Define variables to configure your enterprise WiFi connection.

```
connectionName="<custom_connection_id>"
mySSID="<ssid>"
myUser="<user>"
myPass="<password>"
```

### Create and configure connection

With your variables set, use the following commands to configure the connection to the enterprise network.

```
nmcli con add type wifi ifname wlan0 con-name $connectionName ssid $mySSID
nmcli con modify $connectionName +ipv4.method auto +802-1x.eap peap +802-1x.phase2-auth mschapv2 +802-1x.identity $myUser +802-1x.password $myPass +wifi-sec.key-mgmt wpa-eap
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
ncmli con up <connectionName>
```

### Disconnect

```
nmcli con down <connectionName>
```

## Rescanning WiFi access points

If you're having trouble connecting via the local web host or `nmcli`, you may need to refresh the list of available WiFi networks. To do this, simply use the following command.

`nmcli device wifi`

This command instructs the system to search for nearby WiFi networks again, which updates the list of available networks.
