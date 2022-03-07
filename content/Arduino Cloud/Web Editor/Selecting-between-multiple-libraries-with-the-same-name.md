---
title: "Selecting between multiple libraries with the same name"
---

Several techniques can be used to make the Arduino Web Editor pick a specific library when multiple libraries with the same name are available. One method is importing a copy of the library you want to use. Imported libraries are given preference over the pre-installed libraries ([full details here](https://arduino.github.io/arduino-cli/latest/sketch-build-process/#location-priorities-in-arduino-web-editor)). The technique works with any library, but we'll use the `DS18B20` library as an example in this guide.

> See [this forum post](https://forum.arduino.cc/index.php?topic=684441.msg4605368#msg4605368) if you're interested in learning alternative methods to the technique described in this guide.

1. From the menu on the left side of the Arduino Web Editor window, click "Libraries".

   ![Library Tab](img/Library_Tab.png)

2. Click the "Library Manager" button.

   ![Library Manager](img/Library_Manager_Button.png)

3. Search for "DS18B20".

4. If the star to the right of the library is not already filled, click the star to add the library to your "Favorites".

   ![Add library to favorites](img/Favorite_Library.png)

5. Click the "Done" button.

6. From the menu on the left side of the Arduino Web Editor window, click "Libraries".

7. From the Libraries pane of the Arduino Web Editor window, click the "Favorites" tab.

   ![Library Tab](img/Library_Tab.png)

8. Find "DS18B20" in the list of favorite libraries and hover the mouse pointer over `DS18B20`.

9. Click the downward pointing triangle to the right of `DS18B20`.

10. Click "Download Library".

    ![Download Library](img/Download_Library.png)

11. Click the upward pointing arrow button (Import) to the right side of the "Library Manager" button.

    ![Import Library](img/Import_Library.png)

12. If you get a popup about importing your sketchbook, click the "Import" button.

13. Select the downloaded library (DS18B20-1.0.0.zip).

14. Click the "Open" button.

15. Wait for Arduino Web Editor to display the notification that the library was successfully imported.

    ![Download Library](img/Import_Successful.png)

16. Click the "OK" button.

This will cause the version of the library you imported to always be used by all sketches (1.0.0 in this case), so you may want to occasionally check to see if the library author has released a new version of the library and repeat the process with the new version in order to take advantage of any improvements or bug fixes that have been made to the library in the new release.

Again, this general technique will work for any library, it's not specific to the `DS18B20`.

Occasionally importing the stock library alone won’t cause it to have priority. The reason is that even though this gives the library the highest “Location Priority”, there are other factors that are prioritized higher. Most often, this would be the “Library Name/Folder Name Priority”. The solution is to give the imported library a perfect “Library Name/Folder Name Priority” score. Because the imported library is installed to a folder matching the library name, these are both controlled by the name value in the library.properties file. So this workaround requires you to edit the library.properties file before importing the library, as demonstrated [here](https://forum.arduino.cc/t/arduino-cloud-and-grove-ultrasonic-ranger-library/875053/6?u=pert).
