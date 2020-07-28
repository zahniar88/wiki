---
tags:
- server
- lamp
title: Install PhpMyadmin di ubuntu 20.04
date: 2020-07-26T17:00:00.000+00:00
author: Zahniar Adirahman
summary: Menginstall phpmyadmin di ubuntu 20.04
cover: ''

---
## Installing phpMyAdmin

```bash
sudo apt update
sudo apt install phpmyadmin
```

## Securing Your phpMyAdmin Instance

```bash
sudo nano /etc/apache2/conf-available/phpmyadmin.conf
```

```apacheconf
<Directory /usr/share/phpmyadmin>
    Options FollowSymLinks
    DirectoryIndex index.php
    AllowOverride All
    . . .
```

```bash
sudo systemctl restart apache2
```


```bash
sudo nano /usr/share/phpmyadmin/.htaccess
```

.htaccess file

```plaintext
AuthType Basic
AuthName "Restricted Files"
AuthUserFile /etc/phpmyadmin/.htpasswd
Require valid-user
```

```bash
sudo htpasswd -c /etc/phpmyadmin/.htpasswd username
```