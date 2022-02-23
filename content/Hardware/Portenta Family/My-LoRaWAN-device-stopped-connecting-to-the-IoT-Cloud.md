---
title: "My LoRaWAN device stopped connecting to the IoT Cloud"
---

Learn what to do if you have an Arduino device equipped with LoRaWAN connectivity and you are experiencing connectivity issues with the Arduino IoT Cloud.

---

> **Service migration (Nov. 4th, 2021):** Arduino Cloud has a new LoRaWAN service provider which affects all devices that were configured with the IoT Cloud before that date. To restore the connection users must first remove all existing devices from the IoT Cloud devices section. For Arduino LoRa PRO Gateway, ensure that the device is connected and 'online' before removing the device. Then follow the [new setup guide](https://docs.arduino.cc/cloud/iot-cloud/tutorials/cloud-lora-getting-started) to reconfigure your devices.
>
> Make sure to update the Thing IDs and LoRaWAN configurations in your sketches.

Follow these steps:

* Make sure that the LoRaWAN firmware is up to date and [update it if needed](https://support.arduino.cc/hc/en-us/articles/4405107258130-How-to-update-the-LoRa-modem-firmware)

* If you were connected to a public LoRa gateway, it is possible that this one is no longer active or its configuration changed. Check again you are within a good range from the gateway and that this one is still enabled for public access. Find more information about issues connecting to LoRa Gateways [here.](https://support.arduino.cc/hc/en-us/articles/4403361201298-Portenta-Vision-Shield-LoRa-cannot-connect-to-the-gateway)

* [Contact us](https://www.arduino.cc/en/contact-us/) if you still need help.
