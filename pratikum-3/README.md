Soal 1 : Mendefenisikan komponen
![Soal-1](img/soal-1.png)

Yang bisa saya pelajari adalah jika ingin memanggi gambar dengan menggunkan domains maka domain tersebut harus di konfigurasi di next.config.mjs dan harus memanggil jujuga komponen yang telah di buat di halaman yg akan dituju dengan import Profile from "asal-components";. Terdapat beberapa error sebelum domains di konfigurasi di next.config.mjs dan di solve dengan menambahkan 

module.exports = {

images: {

      domains: ['i.imgur.com'],
    },
  };

  di next.config.mjs

Soal 2 : Mengimpor dan mengekpor komponen
![Soal-2](img/soal-2.png)

Pada saat ini sedang menggunakan component Gallery yang membuat tampilan pada page.tsx lebih simple karena hanya terisi code yang di gunakan untuk memanggil component yang ada di gallery.
