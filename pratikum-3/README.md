Pratikum 1 : Mendefenisikan komponen

Soal 1
![Soal-1](img/soal-1.png)

Yang bisa saya pelajari adalah jika ingin memanggi gambar dengan menggunkan domains maka domain tersebut harus di konfigurasi di next.config.mjs dan harus memanggil jujuga komponen yang telah di buat di halaman yg akan dituju dengan import Profile from "asal-components";. Terdapat beberapa error sebelum domains di konfigurasi di next.config.mjs dan di solve dengan menambahkan 

module.exports = {

images: {

      domains: ['i.imgur.com'],
    },
  };

  di next.config.mjs

Pratikum 2 : Mengimpor dan mengekpor komponen

Soal 2
![Soal-2](img/soal-2.png)

Pada saat ini sedang menggunakan component Gallery yang membuat tampilan pada page.tsx lebih simple karena hanya terisi code yang di gunakan untuk memanggil component yang ada di gallery.

Pratikum 3 : Menggunakan JSX dinamis

Soal 4
![Soal-4](img/soal-4.png)

Soal 5
![Soal-5](img/soal-5.png)

Terdapat perbedaan dengan tampilan sebelumnya yakni: warna background berubah menjadi hitam, ada penambahan 1 foto yang disertai nama dan deskripsi orang yg berada di foto yg terletak di bawah 3 foto yang sebelumnya, dan terdapat juga garis putih pemisah.

Soal 6
![Soal-6](img/soal-6.png)

Untuk sejauh ini yang saya lihat terjadi penyederhanaan pada page.tsx dikarenakan terjadi pembagian component pada ../component. Perubahan tampilan pada gambar yang di bawah dengan hanya merubah ukuran gambar.

Soal 7,8, dan 9
![Soal-7,8,9](img/soal-7,8,9.png)

Perlunya keterhubungan antar sesama bagian agar componen bisa terpangil dengan maksimal tanpa ada kendala. Pada tampilan akhir ini ada tambahan 3 foto ilmuan beserta bio-nya pada sudut kiri secara berurutan.