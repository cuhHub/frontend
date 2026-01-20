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

export const BackToTop = {};
BackToTop.SCROLL_THRESHOLD = 150;
BackToTop.BUTTON = $(".back-to-top");

/**
    Shows the back to top button.
*/
BackToTop.show = async function() {
    BackToTop.BUTTON.removeClass("back-to-top-hidden");
}

/**
    Hides the back to top button.
*/
BackToTop.hide = async function() {
    BackToTop.BUTTON.addClass("back-to-top-hidden");
}

/**
    Scrolls to the top of the page.
*/
BackToTop.scrollToTop = async function() {
    window.scrollTo(0, 0);
}

/**
    Handles scroll events.
*/
BackToTop._scrollHandler = function() {
    if (window.scrollY > BackToTop.SCROLL_THRESHOLD) {
        BackToTop.show();
    } else {
        BackToTop.hide();
    }
}

/**
    Initializes this service.
*/
BackToTop.init = function() {
    this._scrollHandler();
    document.addEventListener("scroll", this._scrollHandler)
}