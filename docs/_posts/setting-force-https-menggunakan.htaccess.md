---
tags:
- ssl
- server
- conf
title: Setting Force HTTPS Menggunakan .htaccess
date: 2020-07-26 17:00:00 +0000
author: Zahniar Adirahman
summary: Cara setting force http ke https menggunakan .htaccess

---
Apabila website Anda sudah terpasang SSL dan ketika diakses belum mengarah ke [_https://namawebsite.com_](https://namawebsite.com "https://namawebsite.com") . Anda dapat memakai cara ini, agar ketika mengakses _namawebsite.com_ otomatis mengarah ke [_https://namawebsite.com_](https://namawebsite.com "https://namawebsite.com") .

\*_namawebsite.com_ adalah nama website Anda masing-masing.

## 1. Login cPanel Hosting

Masuk ke dalam `cpanel` anda melalui https://namadomain/cpanel,

Lalu login sesuai email yang dikirim dari DomaiNesia mengenai `Informasi Account Hosting`

## 2. Memilih File Manager

Maka anda akan masuk kedalam cpanel dari hosting. Pada kolom pencarian silahkan tulis `file manager`.

## 3. Mengubah File .htaccess

Kemudian akan diarahkan ke halaman `file manager`. File manager inilah yang merupakan folder dari website anda. Untuk mengarahkan HTTP ke HTTPS maka anda dapat mengubah file `.htaccess`. Untuk mencari file .htaccess maka tulis .htaccess pada kolom pencarian lalu klik `GO`

Maka akan muncul letak file .htaccess pada folder website anda. Biasanya, root atau folder utama yang ditampilkan pada website berada pada public_html. Maka klik dua kali (double klik) pada `/public_html/.htaccess`.

Setelah diklik dua kali maka anda akan diarahkan menuju lokasi file .htaccess. Cari file .htaccess. Apabila tidak ada, maka file manager anda belum dapat menayangkan file yang tersembunyi. Perlu diketahui bahwa file .htaccess merupakan file yang tersembunyi dalam folder. Untuk itu, perlu merubah pengaturan dari file manager itu sendiri. Pilih \`Settings\` kemudian beri tanda centang pada `Show Hidden Files`. Lalu Save.

Setelah itu lihat lagi pada file manager anda, maka file .htaccess telah terlihat.

Silahkan Klik pada file `.htaccess` kemudian pilih `Edit`.

Maka akan muncul notifikasi penggunaan Text Editor seperti gambar, klik `Edit`

Tambahkan baris berikut ini di baris paling atas atau baris terakhir.

\*Berikut script yang digunakan:

```apache
#http to https

RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Sumber: [https://www.domainesia.com/panduan/panduan-mengarahkan-http-ke-https/](https://www.domainesia.com/panduan/panduan-mengarahkan-http-ke-https/ "https://www.domainesia.com/panduan/panduan-mengarahkan-http-ke-https/")