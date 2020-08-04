---
date: Tue, 04 August 2020
author: Zahniar Adirahman
tags:
- programming
- html
title: Membuat text berjalan dengan html marquee
cover: ''
summary: Cara membuat text berjalan di html menggunakan tag marquee

---
## Kode Marquee Dasar

```html
<marquee>
	Selamat datang di Nikipedia
</marquee>
```

## kode loop="angka|-1|infinite"

kode ini digunakan untuk melakukan pengaturan proses pengulangan sebuah marquee.

```html
<marquee loop="5">
  Selamat datang di Nikipedia
</marquee>
```

## kode scrolldelay="angka"

kode ini digunakan untuk mengatur waktu delay selama "angka", Jadi bila ingin menunda delay selama 1 detik maka ganti "angka" menjadi 1000, atau bila ingin 0.5 detik maka diganti dengan 500.

```html
<marquee scrolldelay="500">
  Selamat datang di Nikipedia
</marquee>
```

## kode bgcolor="warna"

kode ini digunakan untuk mengatur warna background tulisan berjalan. "warna" dapat diganti menggunakan bahasa Inggris yang menyatakan jenis warna

```html
<marquee bgcolor="yellow">
  Selamat datang di Nikipedia
</marquee>
```

## kode scrollamount="angka"

kode digunakan untuk mengatur kecepatan gerakan tulisan berjalan. Semakin besar "angka" semakin cepat juga gerakannya.

```html
<marquee scrollmount="10">
  Selamat datang di Nikipedia
</marquee>
```

## kode direction="left/right/up/down"

kode ini digunakan untuk mengatur arah gerakan tulisan yang diinginkan.

```html
<marquee direction="right">
  Selamat datang di Nikipedia
</marquee>
```

## kode width="lebar"

kode ini digunakan untuk mengatur lebar media yang akan menampung marquee

```html
<marquee width="50%">
	Selamat datang di Nikipedia
</marquee>
```

## kode title="pesan"

kode ini digunakan untuk menampilkan suatu pesan jika kursor mouse didekatkan pada jalur teks

```html
<marquee title="Pesan disini">
	Selamat datang di Nikipedia
</marquee>
```

## kode behavior="scroll/slide/alternate"

kode ini digunakan untuk mengatur jenis gerakan, Yaitu :

* Scroll bila ingin text berjalan terus ke salah satu sisi
* Slide  bila ingin text berjalan tersendat-sendat
* Alternate  bila ingin text berjalan seperti memantul

```html
<marquee behavior="scroll">
	Selamat datang di Nikipedia
</marquee>

<marquee behavior="slide">
	Selamat datang di Nikipedia
</marquee>

<marquee behavior="alternate">
	Selamat datang di Nikipedia
</marquee>
```

Sumber: [http://www.caramadia.com/2015/08/cara-membuat-tulisan-berjalan-marquee.html](http://www.caramadia.com/2015/08/cara-membuat-tulisan-berjalan-marquee.html "http://www.caramadia.com/2015/08/cara-membuat-tulisan-berjalan-marquee.html")