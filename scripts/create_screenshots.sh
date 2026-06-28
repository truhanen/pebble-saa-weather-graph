#!/usr/bin/env bash
set -euo pipefail

EMULATOR="${PEBBLE_EMULATOR:-emery}"
SS_DIR="screenshots"
mkdir -p "$SS_DIR"

btn() {
    pebble emu-button --emulator "$EMULATOR" click "$1"
}

ss() {
    local name="$1"
    pebble screenshot --emulator "$EMULATOR" --no-open "$SS_DIR/$name"
}

echo "Building and installing..."
make install_emulator

echo "Waiting 10 seconds for app to start..."
sleep 10

echo "Taking screenshot 1/3: initial zoom level"
ss "screenshot_01_initial_zoom.png"

echo "Toggling zoom level..."
btn select
sleep 1
echo "Taking screenshot 2/3: toggled zoom level"
ss "screenshot_02_toggled_zoom.png"

echo
echo "Prepare for screenshot 3/3 (value panel):"
echo "1. Move the mouse over the emulator graph area."
echo "2. Press and HOLD the mouse button when prompted."
echo "3. Keep holding until screenshot is captured."
read -r -p "Press Enter when ready for countdown..."
echo "Press and hold in 3..."
sleep 1
echo "2..."
sleep 1
echo "1..."
sleep 1
echo "NOW: press and hold mouse button on emulator."
sleep 1
ss "screenshot_03_value_panel.png"
echo "Captured screenshot 3/3."

echo "Done. Screenshots saved to $SS_DIR/"
