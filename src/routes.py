"""
----------------------------------------------
cuhHub: A community hosting numerous servers for Stormworks: Build and Rescue
https://github.com/cuhHub/frontend
----------------------------------------------

Copyright (C) 2024 cuhHub

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
import fastapi

import config

# // Main
def add_routes(app: fastapi.FastAPI):
    """
    Adds a few routes to the FastAPI app behind the cuhHub site.

    Args:
        app (fastapi.FastAPI): The FastAPI app
    """    

    @app.api_route(
        "/discord",
        status_code = 301,
        methods = ["GET"]
    )
    async def discord_redirect() -> fastapi.responses.RedirectResponse:
        """
        Redirects the user to the cuhHub Discord server.
        """        
        
        return fastapi.responses.RedirectResponse(
            url = config.DISCORD_INVITE_URL,
            status_code = 301
        )