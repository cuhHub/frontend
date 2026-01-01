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

/**
    CSS helper functions.
*/
export const CSS = {}

/**
    Returns the value of the root CSS variable provided.
    @param {string} name The name of the CSS variable.
    @returns {string}
*/
CSS.getCSSVariable = function(name) {
    return getComputedStyle(document.documentElement).getPropertyValue("--" + name).trim();
}

/**
    Sets a root CSS variable to the provided value.
    @param {string} name The name of the CSS variable.
    @param {string} value The value to set the CSS variable to.
*/
CSS.setCSSVariable = function(name, value) {
    document.documentElement.style.setProperty("--" + name, value);
}

/**
    Returns the value of the root CSS variable (the variable must be a pixel value).
    @param {string} name The name of the CSS variable.
    @returns {number}
*/
CSS.getCSSVariablePx = function(name) {
    return Number(this.getCSSVariable(name).replace("px", ""));
}