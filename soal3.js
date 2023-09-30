// soal1.js
const fs = require("fs");
const calc2 = require('./calc2.js');

const sisiPersegi = 5;
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;

const luasPersegi = calc2.luasPersegi(sisiPersegi);
const kelilingPersegi = calc2.kelilingPersegi(sisiPersegi);
const luasPersegiPanjang = calc2.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = calc2.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log('Luas Persegi:', luasPersegi);
console.log('Keliling Persegi:', kelilingPersegi);
console.log('Luas Persegi Panjang:', luasPersegiPanjang);
console.log('Keliling Persegi Panjang:', kelilingPersegiPanjang);
