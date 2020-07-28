---
tags:
- server
- apache2
title: Cara mengaktifkan mod rewrite apache2 ubuntu
date: 2020-07-27T17:00:00.000+00:00
author: Niki Pedia
cover: "/assets/img/apache2.JPG"
summary: Bagaimana cara mengaktifkan mod_rewrite pada apache2 pada ubuntu

---
Cara mengaktifkan atau mengenable modul rewrite di apache menggunakan a2enmod sebagai berikut:

```bash
sudo a2enmod rewrite
```

Langkah berikutnya pastikan directory web support untuk rewrite. edit file /etc/apache2/apache2.conf :

```bash
sudo nano /etc/apache2/apache2.conf
```

Cari directory setting untuk web Anda. saya anggap masih di default yaitu /var/www :

```apacheconf
Options Indexes FollowSymLinks
AllowOverride None
Require all granted
```

Ganti `AllowOverride None` menjadi `AllowOverride All` seperti berikut ini:

```apacheconf
Options Indexes FollowSymLinks
AllowOverride All
Require all granted
```

Simpan File dengan menekan Ctrl+O

Restart Apache2:

```bash
sudo systemctl restart apache2
```