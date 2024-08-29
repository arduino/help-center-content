---
title: "FAQ: Arduino Portenta X8"
id: 15579050846364
---

The frequently asked questions covered in this article are focused on providing essential information about Arduino Portenta X8 and how to operate it with ease.

---

- **What is the ARM SystemReady image version?**

  The [SystemReady certification certificate](https://armkeil.blob.core.windows.net/developer/Files/pdf/certificate-list/arm-systemready-ir-certification-details-arduino.pdf) lists the firmware as "version pre-merge v85 / U-Boot 2021.04+fio+g38c3083e39."

- **Where is the Yocto distribution Build documented?**

  Yocto distribution build is documented in the [Linux microPlatform Manifest](https://github.com/arduino/lmp-manifest)

- **Where are Yocto distribution layers documented?**

  Yocto distribution layers and scripts are documented in the [Linux microPlatform Manifest](https://github.com/arduino/lmp-manifest)

- **Can both Linux and Arduino environments perform I/O operations?**

  Yes, The STM32H7 will expose all the peripherals that can be accessed by both the M4 core and the Linux environment.

- **Does the M4 support networking?**

  Yes, it does. All networking, including WiFi, BLE, and other connectivity types, is managed by the Linux side and made available to the M4 through RPC calls.

- **Is there an easy way to communicate between the MCU and MPU environments?**

  The RPC available on the M7 is designed for this task.

- **Will the IDE eventually support the Linux environment, perhaps for app development?**

  No, the IDE is only intended for the Arduino.

- **What can developers do with the Arduino version of Foundries.io?**

  You can install, create, and deploy custom and standard containers. Custom containers will be available on the Arduino/Foundries.io environment, while standard containers can be downloaded from Docker Hub.

  To ensure the security and consistency of the operating system over time, it is strongly discouraged that the Linux platform and drivers be modified with an Arduino Cloud Pro subscription. If customers wish to make such modifications, they should purchase a complete factory from Foundries.io.

- **Should I use `apt-get` to install new software on the base image?**

  No, `apt` is not available in the base image. Instead, you should use a Docker container to install the necessary software.

- **Can I register the Portenta X8 with other cloud providers like Google or AWS?**

  Yes, the board can be registered with any cloud provider. While Arduino doesn’t offer official support for these integrations, Linux clients will generally work out of the box.

- **Are HDMI touch screens supported? If so, can I use two on one Portenta X8?**

  The Portenta X8 has a single video output, so only one display can be used at a time. Additionally, the Portenta X8 does not have native HDMI output, but you can use a USB-C dongle to convert the DisplayPort signal to HDMI. Since touch screens also require a USB connection, you will need a dongle that supports both HDMI and USB, which should work for connecting a touch screen.

  However, it is not possible to use two HDMI touch screens simultaneously on the Portenta X8.

- **How does the Portenta X8 work with Arduino IoT Pro Cloud?**

  Arduino IoT Pro Cloud for the X8 includes a Foundries.io subscription to the Secure & Scalable IoT Software Platform. This subscription enables customers to create a derivative factory for securely managing the Linux distribution and containers on Portenta X8 fleets through OTA updates. The subscription fee is based on batches of 50 devices. For example, if you have 100 devices, the cost will be equivalent to 2 batches of 50 devices each.

- **Where can I find the containers created by Arduino for the Portenta X8?**

  The containers can be found [here on GitHub](https://github.com/arduino/portenta-containers)

- **What is the purpose of a new image in a Foundries factory?**

  Portenta X8 boards use a Linux distribution that includes all necessary firmware, applications, and operating configurations while excluding unnecessary software. A new image is created to update the system, firmware, and applications. When a new image becomes available, it can be flashed onto the target board to apply these updates.

- **What is the difference between the web shell and ADB shell?**

  The web shell, included in the Out of the Box Experience (OOBE) interface, runs as a container on the X8 and provides web-based access to the device.

  The ADB shell, on the other hand, is a separate container and application used to access and control the X8 from a PC.

- **When we pull a container to Docker (for example, Ubuntu), are they self-contained? How can we use a new container after pulling a new one?**

  Yes, containers are self-contained in Docker. When you pull a container image, such as Ubuntu, it includes all the necessary files and dependencies required to run the containerized application.

  After pulling a new container, you can use it by starting it with Docker commands. Containers provide an isolated environment, ensuring consistency across development, testing, and production. This makes them more portable and quicker to use compared to traditional development pipelines that replicate testing environments. Additionally, you can deploy Linux-based processes, track them through your Factory page, and manage them efficiently.

- **How does Docker work? Is it like an OS or just a program running on Linux that manages apps?**

  [Docker](https://www.docker.com/) is a platform for managing applications using containers. Containers are isolated environments that encapsulate everything needed to run an application, making them portable and consistent across development, testing, and production environments.

  Docker itself is not an operating system; rather, it runs as a program on a host operating system (such as Linux). It lets you download, install, use, and share applications packaged as containers. You can find a wide range of container images on [hub.docker.com](https://hub.docker.com/).

- **When we update a factory image, does it also update the containers, such as Python?**

  Yes, updating a factory image includes the latest applications, firmware, and configurations. This means containers, including those for Python, will be updated as part of the new image.
