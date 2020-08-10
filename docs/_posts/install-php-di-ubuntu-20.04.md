---
tags:
- server
- lamp
title: Install php di ubuntu 20.04
date: 2020-07-26T17:00:00.000+00:00
author: Zahniar Adirahman
summary: Menginstall php dan multiple php di ubuntu 20.04
cover: ''

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
sudo apt install php7.4-{bcmath,bz2,cgi,cli,common,curl,dba,dev,enchant,gd,gmp,imap,interbase,intl,json,ldap,mbstring,mysql,odbc,opcache,pgsql,phpdbg,pspell,readline,recode,snmp,soap,sqlite3,sybase,tidy,xml,xmlrpc,xsl,zip}

```


## Switch between php version
```bash
sudo update-alternatives --config php
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