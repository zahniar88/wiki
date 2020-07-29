---
tags:
- server
- lamp
title: Install MySQL di ubuntu 20.04
date: 2020-07-26T17:00:00.000+00:00
author: Zahniar Adirahman
summary: Menginstall MySQL di ubuntu 20.04
cover: ''

---
## Menambahkan Repositori Perangkat Lunak MySQL

Pengembang MySQL menyediakan `.deb` paket yang menangani konfigurasi dan pemasangan repositori perangkat lunak MySQL resmi. Setelah repositori diatur, kita akan dapat menggunakan `apt-get` perintah standar Ubuntu untuk menginstal perangkat lunak. Kami akan mengunduh `.deb` file ini dengan `wget` lalu menginstalnya dengan `dpkg` perintah.

Pertama, muat [halaman unduh MySQL](https://dev.mysql.com/downloads/repo/apt/) di browser web Anda. Temukan tombol **Unduh** di sudut kanan bawah dan klik ke halaman berikutnya. Halaman ini akan meminta Anda untuk masuk atau mendaftar akun web Oracle. Kami dapat melewati itu dan mencari tautan yang mengatakan **Tidak, terima kasih, mulai saja unduhan saya** . Klik kanan tautan dan pilih **Salin Alamat Tautan** (opsi ini mungkin berbeda, tergantung pada browser Anda).

Sekarang kita akan mengunduh file. Di server Anda, pindah ke direktori tempat Anda dapat menulis:

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.15-1_all.deb
```

Sekarang kita siap untuk menginstal:
```bash
sudo dpkg -i mysql-apt-config*
sudo apt-get update
```


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