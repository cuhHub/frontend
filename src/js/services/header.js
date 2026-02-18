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

/* -------------- Imports */
import { CSS } from "../libs/css.js";

/* -------------- Main */

export const Header = {};
Header.HEADER_ELEMENT = $("header");

/**
    Detaches the header
*/
Header.detach = function() {
    this.HEADER_ELEMENT.addClass("header-detached")
}

/**
    Attaches the header
*/
Header.attach = function() {
    this.HEADER_ELEMENT.removeClass("header-detached")
}

/**
    Updates header height CSS.
*/
Header.updateCSS = function() {
    CSS.setCSSVariable("header-height", this.HEADER_ELEMENT.outerHeight() + "px");
}

/**
    Handles scroll events.
*/
Header._scrollHandler = function() {
    if (window.scrollY > Header.HEADER_ELEMENT.height()) {
        Header.detach();
    } else {
        Header.attach();
    }
}

/**
    Handles any window resize events.
*/
Header._resizeHandler = function() {
    Header.updateCSS();
}

/**
    Initializes this service.
*/
Header.init = function() {
    this._resizeHandler();
    window.addEventListener("resize", this._resizeHandler);

    this._scrollHandler();
    document.addEventListener("scroll", this._scrollHandler);
}