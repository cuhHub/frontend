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
    
    with open(path, mode) as file:
        return file.read()
    
def write_file(path: str, content: str, mode: str = "w"):
    """
    Writes content to a file.

    Args:
        path (str): Path to the file.
        content (str): Content to write to the file.
        mode (str): Mode in which to open the file. Defaults to "w".
    """
    
    with open(path, mode) as file:
        file.write(content)
    
def main():
    """
    Main logic.
    """

    src_path = os.path.join("src")
    dist_path = os.path.join("dist")
    license: str = read_file("LICENSE")
    
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
                
            if file.endswith(".html"):
                content: str = read_file(src_file_path)
                minified_content = f"<!--\n{license}\n-->\n\n" + html_minify(content)
                write_file(dist_file_path, minified_content)
                
                print("HTML minified")
            elif file.endswith(".css"):
                content: str = read_file(src_file_path)
                minified_content = f"/*\n{license}\n*/\n\n" + css_minify(content)
                write_file(dist_file_path, minified_content)
                
                print("CSS minified")
            elif file.endswith(".js"):
                content: str = read_file(src_file_path)
                minified_content = f"/*\n{license}\n*/\n\n" + js_minify(content)
                write_file(dist_file_path, minified_content)
                
                print("JS minified")
            else:
                content: str = read_file(src_file_path, mode = "rb")
                write_file(dist_file_path, content, mode = "wb")
                
    print("Build complete!")
                
if __name__ == "__main__":
    main()