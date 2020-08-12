---
date: Wed, 12 August 2020
author: Niki Pedia
tags:
- http
- server
- ssl
title: Force HTTP ke HTTPS codeigniter menggunakan .htaccess
cover: ''
summary: Cara redirect http ke https codeigniter dengan menggunakan htaccess

---
## Setting .htaccess bawaan codeigniter

```apacheconf
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php?/$1 [QSA,L]
```

Ubah menjadi seperti berikut

## Force to https

```apacheconf
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php?/$1 [QSA,L]

RewriteCond %{HTTPS} off
RewriteRule ^.*$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Sumber: [https://bayu.pinasthika.com/ti/php/codeigniter/cara-redirect-http-menjadi-https-melalui-htaccess-pada-codeigniter/](https://bayu.pinasthika.com/ti/php/codeigniter/cara-redirect-http-menjadi-https-melalui-htaccess-pada-codeigniter/ "https://bayu.pinasthika.com/ti/php/codeigniter/cara-redirect-http-menjadi-https-melalui-htaccess-pada-codeigniter/")