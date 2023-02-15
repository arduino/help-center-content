---
title: "Compilation error: exit status 1"
id: 6554914611228
---

When you verify or upload a sketch, the error `Compilation error: exit status 1` may appear in the console and in a pop-up notification.

> **Note:** For other compilation errors, see [If your sketch doesn't compile](https://support.arduino.cc/hc/en-us/articles/4402764401554-If-your-sketch-doesn-t-compile).

---

## Quick checks

1. Make sure you have the right board selected in the board selector or the _Tools > Board_ menu. See [Select board and port in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE) for more information.

2. Make sure you've declared `setup()` and `void()` functions in your sketch, even if they're not being used:

   ```arduino
   void setup() {
     // put your setup code here, to run once:

   }

   void loop() {
     // put your main code here, to run repeatedly:

   }
   ```

3. Check for missing, outdated, or conflicting libraries in the [console output](#console-output).

---

<a id="console-output"></a>

## Check the console output for more information

To get more information about the error, we need to check the console output:

1. If a pop-up notification is still showing, close it by clicking the **x** in the top-right corner.

   ![Closing the pop-up notification.](img/ide-compilation-error-exit-status-1-x.png)

2. Find the console output panel.

   ![The error output in the console panel.](img/ide-compilation-error-exit-status-1-1.png)

3. Read the first few lines. Often, a `Compilation error: exit status 1` error message will be preceded by other, similar sounding messages such as:

   * `collect2: error: ld returned 1 exit status`
   * `exit status 1`

   Since these are also generic error messages, continue reading.

4. Look for lines starting with file paths. At this point, you may need to resize the window or scroll to the right to reveal the full lines. These files will often be pointing at `main.cpp` function, or a temporary copy of your sketch.

5. In this example, the message <code>...main.ccp:43: undefined reference to \`setup'</code> is the most informative:

   ![Scrolling right in the console panel to reveal more output.](img/ide-compilation-error-exit-status-1-2.png)

   In this case, the error was caused by a missing `setup()` function.

---

## If you still need help

* Arduino sketches are written in the Arduino language, which is based on standard C++ language. Most likely you will find a wealth of resources by searching `C++ <error message>` in your search engine.

* For help with functions specific to Arduino, see the [Arduino functions reference](https://www.arduino.cc/reference/en/).

* Visit the [Programming Questions category](https://forum.arduino.cc/c/20) in the Arduino forum. Start by reading the pinned threads which will contain useful information on how to best post a question.

* See [Troubleshooting Guide For Arduino > Compiling](https://per1234.github.io/ino-troubleshooting/compiling.html).

* [Contact us](https://wiki-content.arduino.cc/en/contact-us/).
