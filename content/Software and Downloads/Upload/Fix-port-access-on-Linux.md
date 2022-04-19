---
title: "Fix port access on Linux"
---

Arduino IDE will not be able to open a port if your user account lacks the required permissions.

This may cause errors like these:

* `avrdude: ser_open(): can't open device <port>: Permission denied (Linux)` <!-- when uploading -->
* `Error opening serial port '<port>'` <!-- when opening the Serial Monitor -->

You can fix the error by adding your user to the relevant **group**.

---

## Add yourself to the dialout group

Most Linux configurations have a `dialout` group for full and direct access to serial ports. By adding your user account to this group you will have the necessary permissions for Arduino IDE to communicate on the serial ports.

1. Open Terminal.

2. Enter the following command, replacing `<username>` with the name of your account.

   ```
   sudo usermod -a -G dialout <username>
   ```

3. Sign in and out for the changes to take effect.

---

## Troubleshooting

If the group wasn't found, or if you still get an error, the `dialout` group may have a different name.

1. In _Tools > Port_, note the name of the port your board is connected to, such as `dev/ttyACM0` or similar.

2. Open Terminal.

3. Enter this command:

   ```
   ls -l <port>
   ```

   Take note of the group name in the response:

   ```
   crw-rw---- 1 <user> <group> 188, 0 5 apr 23.01 <port>
   ```

4. To add your user to the group, enter the following command in the terminal, replacing `<group>` with the group name from the previous step, and `<username>` with your username:

   ```
   sudo usermod -a -G <group> <username>
   ```

5. Sign in and out for the changes to take effect.
