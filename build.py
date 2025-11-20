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
from dotenv import load_dotenv

from css_html_js_minify import (
    js_minify,
    html_minify,
    css_minify
)

# // Main
def read_file(path: str, mode: str = "r") -> Any:
    """
    Reads the content of a file.

    Args:
        path (str): Path to the file.
        mode (str): Mode in which to open the file. Defaults to "r".

    Returns:
        str: Content of the file.
    """
    
    with open(path, mode, encoding = "utf-8" if mode == "r" else None) as file:
        return file.read()
    
def write_file(path: str, content: Any, mode: str = "w"):
    """
    Writes content to a file.

    Args:
        path (str): Path to the file.
        content (Any): Content to write to the file.
        mode (str): Mode in which to open the file. Defaults to "w".
    """
    
    with open(path, mode, encoding = "utf-8" if mode == "w" else None) as file:
        file.write(content)
        
def build_file(src_path: str, dist_path: str, license: str, version: str):
    """
    Builds a single file.

    Args:
        src_path (str): Path to the source file.
        dist_path (str): Path to the destination file.
        license (str): License text to prepend to the file.
        version (str): Version string to replace in the file.
    """
    
    try:
        content = read_file(src_path, mode = "r")
    except UnicodeDecodeError:
        content = read_file(src_path, mode = "rb")
    
    if isinstance(content, str):
        content = content.replace("__VERSION__", version)
        content = content.replace("__GOOGLE_ANALYTICS_ID__", os.getenv("GOOGLE_ANALYTICS_ID", "G-XXXXXXX"))
        content = content.replace("__COOKIEBOT_ID__", os.getenv("COOKIEBOT_ID", ""))
    
    match os.path.splitext(src_path)[1].lower():
        case ".html":
            content = f"<!--\n{license}\n-->\n\n" + html_minify(content)
        case ".css":
            content = f"/*\n{license}\n*/\n\n" + css_minify(content)
        # case ".js": # caused too many fucking issues
        #     content = f"/*\n{license}\n*/\n\n" + js_minify(content)
        
    write_file(dist_path, content, mode = "w" if isinstance(content, str) else "wb")
    
def main():
    """
    Main logic.
    """
    
    load_dotenv()

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
                
            build_file(
                src_path = src_file_path,
                dist_path = dist_file_path,
                license = license,
                version = version
            )
                
    print("Build complete!")
                
if __name__ == "__main__":
    main()