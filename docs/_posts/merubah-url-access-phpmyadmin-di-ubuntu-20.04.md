---
date: Wed, 05 August 2020
author: Niki Pedia
tags:
- server
- phpmyadmin
- database
title: Merubah url access phpmyadmin di ubuntu 20.04
cover: "/assets/img/logo_right.png"
summary: Cara merubah url akses bawaan phpmyadmin apache2 di ubuntu 20.04

---
### Langkah pertama

```bash
cd /etc/apache2/conf-available
```

### Langkah kedua

```bash
sudo gedit phpmyadmin.conf
```

### Langkah ketiga

Ubah Script dibawah ini:

```apacheconf
Alias /phpmyadmin /usr/share/phpmyadmin
```

menjadi:

```apacheconf
Alias /linkyangdiinginkan /usr/share/phpmyadmin
```

Setelah diubah jalankan perintah berikut

```bash
sudo systemctl restart apache2
```

Kemudian phpmyadmin dapat diakses dengan url yang telah kita ubah.

Misal:

`localhost/linkphpmyadmin`