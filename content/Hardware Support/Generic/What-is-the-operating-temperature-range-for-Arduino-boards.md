---
title: "What is the operating temperature range for Arduino boards?"
id: 360016076980
---

Very often users ask what is the operating temperature range for your Arduino boards. It is important to explain what this means before mentioning any temperature values.

## Operating Temperature Range

Operating temperature range is the temperatures at which the microprocessor (the most vulnerable component on the board) can operate. These values are always mentioned on the microprocessors' datasheets and happen to be the same for all types (AVR, megaAVR, nRF52840 and SAMD).

**Operating Temperature Range: -40°C to 85°C.**

_The Arduino board and/or other parts of your circuit may not function properly when exceeding the operating temperature range and irreversible damage to the board may occur. Warranty is void if this range is surpassed._

## Recommended temperature range

Other external factors such as power supplies, batteries, sensors etc may cause irreversible damage even when operating under Operating Temperature Range. For this reason, the Recommended Temperature Range to function safely function with Arduino boards is suggested below:

**Recommended temperature range: -25°C to +70°C.**
