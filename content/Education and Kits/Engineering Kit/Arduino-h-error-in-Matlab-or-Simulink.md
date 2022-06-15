---
title: "Arduino.h error in Matlab or Simulink"
id: 360013895359
---

Firstly, you will need to install five Add-ons which are used in the Arduino engineering kit projects.
After installing the 5 Add-ons if you receive a `fatal error: Arduino.h: No such file or directory` follow the instructions below.

---

1. Type `arduinoio.PackageRoot` on MATLAB Command Window, this will tell you the Arduino Support Package root location, e.g. `C:\ProgramData\MATLAB\SupportPackages\R2019a\3P.instrset\arduinoide.instrset\idepkgs`.

2. Uninstall both MATLAB and Simulink support packages for Arduino by selecting Add-Ons from the MATLAB Toolstrip as shown in the image below and click on manage Add-Ons.

   ![The 'Add-Ons' button in the MATLAB toolstrip.](img/matlab-add-ons-button.png)

3. Next, go to this location and ensure no more files are left, and feel free to delete any left over.

4. Then close MATLAB, right-click on MATLAB icon and select ‘Run as administrator’.

5. Reinstall both support packages.
