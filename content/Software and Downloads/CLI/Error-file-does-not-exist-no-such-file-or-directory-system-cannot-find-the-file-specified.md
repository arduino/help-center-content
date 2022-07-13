---
title: "Error: file does not exist, no such file or directory, system cannot find the file specified"
id: 360018444739
---

Errors with this message:

`exec: "/bin/arm-none-eabi-g++": file does not exist`

or

`fork/exec /home/per/.arduino15/packages/arduino/tools/avr-gcc/7.3.0-atmel3.6.1-arduino7/bin/avr-g++: no such file or directory`

or this one when uploading:

`java.io.IOException: Cannot run program "___REMOVE___/bin/avrdude": CreateProcess error=2, The system cannot find the file specified`

Have two possible causes:

## Use of 3rd party boards

If you are using 3rd party boards whose cores or platform has dependencies on another core or platform which is not installed, You are more likely to have this issue when using Arduino CLI and Arduino Pro IDE because 3rd party AVR platforms may assume the Arduino AVR Boards platform will always be installed, but Arduino CLI and Arduino Pro IDE don't come with a bundled installation of that platform.

In order to fix it, you simply need to install the missing platform. Please note that we cannot advise what dependencies a non-Arduino board may be missing. In these cases, we suggest to check the installation instructions or contact the board manufacturer.

## Error during Boards Manager installation

Another possible cause is that something went wrong during the boards manager installation, resulting in a missing compilation or upload tool.

In order to fix it the most reliable solution is to delete the entire `packages` subfolder of the data folder (e.g, `%HOMEPATH%/AppData/Local/Arduino15` , `~/.arduino15`), then reinstall any boards platforms you need.

## Useful links

* [Installing the board cores](https://arduino.github.io/arduino-cli/latest/getting-started/#install-the-core-for-your-board)
* [Adding 3rd party cores](https://arduino.github.io/arduino-cli/latest/getting-started/#adding-3rd-party-cores)
