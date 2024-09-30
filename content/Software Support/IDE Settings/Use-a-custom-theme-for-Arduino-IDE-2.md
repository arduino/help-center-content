---
title: "Use a custom theme for Arduino IDE 2"
---

## How to get custom theme

1. If open, close all Arduino IDE windows.

1. Go to [Visual Studio Market Place](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Installs) and find a Theme of your liking.

1. Under the heading *Resources*, Click Download Extension

    > [!NOTE]
    > Don't click the big *Install* button. The theme will just open in Visual Studio Code. We need the actual file of the extension

1. Now open the `plugins` folder for the Arduino IDE.

    Windows: `\AppData\Local\Programs\Arduino IDE\resources\app\plugins`

    macOS: resources/app/plugin

1. Copy and paste the downloaded file to the folder.

1. Open Arduino IDE again and open the preferences page by clicking File>Preferences

1. Under theme, Select your new theme

![custom theme](img/custom-theme.png)
