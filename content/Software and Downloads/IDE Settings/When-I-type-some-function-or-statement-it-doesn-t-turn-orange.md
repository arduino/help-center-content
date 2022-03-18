---
title: "When I type some function or statement, it doesn’t turn orange"
---

Keywords are highlighted in the Arduino IDE in several colors. This highlighting does not make any difference to the functioning of the code, as it is merely cosmetic.

The IDE recognizes the keywords defined in the different libraries through the defined *keywords* in an optional document, included in the same folder as the library, called `keywords.txt`.

Some library authors do not define their keywords in said document, which leads to the IDE not highlighting the special words.

For more information as how to include this document and, in general, write a library for Arduino, you can check [our library tutorial](https://www.arduino.cc/en/Hacking/LibraryTutorial), and the [library style guide](https://www.arduino.cc/en/Reference/APIStyleGuide).
