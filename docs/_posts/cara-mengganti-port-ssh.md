---
tags:
- ssh
- server
- secure
title: Cara mengganti port ssh
date: 2020-07-27T17:00:00.000+00:00
author: Zahniar Adirahman
cover: "/assets/img/1_xxv0o3qlmxmpy3l8z02jgg.png"
summary: cara merubah port ssh server ubuntu 20.04

---
Membiarkan default port ssh yaitu port 22 adalah sesuatu yang tidak dianjurkan dalam hal keamanan sebuah vps atau server. Banyak sekali orang yang tidak peduli atas hal ini dengan membiarkan port SSH tetap default.

Panduan singkat ini akan memberikan bagai mana cara mengubah default port SSH pada Debian, Ubuntu dan CentOS sehingga bisa lebih meningkatkan keamanan VPS atau server anda.

Tahapanan adalah sebagai berikut:

###### 1. Install text editor NANO, supaya lebih memudahkan dala melakukan pengubahan konfigurasi server melalui ssh

Debian/Ubuntu:

```bash
sudo apt-get install nano
```

###### 2. Buka file konfigurasi SSH dengan menggunakan NANO

```bash
sudo nano /etc/ssh/sshd_config
```

###### 3. Setelah masuk kedalam file konfigurasi SSHD, cari port 22 lalu ubah angka 22 menjadi angka yang anda sukai dan mudah di ingat oleh anda. Misal kita ubah menjadi:

    Port 1734

ubah port sesuai yang di inginkan

jika masih memiliki tanda `#`

    #Port 22

ubah menjadi

    Port 1734

###### 4. Simpan konfigurasi SSHD yan baru dengan menekan CTRL + O

###### 5. Keluar dari file konfigurasi SSHD dengan menekan CTRL + X

###### 6. Restart SSH daemon agar konfigurasi SSHD yang baru bisa diterapkan.

Debian/Ubuntu:

```bash
sudo systemctl restart ssh
```

Setelah itu, maka ketika anda login ke server melalui SSH, anda harus memasukan port yang telah anda seting

contoh:

```bash
ssh username@host -p 1734
```

\*Isi port sesuai yang di inginkan