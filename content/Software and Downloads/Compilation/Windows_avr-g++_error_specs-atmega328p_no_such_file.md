---
title: "Windows: avr-g++: error: device-specs/specs-atmega328p: No such file or directory"
---

This error appears during compilation in the console, it is caused by an extra file inside the system properties. You will read here the steps to take in order to avoid it.

## Steps

1. Right click the Start button.

2. Click "Run".

   ![run](img/step2.png)

3. Type "`sysdm.cpl`".

   ![command](img/command.png)

4. Click the "OK" button. "System Properties" should now open.

5. Click the "Advanced" tab.

6. Click the "Environment variables..." button.

   ![advanced](img/advanced.png)

7. Under "System variables", scroll down until you see "GCC_EXEC_PREFIX". Click on it.

   ![GCC](img/GCC_click.png)

8. Click the "Delete" button.

   ![delete](img/GCC_delete.png)

9. Click the "OK" button.

10. Close System Properties.

11. Open the IDE again and try to upload your sketch the error should no longer occur.
