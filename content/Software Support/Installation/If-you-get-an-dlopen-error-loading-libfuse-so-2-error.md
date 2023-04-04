---
title: 'If you get an "dlopen(): error loading libfuse.so.2" error'
---

When running Arduino IDE on Linux, you may get this error:

```
dlopen(): error loading libfuse.so.2

AppImages require FUSE to run.
You might still be able to extract the contents of this AppImage
if you run it with the --appimage-extract option.
See https://github.com/AppImage/AppImageKit/wiki/FUSE
for more information
```

The error can occur if there are missing software dependencies for AppImage. You can solve the issue by installing them.

Follow these steps:

1. Open the **Terminal** application.
2. Enter this command:

   `sudo apt-get -y install libfuse2`
3. Press <kbd>Enter</kbd> and wait for the process to complete.
4. Close the Terminal window.
5. Try launching Arduino IDE again by double-clicking the AppImage file.
