---
title: Teknologi Frontend dan Struktur Project yang Digunakan di Website KitabisaPlus
date: "2020-05-23T22:40:32.169Z"
description: Menjelaskan tentang sturktur project dan teknologi frontend apa aja yang ada website KitabisaPlus.
---
# Tentang KitabisaPlus

Sedikit cerita tentang KitabisaPlus, KitabisaPlus merupakan salah satu produk dari Kitabisa yang mengusung konsep tolong menolong antar anggota/donatur. Dengan donasi minimal Rp 10.000 di campaign [KitabisaPlus](https://Plus.kitabisa.com/), sudah cukup untuk bisa jadi anggota KitabisaPlus, untuk lebih detailnya bisa dilihat [disini](https://help.kitabisa.com/articles/360026481454-syarat--ketentuan-kitabisa-Plus).

# Teknologi KitabisaPlus

Karena role saya di KitabisaPlus sebagai Frontend Engineer, maka saya disini fokus cerita tentang teknologi yang ada di website [KitabisaPlus](https://Plus.kitabisa.com/).

Pada awalnya, codebase KitabisaPlus jadi satu dengan codebase Kitabisa. Setelah pengembangan berjalan beberapa bulan, kami menemukan beberapa masalah, salah satunya yaitu semakin kompleksnya pengembangan produk KitabisaPlus. Oleh karena itu, kami memutuskan untuk memisahkan KitabisaPlus dari codebase Kitabisa. 

Project baru KitabisaPlus sendiri diberi nama `Plus`. Plus menggunakan ReactJS. Pada awalnya, codebase Plus yang ada di Kitabisa menggunakan ES6, kemudian ketika proses migrasi, kami memutuskan untuk menggunakan static-typing typescript.

Menggunakan typescript tentu merubah struktur project Plus, diantaranya adanya penambahan folder `interfaces` yang berfungsi sebagai `interfaces` project (interfaces formik, redux dan lainnya). Kemudian, adanya penambahan types pada setiap component yang menggunakan typescript.

Plus menggunakan NextJS sebagai Framework nya, menggunakan Redux sebagai state management dan menggunakan styled-component untuk styling.

## Struktur Plus

Berikut struktur project Plus secara garis besar

```
├── _infra
├── interfaces
├── pages
│   ├── ...file/folder app
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
├── params
├── public
├── src
│   ├── actions
│   ├── components
│   ├── reducers
│   ├── services
│   ├── stores
│   ├── styles
│   ├── types
│   └── utils
├── next.config.js
└── server.js
```

Setiap project di kitabisa selalu ada folder `_infra`, folder tersebut berisi file yaml untuk kebutuhan tim DevOps. 
Kemudian folder `pages` berisi page file (yang akan dibahas di bagian `Routes` dibawah), Sedangkan fungsi 3 file lainnya bisa dibaca di [_app.js](https://nextjs.org/docs/advanced-features/custom-app),  [_document.js](https://nextjs.org/docs/advanced-features/custom-document) dan [_error.js](https://nextjs.org/docs/advanced-features/custom-error-page).

Pada folder `params` berisi env yang ada pada Plus, folder `public` berisi static file yang digunakan di Plus dan folder `src` yang akan dibahas pada bagian `Folder src` dibawah

Kemudian untuk fungsi dari kedua file terakhir bisa dibaca di dokumentasi [next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction) dan [server.js](https://nextjs.org/docs/advanced-features/custom-server)

### A. Routes
***
Salah satu kelebihan menggunakan NextJS adalah beberapa hal yang sudah dihandle oleh NextJS nya, salah satunya terkait routes. Di Plus kita tidak perlu menentukan routes dalam satu file, cukup memberi nama folder atau file maka NextJS akan membaca nama folder atau file itu sebagai routes. 

```
├── pages
    └──donation-status
        └── [donationId].tsx
```

Routes dari struktur diatas adalah `donation-status/[donationId]`. 

### B. Folder src
***
Bagian `src` bisa dibilang sebagai nyawa dari Plus, bagaimana tidak, di folder ini merupakan tempat semua logic component, request data dan sebagainya.

#### Pake redux, kok ga ada container?

Konsep redux yang ada di Plus sama seperti best practice yang ada, folder `actions` dan `reducers` berisi [actions](https://redux.js.org/recipes/reducing-boilerplate#actions) dan  [reducers](https://redux.js.org/faq/reducers#reducers) yang ada di Plus, kemudian folder store berisi intiate redux dan devtool redux yang dipakai di env development. 

*Kemudian dimana letak container ?*

Setelah berdiskusi dengan rekan saya, Ryan Riatno dan Santo Sidauruk, `container` pada Plus diletakkan di dalam `components`. 
Namun, dalam penerapannya ada perbedaan antara `component` dan `container` dalam folder `components`

Jika `component` maka nama file nya adalah
```
components/ExampleComponent/ExampleComponent.tsx
```

Kemudian untuk `container` nama file nya adalah
```
components/ExampleComponent/index.tsx
```

Alasan tersebut dilakukan, karena ada banyak component yang hanya digunakan oleh satu container. Tentu dengan struktur diatas, maka lebih mudah dalam code maintenance.

#### Styling nya pake apa aja?

Plus menggunaakan scss didalam folder `styles` untuk normalize dan menggunakan styled-component untuk style pada component. File style nya diletakkan dalam folder component. Jadi setiap component kebanyakan memiliki file style yang berbeda juga.

#### Fungsi dari utils dan services

`Don't Repeat Yourself !!` Suatu aplikasi pasti membutuhkan helper dan fungsi untuk request ke API. Oleh karena itu, untuk helper dan fungsi-fungsi lainnya yang sering dipakai berulang oleh Plus diletakkan tidak didalam component ataupun pages. 

Folder `utils` berisi helper yang digunakan oleh Plus dan folder `services` berisi fungsi-fungsi yang digunakan Plus untuk request data. 

# Kesimpulan 

Setiap project tentu memiliki kebutuhan yang berbeda kemudian struktur dan teknologi yang digunakan pasti berbeda. Oleh karena itu, teknologi dan struktur yang saya tulis disini sangatlah dinamis dan pasti tidak bisa di implementasikan ke semua project.

Oleh karena itu, diskusi tentang pemilihan teknologi dan struktur project sangatlah penting dalam pengembangan project.