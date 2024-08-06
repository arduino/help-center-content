---
title: "How to enable the 2-Step Verification on your Arduino account"
id: 360018131120
---

Arduino supports 2-Step Verification via authenticator software as _Authy_, _Google Authenticator_, _Microsoft Authenticator_ or similar.

---

1. Log in to your account, go to [your profile](https://id.arduino.cc/), then in the Security Section click on **Activate**:

   ![Security section highlighted in the profile page](img/Profile_Security.png)

1. In the window, you will be shown a QR code for configuring your account with an authenticator app.

   ![QR code for configuration of Authenticator app](img/2FA_QRcode.png)

1. Download or open your preferred authenticator app, navigate to the option where you can add a new log in to be used, and scan the QR code.

   Click **Next** in the Arduino account window.

1. The app will now show you a **six-digit code** that changes every 30 seconds, copy this number in the text field from the Arduino window and click **Verify**.

   ![Code box for configuration of Authenticator app](img/2FA_6digits.png)

   In the Arduino window you will now be provided a **Recovery Code**. It is very important that you save it in a safe place.

   ![Recovery code written in code box and "I have safely recorded this code" check box](img/2FA_recoveryCode.png)

   You will need it in case you lose your 2-Step Verification app access (for example, if you misplace or break your phone).

   > [!IMPORTANT]
   > If you lose both the access to the 2-Step Verification app and the recovery code, you will no longer be able to access your account, and we in Arduino will not be able to help you.

1. Enter the code from your 2-Step Verification app again.

1. Once all this is set, you are good to go! You have now the 2-Step Verification enabled on your Arduino account.
