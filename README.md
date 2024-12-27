![In-Game Screenshot](imgs/1.png)

# cuhHub - Frontend

## 📚 Overview
This repository contains all of the code for cuhHub's frontend hosted at https://cuhhub.com.

## 💡 Setup
1) Download cuhHub files: `git clone https://github.com/cuhHub/frontend` (`git` required)
2) Install requirements: `pip install -r requirements.txt` (Python 3.12+ and `pip` required)
3) Rename `example_config.toml` to `config.toml`. Edit config parameters as desired.
4) If planned to be ran in production, create server certificates using something like Let's Encrypt.
5) Set up NGINX. Modify your NGINX config to redirect HTTPS requests from `cuhhub.com` (or your own domain) from port 443 over to the port you specified in your config under `[prod]`. Be sure to adjust config so that HTTP requests (port 80) get directed to HTTPS (port 443). Ensure NGINX uses the certificates you created above.
6) Ensure NGINX is running, then run `cd src` and finally `py main.py` to start the frontend.

When running in dev mode (in config, `environment.mode` should be `dev`), simply go to `localhost:PORT` in your browser to test everything out with `PORT` being the port you specified under `[dev]`.

Ensure required ports are forwarded and allowed through firewall.

## ✨ Credit
- [**Cuh4**](https://github.com/Cuh4) - Main Developerv