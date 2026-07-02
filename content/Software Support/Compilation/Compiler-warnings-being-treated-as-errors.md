---
title: "Compiler warnings being treated as errors"
---

If your sketch compilation fails and the output contains the message `cc1plus: some warnings being treated as errors`, it may be caused by the **Compiler warnings** setting in Arduino IDE.

When the **Compiler warnings** option is set to **More** or **All**, the compiler is instructed to treat standard code warnings as fatal errors, halting the compilation process.

To fix this, reset the compiler warnings level to the default setting:

1. Open the Arduino IDE.
2. Open the Preferences window by selecting **File > Preferences** (Windows/Linux) or **Arduino IDE > Settings** (macOS).
3. Locate the **Compiler warnings** dropdown menu.
4. Change the setting to **Default**.
5. Click **OK** to save the changes.
6. Verify or upload your sketch again.
