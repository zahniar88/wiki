---
date: Thu, 30 July 2020
author: Niki Pedia
tags:
- mysql
- server
title: Cara Membuat User MySQL dan Hak Akses MySQL
cover: ''
summary: Cara membuat user di mysql ubuntu dengan terminal

---
Sumber: [https://www.linuxid.net/25264/cara-membuat-user-mysql-dan-hak-akses-mysql/](https://www.linuxid.net/25264/cara-membuat-user-mysql-dan-hak-akses-mysql/ "https://www.linuxid.net/25264/cara-membuat-user-mysql-dan-hak-akses-mysql/")

Untuk mengakses shell MySQL, ketik perintah berikut dan masukkan kata sandi pengguna root MySQL Anda ketika diminta:

```bash
mysql -u root -p
```

Jika Anda belum atau tidak menetapkan kata sandi untuk pengguna root MySQL, Anda dapat menghilangkan flag `-p`

## Buat Akun baru User MySQL

Akun pengguna di MySQL terdiri dari nama pengguna dan hostname.
Untuk membuat akun pengguna MySQL baru, jalankan perintah berikut:

```bash
CREATE USER 'nama_user'@'localhost' IDENTIFIED BY 'password_user';
```

Ganti nama_user dengan nama pengguna baru yang Anda maksudkan, dan user_password dengan kata sandi pengguna. Pada perintah di atas bagian hostname diatur ke localhost yang berarti bahwa pengguna akan dapat terhubung ke server MySQL hanya dari localhost (Yaitu dari sistem di mana MySQL Server berjalan).

## Berikan Hak Akses Istimewa ke Akun Pengguna MySQL

Ada beberapa jenis hak istimewa yang dapat diberikan ke akun pengguna. Anda dapat menemukan daftar lengkap hak istimewa yang didukung oleh MySQL di sini.

Hak istimewa yang paling umum digunakan adalah:

* ALL PRIVILEGES – memberikan semua hak istimewa ke akun pengguna.
* CREATE – akun pengguna diizinkan untuk membuat database dan tabel.
* DROP – akun pengguna diizinkan untuk menghapus database dan tabel.
* DELETE – akun pengguna diizinkan untuk menghapus baris dari tabel tertentu.
* INSERT – akun pengguna diizinkan untuk memasukkan baris ke tabel tertentu.
* SELECT – akun pengguna diizinkan untuk membaca database.
* UPDATE – akun pengguna diizinkan untuk memperbarui baris tabel.

Untuk memberikan hak khusus ke akun pengguna, Anda dapat menggunakan sintaks berikut:

```bash
GRANT permission1, permission2 ON nama_database.nama_tabel TO 'user_database'@'localhost';
```

Berikut ini beberapa contohnya:

* Memberikan semua hak istimewa ke akun pengguna untuk database tertentu :

```bash
GRANT ALL PRIVILEGES ON nama_database.* TO 'user_database'@'localhost';
```

* Memberikan semua hak istimewa ke akun pengguna untuk semua database :

```bash
GRANT ALL PRIVILEGES ON *.* TO 'user_database'@'localhost';
```

* Berikan semua hak istimewa ke akun pengguna untuk tabel tertentu dari database:

```bash
GRANT ALL PRIVILEGES ON nama_database.nama_tabel TO 'user_database'@'localhost';
```

* Berikan hanya beberapa hak istimewa ke akun pengguna untuk database tertentu:

```bash
GRANT SELECT, INSERT, DELETE ON nama_database.* TO user_database@'localhost';
```

## Tampilkan Hak Akses User MySQL

Untuk menemukan hak istimewa yang diberikan kepada akun pengguna MySQL tertentu, gunakan pernyataan SHOW GRANTS:

```bash
SHOW GRANTS FOR 'user_database'@'localhost';
```

```bash
+---------------------------------------------------------------------------+
| Grants for database_user@localhost                                       |
+---------------------------------------------------------------------------+
| GRANT USAGE ON *.* TO 'database_user'@'localhost'                        |
| GRANT ALL PRIVILEGES ON `database_name`.* TO 'database_user'@'localhost' |
+---------------------------------------------------------------------------+
2 rows in set (0.00 sec)
```

## Revoke (Cabut) Hak Istimewa dari Akun Pengguna MySQL

Sintaks untuk mencabut satu atau lebih hak istimewa dari akun pengguna hampir sama dengan ketika memberikan hak istimewa.

Misalnya untuk mencabut semua hak istimewa dari akun pengguna untuk database tertentu, gunakan perintah berikut:

```bash
REVOKE ALL PRIVILEGES ON nama_database.* TO 'user_database'@'localhost';
```

## Hapus Akun Pengguna MySQL

Untuk menghapus akun pengguna MySQL, gunakan pernyataan DROP USER:

```bash
DROP USER 'user_database'@'localhost'
```

Perintah di atas akan menghapus akun pengguna dan hak istimewanya.

sumber: [https://www.linuxid.net/25264/cara-membuat-user-mysql-dan-hak-akses-mysql/](https://www.linuxid.net/25264/cara-membuat-user-mysql-dan-hak-akses-mysql/ "https://www.linuxid.net/25264/cara-membuat-user-mysql-dan-hak-akses-mysql/")