---
title: "Configure your network for Arduino Cloud"
id: 360017279260
---

If you are using Arduino Cloud on a restricted network (such as a school, office, or highly secure private network) or are experiencing connectivity issues, you may need to whitelist specific domains and ports in your firewall.

---

## TCP and UDP ports used by Arduino Cloud

> [!NOTE]
> A home network with a default configuration will usually not prevent any Arduino Cloud connections. You do not need to add any of the configurations above unless you're experiencing problems or will be using the service on a restricted network.

The Arduino Cloud uses the following domains and ports, which need to be whitelisted in your firewall.

| Domain                    | Port |
| ------------------------- | ---- |
| `mqtts-up.iot.arduino.cc` | 8884 |
| `mqtts-sa.iot.arduino.cc` | 8885 |
| `wss.iot.arduino.cc`      | 8443 |

You will also need to allow NTP access on port 123 UDP for `time.arduino.cc`.

### Over-the-Air updates

Some networks may require additional configuration to enable Over-the-Air (OTA) updates. In these cases, these endpoints should be whitelisted:

| Domain                    | Port |
| ------------------------- | ---- |
| `boards-int.arduino.cc`   | 443  |
| `boards-v2.arduino.cc`    | 443  |

---

## Using Arduino Cloud on school networks

Internet access in Schools can vary depending on the end user, device type, and the Wi-Fi network type you have installed in schools. Most schools today are switching to using a WEP2-Enterprise network as a safe and secure way to access the internet for students, teachers, and other staff.

Setting up Arduino to access the internet via the school network can be challenging. This guide aims to walk you through the steps to connect your Arduino board to the school network and access our IoT features.

The WPA2 (Enterprise) RADIUS combination affords networks the highest level of cybersecurity, especially when X.509 digital certificates are used for authentication. WPA2 Enterprise requires an 802.1X authentication server anyway, so it's only logical to implement the best possible authentication security during configuration. However, WPA2 - Enterprise **doesn't work with Arduino Devices**.

**Try this if you're having issues using Arduino Cloud on a school network:**

* Find out the type of Wi-Fi network implemented on your school premises. If you are using any sort of WEP/WEP2 personal networks in your school besides the main network that essentially only requires an SSID (the name of the Wi-Fi connection) and password, you are good to go.

* Reach out to your school administrator and recommend creating a subnetwork specifically for connecting your Arduino devices using WEP/WEP2. This network would have limited access and can only be used for IoT purposes.

* If you don't have access to or can't create a separate WEP/WEP2 network, you can create a hotspot using your mobile device and try to connect your devices to it. Keep in mind that this solution is temporary and restrictive, primarily suitable for testing purposes. It's not intended for prolonged deployment.

---

## Test your network

If you are experiencing connectivity issues, you can test if your network allows access to the required endpoints using built-in command-line tools. When running the tests, make sure you are connected to the same network that your Arduino board is using.

### Windows (PowerShell)

On Windows, you can use the `Test-NetConnection` in PowerShell.

1. Open the Windows Start menu, search for **PowerShell**, and open it.
2. Run these commands below to test the TCP connections for Arduino Cloud:

   ```powershell
   Test-NetConnection mqtts-up.iot.arduino.cc -Port 8884
   Test-NetConnection mqtts-sa.iot.arduino.cc -Port 8885
   Test-NetConnection wss.iot.arduino.cc -Port 8443
   Test-NetConnection boards-int.arduino.cc -Port 443
   Test-NetConnection boards-v2.arduino.cc -Port 443
   ```

   Look at the **TcpTestSucceeded** value in the output:

   * **True:** The connection was successful.
   * **False:** Your firewall is blocking the connection.

3. You can test the UDP NTP server (`time.arduino.cc` on port 123) using the Windows Time tool (`Test-NetConnection` only tests TCP connections):

   ```cmd
   w32tm /stripchart /computer:time.arduino.cc /samples:1 /dataonly
   ```

   If it successfully returns a time offset, UDP port 123 is open.

### macOS and Linux (Terminal)

On macOS and Linux, you can use the `nc` (netcat) utility in the Terminal.

1. Open your **Terminal** application.
2. Run these commands below to test the TCP connections for Arduino Cloud:

   ```bash
   nc -zv mqtts-up.iot.arduino.cc 8884
   nc -zv mqtts-sa.iot.arduino.cc 8885
   nc -zv wss.iot.arduino.cc 8443
   nc -zv boards-int.arduino.cc 443
   nc -zv boards-v2.arduino.cc 443
   ```

   Check the output message:

   * **Success:** The terminal will show a message like `succeeded!` or `open`.
   * **Failure:** The terminal will show `Connection refused` or hang until it times out.

3. You can test the UDP NTP server (`time.arduino.cc` on port 123) using netcat's UDP mode:

   ```bash
   nc -zuv time.arduino.cc 123
   ```

   Check the output message:

   * **Success:** The terminal will show a message like `succeeded!` or `open`.
   * **Failure:** The terminal will show `Connection refused` or hang until it times out.

> [!NOTE]
> On highly restrictive networks (such as enterprise or university networks), you may also need to whitelist your board's MAC address. Check with your network administrator if you continue to experience issues after opening the required ports.
