---
tags:
- ssl
- server
- host
- secure
title: SSL local di linux
date: 2020-07-26T17:00:00.000+00:00
author: Zahniar Adirahman
summary: https di localhost (test on ubuntu 20.04)
cover: ''

---
## Installing mkcert

```bash
sudo apt install libnss3-tools -y
wget https://github.com/FiloSottile/mkcert/releases/download/v1.1.2/mkcert-v1.1.2-linux-amd64
mv mkcert-v1.1.2-linux-amd64 mkcert
chmod +x mkcert
cp mkcert /usr/local/bin/
```

## Generate Local CA

```bash
mkcert -install
mkcert example.com
```