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
import uvicorn

from libs.color import rgb
import controls

import config

# // Main
async def main(page: flet.Page):
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
                        weight = flet.FontWeight.BOLD,
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