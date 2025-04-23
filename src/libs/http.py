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
from urllib.parse import unquote, quote

# // Main
def url_encode(string: str) -> str:
    """
    URL Encodes the provided string

    Args:
        string (str): The string to encode
        
    Returns:
        str: The encoded string
    """    
    
    return quote(string)

def url_decode(string: str) -> str:
    """
    URL Decodes the provided string

    Args:
        string (str): The string to decode
        
    Returns:
        str: The decoded string
    """    
    
    return unquote(string)