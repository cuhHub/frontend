"""
----------------------------------------------
cuhHub: A community hosting numerous servers for Stormworks: Build and Rescue
https://github.com/cuhHub/frontend
----------------------------------------------

Copyright (C) 2025 cuhHub

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

# // Imports
import toml

# // Main
with open("../config.toml", "r") as file:
    config = toml.load(file)

MODE: str = config["environment"]["mode"]

SITE_NAME: str = config["site"]["name"]
SITE_DESCRIPTION: str = config["site"]["description"]

UPLOAD_DIR: str = config["data"]["upload_dir"]

if MODE == "dev":
    HOST: str = config["dev"]["host"]
    PORT: int = config["dev"]["port"]
    LOG_LEVEL: int = config["dev"]["log_level"]
else:
    HOST: str = config["prod"]["host"]
    PORT: int = config["prod"]["port"]
    LOG_LEVEL: int = config["prod"]["log_level"]
    
LOG_FILE: str = config["logging"]["file"]

DISCORD_INVITE_URL: str = config["discord"]["invite_url"]

with open("../VERSION") as file:
    VERSION: str = file.read()