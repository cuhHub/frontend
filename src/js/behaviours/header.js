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
import { CSS } from "../libs/css.js";

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
        Returns the height of the header element.
        @returns {number} 
    */
    getHeaderHeight() {
        return this.headerElement.getBoundingClientRect().height;
    }

    /**
        Returns the true viewport height accounting for header.
        @returns {number}
    */
    getViewportHeight() {
        return window.innerHeight - this.getHeaderHeight();
    }

    /**
        Updates the main element to account for the header's size.
    */
    updateMain() {
        const headerHeight = this.getHeaderHeight();
        this.mainElement.style.marginTop = `${headerHeight}px`;
        this.mainElement.style.minHeight = `${this.getViewportHeight()}px`;
    }

    /**
        Updates CSS.
    */
    updateCSS() {
        const headerHeight = this.getHeaderHeight();
        CSS.setCSSVariable("header-height", `${headerHeight}px`);
        CSS.setCSSVariable("full-viewport-height", `${this.getViewportHeight()}px`);
    }

    /**
        Updates everything.
    */
    update() {
        this.updateMain();
        this.updateCSS();
    }

    /**
        Observes the header element for size changes, updating the main element's properties
        to match.
        Also observes window resize events.
    */
    observe() {
        const observer = new ResizeObserver(_ => {
            this.update();
        });

        observer.observe(this.headerElement);

        window.addEventListener("resize", _ => {
            this.update();
        })
    }

    /**
        Initializes this behaviour.
    */
    init() {
        this.observe();
    }
}