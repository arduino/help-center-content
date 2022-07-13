---
title: "Starter Kit project 12 Knock Lock does not 'relock' after being opened"
id: 360021532620
---

In the firsts prints of the book, the code shown had a typo where the “knock counter” variable was not reset to 0 after the first “unlock”, hence this issue would happen.

## Code

![Code example with "numberOfKnoks = 0" highlighted](img/numberOfKnoks.png)

This issue is fixed in the IDE example, but it’s worth to check before uploading to your board.
