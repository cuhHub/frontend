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
    Handles the click event on a details element.
    @param {JQuery.ClickEvent} event
*/
Details._handleDetailsClick = function(event) {
    const details = $(event.currentTarget);

    if (details.attr("open")) {
        this._closeDetails(details);
    } else {
        this._openDetails(details);
    }
}

/**
    Returns the true height of a collapsed details element.
    @param {JQuery} element
    @returns {number}
*/
Details._getCollapsedHeight = function(element) {
    const summary = element.find("summary").first();
    return summary.outerHeight();;
}

/**
    Opens a details element.
    @param {JQuery} element
*/
Details._openDetails = function(element) {
    element.attr("open", true);

    let contentHeight = this._getCollapsedHeight(element);

    element.children().not("summary").each((_, child) => {
        contentHeight += $(child).outerHeight(true);
    });

    contentHeight += parseFloat(element.css("padding-top").replace("px", ""));
    contentHeight += parseFloat(element.css("padding-bottom").replace("px", ""));

    element.css("height", contentHeight + "px");
}

/**
    Closes a details element.
    @param {JQuery} element
*/
Details._closeDetails = function(element) {
    element.css("height", this._getCollapsedHeight(element));
    element.removeAttr("open");
}

/**
    Initializes this service.
*/
Details.init = function() {
    this.DETAILS_ELEMENTS.each((_, element) => {
        this._openDetails($(element));
        this._closeDetails($(element));
    })

    this.DETAILS_ELEMENTS.on("click", (event) => {
        event.preventDefault();
        this._handleDetailsClick(event);
    })
}