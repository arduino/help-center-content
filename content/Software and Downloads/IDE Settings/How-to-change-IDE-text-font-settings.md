---
title: "How to change IDE text font settings"
id: 4402771781522
---

This article will instruct you in how to change the font type and size, as well as interface scaling, in the Arduino IDE. This will be helpful if you find the text and buttons hard to read, or otherwise want to change the display settings.

## Changing the IDE preferences

* Open the Preferences window.
  * Windows/Linux: `File > Preferences`
  * macOS: `Arduino > Preferences`

  ![The Arduino IDE preferences window](img/IDE-preferences.png)

  By changing the value in "Editor Font size" (default 12) you can increase or decrease the font size.

* To increase or decrease the size of buttons and other UI elements, on the "Interface scale" row, uncheck "Automatic" and then change the ratio (default 100%) to your preference. A ratio of 200% will double the size.

* Click on OK to save the changes. The IDE has to be restarted for changes in interface scale to take effect.

## Changing the editor font

* Open the Preferences window.
  * Windows/Linux: `File > Preferences`
  * macOS: `Arduino > Preferences`
* Under "More preferences can be edited directly in the file", click the link to open the `Arduino15` directory.
* Close the IDE.
* Inside the folder that opens, open the text file `preferences` with a text editor.
* Look for the line starting with `editor.font`. Replace the current font (after the equals sign) with a preferred font available on your system, like `Monospaced`. Monospaced fonts are recommended.
* Save your changes to the file.
* Re-open the IDE to see the changes implemented.
