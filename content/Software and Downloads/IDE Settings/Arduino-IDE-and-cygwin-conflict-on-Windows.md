---
title: "Arduino IDE and cygwin conflict on Windows"
---

If you already have cygwin installed on your computer, you might get an error like this when you try to compile a sketch in Arduino:

```
6 [main] ? (3512) C:\Dev\arduino-0006\tools\avr\bin\avr-gcc.exe: *** fatal error - C:\Dev\arduino-0006\tools\avr\bin\avr-gcc.exe: *** system shared memory version mismatch detected - 0x75BE0084/0x75BE009C.
```

This problem is often caused by incompatible versions of the cygwin DLL file.

To check if this is the issue, search for `cygwin1.dll` using the Windows `Start->Find/Search` facility and delete all but the most recent version. The most recent version *should* reside in `x:\cygwin\bin`, where 'x' is the drive on which you have installed the cygwin distribution. Rebooting is also suggested if you are unable to find another cygwin DLL.

If so, first make sure that you don't have cygwin running when you use Arduino. If that doesn't help, you can try deleting `cygwin1.dll` from the Arduino directory and replacing it with the `cygwin1.dll` from your existing cygwin install (probably in `c:\cygwin\bin`).
