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
import os
import flet
import flet.fastapi as flet_fastapi
import uvicorn

from libs.color import rgb
import controls

import config

# // Main
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
    page.padding = 0
    
    page.add(
        flet.Stack(
            controls = [
                # background
                flet.Container(
                    content = flet.Image(
                        src = "backgrounds/1.png",
                        color = rgb(255, 255, 255),
                        color_blend_mode = flet.BlendMode.OVERLAY,
                        fit = flet.ImageFit.COVER
                    ),

                    expand = True,
                    width = page.width,
                    height = page.height
                ),
                
                # foreground
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
                                color = rgb(245, 245, 245),
                                style = flet.TextStyle(
                                    shadow = flet.BoxShadow(
                                        spread_radius = 25,
                                        blur_radius = 2,
                                        color = rgb(2, 2, 2)
                                    )
                                )
                            )
                        ],
                        
                        spacing = 6,
                        alignment = flet.MainAxisAlignment.CENTER
                    ),
            
                    alignment = flet.alignment.center,
                    width = page.width,
                    height = page.height
                )
            ]
        )
    )

if __name__ == "__main__":
    app = flet_fastapi.app(
        main,
        assets_dir = os.path.abspath("assets"),
        app_name = config.SITE_NAME,
        app_short_name = config.SITE_NAME,
        app_description = config.SITE_DESCRIPTION
    )
    
    uvicorn.run(
        app = app,
        host = config.HOST,
        port = config.PORT,
        log_level = config.LOG_LEVEL,
        loop = "asyncio"
    )