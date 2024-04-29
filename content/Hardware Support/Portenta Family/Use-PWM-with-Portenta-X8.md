---
title: "Use PWM with Portenta X8"
---

PWM on Portenta X8 can be controlled with the [sysfs interface](https://www.kernel.org/doc/Documentation/pwm.txt). Learn how to open an Android Debug Bridge shell for Portenta X8 and manage PWM channels. PWM pins are exposed via the high density connector, and requires a compatible carrier board (such as the [Portenta Breakout](https://docs.arduino.cc/hardware/portenta-breakout/)) to use.

Requirements:

* Portenta X8
* A compatible carrier board

---

## 1. Set up your Portenta X8

Before you can use PWM control, let's ensure you're set up correctly.

1. Connect your Portenta X8 to your computer using a USB cable.

1. Android Debug Bridge (adb) is included in the **Arduino Mbed OS Portenta Boards** board package. Ensure you've installed the board package using the [Boards Manager in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/360016119519-Add-boards-to-Arduino-IDE) or [Arduino CLI](https://arduino.github.io/arduino-cli/0.35/getting-started/#install-the-core-for-your-board).

## 2. Open the Android Debug Bridge shell

Connect to the Linux command-line shell on Portenta X8 using adb.

**Windows:**

1. Open Command Prompt.

1. Run the following command to enter the `adb` folder:

   ```
   cd %localappdata%\Arduino15\packages\arduino\tools\adb
   ```

1. Run this command to list the installed versions:

   ```
   dir
   ```

1. Open the installed version:

   ```
   cd <folder name>
   ```

1. Run adb:

   ```
   adb.exe shell
   ```

**macOS:**

1. Open Terminal.

1. Run the following command to enter the `adb` folder:

   ```
   cd ~/Library/Arduino15/packages/arduino/tools/adb
   ```

1. Run this command to list the installed versions:

   ```
   ls
   ```

1. Open the installed version:

   ```
   cd <folder name>
   ```

1. Run adb:

   ```
   ./adb shell
   ```

**Linux:**

1. Open Terminal.

1. Run the following command to enter the `adb` folder:

   ```
   cd ~/.arduino15/packages/arduino/tools/adb
   ```

1. Run this command to list the installed versions:

   ```
   ls
   ```

1. Open the installed version:

   ```
   cd <folder name>
   ```

1. Run adb:

   ```
   ./adb shell
   ```

## 3. Control PWM in the Linux command-line shell

Porenta X8 has 10 PWN channels (enumerated 0-9). Each channel is connected to the corresponding `PWMx` pin on the carrier board.

### Export a new channel

Export a new PWM channel with this command (replace `<channel number>` with a pin number).

```
echo <channel number> > /sys/class/pwm/pwmchip<channel number>/export
```

For example, to use pin PWM2, run this command:

```
echo 2 > /sys/class/pwm/pwmchip0/export
```

After exporting the PWM channel, navigate to its directory using `cd pwmX`, where **X** represents the channel number you exported (e.g., `cd pwm2`).

| Pin  | Path                         |
|------|------------------------------|
| PWM0 | /sys/class/pwm/pwmchip0/pwm0 |
| PWM1 | /sys/class/pwm/pwmchip0/pwm1 |
| PWM2 | /sys/class/pwm/pwmchip0/pwm2 |
| PWM3 | /sys/class/pwm/pwmchip0/pwm3 |
| PWM4 | /sys/class/pwm/pwmchip0/pwm4 |
| PWM5 | /sys/class/pwm/pwmchip0/pwm5 |
| PWM6 | /sys/class/pwm/pwmchip0/pwm6 |
| PWM7 | /sys/class/pwm/pwmchip0/pwm7 |
| PWM8 | /sys/class/pwm/pwmchip0/pwm8 |
| PWM9 | /sys/class/pwm/pwmchip0/pwm9 |

### Open the channel directory

Navigate to the channel directory that was created when you exported the channel:

```
cd /sys/class/pwm/pwmchip0/pwm<channel number>
```

### Configure a channel

When you've exported the channel and navigated into the channel directory, you can configure the PWM channel:

#### Enable or disable PWM output

> [!Note]
> Setting enable to 0 doesn't turn off the light but rather signifies that the setting for the light is turned off

The `enable` property is used to enable/disable the PWM signal.

Enable the PWM output:

```
echo 1 > enable
```

Disable the PWM output:

```
echo 0 > enable
```

Check if channel is enabled:

```
cat enable
```

#### Period

> [!Note]
> **Period** needs to have a higher value than **duty cycle**.

Represents the total duration of the PWM signal, including both the active (ON) and inactive (OFF) periods.

You configure this by running `echo x > period`, where **x**, in this case, is the desired duration in nanoseconds.

Set the period of the PWM signal to _x_ nanoseconds:

```
echo x > period
```

Check current period value:

```
cat period
```

#### Duty cycle

Represents the percentage of time the signal is in the active (ON) state during each period.

You configure this by running `echo x > duty_cycle`, where **x**, in this case, is the desired duration in nanoseconds.

Set duty sycle to _x_ nanoseconds:

```
echo x > duty_cycle
```

Check current cycle value:

```
cat duty_cycle
```

## Controlling Output

To enable or disable the PWM output, use the these commands:

* To **enable** the output, run `echo 1 > enable`.

* To **disable** the output, run `echo 0 > enable`.

---

## Troubleshooting

### Export failure

If the export command fails, try running `sudo su -`. Then, navigate back to the PWM configuration directory using `cd /sys/class/pwm/pwmchip0`.

Alternatively, try writing `sudo` before the command.

### ADB tool missing

If, for any reason, you're unable to locate the **ADB tool**, you can [download](https://developer.android.com/tools/releases/platform-tools#downloads) it from here and navigate to its directory instead.

---

## Further reading

* [Pulse Width Modulation (PWM) interface > Using PWMs with the sysfs interface](https://www.kernel.org/doc/Documentation/pwm.txt#:~:text=Using%20PWMs%20with%20the%20sysfs%20interface)
