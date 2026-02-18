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

export const Details = {};
Details.DETAILS_ELEMENTS = $("details");

/**
    Automatically opens/closes a details element depending on state.
    @param {JQuery} element
*/
Details._handleDetails = function(element) {
    if (element.prop("open")) {
        this._openDetails(element);
    } else {
        this._closeDetails(element);
    }
}

/**
    Returns the true height of a collapsed details element.
    @param {JQuery} element
    @returns {number}
*/
Details._getCollapsedHeight = function(element) {
    const summary = element.find("summary").first();

    let height = summary.outerHeight();
    height += parseFloat(element.css("padding-top").replace("px", "")) || 0;
    height += parseFloat(element.css("padding-bottom").replace("px", "")) || 0;

    return height;
}

/**
    Opens a details element.
    @param {JQuery} element
*/
Details._openDetails = function(element) {
    let contentHeight = this._getCollapsedHeight(element);

    element.children().not("summary").each((_, child) => {
        contentHeight += $(child).outerHeight(true);
    });

    element.css("height", contentHeight + "px");
}

/**
    Closes a details element.
    @param {JQuery} element
*/
Details._closeDetails = function(element) {
    element.css("height", this._getCollapsedHeight(element));
}

/**
    Initializes this service.
*/
Details.init = function() {
    window.addEventListener("resize", () => {
        this.DETAILS_ELEMENTS.each((_, element) => {
            this._handleDetails($(element));
        })
    })

    this.DETAILS_ELEMENTS.each((_, element) => {
        this._handleDetails($(element));
    })

    this.DETAILS_ELEMENTS.on("toggle", (event) => {
        this._handleDetails($(event.currentTarget));
    })
}