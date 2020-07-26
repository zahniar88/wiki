---
tags:
- server
- lamp
title: Install MySQL di ubuntu 20.04
date: 2020-07-26 17:00:00 +0000
author: Zahniar Adirahman
summary: Menginstall MySQL di ubuntu 20.04

---
## Installing MySQL

```bash
sudo apt update
sudo apt install mysql-server
```

## Configuring MySQL

```bash
sudo mysql_secure_installation
```

## Adjusting User Authentication and Privileges

```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
```
## Command

```bash
sudo systemctl start mysql
sudo systemctl stop mysql
sudo systemctl enable mysql
sudo systemctl disable mysql
sudo systemctl restart mysql
sudo systemctl reload mysql
```

## Import Database SQL from terminal

```bash
mysql -u {nama_user} -p {nama database yang barusan dibuat} < {sumber data sql yang akan dimasukkan}
```

Example:

```bash
mysql -u root -p website < /home/user/website.sql
```