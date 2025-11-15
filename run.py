"""
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
"""

import flask
import os
import logging
from livereload import Server

SITE_PATH = "src"

app = flask.Flask(__name__)
hot_reload_server = Server(app.wsgi_app)

logging.basicConfig(level = logging.DEBUG)
hot_reload_server.watch(SITE_PATH)

@app.route("/", defaults = {"path" : ""})
@app.route("/<path:path>")
def serve(path: str):
    if not path:
        return flask.send_from_directory(SITE_PATH, "index.html")
    
    if not os.path.splitext(path)[1]:
        path += ".html"
        
    if not os.path.exists(os.path.join(SITE_PATH, path)):
        return flask.send_from_directory(SITE_PATH, "404.html")
    
    return flask.send_from_directory(SITE_PATH, path)

if __name__ == "__main__":
    hot_reload_server.serve(port = 3000)