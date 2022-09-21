---
title: "Install or update FTDI drivers"
id: 4411305694610
---

Often FTDI drivers will be automatically installed by your system when using Arduino. But if this does not happen, or if you believe the drivers are outdated or corrupted, you can follow the instructions below.

---

## Windows

1. Go to the [FTDI Chip driver page](https://ftdichip.com/drivers/vcp-drivers/).

2. Scroll down and find the VCP driver downloads.

3. Download the **setup executable** for _Windows (Desktop)_.

   ![The FTDI download page with the setup executable download link highlighted.](img/ftdi-install-windows-download.png)

4. Run the executable.

5. In the window that opens, click 'Extract'.

   ![Extracting the installer.](img/ftdi-install-windows-extract.png)

6. Click 'Next'.

   ![Welcome screen for the installer.](img/ftdi-install-windows-next.png)

7. Accept the license agreement and click Next to proceed.

   ![Accepting the license agreement.](img/ftdi-install-windows-agreement.png)

8. When the installation is complete, click Finish to close the window.

   ![The final screen in the installation wizard after the installation is complete.](img/ftdi-install-windows-complete.png)

---

## macOS

1. Go to the [FTDI Chip driver page](https://ftdichip.com/drivers/vcp-drivers/).

2. Scroll down and find the VCP driver downloads.

3. Download the latest release applicable for your system.

   > To check your OS version, click 'Apple > About this Mac' in the menu bar.

4. Extract the downloaded archive.

5. Move the `.app` file into the Applications folder.

   ![Dragging FTDIUSBSerialDextInstaller_1_4_7.app into the Applications folder.](img/ftdi-install-mac-downloads-to-applications.png)

6. Open the app and click 'Install FTDI USB Serial Dext VCP'.

   ![Window with the text "FTDI USB Serial Dext VCP". A button reads "Install FTDI USB Serial Dext VCP".](img/ftdi-install-mac-install-button.png)

   **If you are asked to set security permissions to allow the installation, proceed with steps 7 and 8**. Otherwise, skip to step 9.

7. Click the button to open Settings or press `CMD + Space` to open Spotlight and start typing 'Security & Privacy' until that option appears.

8. Click the lock and enter your password, then click 'Allow'.

   ![Allowing the installation in Security & Privacy.](img/ftdi-install-mac-security.png)

9. When the installation is completed the result will say "Succeeded".

   ![Window with the text "FTDI USB Serial Dext VCP". A button reads "Install FTDI USB Serial Dext VCP". The text "Result: Succeeded" is now shown, followed by a green check mark.](img/ftdi-install-mac-succeeded.png)

   You can now close the window.

---

## Linux

Manual installation is not necessary, all FTDI devices are now supported in Ubuntu 11.10, kernel 3.0.0-19.

---

## Further reading

* [Installation Guides (FTDI Chip)](https://ftdichip.com/document/installation-guides/)
