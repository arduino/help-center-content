---
title: "Use a custom theme for Arduino IDE 2"
---

## Obtaining themes

1. Go to [Visual Studio Market Place](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Installs) and find a Theme of your liking.

1. Under the heading *Resources*, Click **Download Extension**

    > [!NOTE]
    > Don't click the big *Install* button. The theme will just open in Visual Studio Code. We need the actual file of the theme

## Installation

1. If open, close Arduino IDE

1. Create a folder named `plugins` under the folder called `.arduinoIDE`.

    Windows: `C:\Users\<username>\.arduinoIDE\plugins`

    Linux: `~/.arduinoIDE/`

    macOS: `~/.arduinoIDE/`

    > [!NOTE]
    > The `.arduinoIDE` folder is hidden by default. You can make it visible by pressing the `Command` + `Shift` + `.` keyboard shortcut.

1. Copy the downloaded file to the plugins folder you created.

1. Select File > Preferences from the Arduino IDE menus

1. Under theme, Select your new theme

    ![custom theme](img/custom-theme.png)

1. Save the changed by clicking `OK`
