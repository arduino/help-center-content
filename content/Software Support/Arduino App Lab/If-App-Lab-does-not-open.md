---
title: "If App Lab does not open on Linux"
---

If you’re running App Lab on Linux, the application will not be able to launch if the WebKit2 library is not installed. Learn how to install the library and diagnose other potential issues.

---

In this article:

<!-- TOC -->

- [Make sure the WebKit2 library is installed](#make-sure-the-webkit2-library-is-installed)
- [Try launching App Lab in Terminal](#try-launching-app-lab-in-terminal)

<!-- /TOC -->

## Make sure the WebKit2 library is installed

If you’re running App Lab on Linux, the application will not be able to launch if an appropriate version of the **WebKitGTK** library is missing.

Resolve the issue by installing the library:

1. Open Terminal from the main application menu, or press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>.

1. Type the following command:

   - **Ubuntu/Debian/Mint:** `sudo apt install libwebkit2gtk-4.1-0`
   - **Arch:** `sudo pacman -S webkit2gtk-4.1`

1. Press <kbd>Enter</kbd>.

1. Try launching App Lab again.

If the library was already installed, check for other errors by [launching App Lab in Terminal](#try-launching-app-lab-in-terminal).


## Launch App Lab in Terminal

If App Lab still isn't launching, you can try opening the application from Terminal, to reveal error output not visible when launching the application normally.

Follow these steps:

1. Open Terminal from the main application menu, or press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>.

1. Navigate to the directory containing Arduino App Lab. A quick way to do this is by typing `cd`and a space, and then drag and drop the file's folder directly onto the Terminal window. The path will appear automatically. Press <kbd>Enter</kbd> to confirm.

1. Type `./arduino-app-lab` and press <kbd>Enter</kbd>.

1. Observe the Terminal output.

   * If you see this error, you are still missing the WebKitGTK library.

     ```
     ./arduino-app-lab: error while loading shared libraries: libwebkit2gtk-4.1.so.0: cannot open shared object file: No such file or directory
     ```

     Follow the steps in [Make sure the WebKit2 library is installed](#make-sure-the-webkit2-library-is-installed).

   * For other issues, try seraching the Arduino Help Center or [contacting Arduino Support](https://www.arduino.cc/en/contact-us/).
