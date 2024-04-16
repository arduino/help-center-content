---
title: "X8 - configure PWM through terminal"
---

Configure the PWM channels through the ADB terminal.

Resource https://www.kernel.org/doc/Documentation/pwm.txt

Configure the PWM
Enable channel
The PWM bus can be configured at /sys/class/pwm/pwmchip0

By default there is no pwm channel availables, the labeling of those are a directory calledpwmX

To enable a channel echo <channel number> > export it will write the export file, and a new directory will appear with the number you’ve sent.

Configure output
Configure the channel by navigating to the channel, cd pwmX

Now before being able to enable the output, you need to configure the duty cycle and period, both in nanoseconds.

echo 400 > period

echo 200 > duty_cycle

To enable the output echo 1 > enable

To disable the output echo 0 > enable