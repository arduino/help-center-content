---
title: "Use PWM with Portenta X8"
---

Learn how to use Pulse Width Modulation (PWM) on Portenta X8.

>[!NOTE]
> The PWM pins on Portenta X8 are exposed via the high-density connector interface. A compatible carrier board (such as the [Portenta Breakout](https://docs.arduino.cc/hardware/portenta-breakout/)) is recommended. When Portenta X8 is connected to a carrier board, each channel corresponds to the `PWMx` pin on the carrier board.

---

## 1. Connect to the Linux shell

[Connect to the Linux shell using Android Debug Bridge](https://support.arduino.cc/hc/en-us/articles/14013004356124-Access-the-Linux-command-line-shell-on-Portenta-X8){.link-chevron-right}

## 2. Export a new channel

Porenta X8 has 10 PWN channels (enumerated 0-9). They can be controlled with the [sysfs interface](https://www.kernel.org/doc/Documentation/pwm.txt#:~:text=Using%20PWMs%20with%20the%20sysfs%20interface).

Export a new PWM channel with this command (replace `<channel number>` with a pin number).

```
echo <channel number> > /sys/class/pwm/pwmchip0/export
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

## 3. Open the channel directory

Navigate to the channel directory that was created when you exported the channel:

```
cd /sys/class/pwm/pwmchip0/pwm<channel number>
```

For example:

```
cd /sys/class/pwm/pwmchip0/pwm2
```

## 4. Configure a channel

When you've exported the channel and navigated into the channel directory, you can configure the PWM channel:

### enable

The `enable` property is used to enable/disable the PWM signal.

Enable the PWM output:

```
echo 1 > enable
```

Disable the PWM output:

```
echo 0 > enable
```

Check if the channel is enabled:

```
cat enable
```

### period

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

### duty_cycle

Represents the percentage of time the signal is in the active (ON) state during each period.

You configure this by running `echo x > duty_cycle`, where **x**, in this case, is the desired duration in nanoseconds.

Set duty cycle to _x_ nanoseconds:

```
echo x > duty_cycle
```

Check current cycle value:

```
cat duty_cycle
```

---

## Troubleshooting

If the export command fails, try running `sudo su -`. Then, navigate back to the PWM configuration directory using `cd /sys/class/pwm/pwmchip0`.

Alternatively, try writing `sudo` before the command.
