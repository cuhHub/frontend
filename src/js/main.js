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

// Not familiar with JavaScript. Still learning, so expect bad practices.
// Will be improved with time! - Cuh4

/* -------------- Imports */

import { CONSTS } from "./consts.js";

import * as services from "./services/index.js";

/* -------------- Main */

/**
    Scrolls to an element.
    @param {string} query The element to scroll to.
*/
window.scrollToElement = function(query) {
    const element = document.querySelector(query);
    element.scrollIntoView();
}

/**
    Launches Stormworks.
*/
window.launchStormworks = function() {
    window.location.href = "steam://rungameid/573090";
}

/**
    Returns all services.
    @returns {Service[]}
*/
function getServices() {
    return Object.values(services);
}

/**
    Starts all services.
*/
function startServices() {
    getServices().forEach(service => {
        service.init();
        console.log("Initialized a service");
    })
}

/**
    Initializes everything.
*/
function init() {
    console.log(`cuhHub Site v${CONSTS.SITE_VERSION}`);
    startServices();
}

init();