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

## ✨ Credit
- [**Cuh4**](https://github.com/Cuh4) - Main Developerv