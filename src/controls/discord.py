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

from config import DISCORD_INVITE_URL

# // Main
class DiscordInviteButton(flet.IconButton):
    """
    An icon button that opens the cuhHub Discord invite URL in the user's browser
    upon being clicked.
    """    
    
    def __init__(self, icon_color: str = flet.Colors.WHITE, bg_color: str = flet.Colors.BLACK12, size: int = 24):
        """
        Initializes a new instance of the `DiscordInviteButton` class.
        
        Args:
            icon_color (str, optional): The color of the icon. Defaults to flet.Colors.WHITE.
            bg_color (str, optional): The background color of the button. Defaults to flet.Colors.BLACK12.
            size (int, optional): The size of the icon. Defaults to 24.
        """        
        
        super().__init__(
            icon_color = icon_color,
            bgcolor = bg_color,
            icon_size = size,
            icon = flet.Icons.DISCORD,
            on_click = self._on_click
        )
        
    async def _on_click(self, event: flet.ControlEvent):
        """
        Called when the button is clicked.

        Args:
            event (flet.ControlEvent): The click event
        """        
        
        await self.page.launch_url_async(
            url = DISCORD_INVITE_URL
        )