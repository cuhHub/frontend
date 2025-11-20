![In-Game Screenshot](imgs/1.png)

# cuhHub - Frontend

## 📚 Overview
This repository contains all of the code for cuhHub's frontend hosted at https://cuhhub.com.

## 💡 Setup
1) Clone the repo: `git clone https://github.com/cuhHub/frontend` (`git` required).
2) Rename `example.env` to `.env` and configure it.
3) Build the site via `build.bat` (`pip install -r requirements.txt` first! Requires `Python >=3.13`).
4) Setup nginx to serve the site (use `dist` directory, not `src`!).

If developing, use `run.bat` (runs `py run.py`. Use `pip install -r requirements` first) to start a localhost server hosting the website. It will hot-reload with every change to the site's content.

## ©️ | License
```
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
```
See `LICENSE` file for a more detailed version.