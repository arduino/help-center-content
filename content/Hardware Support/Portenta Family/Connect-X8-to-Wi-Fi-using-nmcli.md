---
title: "Connect X8 to Wi-Fi using nmcli"
---

Learn how to connect and configure a Wi-Fi connection for Portenta X8 using `nmcli` (Network Manager tool).

> [!TIP]
> Portenta X8 features an [Out-of-the-box experience](https://docs.arduino.cc/tutorials/portenta-x8/user-manual/#out-of-the-box-experience) that helps you set up a Wi-Fi connection.

---

## Open the Android Debug Bridge shell

Before starting, open the [Android Debug Bridge shell](https://support.arduino.cc/hc/en-us/articles/14013004356124-Access-the-Linux-command-line-shell-on-Portenta-X8)

## View Wi-Fi Access points

To see a list of the Wi-Fi access points available, you can use the following command.

```
nmcli dev wifi list
```

## Create a new Wi-Fi connection profile

### Add Wi-Fi Connection Profile

Use the `nmcli con add` command to add a new Wi-Fi connection profile.

```
nmcli con add con-name [connection-name] ifname wlp61s0 type wifi ssid [ssid] 
```

Replace [connection-name] with the prefered connection name and [ssid] with the name of the Wi-Fi.

### Modify Wi-Fi Connection Profile

Use the `nmcli con modify` command to change various settings of the network connection. For example, to rename an existing connection, use the following command.

```
nmcli con modify [old-connection-name] connection.id [new-connection-name]
```

Replace [old-connection-name] with the current name of the connection and [new-connection-name] with the new prefered name.

## Connect to a network

Once you've set up a connection profile, you can easily connect to the Wi-Fi using the following command.

```
nmcli con up [connection-name]
```

Replace [connection-name] with the name of the connection profile you created earlier.

If the board successfully connects to Wi-Fi, [The Status LED should be green](https://docs.arduino.cc/tutorials/portenta-x8/user-manual/#first-use-of-your-portenta-x8).

---

For further details, please refer to the [documentation](https://developer-old.gnome.org/NetworkManager/stable/nmcli.html).
