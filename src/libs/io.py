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
import aiofiles
import aiofiles.os
import shutil

# // Main
def recursive_delete(path: str):
    """
    Recursively deletes a directory.

    Args:
        path (str): The path to the directory to delete
    """    
    
    shutil.rmtree(path, ignore_errors = True)
    
async def recursive_delete_async(path: str):
    """
    Recursively deletes a directory (async).

    Args:
        path (str): The path to the directory to delete
    """    
    
    files = await aiofiles.os.listdir(path)

    for target in files:
        target_path = os.path.join(path, target)
        
        if os.path.isdir(target_path):
            await recursive_delete_async(target_path)
        else:
            try:
                await aiofiles.os.remove(target_path)
            except:
                pass
            
    try:
        await aiofiles.os.removedirs(path)
    except:
        pass