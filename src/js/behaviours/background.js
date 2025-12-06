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
    Imports
*/
import { Behaviour } from "./behaviour.js"

/**
    A behaviour for adding effects to the background.
*/
export class BackgroundBehaviour extends Behaviour {
    static PARALLAX_SCROLL_MULTIPLIER = 0.1;

    constructor() {
        super("Background");
    }

    /**
        Returns the background image Y position as percentage.
        @return {number}
    */
    getBackgroundImageYPosition() {
        return -window.scrollY * BackgroundBehaviour.PARALLAX_SCROLL_MULTIPLIER;
    }

    /**
        Updates background images.
    */
   update() {
        /** @type {NodeListOf<HTMLElement>} */
        const backgroundImages = document.querySelectorAll(".background-image");
        const backgroundY = this.getBackgroundImageYPosition();
        console.log(backgroundY);

        backgroundImages.forEach(element => {
            element.style.backgroundPosition = `50% ${backgroundY}%`;
        })
   }

    /**
        Initializes this behaviour.
    */
    init() {
        window.addEventListener("scroll", () => this.update());
        this.update();
    }
}