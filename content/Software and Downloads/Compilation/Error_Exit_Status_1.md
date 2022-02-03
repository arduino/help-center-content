---
title: "Error: exit status 1"
---

When uploading your sketch you may get:

```
Upload error: Error: 2 UNKNOWN: uploading error: uploading error: exit status 1
```

When verifying _or_ uploading your sketch you may get:

```
Compilation error: Error: 2 UNKNOWN: exit status 1
```

This message simply indicates that either the compilation or upload process has failed and that the process has been terminated. Look at any messages printed before this line, as these will likely be more informative. You may have to scroll up to view the full output.

![Upload error in the IDE console. The line "No device found on cu.Bluetooth-Incoming-Port" is followed by "Upload error: Error: 2 UNKNOWN: uploading error: uploading error: exit status 1"](img/upload-error-error-2-unknown-uploading-error-no-upload-port-provided.png)

In the above image, the problem is that the board was not found on the selected board. You can get a more detailed output by enabling _verbose mode_ in the settings. Do enable verbose mode, open preferences (`File > Preferences` on Windows/Linux and `Arduino > Preferences` on macOS) and after **Show verbose output during** tick both the **Compilation** and **Upload** boxes.
