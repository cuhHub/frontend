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
    A barebones wrapper for cuhHub's API.
*/
export const API = {}

/**
    The API URL.
*/
const API_URL = "https://api.cuhhub.com";

/**
    Returns the amount of registered players.
    @returns {number}
*/
API.getRegisteredPlayerCount = async function() {
    try {
        const response = await fetch(API_URL + "/players/count");

        if (!response.ok) {
            return 0;
        }

        const data = await response.json();
        return data.count;
    } catch (error) {
        console.error(`getRegisteredPlayerCount(): ${error}`);
        return 0;
    }
}