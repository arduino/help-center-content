---
title: "Control PWM Signals on Arduino Portenta X8"
---

Controlling [PWM (Pulse Width Modulation)](https://www.kernel.org/doc/Documentation/pwm.txt) signals allows for precise adjustment of output voltages, making it a useful tool for motor control and LED brightness adjustment, and so on. In this guide, we'll walk through the steps to manage PWM signals for Arduino Portenta X8.

## Setup

Before you can use PWM control, let's ensure you're set up correctly.

1. Open your command prompt or terminal and navigate to the ADB directory. You can find it at `cd %localappdata%\Arduino15\packages\arduino\tools\adb\32.0.0.`

1. Run the command `adb.exe shell` to access the ADB shell.

1. Now you need to export a PWM channel. Use the command `echo <channel number> > export`.

    Remember to replace `<channel number>` with the slot number the cable is plugged into. For instance, if the cable is connected to slot 2, run `echo 2 > export`.

1. After exporting the PWM channel, navigate to its directory using `cd pwmX`, where **X** represents the channel number you exported (e.g., `cd pwm2`).

Now you should be all set to start controlling the PWM signal. Below, you'll find some usage examples.

## Understanding Period and Duty Cycle

### Period

Represents the total duration of the PWM signal, including both the active (ON) and inactive (OFF) periods.

You configure this by running `echo x > period`, where **x**, in this case, is the desired duration in nanoseconds.

### Duty Cycle

Represents the percentage of time the signal is in the active (ON) state during each period.

You configure this by running `echo x > duty_cycle`, where **x**, in this case, is the desired duration in nanoseconds.

> [!Note]
> **Period** needs to have a higher value than **duty cycle**.

## Controlling Output

To enable or disable the PWM output, use the these commands:

- To **enable** the output, run `echo 1 > enable`.

- To **disable** the output, run `echo 0 > enable`.

> [!Note]
> Setting enable to 0 doesn't turn off the light but rather signifies that the setting for the light is turned off

## Checking PWM Parameters

You can verify the current status for **Duty cycle, Period, and Enable** by using the `cat` command.

`cat duty_cycle / period / enable`

The terminal should output their respective values.

## Troubleshooting

### Export failure

If the export command fails, try running `sudo su -`. Then, navigate back to the PWM configuration directory using `cd /sys/class/pwm/pwmchip0`.

Alternatively, try writing `sudo` before the command.

### ADB tool missing

If, for any reason, you're unable to locate the **ADB tool**, you can [download](https://developer.android.com/tools/releases/platform-tools#downloads) it from here and navigate to its directory instead.
