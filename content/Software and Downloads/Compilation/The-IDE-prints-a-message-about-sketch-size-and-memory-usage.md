---
title: "The IDE prints a message about sketch size and memory usage"
---

After compiling a sketch the IDE will check for storage and memory usage, against the specifications of the selected board. **Note that the results are always printed to the console, even if successful.**. As long as the use of storage space and dynamic memory usage are both below 100%, the message does not indicate a problem.

## Example

```
Sketch uses 4316 bytes (15%) of program storage space. Maximum is 28672 bytes.
Global variables use 153 bytes (5%) of dynamic memory, leaving 2407 bytes for local variables. Maximum is 2560 bytes.
```

This sketch has a storage space usage of 15% and memory usage of 5%. Both results are well below 100%, and will present no issues.
