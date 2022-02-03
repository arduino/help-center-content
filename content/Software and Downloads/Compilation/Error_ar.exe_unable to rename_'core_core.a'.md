---
title: "Error: ar.exe: unable to rename 'core'"
---

The text below explains two common causes for this compilation error and provides solutions for each of them.

`ar.exe: unable to rename 'core\core.a'`

1. This error may be caused by a restrictive antivirus software configuration. Try disabling your antivirus temporarily and then attempt compilation again to see if the problem goes away. If the error doesn't occur with the antivirus off you will need to adjust the settings of your antivirus to whitelist the appropriate file, folder, or process so it doesn't interfere with compilation.

2. Another possible cause may be a lack of administrative rights to perform compilation. In this case try running the Arduino program as an administrator. To do this, right click on Arduino IDE icon and click 'Run as administrator'.
