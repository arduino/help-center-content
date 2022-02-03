---
title: "Arduino IDE won't open; The cloud file provider is not running"
---

If the Arduino IDE doesn't start on Windows (the initialization window appears and disappears without showing any error message or warning), try running `arduino_debug.exe` from the Command Prompt. The `arduino_debug.exe` is located in the Arduino installation folder, which is in C:\Program Files (x86)\Arduino\ by default.

1. Press Win+R.

2. Type in 'cmd' and press enter.

3. Navigate to the installation folder with the `cd` command.

   ```
   cd <path>
   ```

   You may be able to copy the path into CMD by dragging the folder onto the CMD window.

4. Run the executable.

   ```
   arduino_debug.exe
   ```

5. Observe the output. If you happen to get the following message

   ```
   java.io.IOException: The cloud file provider is not running
   ```

   there is most likely a problem with the OneDrive On-Demand synchronization. Proceed with the steps below.

## Arduino IDE and Microsoft OneDrive On-Demand

The OneDrive On-Demand feature can result in essential files not being available or synchronized, which can stop the IDE from working.

---

There are numerous ways to fix this issue.

* Disable On-Demand for the IDE location.
* Install the IDE somewhere else (that does not have On-Demand enabled).
* Using the portable version will make the above easier, as it's all contained in one folder. But if that folder has On-Demand enabled, there could still be issues.
