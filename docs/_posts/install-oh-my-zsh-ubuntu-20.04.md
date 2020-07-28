---
tags:
- Terminal
- Custom
title: Install Oh My Zsh ubuntu 20.04
date: 2020-07-26 16:29:00 +0000
author: Zahniar Adirahman
cover: "/assets/img/screenshot-from-2020-07-24-18-28-58.png"
summary: Menginstall custom terminal zsh di linux ubuntu 20.04

---
## Install zsh
Ketikan perintah berikut pada terminal:

```bash
sudo apt-get install zsh
```

Setelah selesai di install, jalankan perintah berikut:
```bash
chsh -s $(which zsh)
```

Setelah itu logout dan login kembali, kemudian buka terminal kembali:

![terminal](https://i.ibb.co/bF5y83Y/screenshot-from-2020-07-24-18-28-58.png)

Kemudian pilih nomor (2). Sangat direkomendasikan. Kemudian install oh my zsh dengan menjalankan perintah berikut:

Sebelum menjalankan berintah berikut ini pastikan sudah terinstall `curl` atau `wget`

Dengan menjalankan perintah berikut:
```bash
sudo apt-get install curl wget
```

Kemudia setelah selesai jalankan perintah berikut:
```bash
sh -c "$(curl -fsSL  https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```