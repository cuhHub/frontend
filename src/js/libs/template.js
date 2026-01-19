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
    Provides HTML template functionality (ish).
*/
export const Template = {}

/**
    Handles all templates.
*/
Template.handleAll = function() {
    $(".template").each((index, template) => this._handleTemplate($(template)));
}

/**
    Ensures a template remains hidden.
    @param {JQuery} template The template to handle.
*/
Template._handleTemplate = function(template) {
    template.addClass("hide");
}

/**
    Adds a clone of a template to the DOM.
    @param {JQuery} template The template to clone.
    @param {JQuery} parent The parent to add the clone to.
    @param {JQuery} [after] The element to add the clone after.
    @param {function(JQuery): void} callback The callback to run on the clone.
*/
Template.add = function(template, parent, after, callback) {
    this._handleTemplate(template);

    const clone = template.clone();
    clone.removeAttr("id");
    clone.removeClass("hide");
    clone.find(".template").addClass("hide");

    if (after != null) {
        clone.insertAfter(after);
    } else {
        $(parent).append(clone);
    }

    callback(clone);
}