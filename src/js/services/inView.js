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

export const InView = {};
InView.IN_VIEW_CLASS = "in-view";
InView.VIEW_ANIM_CLASS = "view-anim";
InView.VIEW_THRESHOLD = 0.8

/**
    Marks an element as in-view.
    @param {JQuery} element
*/
InView.mark = function(element) {
    element.addClass(InView.IN_VIEW_CLASS);
}

/**
    Begins observing elements.
*/
InView.observe = function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            InView.mark($(entry.target));
        })
    }, {
        threshold: this.VIEW_THRESHOLD
    })

    $(`.${InView.VIEW_ANIM_CLASS}`).each((_, element) => {
        observer.observe(element);
    })
}

/**
    Initializes this service.
*/
InView.init = function() {
    InView.observe();
}