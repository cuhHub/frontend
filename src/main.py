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
import flet
import flet_web.fastapi
from flet.utils.pip import ensure_flet_web_package_installed
from typing import Optional
from flet_web.fastapi import serve_fastapi_web_app, FastAPI # import get_fastapi_web_app
import uvicorn

from libs.color import rgb
import controls

import config

# // Main
def _get_fastapi_web_app(session_handler, page_name: str, assets_dir: str, upload_dir: str, web_renderer: Optional[flet.WebRenderer], use_color_emoji: bool, route_url_strategy: str) -> FastAPI:
    """
    Replacement for `flet_web.fastapi.serve_fastapi_web_app.get_fastapi_web_app`.

    Args:
        session_handler: The session handler
        page_name (str): The page name
        assets_dir (str): The assets directory
        upload_dir (str): The upload directory
        web_renderer (Optional[flet.WebRenderer]): The web renderer to use (optional)
        use_color_emoji (bool): Whether or not to use color emojis
        route_url_strategy (str): The route URL strategy

    Returns:
        FastAPI: The FastAPI app created
    """    
    
    app = flet_web.fastapi.FastAPI()

    app.mount(
        f"/{page_name.strip("/")}",

        flet_web.fastapi.app(
            session_handler,
            app_name = config.SITE_NAME,
            app_short_name = config.SITE_NAME,
            app_description = config.SITE_DESCRIPTION,
            upload_dir = upload_dir,
            assets_dir = assets_dir,
            web_renderer = web_renderer if web_renderer else flet.WebRenderer.AUTO,
            use_color_emoji = use_color_emoji,
            route_url_strategy = route_url_strategy,
        )
    )

    return app

# The below patch is required to customize HTML `meta` tags,
# particularly the `description` tag, `name` tag, and a few
# others.
serve_fastapi_web_app.get_fastapi_web_app = _get_fastapi_web_app

async def main(page: flet.Page):
    """
    The main page of the site/app.

    Args:
        page (flet.Page): The page
    """    
    
    page.title = config.SITE_NAME
    page.bgcolor = flet.Colors.WHITE
    page.vertical_alignment = flet.MainAxisAlignment.CENTER
    page.horizontal_alignment = flet.CrossAxisAlignment.CENTER
    
    page.add(
        flet.Container(
            content = flet.Row(
                controls = [
                    controls.DiscordInviteButton(
                        icon_color = rgb(87, 102, 242),
                        bg_color = flet.Colors.TRANSPARENT,
                        size = 70
                    ),
                    
                    flet.Text(
                        "Under Construction\nCome back another time!",
                        text_align = flet.TextAlign.CENTER,
                        weight = flet.FontWeight.W_100,
                        size = 20,
                        color = rgb(7, 7, 7)
                    )
                ],
                
                spacing = 6,
                alignment = flet.MainAxisAlignment.CENTER
            ),
    
            alignment = flet.alignment.center
        )
    )

if __name__ == "__main__":
    ensure_flet_web_package_installed()
    
    app = flet.app(
        target = main,
        assets_dir = "assets",
        export_asgi_app = True
    )   
    
    uvicorn.run(
        app = app,
        host = config.HOST,
        port = config.PORT,
        log_level = config.LOG_LEVEL,
        loop = "asyncio"
    )