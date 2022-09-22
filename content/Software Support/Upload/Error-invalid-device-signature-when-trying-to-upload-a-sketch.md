---
title: 'Error "invalid device signature" when trying to upload a sketch'
id: 360016759999
---

If you get this error:

```
avrdude: Yikes! Invalid device signature.
Double check connections and try again, or use -F to override this check.
```

It can mean one of two things:

1. You have the wrong board selected from the `Tools > Board` menu.
2. You're not using the right version of avrdude. Arduino uses a slightly modified version of avrdude to upload sketches to the Arduino board. The standard version queries for the board's device signature in a way not understood by the bootloader, resulting in this error. Make sure you're using the version of avrdude that comes with the Arduino IDE.
