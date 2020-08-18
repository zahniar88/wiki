---
date: Tue, 18 August 2020
author: Zahniar Adirahman
tags:
- animation
- custom
- theme
title: Install Compiz windows effect
cover: ''
summary: Cara install Compiz windows effect pada linux ubuntu

---
## Create a working directory

```bash
mkdir libanimation-patched && cd libanimation-patched
```

## Install Dependencies

```bash
sudo apt install git build-essential fakeroot dpkg dpkg-dev debhelper cdbs \
gobject-introspection googletest google-mock libgirepository1.0-dev \
libglib2.0-dev libgtest-dev meson
```

## Download sources

```bash
git clone https://github.com/hermes83/libanimation.git
```

## Build packages from sources

```bash
cd libanimation && dpkg-buildpackage -rfakeroot -b -uc -us
```

## Install build packages

```bash
sudo dpkg --install ../libanimation0_0.0.0_amd64.deb \
../libanimation-glib0_0.0.0_amd64.deb \
../gir1.2-animation-glib-0_0.0.0_amd64.deb
```

Sumber: [https://github.com/hermes83/libanimation](https://github.com/hermes83/libanimation "https://github.com/hermes83/libanimation")