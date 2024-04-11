---
title: "If you can't import a template in Arduino Cloud"
id: 4408887422994
---

Learn what to do if you experience a problem when importing [IoT Templates in Arduino Cloud](https://app.arduino.cc/templates).

In this article:

* [If the Import Template button is disabled](#button-disabled)
* [Dealing with Library Conflicts](#conflict)

## If the Import Template button is disabled {#button-disabled}

Occasionally, the **Import Template** button might be disabled. This could occur if you've exceeded the quota of how many **Things** can be connected to the Cloud. To resolve this, you can [remove a few Things](https://support.arduino.cc/hc/en-us/articles/13369510226204-How-to-delete-Things-in-Arduino-Cloud) to free up space.

![Dialog explaining that the user is over their plan's quota](img/over_quota.png)

However, within the free plan, only two Things can be connected to the Cloud. If a template requires more than two free spots, you can upgrade the [subscription plan](https://cloud.arduino.cc/plans/) for your account.

## Dealing with library conflicts {#conflict}

When importing a template you may experience this error:

!['We were not able to upload the template sketch' error in Arduino Cloud. The file ThingsProperties.h is missing, throwing a 'No such file or directory' error.](img/IoT_Cloud_Template_Import_Error.PNG)

This error is often caused by imported custom libraries conflicting with the built-in libraries used in the template. The error can be resolved by removing any custom libraries that may be causing the conflict.

You can find your custom libraries by opening the [Cloud Editor](https://create.arduino.cc/editor), clicking **Libraries** in the sidebar, and selecting the **Custom** tab. If you hover over a library with the cursor, a small arrow icon will appear. Click it and select **Delete library** to remove it.

![Removing a custom library](img/web-editor-custom-library-removal.png)
