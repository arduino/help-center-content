---
title: "Use Arduino Create Agent with Brave Browser"
---

When using the Arduino Web Editor or the Arduino IoT Cloud with the Brave Browser, one of the following messages might be prompted (even when the latest version of the [Arduino Create Agent is installed and running](https://support.arduino.cc/hc/en-us/articles/4980687506844-Check-if-the-Arduino-Create-Agent-is-installed-and-running)):

 * `"Arduino Create Agent not found"`
 * `"To upload a sketch via USB port, make sure the Agent is installed and running on this computer"`

To avoid these, it is necessary to create a custom filter that allows communication between Brave Browser and the Arduino Create Agent. 

---

## Create a custom filter

1. Open the Brave Browser.

1. In the address bar, navigate to `brave://adblock`.

1. Scroll down to the _Create custom filters_ section and add the following:

* `@@localhost`
* `@@127.0.0.1`

1. Click _Save changes_.

The Arduino Create Agent will then be able to detect your board, and the Web Editor/ IoT Cloud should work as expected.