---
title: Configure PLC IDE for a standard user
---

When the Arduino PLC IDE is installed on Windows, the installer requires administrator privileges (UAC). As a result, the tool folder containing background tools (such as Arduino CLI) is created under the administrator's profile at:

`C:\Users\<admin_user>\AppData\Local\T`

If you checked the **"Run Arduino PLC IDE now"** option at the end of the installation process, the application initially launched under the administrator's security context, allowing compilation to succeed. However, once you close the application and reopen it later as a standard user, compilation will fail.

If a standard (non-administrator) user opens PLC IDE and tries to compile a project, they may encounter the following error in the **Resources** tab of the **Output** panel:

```text
Cannot generate profile file (error message: Error: Path not found)
```

This happens because the required `T` folder is missing from the standard user's `AppData\Local` directory.

---

## Solution 1: Copy the T folder (Recommended)

1. Sign into Windows or open File Explorer as the **administrator** account that installed PLC IDE.
1. Navigate to:

   `C:\Users\<admin_user>\AppData\Local`

1. Copy the folder named **`T`**.
1. Paste the **`T`** folder into the standard user's local AppData directory:

   `C:\Users\<standard_user>\AppData\Local`

1. Open the newly copied `T` folder inside the standard user's profile:

   `C:\Users\<standard_user>\AppData\Local\T`

1. Delete the file **`arduino-cli.yaml`** from this folder.

   > [!IMPORTANT]
   > Deleting `arduino-cli.yaml` is required. If left intact, compiling will fail with a path configuration error (such as `Error: invalid path creating config dir... Cannot create a file when that file already exists`) because it points to the admin user's paths. PLC IDE will automatically generate a new `arduino-cli.yaml` file with correct paths when the standard user compiles a project.

1. Open PLC IDE as the standard user and select **Project > Compile**. The project should compile successfully.

---

## Solution 2: Run PLC IDE as administrator

If copying the folder is not possible, the standard user can run PLC IDE with administrator credentials:

1. Right-click the **Arduino PLC IDE** shortcut on the desktop or Start Menu.
1. Select **Run as administrator**.
1. Enter the credentials for the specific administrator account that originally installed PLC IDE (as that is the profile possessing the required `T` folder).
