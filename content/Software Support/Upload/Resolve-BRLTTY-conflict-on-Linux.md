---
title: "Resolve BRLTTY conflict on Linux"
---

Some Linux distributions have a pre-installed background service named **BRLTTY** that provides access to the console for blind users using a Braille display. These Braille displays connect to the computer using a serial port interface.

Unfortunately, BRLTTY's default configuration assumes that the port from any general-purpose USB-to-serial adapter is a Braille display and "claims" the port. This causes the standard serial driver to disconnect, preventing the port of connected Arduino boards (like the classic Arduino Nano or any board using CP210x, FTDI, or CH340 chips) from appearing in the Arduino IDE port list.

In this article:

- [Symptoms](#symptoms)
- [Solutions](#solutions)
  - [Option 1: Uninstall BRLTTY](#uninstall)
  - [Option 2: Mask the udev rules](#mask-udev)
  - [Option 3: Disable the systemd service](#disable-service)
  - [Option 4: Exclude specific chips](#exclude-chips)

---

## Symptoms

If BRLTTY is interfering with your board's connection, you will notice the following:

1. The port for your connected Arduino board does not appear in the **Tools > Port** menu in Arduino IDE.

2. Running the following command in your terminal checks if the BRLTTY daemon is currently active:

   ```bash
   ps -C brltty
   ```

   If active, the output will list the process:

   ```text
       PID TTY          TIME CMD
     12037 ?        00:00:02 brltty
   ```

3. Running the `dmesg` command right after plugging in your board shows that a serial interface (like `/dev/ttyUSB0`) was successfully attached but was immediately claimed and disconnected by BRLTTY:

   ```text
   ftdi_sio 3-4:1.0: FTDI USB Serial Device converter detected
   usb 3-4: FTDI USB Serial Device converter now attached to ttyUSB0
   usbfs: interface 0 claimed by ftdi_sio while 'brltty' sets config #1
   ftdi_sio ttyUSB0: FTDI USB Serial Device converter now disconnected from ttyUSB0
   ```

---

## Solutions

Choose one of the following methods depending on your system configuration and whether you need Braille display support.

### Option 1: Uninstall BRLTTY {#uninstall}

If you do not require Braille display support, the simplest and cleanest solution is to uninstall the BRLTTY package entirely.

> [!NOTE]
> On some Linux distributions (such as Pop!_OS), BRLTTY is a dependency of the desktop environment. Attempting to uninstall it may prompt the package manager to remove essential system packages (like `pop-desktop`). If this occurs, please use **Option 2** or **Option 3** instead.

1. Open your terminal.

2. Enter the following command to uninstall BRLTTY:

   ```bash
   sudo apt remove brltty
   ```

3. Disconnect your Arduino board, then reconnect it to the USB port. It should now appear correctly.

### Option 2: Mask the udev rules {#mask-udev}

This surgical approach keeps BRLTTY installed on your system but overrides its `udev` configuration, preventing it from grabbing general-purpose USB-serial converter chips.

1. Open your terminal.

2. Override BRLTTY's system rules by creating symbolic links pointing to `/dev/null` in `/etc/udev/rules.d/` for all BRLTTY rules:

   ```bash
   for f in /usr/lib/udev/rules.d/*brltty*.rules; do
       sudo ln -sf /dev/null "/etc/udev/rules.d/$(basename "$f")"
   done
   ```

3. Reload the `udev` system to apply the new overrides:

   ```bash
   sudo udevadm control --reload-rules
   ```

4. Disconnect your Arduino board and reconnect it to the USB port.

### Option 3: Disable the systemd service {#disable-service}

On modern Linux distributions that manage BRLTTY via `systemd` (like Ubuntu 22.04 and newer), you can stop and mask the system service. This prevents BRLTTY from starting automatically when a USB device is plugged in.

1. Open your terminal.

2. Stop and mask the udev-triggered BRLTTY service:

   ```bash
   sudo systemctl stop brltty-udev.service
   sudo systemctl mask brltty-udev.service
   ```

3. Stop and disable the main BRLTTY service:

   ```bash
   sudo systemctl stop brltty.service
   sudo systemctl disable brltty.service
   ```

4. Disconnect your Arduino board and reconnect it to the USB port.

### Option 4: Exclude specific chips {#exclude-chips}

If you actually use a Braille display and need to keep BRLTTY active, you can modify its rule list so it ignores only the generic USB-to-serial chips used by Arduino boards.

1. Open your terminal.

2. Find the rule file for BRLTTY in your system's `udev` directory (typically `/usr/lib/udev/rules.d/85-brltty.rules` or `/lib/udev/rules.d/85-brltty.rules`) and open it with root privileges in a text editor like `nano`:

   ```bash
   sudo nano /usr/lib/udev/rules.d/85-brltty.rules
   ```

3. Look for the lines that define the Vendor and Product IDs of the USB-to-serial chip your Arduino uses, and comment them out by adding `#` at the beginning of each line:

   - **FTDI FT232R** (used on classic Nano):

     ```udev
     # ENV{PRODUCT}=="403/6001/*", ...
     ```

   - **CH340**:

     ```udev
     # ENV{PRODUCT}=="1a86/7523/*", ...
     ```

   - **CP210x**:

     ```udev
     # ENV{PRODUCT}=="10c4/ea60/*", ...
     ```

4. Save the file (in nano, press <kbd>Ctrl</kbd> + <kbd>O</kbd>, then <kbd>Enter</kbd> to save, and <kbd>Ctrl</kbd> + <kbd>X</kbd> to exit).

5. Reload the rules to apply the changes:

   ```bash
   sudo udevadm control --reload-rules
   ```

6. Disconnect your Arduino board and reconnect it to the USB port.
