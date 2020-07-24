---
title: Berpikir Funsional dan Menjadi Fungsional di Javascript
date: "2020-07-24T22:40:32.169Z"
description: Konsep dari Funsional Programming dan penerapannya di Javascript.
---

# Fungsional Programming ?

Pada saat ini, Functional Programming menjadi satu hal yang wajib diketahui khususnya oleh javascript ninja. Ada beberapa yang hanya pernah mendengarkan istilah itu, atau bahkan ada juga yang sudah tak sadar secara langsung menggunakan Functional Programming. Jadi Apakah Functional Programming itu ? Singkatnya, Functional Programming adalah metode dari coding yang mengutamakan penggunaan fungsi. Kamu dapat mengaplikasikan Functional Programming di client-side (browser-based) ataupun di server-side (nodejs)

## Konsep Fundamental Functional Programming

Sebelum membahas lebih jauh tentang Functional Programming, Kita harus mengetahui konsep fundamental dari Functional Programming, yang terdiri dari Declarative Programming, Pure Function, Referential Transparency dan Immutability.

### Declarative Programming

Declarative Programming adalah paradigma pemrograman yang mengungkapkan logika dari sebuah komputasi tanpa menggambarkan aliran kontrol dari logika tersebut. Declarative Programming merupakan lawan dari Imperative Programming, dimana perbedaannya dapat dijelaskan dalam contoh di dunia nyata Proses Berobat Gigi berikut:

- Imperative:

  1. Pergilah ke Dokter Gigi
  2. Mendaftar antrian untuk berobat
  3. Dokter memeriksa gigi
  4. Dokter memberi diagnosa
  5. Dokter memberi anda resep obat
  6. Anda membeli obat tersebut

- Declarative:

  Dok, tolong periksa gigi saya (Dokter akan memeriksa gigi anda, memberi diagnosa, dan memberi anda resep obat) kemudian anda membeli obat atas resep yang diberikan oleh dokter

### Pure Function

Pada dasarnya, sebuah fungsi dikatakan pure function, jika memiliki:

- Fungsi yang hanya bergantung pada input yang diberikan di parameter.
- Fungsi yang tidak menimbulkan perubahan di luar lingkup mereka, seperti merubah variable global.

Fungsi yang tidak memenuhi 2 kriteria tersebut dikatakan sebagai Impure Function. Untuk lebih jelas berikut 2 contoh pure function dan impure function

- Pure Function

  ```
  function sum (a, b) {
      return a+b;
  }
  ```

- Impure Function

  ```
  let a = 0;
  let b = 2;
  function sum () {
      return a+b;
  }
  ```

### Referential Transparency

Sebuah fungsi dikatakan sebagai referential transparency jika sebuah fungsi tersebut mengembalikan return yang selalu sama jika diberi input yang sama juga. Misalnya fungsi dibawah ini:

```
var counter = 0;
function increment () {
	return ++counter
}
```

Fungsi diatas tidak dikatakan sebagai referential transparency, untuk menjadikannya sebagai referential transparent, kamu butuh menghilangkan dependent state dan memasukkannya kedalam input parameter fungsi. Kamu juga dapat mengubahnya ke bentuk ES6 lambda:

```
var increment = counter => counter + 1;
```

### Immutability

Immutable data adalah data yang tidak dapat berubah setelah dibuat. Pada javascript, seperti bahasa lainnya, semua primitive types (String, Number dan lainnya) adalah immutable.

```
var statement = “I am an immutable value”
var otherStr = statement.slice(8, 17)
```

Faktanya, tidak ada method string yang mengubah string yang mereka operasikan, mereka semua mengembalikan string baru. Alasannya adalah string tidak dapat diubah, mereka tidak dapat berubah, kita hanya bisa membuat string baru.

## Function di Javascript

Setelah memahami konsep fundamental diatas, maka hal selanjutnya yaitu tentang function. Pada functional Programming, fungsi adalah unit utamanya. Fungsi dapat menghasilkan hasil komputasi atau undefined (void function), Pada javascript, fungsi memiliki 2 karakteristik utama, yaitu Function as first-class and Higher-order function

### Function as first-class

Bahasa pemrograman dikatakan First-class function ketika fungsi bisa diperlakukan sebagai variabel. Untuk lebih jelasnya, berikut contohnya:

- Fungsi sebagai variable
  ```
  const myFn = function () {
  // do something
  };
  ```
- Fungsi yang diperlakukan sebagai argument/parameter ke fungsi lain
  ```
  function fnRun(fn, x, y) {
      return fn(x + y);
  }
  ```
- Fungsi yang dijadikan return oleh fungsi lain
  ```
  function takeFirst(fn, fn2) {
      return fn;
  }
  ```
- Fungsi yang dijadikan sebagai properti dari object
  ```
  var obj = {
      method: function (x) { return x \* x; }
  };
  ```

### Higher-order function

Karena fungsi bisa diperlakukan seperti objek biasa, Maka fungsi dapat dimasukkan sebagai argumen dan dikembalikan dari fungsi lainnya. Hal ini disebut sebagai Higher-order function. Berikut contoh dari penerapan higher-order function:

```
function applyOperation(a, b, opt) {
   return opt(a,b);
}
var multiplier = (a, b) => a * b;
applyOperation(2, 3, multiplier); // -> 6
```

# Get Functional

Setelah membahas konsep dasar yang ada pada functional programming dan function di javascript , maka berikut adalah beberapa implementasi functional programming pada javascript

## Transforming Data (map, filter, reduce)

### map()

map() memberikan callback sekali untuk setiap element yang ada di array dan membuat new Array sebagai hasilnya

```
const foods = ['Sate', 'Gule', 'Rawon'];
const greatFoods = names.map( function (name) {
    return 'Nasi' + name;
});
console.log(greetNames); // [‘Nasi Sate', 'Nasi Gule', 'Nasi Rawon']
```

### filter()

filter() merupakan fungsi yang membuat array baru dengan melewati semua element yang melewati semua test yang ada pada fungsi.

```
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const longWords = words.filter(word => word.length > 6);
// longWords is ["exuberant", "destruction", "present"]
```

### reduce()

reduce() merupakan fungsi akumulator dan setiap elemen dalam array (dari kiri ke kanan) untuk menjadikannya nilai tunggal.

```
const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
// total is 7
```

## Implementasi transforming data untuk memecahkan problem faktorial dan cari yang terpanjang

### Faktorial

- Faktorial dengan menggunakan looping

  ```
  function factorial(n) {
      var result = 1;
      for (var i = 1; i <= n; ++i) result *= i; return result;
  }
  ```

- Faktorial dengan menggunakan apply dan reduce

  ```
  function factorial(n) {
      return Array.apply(0, Array(n)).reduce(function(sum, value, index) {
              return sum + sum * index;
      }, 1);
  }
  ```

### Cari yang terpanjang

- Cari yang terpanjang dengan menggunakan looping

  ```
  function findLongest(array) {
      var longest = ''
      for (var i = 0; i < array.length; ++i) {
          if (array[i].length > longest.length) {
              longest = array[i];
          }
      }
      return longest;
  }
  findLongest(['sate', 'martabak', 'bakso'])       //martabak

  ```

- Cari yang terpanjang dengan menggunakan reduce

  ```
  function findLongest(array) {
      return array.reduce(function (longest, entry) {
          return entry.length > longest.length ? entry : longest;
      });
  }

  findLongest(['sate', 'martabak', 'bakso'])       //martabak
  ```

# Kesimpulan

Setelah membahas konsep dan implementasi Functional Programming di Javascript, keuntungan utama penggunaan Functional Programming adalah Functional Programming sangat efektif untuk mengurangi kompleksitas program dengan dekomposisi (memecah program menjadi potongan-potongan kecil) dan komposisi (menggabungkan potongan-potongan kembali bersama-sama).
