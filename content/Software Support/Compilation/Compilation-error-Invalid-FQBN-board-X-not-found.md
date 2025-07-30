---
title: "Compilation error: Invalid FQBN: board \"X\" not found"
id: 21448454878748
---

> [!IMPORTANT]
> If you're using **Arduino Nano R4** and see the error `Invalid FQBN: board arduino:renesas_uno:nanor4 not found`, please [install Arduino UNO R4 Boards 1.5.0 or later](https://support.arduino.cc/hc/en-us/articles/4404691106066-How-to-update-the-core-of-your-Arduino-Board).

When compiling or uploading, the following error may occur:

```
Compilation error: Invalid FQBN: board "X" not found
```

The error can occur if the selected board does not exist in the installed version of the board package for that board. This can happen if the selected board was added to an existing board package that is already installed on your computer. To solve this problem, [use the latest version of the board package](https://support.arduino.cc/hc/en-us/articles/4404691106066-How-to-update-the-core-of-your-Arduino-Board).

If you're using Arduino CLI, ensure you've typed the FQBN correctly. You can list the FQBNs for all installed boards with the `arduino-cli core list --all` command.
