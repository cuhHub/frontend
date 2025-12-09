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

/* -------------- Imports */

import { Behaviour } from "./behaviour.js"

/* -------------- Main */

/**
    A behaviour for header-related logic.
*/
export class HeaderBehaviour extends Behaviour {
    constructor() {
        super("Header");
        this.mainElement = document.querySelector("main");
        this.headerElement = document.querySelector("header");
    }

    /**
        Observes the header element for size changes, updating the main element's properties
        to match.
    */
    observe() {
        const observer = new ResizeObserver(_ => {
            const headerHeight = this.headerElement.getBoundingClientRect().height;
            this.mainElement.style.marginTop = `${headerHeight}px`;
            this.mainElement.style.minHeight = `calc(100vh - ${headerHeight}px)`;
        });

        observer.observe(this.headerElement);
    }

    /**
        Initializes this behaviour.
    */
    init() {
        this.observe();
    }
}