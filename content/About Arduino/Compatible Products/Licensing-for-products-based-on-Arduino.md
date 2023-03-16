---
title: "Licensing for products based on Arduino"
id: 4415094490770
---

This article describes the rules under which you can distribute a product or project based on Arduino. These rules apply to all derived products and projects regardless of them being commercial or not, open-source or not.

> **Note:**
>
> * You can freely use Arduino hardware and software for your personal purposes, or within your company or organization, with no restrictions. The rules described in this document apply only when you distribute products based on Arduino to third parties or you make them public in any form.
> * If you comply with the open-source licenses of Arduino, you can distribute your software/hardware products for free or commercially. This document provides a summary of such rules for your convenience and does not waive the need to get professional legal advice.

A derived product can be based on Arduino hardware designs, Arduino software components, or both. For each category, different rules apply and your product must comply with all of them.

---

## Hardware products

If you’re designing your own board based on the open-source Arduino designs, the following rules apply:

* Your derived board must be open-source hardware, thus full bill of materials and CAD files shall be made public (not just the schematics). Such files shall be licensed with the same license as the one used by us (that is CC-BY-SA-4.0 in most cases).

  > **Note:** If you want to release your derived board without making it open-source hardware, contact us at **license@arduino.cc** to get an exception to this rule.

* Do not use the “Arduino” trademark in your design files or on the product itself as this would be a trademark infringement and may suggest that your board is made or approved by Arduino.

* When using unmodified original hardware manufactured by Arduino inside a third-party product (as part of a kit or pre-mounted in a larger assembly), no restrictions apply. Mentioning Arduino on the product or its documentation or commercial assets is not required; if you intend on doing so, see the [trademark policy](https://www.arduino.cc/en/trademark) to make sure you comply with the trademark regulation.

---

## Software products

Any software project made with Arduino will be subject to the licenses of several components including:

1. the Arduino core for the specific board you're compiling for (i.e. the underlying hardware abstraction layer that provides the Arduino API);
2. any library used in the project;
3. any third-party code you included or copied to the sketch folder.

Whether the Arduino IDE, Arduino CLI, or any other development tools were used in the process does not affect licensing of your project. What matters is the combination of the licenses covering all the code components that get compiled and linked in the final binary artifact.

In this section we'll go through the most common cases, assuming you're using one of the cores maintained by Arduino (i.e. the official ones for the boards manufactured by Arduino). If you're using a third-party core, these guidelines might not apply and you'll need to check the respective licenses carefully.

### Publishing an Arduino sketch as an open-source project

If you developed a sketch based on Arduino and you want to publish it as an open-source project in source code form, no restriction applies. We recommend choosing a popular license such as MIT, Apache-2.0, MPL-2.0, or AGPLv3.

### Distributing an Arduino sketch or library in precompiled form (or preloaded in a hardware product) without disclosing its source code

In this case you need to go through three steps:

1. The first thing to do is to check whether you're using any code snippet or library covered by the GNU General Public License (GPL). Unfortunately, in that case you are mandated to disclose the source code of the entire project. To avoid this you'll need to replace that code or library with another one that is made available under a more permissive license such as LGPL, MIT, BSD, Apache-2.0, or MPL-2.0. As an alternative, you can contact the author(s) and ask for a commercial license.

   > **Note:** If you need a commercial license for official libraries developed by Arduino licensed under the GNU GPL, contact us at **license@arduino.cc**.

2. Prepare a comprehensive document with the list of all the open source components involved, along with the copyright notices and the licenses, and make it available to the end users as part of the documentation.

3. Last but not least, you need to comply with article 4.d of the LGPL license which has specific and very technical requirements. Complying with such requirements, which derive from the LGPL being used in the Arduino core, is usually a matter of providing end users with some documentation and binary files.

   > **Note:** We can provide companies with support and tools that allow them to comply with this requirement in an easy and automated way. Contact us at **license@arduino.cc** for more information.

### Distributing a modified version of an Arduino core or library without disclosing its source code

In this case you need to check the license of the specific code part that you modified. If that code was licensed under LGPL, GPL, or MPL-2.0 you must keep your modifications open source. If a permissive license such as MIT, BSD, or Apache-2.0 is used, you are not mandated to keep your modifications open source but you must retain the copyright notices of the original codebase.

### Re-distributing the Arduino IDE or CLI

If you intend to make the Arduino IDE, CLI, or Cloud-CLI available to your users in binary form _without any modification_ as direct downloads or as part of a larger distribution, you can freely do so. This includes the case of calling the CLI as a separate executable binary from another program.

If you intend to include the CLI in your project and call it as a library (instead of calling it as an executable binary), its GPLv3 license will apply to your code as well which results in the obligation to keep the entire codebase open source.

 > **Note:** If you still need to call the CLI as a library in your derived product without having to release the combined work as open source, contact us at **license@arduino.cc** to get an exception to this rule.

If you intend to distribute the IDE or CLI _with modifications_, you must keep your modifications open source. Also, you cannot use the "Arduino" trademark in the name of the resulting artifact.

---

## Still need help?

If the licensing terms are too restrictive for your project, or if you need further help, contact us at **license@arduino.cc** to explore possible licensing options.

<!-- markdownlint-disable-file HC001 -->
