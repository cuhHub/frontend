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

/* -------------- Imports */
import { API } from "../libs/api.js";

/* -------------- Main */

export const Servers = {};
Servers.UPDATE_INTERVAL = 5 * 1000;
Servers.PLAYER_PLACEHOLDER_ICON = "/images/icons/no-pfp.jpg";
Servers.serverLists = $(".server-list");
Servers.serverCountElements = $(".server-count");
Servers.serverCount = 0

/** 
    Adds loading icons to server lists. Call before updates.
*/
Servers.addLoadingIcons = function() {
    this.serverLists.each((index, element) => {
        element.innerHTML = `
            <iconify-icon icon="eos-icons:loading" class="loading-icon"></iconify-icon>
        `;
    });
}

/** 
    Updates server count elements.
*/
Servers.updateServerCountElements = function() {
    this.serverCountElements.each((index, element) => {
        element.innerHTML = this.serverCount.toLocaleString();
    });
}

/**
    Fetches servers.
    @returns {Promise<Object[]>} List of servers.
*/
Servers.fetchServers = async function() {
    const servers = await API.getServers();

    servers.sort((a, b) => {
        if (a.online === b.online) {
            return 0;
        }

        return a.online ? -1 : 1;
    });

    this.serverCount = servers.length;
    this.updateServerCountElements();

    return servers;
}

/**
    Updates server lists.
    @param {boolean} [showReload=false] Whether to show a reload animation.
*/
Servers.updateServerLists = async function(showReload) {
    if (showReload) {
        this.addLoadingIcons();
    }

    const servers = await this.fetchServers();

    /** @type Object[] */
    const html = await Promise.all(servers.map(async server => {
        const players = await API.getPlayersInServer(server.id);

        return {
            server,
            html: `
                <div class="server">
                    <img class="server-banner" src="${server.banner_url}" alt="Server Banner"/>

                    <div class="server-content">
                        <div class="server-left">
                            <p class="server-name">${server.name}</p>
                            <p class="server-description">${server.description}</p>

                            <div class="server-status">
                                <div class="server-status-icon server-status-icon-${server.online ? "online" : "offline"}"></div>
                                <p class="server-status-text">${server.online ? `Online - ${server.average_tps.toFixed(1)} TPS` : "Offline"}</p>
                            </div>

                            <div class="server-tags">
                                ${server.tags.map(tag => `<p class="server-tag">${tag}</p>`).join("\n")}
                            </div>
                        </div>

                        <div class="server-right">
                            <p class="server-players">${players.length}</p>
                            <p class="server-max-players">/ ${server.max_players} players</p>
                        </div>
                    </div>

                    ${(server.online && players.length > 0) ? `
                    <div class="server-player-list">
                        ${players.map(player => `
                            <a class="server-player-list-entry no-link" target="_blank" href="https://steamcommunity.com/profiles/${player.steam_id}">
                                <img class="server-player-list-entry-icon" src="${player.steam_icon_url || this.PLAYER_PLACEHOLDER_ICON}" alt="Player Avatar"/>
                                <p class="server-player-list-entry-text">${player.steam_username}</p>
                            </a>
                        `).join("\n")}
                    </div>
                    ` : ""}
                </div>
            `
        };
    }));

    this.serverLists.each((index, element) => {
        if (element.dataset.hideOffline === "true") {
            element.innerHTML = html.filter(item => item.server.online).map(item => item.html).join("\n");
        } else {
            element.innerHTML = html.map(item => item.html).join("\n");
        }
    });
}

/**
    Joins a server.
    @param {string} serverId The ID of the server.
*/
Servers.joinServer = async function(serverId) {
    const server = await API.getServer(serverId);
    console.log(server);

    if (server == null) {
        return;
    }

    window.location.href = `steam://connect/${server.server_steam_id}`;
}

/**
    Initializes this service.
*/
Servers.init = async function() {
    this.addLoadingIcons();
    await this.updateServerLists();

    setInterval(async () => {
        await this.updateServerLists();
    }, this.UPDATE_INTERVAL);
}