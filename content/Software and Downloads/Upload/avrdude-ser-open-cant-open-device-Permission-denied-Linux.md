---
title: "avrdude: ser_open(): can't open device: Permission denied (Linux)"
---

When uploading a sketch you may get the following error

```
avrdude: ser_open(): can't open device <port>: Permission denied (Linux)
```

or, when opening the Serial Monitor:

```
Error opening serial port '<port>'
```

## 1. Check port selection

* In Arduino IDE, check `Tools > Port`. Usually, the name of the board will be specified after the port name.
* In the Web Editor, select the port in the dropdown menu.

## 2. Add your user to dialout

Most often the issue can be resolved by adding your user account to the `dialout` group:

1. Open Terminal (`Ctrl` + `Alt` + `T`).

2. Enter the following command, replacing `<username>` with the name of your account.

   ```
   sudo usermod -a -G dialout <username>
   ```

3. Log out, then log in again for the changes to take effect.

## 3. If you still get the error

It is possible that the port is part of a different group.

1. Open Terminal and enter this command:

   ```
   ls -l <port>
   ```

   > **Note:** Enter the port name exactly as in the IDE console, e.g. `dev/ttyACM0` or similar.

2. It will return something like this:

   ```
   crw-rw---- 1 <user> <group> 188, 0 5 apr 23.01 <port>
   ```

   Take a note of the group name.

3. Now we want to add your user to that group. Enter the following command in the terminal, replacing `<group>` with the group name from above, and `<username>` with your username:

   ```
   sudo usermod -a -G <group> <username>
   ```
