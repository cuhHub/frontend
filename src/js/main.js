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
import { CONSTS } from "./consts.js";

import * as behaviours from "./behaviours/index.js";
import { Behaviour } from "./behaviours/behaviour.js";

/**
    Starts all behaviours.
*/
function startBehaviours() {
    Object.values(behaviours).forEach(behaviour => {
        if (!behaviour instanceof Behaviour) {
            return;
        }

        var instance = new behaviour();
        instance.init();

        console.log("Initialized behaviour: " + instance.behaviourName)
    })
}

/**
    Main site code.
*/
async function init() {
    console.log(`cuhHub Site v${CONSTS.SITE_VERSION}`);
    startBehaviours();
}

init();