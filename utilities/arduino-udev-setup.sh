#!/usr/bin/env bash

set -e

rules() {
cat <<'EOF'
# Unified Arduino udev rules

# ======================================================
# Base rule: all Arduino devices (VID 2341)
# ======================================================
SUBSYSTEMS=="usb", ATTRS{idVendor}=="2341", MODE="0660", TAG+="uaccess"

# ======================================================
# megaAVR bootloader (UNO WiFi Rev2)
# ======================================================
SUBSYSTEMS=="tty", ENV{ID_REVISION}=="03eb", ENV{ID_MODEL_ID}=="2145", MODE="0660", TAG+="uaccess", ENV{ID_MM_DEVICE_IGNORE}="1", ENV{ID_MM_CANDIDATE}="0"
SUBSYSTEMS=="usb", ATTRS{idVendor}=="03eb", ATTRS{idProduct}=="2145", MODE="0660", TAG+="uaccess", ENV{ID_MM_DEVICE_IGNORE}="1"

# ======================================================
# Qualcomm-based boards (UNO Q etc.)
# ======================================================

# EDL mode (critical for recovery)
SUBSYSTEMS=="usb", ATTRS{idVendor}=="05c6", ATTRS{idProduct}=="9008", MODE="0660", TAG+="uaccess"

# ======================================================
# OpenOCD / CMSIS-DAP
# ======================================================
ACTION!="add|change", GOTO="openocd_rules_end"
SUBSYSTEM!="usb|tty|hidraw", GOTO="openocd_rules_end"

ATTRS{product}=="*CMSIS-DAP*", MODE="0660", TAG+="uaccess"

LABEL="openocd_rules_end"

EOF
}

# -----------------------------
# Checks
# -----------------------------
if [[ "$(uname -s)" != Linux* ]]; then
    echo "This script only supports Linux"
    exit 1
fi

if [ "$EUID" -ne 0 ]; then
    echo ""
    echo "Please run as root:"
    echo "sudo $0"
    echo ""
    exit 1
fi

# -----------------------------
# Install
# -----------------------------
RULES_FILE="/etc/udev/rules.d/60-arduino-combined.rules"

echo "Installing Arduino udev rules..."

if [ -f "$RULES_FILE" ]; then
    echo "An existing rules file was found at:"
    echo "$RULES_FILE"
    echo ""
    read -p "Do you want to overwrite it and create a backup? [y/N]: " CONFIRM

    if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
        echo "Operation cancelled."
        exit 0
    fi

    BACKUP_FILE="${RULES_FILE}.$(date +%Y%m%d-%H%M%S).bak"
    echo "Creating backup at: $BACKUP_FILE"
    cp "$RULES_FILE" "$BACKUP_FILE"
fi

rules > "$RULES_FILE"

# -----------------------------
# Reload
# -----------------------------
echo "Reloading udev rules..."
udevadm control --reload-rules
udevadm trigger

echo ""
echo "Done."
echo "Unplug and replug your board."
