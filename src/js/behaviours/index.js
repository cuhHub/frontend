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

/**
    @typedef {Object} Behaviour
    @property {() => Promise<void>} init Initializes the behaviour
    @property {string} behaviourName The name of the behaviour
*/

/**
    Creates a behaviour object.
    @param {string} name The name of the behaviour.
    @returns {Behaviour}
*/
export function behaviour(name) {
    const behaviour = {};
    behaviour.behaviourName = name;

    return behaviour;
}

export * from "./player-count.js";
export * from "./smooth-scroll.js";
export * from "./header.js";