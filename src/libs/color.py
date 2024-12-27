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

def rgb(r: int, g: int, b: int) -> str:
    """
    Converts an RGB color tuple to a hex color string

    Args:
        r (int): Red
        g (int): Green
        b (int): Blue

    Returns:
        str: Hex color
    """    
    
    hex_color = "#{:02x}{:02x}{:02x}".format(r, g, b)
    return hex_color