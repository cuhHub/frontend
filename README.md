![In-Game Screenshot](imgs/1.png)

# cuhHub - Frontend

## 📚 Overview
This repository contains all of the code for cuhHub's frontend hosted at https://cuhhub.com.

## 💡 Setup
1) Download cuhHub files: `git clone https://github.com/cuhHub/frontend` (`git` required)
2) Setup nginx to serve the site.
```nginx
server {
    listen 80;
    server_name cuhhub.com;
    root /path/to/src;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Ensure required ports are forwarded and allowed through firewall.

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