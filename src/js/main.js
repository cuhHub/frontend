/*
Source-Available No-Redistribution License
Copyright (c) 2025 cuhHub. All rights reserved.

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

// Not familiar with JavaScript. Still learning, so expect bad practices.
// Will be improved with time! - Cuh4

/**
    Imports
*/
import { API } from "./api.js";

import "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.5.1/SmoothScroll.min.js";
import "https://cdn.jsdelivr.net/npm/iconify-icon@3.0.0/dist/iconify-icon.min.js"

/**
    The version of the site.
*/
const SITE_VERSION = "__VERSION__";

/**
    Updates the player count.
*/
async function updatePlayerCount() {
    const playerCount = await API.getRegisteredPlayerCount();

    document.querySelectorAll(".registered-player-count").forEach(element => {
       element.innerText = playerCount;
    });
}

/**
    Configures SmoothScroll.
*/
function configureSmoothScroll() {
    SmoothScroll({
        animationTime: 500,
        stepSize: 45
    });
}

/**
    Main site code.
*/
async function init() {
    await updatePlayerCount();
    configureSmoothScroll();
}

init();