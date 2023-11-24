---
title: "Fix port access on Linux"
id: 360016495679
---

Arduino IDE will not be able to open a port if your user account lacks the required permissions.

This may cause errors like these when uploading:

* `avrdude: ser_open(): can't open device "<port>": Permission denied` <!-- Can occur when user is not in the dialout group. Fails quickly. Tested with Arduino UNO R3. -->
* `avrdude: usbdev_open(): can't open device: Permission denied` <!-- UNO WiFi Rev2 -->
* `No device found on <port>` (bossac) <!-- Tested with Arduino Nano 33 IoT -->
* `dfu-util: No DFU-capable USB device available` <!-- Tested with Arduino GIGA R1 WiFi -->

Or when opening the Serial Monitor: `Error opening serial port '<port>'`

In this article:

* [Udev rules for bootloader mode](#udev)
* [Add yourself to the dialout group](#dialout)
* [Check for programs blocking the port](#processes)

---

<a id="udev"></a>

## Udev rules for bootloader mode

If you are able to select the board, and begin sketch upload, but the upload fails after some time, your system may not have the needed **udev rules** for when the board resets in bootloader mode.

This can result in errors like:

* avrdude: usbdev_open(): cannot open device: Permission denied
* dfu-util: Cannot open DFU device x:y found on devnum z (LIBUSB_ERROR_ACCESS)
* Error: unable to open CMSIS-DAP device x:y
* dfu-util: No DFU capable USB device available
* avrdude: jtag3_open_common(): Did not find any device matching VID 0x03eb and PID list: x

If you experience this issue, see [Fix udev rules on Linux](https://support.arduino.cc/hc/en-us/articles/9005041052444-Fix-udev-rules-on-Linux).

---

<a id="dialout"></a>

## Add yourself to the dialout group

Most Linux configurations have a `dialout` group for full and direct access to serial ports. By adding your user account to this group you will have the necessary permissions for Arduino IDE to communicate on the serial ports.

1. Open Terminal.

2. Enter the following command, replacing `<username>` with the name of your account.

   ```
   sudo usermod -a -G dialout <username>
   ```

3. Restart your computer for the changes to take effect.

**If the group wasn't found, or if you still get an error**, the `dialout` group may have a different name.

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

5. Restart your computer for the changes to take effect.

---

<a id="processes"></a>

## Check for processes blocking the port

Another cause of errors are other processes that are using the port.

1. Identify the name of the port you're trying to access. The port name may appear in the error output, but you can also see it in the **Tools > Port** menu.

   It will usually start with `/dev/tty`, for example, `/dev/ttyACM0`.

2. Open your computer's command line application (often referred to as shell, terminal, console, prompt or various other names). Look for it in your launcher, or try the <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> keyboard shortcut (available on most Linux systems).

3. Input the following command, replacing `<port name>` with the port name for your board.

   ```
   lsof <port name>
   ```

   The output may look something like this:

   ```
   username@computer:~$ lsof /dev/ttyACM0
   COMMAND   PID     USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
   java    13854 username   87u   CHR  166,0      0t0  950 /dev/ttyACM0
   ```

   The first value returned is the **process name**, which in this case was `java`. This is because another instance of the IDE is running with the Serial Monitor open. The second value, in this case `19772`, is **the Process identifier (PID)**. We can get more info with this command (replace `<PID>` with the PID in your input):

4. To get more information about the process, use the `ps` command:

   ```
   ps <PID>
   ```

   In this case the resulting output was:

   ```
   username@computer ~ % ps 13854                 
     PID   TT  STAT      TIME COMMAND
   13854   --  -      5:28.07 /home/username/Downloads/arduino-ide_2.0.0-beta.2_Linux_64bit  
   ```

   Note the path in the **COMMAND** column. In this example, an instance of Arduino IDE is using the port.

   > **Note:** In some cases, the parent process may be more informative.
   >
   > You can use this command: `ps -o ppid= <PID> | xargs ps`

5. Using the process name or path may be able to find and close an application that's running the process.

6. If you can't locate the source of the processs, you can terminate the process using the `kill` command.

   Type the following in Terminal:

   ```
   kill <PID>
   ```

   If the process still doesn't stop, you can use add the `-9` flag to force it to quit:

   ```
   kill -9 <PID>
   ```

7. Try uploading your sketch again.

## Still need help?

If you still need help using your Arduino board, [contact us](https://www.arduino.cc/en/contact-us/).
