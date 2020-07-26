---
tags:
- server
- lamp
title: Install php di ubuntu 20.04
date: 2020-07-26 17:00:00 +0000
author: Zahniar Adirahman
summary: Menginstall php dan multiple php di ubuntu 20.04

---
## Optional Install

```bash
sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php
```

## Install php 7.4

```bash
sudo apt update
sudo apt upgrade
apt show php7.4
sudo apt install php7.4
```

## Install Module php 7.4

```bash
sudo apt-cache search php7.4
sudo apt install php7.4-bcmath php7.4-mbstring php7.4-zip php7.4-mysql php7.4-sqlite3 php7.4-xml php7.4-json php7.4-xmlrpc php7.4-cgi php.4-curl php7.4-xsl php7.4-bz2 php7.4-gd
```


## Switch between php version
```bash
update-alternatives --config php
```

## Apache2 disable mod php
```bash
sudo a2dismod php*
```

## Uninstall php
```bash
sudo apt-get purge php7.*
sudo apt-get autoclean
sudo apt-get autoremove
```