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

# // Imports
import os
from typing import Any
from enum import Enum

from css_html_js_minify import (
    js_minify,
    html_minify,
    css_minify
)

# // Main
class MinifyType(Enum):
    """
    Enum for representing what minification should be applied to a file.
    """

    HTML = "html"
    CSS = "css"
    JS = "js"
    NONE = "none"

def read_file(path: str, mode: str = "r") -> Any:
    """
    Reads the content of a file.

    Args:
        path (str): Path to the file.
        mode (str): Mode in which to open the file. Defaults to "r".

    Returns:
        str: Content of the file.
    """
    
    with open(path, mode) as file:
        return file.read()
    
def write_file(path: str, content: Any, mode: str = "w"):
    """
    Writes content to a file.

    Args:
        path (str): Path to the file.
        content (Any): Content to write to the file.
        mode (str): Mode in which to open the file. Defaults to "w".
    """
    
    with open(path, mode) as file:
        file.write(content)
        
def get_minify_type_for_file_type(file_type: str) -> MinifyType:
    """
    Gets the minify type for a given file type.

    Args:
        file_type (str): File extension/type (e.g: ".js")

    Returns:
        MinifyType: Corresponding MinifyType enum value.
    """
    
    match file_type:
        case ".html":
            return MinifyType.HTML
        case ".css":
            return MinifyType.CSS
        case ".js":
            return MinifyType.JS
        case _:
            return MinifyType.NONE
        
def build_file(src_path: str, dist_path: str, license: str, version: str, minify_type: MinifyType):
    """
    Builds a single file.

    Args:
        src_path (str): Path to the source file.
        dist_path (str): Path to the destination file.
        license (str): License text to prepend to the file.
        minify_type (MinifyType): Type of minification to apply.
        
    Raises:
        ValueError: If an invalid minify type is provided.
    """
    
    try:
        content = read_file(src_path, mode = "r")
    except UnicodeDecodeError:
        content = read_file(src_path, mode = "rb")
    
    if isinstance(content, str):
        content = content.replace("__VERSION__", version)
    
    match minify_type:
        case MinifyType.HTML:
            content = f"<!--\n{license}\n-->\n\n" + html_minify(content)
        case MinifyType.CSS:
            content = f"/*\n{license}\n*/\n\n" + css_minify(content)
        case MinifyType.JS:
            content = f"/*\n{license}\n*/\n\n" + js_minify(content)
        case MinifyType.NONE:
            pass
        case _:
            raise ValueError("Invalid minify type")
        
    write_file(dist_path, content, mode = "w" if isinstance(content, str) else "wb")
    
def main():
    """
    Main logic.
    """

    src_path = os.path.join("src")
    dist_path = os.path.join("dist")
    license: str = read_file("LICENSE")
    version: str = read_file("VERSION")
    
    if not os.path.exists(dist_path):
        os.makedirs(dist_path)
        
    for root, _, files in os.walk(src_path):
        for file in files:
            src_file_path = os.path.join(root, file)
            relative_path = os.path.relpath(src_file_path, src_path)
            dist_file_path = os.path.join(dist_path, relative_path)
            dist_file_dir = os.path.dirname(dist_file_path)
            
            print(f"Building: {relative_path}")
            
            if not os.path.exists(dist_file_dir):
                os.makedirs(dist_file_dir)
                
            minify_type = get_minify_type_for_file_type(os.path.splitext(file)[1])

            build_file(
                src_path = src_file_path,
                dist_path = dist_file_path,
                license = license,
                version = version,
                minify_type = minify_type
            )
                
    print("Build complete!")
                
if __name__ == "__main__":
    main()