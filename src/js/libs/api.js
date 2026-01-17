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
    Sends a request to the API.
    @param {string} url The URL to send the request to.
    @param {string} [method="GET"] The method to use.
    @param {object} [body] The body of the request.
    @returns {Promise}
*/
API.sendRequest = async function(url, method, body) {
    const options = {
        method: method ?? "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };

    if (method !== "GET" && body != null) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(API_URL + url, options);

    if (!response.ok) {
        return null;
    }

    return await response.json();
}

/**
    Returns the amount of registered players.
    @returns {number}
*/
API.getRegisteredPlayerCount = async function() {
    return await this.sendRequest("/players/count", "GET").count ?? 0;
}

/**
    Returns all servers.
    @returns {object[]}
*/
API.getServers = async function() {
    return await this.sendRequest("/servers", "GET") ?? [];
}

/**
    Returns all players in a server.
    @param {object} serverId The ID of the server.
    @returns {object[]}
*/
API.getPlayers = async function(serverId) {
    return await this.sendRequest(`/servers/${serverId}/players`, "GET") ?? [];
}