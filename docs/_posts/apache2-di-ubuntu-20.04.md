---
tags:
- server
title: Apache2 di ubuntu 20.04
date: 2020-07-26T17:00:00.000+00:00
author: Zahniar Adirahman
summary: Menginstall apache2 di ubuntu 20.04
cover: "/assets/img/apache2.JPG"

---
## Install Apache
```bash
sudo apt update
sudo apt install apache2
```

## Beberapa perintah yang dapat dilakukan
```bash
sudo systemctl start apache2
sudo systemctl status apache2
sudo systemctl stop apache2
sudo systemctl enable apache2
sudo systemctl disable apache2
sudo systemctl reload apache2
```

## Apache2 virtual host
Mengaktifkan virtual host:
```bash
sudo a2ensite <nama_file_conf>
```

Menonaktifkan virtual host:
```bash
sudo a2dissite <nama_file_conf>
```

## Apache2 Module
Mengaktifkan Module
```bash
sudo a2enmod <module_name>
```

Menonaktifkan Module
```bash
sudo a2dismod <module_name>
```

## List Apache Virtual Host
```bash
apache2ctl -S
apachectl -S
```