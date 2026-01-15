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
    Returns all services.
    @returns {Service[]}
*/
window.getServices = function() {
    return Object.values(services);
}

/**
    Starts all services.
*/
window.startServices = function() {
    window.getServices().forEach(service => {
        service.init();
        console.log("Initialized service: " + instance.behaviourName)
    })
}

/**
    Sets the URL of the page.
    @param {string} URL
*/
window.openPage = function(URL) {
    window.location.href = URL;
}

/**
    Initializes everything.
*/
window.init = function() {
    console.log(`cuhHub Site v${CONSTS.SITE_VERSION}`);
    window.startServices();
}

window.init();