---
title: "I get an error while importing my custom library to the Cloud Editor"
id: 360019355699
---

* Library folders must have a specific structure before being zipped and imported into the Cloud Editor. Make sure that your custom library folder has the correct sub-folders in it and that metadata are present in the `library.properties` file, you can find more details [here](https://arduino.github.io/arduino-cli/latest/library-specification/).

* Try deleting extra file (such as images or pdf documents) since their size may cause issues during the import.
