---
title: Use Arduino Cloud with Brave Browser
id: 10482021304988
---

To use [Brave Browser](https://brave.com/) with Arduino Cloud it is necessary to create a custom filter that allows communication between Brave Browser and the [Arduino Cloud Agent](https://create.arduino.cc/getting-started/plugin/welcome).

---

## Create a custom filter

1. Open Brave Browser.

1. In the address bar, navigate to `brave://adblock`.

1. Scroll down to the _Create custom filters_ section and add the following:

    * `@@localhost`
    * `@@127.0.0.1`

1. Click _Save changes_.

The Arduino Cloud Agent will then be able to detect your board, and Arduino Cloud should work as expected.
