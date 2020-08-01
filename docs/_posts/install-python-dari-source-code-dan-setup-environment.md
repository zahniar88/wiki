---
date: Sat, 01 August 2020
author: Niki Pedia
tags:
- python
- programming
- setup
title: Install python dari source code dan setup environment
cover: ''
summary: Cara install python dari source code dan setup environment ubuntu 20.04

---
## Download Python

[https://www.python.org/downloads/](https://www.python.org/downloads/ "https://www.python.org/downloads/")

![Python Page](/assets/img/screenshot-from-2020-08-01-11-25-56.png)

## Install Python

* **Extract the tarball**

```bash
tar -xf Python-3.?.?.tar.xz
```

* **Configure the script**

```bash
cd Python-3.*
./configure
```

* **Start the build process**

Jika Anda sudah memiliki versi Python yang terinstal di sistem Anda dan Anda ingin menginstal versi baru di sampingnya, gunakan perintah ini:

```bash
sudo make
```

```bash
sudo make altinstall
```

Proses pembuatan mungkin membutuhkan waktu.

Jika Anda ingin mengganti versi Python Anda saat ini dengan versi baru ini, Anda harus menghapus instalasi paket Python Anda saat ini menggunakan manajer paket Anda (seperti apt atau dnf ) dan kemudian instal:

```bash
sudo make install
```

* **Verifikasi pemasangan**

```bash
python3 --version
```

**atau**

```bash
python --version
```

## Buat lingkungan virtual (opsional)

Python menyediakan paket yang dikenal sebagai venv (lingkungan virtual), yang membantu Anda mengisolasi direktori program atau paket dari yang lain.
Untuk membuat lingkungan virtual, masukkan berikut ini di terminal Python (dalam contoh ini, anggap versi Python yang Anda instal ada di seri 3.8 ):

python3.8 -m venv example

```bash
python3.8 -m venv example
```

Perintah ini membuat direktori baru (yang saya sebut example ), dengan beberapa subdirektori.

Untuk mengaktifkan lingkungan virtual, masukkan:

```bash
source example/bin/activate
```

Untuk menonaktifkan lingkungan virtual, gunakan perintah **nonaktifkan** :

```bash
deactivate
```

Sumber:

[https://opensource.com/article/20/4/install-python-linux](https://opensource.com/article/20/4/install-python-linux "https://opensource.com/article/20/4/install-python-linux")