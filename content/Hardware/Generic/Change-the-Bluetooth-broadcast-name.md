---
title: "Change the Bluetooth® broadcast name"
---

When using the [ArduinoBLE](https://www.arduino.cc/reference/en/libraries/arduinoble/) library to enable Bluetooth Low Energy communication on an Arduino board, the broadcasted name is set by the [setLocalName()](https://www.arduino.cc/reference/en/libraries/arduinoble/setlocalname/) function.

For example, you can set the name to _MyArduinoDevice_.

```
BLE.setLocalName("MyArduinoDevice");
```

If using an example, first check if `BLE.setLocalName()` is already called somewhere. In this case, just replace the existing name. Otherwise, make sure to add the line after the device has been initialized with  `BLE.begin()`, but before it's advertised with `BLE.advertise();`.

## Further reading

* [ArduinoBLE library](https://www.arduino.cc/reference/en/libraries/arduinoble/)
* [Connecting Nano 33 BLE Devices over Bluetooth<sup>®</sup>](https://docs.arduino.cc/tutorials/nano-33-ble-sense/ble-device-to-device)
