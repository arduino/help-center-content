---
title: "Error UnsatisfiedLinkError when launching Arduino IDE"
id: 360018412860
---

If you get this error when launching Arduino:

```
 Uncaught exception in main method: java.lang.UnsatisfiedLinkError: Native Library /Users/anu/Desktop/arduino-0002/librxtxSerial.jnilib already loaded in another classloader
```

you probably have an old version of the communications library lying around. Search for `comm.jar` or `jcl.jar` in `/System/Library/Frameworks/JavaVM.framework/` or in directories in your `CLASSPATH` or `PATH` environment variables.
