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
import { Template } from "../libs/template.js";
import { API } from "../libs/api.js";

/* -------------- Main */

export const Servers = {};
Servers.serverTemplate = $("#server-template");
Servers.serverTagTemplate = $("#server-tag-template");
Servers.serverLists = $(".hero-section-server-list");

/**
    Updates server lists.
*/
Servers.updateServerLists = async function() {
    const servers = await API.getServers();

    servers.sort((a, b) => {
        if (a.online === b.online) {
            return 0;
        }

        return a.online ? -1 : 1;
    });

    servers.forEach(async server => {
        if (!server.online) {
            return;
        }

        const players = await API.getPlayersInServer(server.id)

        Template.add(this.serverTemplate, this.serverLists, this.serverTemplate, (element) => {
            element.find(".server-name").text(server.name);
            element.find(".server-description").text(server.description);
            element.find(".server-players").text(players.length);
            element.find(".server-max-players").text(`/ ${server.max_players} players`);
            element.find(".server-banner").attr("src", server.banner_url);
            element.find(".server-status-text").text(server.online ? `Online - ${server.average_tps.toFixed(1)} TPS` : "Offline");

            const icon = element.find(".server-status-icon");

            if (server.online) {
                icon.addClass("server-status-icon-online");
                icon.removeClass("server-status-icon-offline");
            } else {
                icon.addClass("server-status-icon-offline");
                icon.removeClass("server-status-icon-online");
            }

            server.tags.forEach(tag => {
                Template.add(this.serverTagTemplate, element.find(".server-tags"), null, (tagJQ) => {
                    tagJQ.text(tag);
                });
            })
        })
    });
}

/**
    Initializes this service.
*/
Servers.init = async function() {
    await this.updateServerLists();
}