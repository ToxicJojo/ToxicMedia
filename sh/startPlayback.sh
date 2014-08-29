#!/bin/sh
export DISPLAY=:0
export VDPAU_DRIVER=sunxi
killall mplayer
pulseaudio -k
pulseaudio --start
mplayer -slave -quiet "$1"
