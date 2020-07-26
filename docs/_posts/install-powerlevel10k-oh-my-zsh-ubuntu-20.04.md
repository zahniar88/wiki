---
tags:
- Terminal
- Custom
title: Install Powerlevel10k Oh My Zsh ubuntu 20.04
date: 2020-07-26 17:00:00 +0000
author: Zahniar Adirahman
summary: Menginstall custom theme powerlevel10k oh my zsh ubuntu 20.04

---
## Install font MesloLGS NF Regular
[MesloLGS NF Regular](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)

Buka terminal kemudian pilih preferences dan custom font dan pilih font MesloLGS

Kemudia jalankan perintah berikut:
```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Set tema `ZSH_THEME="powerlevel10k/powerlevel10k"` di file `.zshrc`
Kemuadian ketik `source ~/.zshrc`

Ketikan perintah berikut: `p10k configure`
![powerlevel10k](https://i.ibb.co/kQWn6Fs/screenshot-from-2020-07-24-19-06-51.png)


Silahkan di konfigurasi dan selesai.
