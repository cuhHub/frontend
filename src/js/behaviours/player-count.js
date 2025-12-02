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
import { behaviour } from "./index.js"
import { API } from "../libs/api.js";


/**
    A behaviour for replacing player count placeholders with actual data.
*/
export const PlayerCountBehaviour = behaviour("PlayerCount");

/**
    Replaces player count placeholders with actual data.
*/
PlayerCountBehaviour.replaceAll = async function() {
    const playerCount = await API.getRegisteredPlayerCount();
    
    document.querySelectorAll(".registered-player-count").forEach(element => {
        element.innerText = playerCount;
    });
}

/**
    Initializes this behaviour.
*/
PlayerCountBehaviour.init = async function() {
    await this.replaceAll();
}