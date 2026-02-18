/*
Source-Available No-Redistribution License
Copyright (c) 2026 cuhHub. All rights reserved.

IMPORTANT: This source code is NOT Open Source.

1. PERMISSIONS (Limited):
* View and read the source code.
* Modify for private, non-public use only.
* Contributions back to the project are permitted.

2. PROHIBITIONS (Strict):
* You MAY NOT copy, redistribute, publish, or share the code (modified or unmodified).
* You MAY NOT use this code in ANY public or commercial project or service.

Any violation automatically terminates your rights.
Provided "AS IS" without warranty.
Full terms governed by the laws of England and Wales.
*/

/* -------------- Main */

export const Background = {};
Background.BACKGROUND_VIDEOS = $(".background-video");

/**
    Autoplays background videos.
*/
Background.autoplay = function() {
    Background.BACKGROUND_VIDEOS.each((_, video) => {
        video.play();
    });
}

/**
    Toggles background video muted state.
*/
Background.toggleMute = function() {
    Background.BACKGROUND_VIDEOS.each((_, video) => {
        video.muted = !video.muted;
    });
}

/**
    Initializes this service.
*/
Background.init = function() {
    this.autoplay();
}