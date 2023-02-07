---
title: 'Error "bad CPU type in executable" on macOS'
---

Under certain conditions, startup or other operations of the Arduino development software might fail with a "`bad CPU type in executable`" error.

This problem can be solved by one of the methods described below:

## If your Mac computer has an Apple Silicon processor

Some of the tools used by the Arduino development software are built for use on x86-64 processors, like those in Intel-based Macs. These can still be used on the [Apple Silicon](https://support.apple.com/en-us/HT211814) Mac computers thanks to a program named **Rosetta** that Apple provides.

**Rosetta** is not pre-installed with macOS. If you have not already installed **Rosetta**, the tools built for use on x86-64 processors processors will fail to run with a "`bad CPU type in executable`" error.

The solution is to install **Rosetta** by one of the following methods:

### Installation Dialog

When you start an application that requires it, macOS will show [a dialog offering installation of **Rosetta**](https://support.apple.com/en-us/HT211861). If you are presented with this dialog when starting the Arduino development software, click the ![Install button](img/symbol_install-rosetta.png) button and complete the installation.

### Manual Installation

If the tool requiring it is run by the Arduino development software as a subprocess, macOS does not show a dialog offering installation of **Rosetta**. In this case you must manually install **Rosetta**:

1. Open **Terminal** (instructions [here](https://support.apple.com/en-ca/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac#trml663c6997)).
1. Type the following command in the **Terminal** window:

   ```text
   softwareupdate --install-rosetta
   ```

1. Press the <kbd>**Enter**</kbd> key.
1. Accept the license agreement with Apple.
1. Wait for the installation to finish.

<!-- markdownlint-disable HC001 -->

## If your computer has a different processor or Rosetta is already installed

<!-- markdownlint-enable HC001 -->

Tools used by the Arduino development software may not be compatible with the processor on your computer. In this case, when the Arduino development software attempts to use the tool it will fail with a "`bad CPU type in executable`" error.

This type of incompatibility is usually caused by using a very old version of a tool. This is often the result of having an outdated version of the platform for your board installed. If so, the solution is to update to the latest version using the Arduino IDE **Boards Manager**:

1. Select **Tools > Board > Boards Manager...** from the Arduino IDE menus to open the "**Boards Manager**" view.
1. Scroll down through the list of boards platforms until you see the entry for the platform of the board you are using.
1. Check to see whether there is a newer version listed in the menu at the bottom of the entry. If so, proceed with the rest of the steps in these instructions.
1. Click the "**INSTALL**" button at the bottom of the entry.
1. Wait for the update to finish.
1. Close the "**Boards Manager**" view.
