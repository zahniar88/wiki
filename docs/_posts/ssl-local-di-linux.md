---
tags:
- ssl
- scure
- server
- host
title: SSL local di linux
date: 2020-07-26 17:00:00 +0000
author: Zahniar Adirahman
summary: https di localhost (test on ubuntu 20.04)

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