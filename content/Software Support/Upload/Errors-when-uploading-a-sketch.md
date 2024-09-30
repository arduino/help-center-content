---
title: "Errors when uploading a sketch"
id: 4403365313810
---

When there is an error the IDE will print relevant information in the console. Learn how to resolve common errors.

---

## Check this first

These checks will resolve the most common errors:

* **Check your sketch for errors**. Click the ![Verify button](img/symbol_verify2.png) **Verify** button to compile your sketch without uploading it.  If you still get an error, see [If your sketch doesn't compile](https://support.arduino.cc/hc/en-us/articles/4402764401554-Compilation-errors-when-uploading).

* **Check your board and port selections**. In the top menu bar, make sure the correct board is selected in _Tools > Board_, and that you've selected the right port in _Tools > Port_. Try disconnecting and reconnecting your board if you're unsure which port is being used (close and reopen the Port menu to refresh the list).

  * If you can't find your board in the list, or if the _Tools > Port_ option is missing, see [If your board does not appear in the port menu](https://support.arduino.cc/hc/en-us/articles/4412955149586-If-your-board-does-not-appear-in-the-port-menu).

  * To learn more about port and board selection, see [Select the right port and board](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port).

* **Check your connections**. Your board needs to be connected with a data USB cable (charge-only cables will not work). Make sure the cable is fully inserted in the port on each end. Try a different USB cable, and avoid hubs and other adapters if possible. Remove connections to the board pins, especially the **0 (RX)** and **1 (TX)** digital pins.

If you still get an error, you'll find instructions for specific error messages below.

---

<a id="errors"></a>

## List of errors

> [!NOTE]
> _Exit status 1_ only indicates that the process has failed. Look for preceding lines in the error output for more specific information.

<table>
<tr>
<td style="vertical-align: top;">
<h3>Upload</h3>
<ul>
<li><a href="https://support.arduino.cc/hc/en-us/articles/360020831120-Failed-uploading-no-upload-port-provided">Failed uploading: no upload port provided</a></li>
<!-- <li><a href="https://support.arduino.cc/hc/en-us/articles/6554944868252-Failed-uploading-uploading-error-exit-status-1">Failed uploading: uploading error: exit status 1</a></li> NOTE: Unpublished article -->
<li><a href="#no-device-found-on-port">No device found on &lt;port&gt;</a></li>
<li><a href="#no-board-on-selected-port">Couldn't find a Board on the selected port</a></li>
<li><a href="#SerialPortException-port-busy">jssc.SerialPortException: Port name - &lt;port&gt;;<br>Method name - openPort(); Exception type - Port busy.</a></li>
</ul>
<h3>Compilation error</h3>
<ul>
<li><a href="https://support.arduino.cc/hc/en-us/articles/6554914611228-Compilation-error-exit-status-1">Compilation error: exit status 1</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4412950941074-Compilation-error-Missing-FQBN-Fully-Qualified-Board-Name-">Compilation error: Missing FQBN (Fully Qualified Board Name)</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/360020846379-Compilation-error-Error-2-UNKNOWN-platform-not-installed">Compilation error: Platform not found: platform not installed</a></li>

</ul>
<h3>Other</h3>
<ul>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4405339237522-The-IDE-prints-a-message-about-sketch-size-and-memory-usage">The IDE prints a message about sketch size and memory usage</a></li>
</ul>
</td>
<td>
<h3>dfu-util</h3>
<ul>
<li><a href="https://support.arduino.cc/hc/en-us/articles/11011849739804-dfu-util-errors-when-uploading-exit-status-74-#exit-status-74">Failed uploading: uploading error: exit status 74</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/11011849739804-dfu-util-errors-when-uploading-exit-status-74-#no-dfu-capable-usb-device-available">dfu-util: No DFU capable USB device available</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/11011849739804-dfu-util-errors-when-uploading-exit-status-74-#libusb-error-access">dfu-util: Cannot open DFU device {vid}:{pid} found on devnum {n} (LIBUSB_ERROR_ACCESS)</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/11011849739804-dfu-util-errors-when-uploading-exit-status-74-#more-than-one-dfu-capable-usb-device">dfu-util: More than one DFU capable USB device found!</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/11011849739804-dfu-util-errors-when-uploading-exit-status-74-#invalid-dfu-suffix-signature">Warning: Invalid DFU suffix signature</a></li>
</ul>
<h3>avrdude</h3>
<ul>
<li><strong>stk500:</strong><ul>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#avrdude-stk500_recv-and-stk500_getsync">avrdude: stk500_recv(): programmer is not responding<br>avrdude: stk500_getsync() attempt X of 10: not in sync</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#avrdude-stk500_recv-and-stk500_getsync">avrdude: stk500v2_ReceiveMessage(): timeout<br>avrdude: stk500v2_getsync(): timeout communicating with programmer</a></li>
</ul>
</li>
<li><strong>ser_open():</strong><ul>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#avrdude-ser_open-cant-open-device-no-such-file-or-directory">avrdude: ser_open(): can&#39;t open device &lt;port&gt;: no such file or directory</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#ser_open-device-or-resource-busy">avrdude: ser_open(): can&#39;t open device &lt;port&gt;: Device or resource busy</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#ser_open-resource-busy">avrdude: ser_open(): can&#39;t open device &lt;port&gt;: Resource busy</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#ser_open-permission-denied">avrdude: ser_open(): can&#39;t open device &lt;port&gt;: permission denied</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#ser_open-access-is-denied">avrdude: ser_open(): can&#39;t open device &lt;port&gt;: access is denied</a></li>
</ul>
</li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#avrdude-butterfly_recv">avrdude: butterfly_recv(): programmer is not responding</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#usbhid_open_jtag3_open_common">avrdude: usbhid_open(): No device found
avrdude: jtag3_open_common()</a></li>
<li><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#jtagmkII_getsync">avrdude: jtagmkII_getsync(): sign-on command: status -1</a></li>
<li><strong><a href="https://support.arduino.cc/hc/en-us/articles/4401874331410#check-the-following">Other avrdude errors (general troubleshooting)</a></strong></li>
</ul>
</td>
</tr>
</table>

> [!NOTE]
> Only errors that do not link to other pages are listed below.

<a id="no-device-found-on-port"></a>

### No device found on \<port\>

```
An error occurred while uploading the sketch
No device found on <port>
```

1. Make sure the correct port is selected in _Tools > Port_.

2. Close other instances of Arduino IDE, serial monitors, and other software that may be blocking the port.

3. Restart your computer.

4. See [Find and stop process blocking a port](https://support.arduino.cc/hc/en-us/articles/4407830972050-Find-and-stop-process-blocking-a-port).

#### If you are uploading to UNO R4 WiFi

1. Press and release the button marked "**RESET**" on the board quickly twice. The LED marked "**L**" on the board should now be pulsing.

2. Select the port of the board from the menu in Arduino IDE. The port might have changed after the previous step, so make sure to verify that it is selected.

Now try uploading the sketch to your board again.

<a id="no-board-on-selected-port"></a>

### Couldn't find a Board on the selected port

```
Couldn't find a Board on the selected port. Check that you have the correct port selected.
If it is correct, try pressing the board's reset button after initiating the upload.
```

This error can happen if the board on the selected port has been disconnected from the computer, or reassigned to a different port.

1. Make sure the board is connected to your computer.

2. Select the board in _Tools > Port_.

   * For step-by-step instructions, see [Select board and port in Arduino IDE](https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE).
   * If you can't find the port, see [If your board does not appear in the port menu](https://support.arduino.cc/hc/en-us/articles/4412955149586-If-your-board-does-not-appear-in-the-port-menu).

> [!NOTE]
> On Windows, you can [manually set a port for the board](https://support.arduino.cc/hc/en-us/articles/360016420140#set-COM-port) to stop it from being reassigned.

<a id="SerialPortException-port-busy"></a>

### jssc.SerialPortException: Port name - \<port\>; Method name - openPort(); Exception type - Port busy

1. Make sure the correct port is selected in _Tools > Port_.

2. Close other instances of Arduino IDE, serial monitors, and other software that may be blocking the port.

3. Restart your computer.

4. See [Find and stop process blocking a port](https://support.arduino.cc/hc/en-us/articles/4407830972050-Find-and-stop-process-blocking-a-port).

---

## Still need help?

* Visit the [Installation & Troubleshooting category](https://forum.arduino.cc/c/18) in the Arduino forum.

* [Contact us](https://www.arduino.cc/en/contact-us/).

> **Please include this information:**
>
> * A [verbose error output](https://support.arduino.cc/hc/en-us/articles/4407705216274)
> * The name of your board
> * Your operating system
> * Your Arduino IDE version

<p style="display:none;">
   Tags: problem uploading to board, problema subiendo a la placa, https://www.arduino.cc/en/Guide/Troubleshooting, 360003198300, 上传失败, 上传出错, 업로드, problème de téléversement vers la carte, téléverser, проблема загрузки в плату, マイコンボードに書き込めない, マイコンボードに書き込もうとしましたが、エラーが発生しました, problem beim hochladen auf das board, problema di caricamento sulla scheda, 업로딩
</p>

<!-- markdownlint-disable-file HC001 -->
