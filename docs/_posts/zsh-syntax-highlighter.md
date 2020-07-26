---
tags:
- Terminal
- Custom
title: zsh syntax highlighter
date: 2020-07-26 17:00:00 +0000
author: Zahniar Adirahman
summary: Menginstall plugin oh my zsh ubuntu 20.04

---
Cara instal zsh syntax highlighting di oh my zsh

Jalankan perintah berikut:
```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Kemudian aktifkan plugin di `.zshrc`

```plain-text
plugins=(zsh-syntax-highlighting)
```

Kemudia restart zsh atau buka termina baru. Selesai