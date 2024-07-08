"use strict";

let x;
let y;

/* Date je objekt u JS-i. možemo ga definirati kao vrijednost varijable (naravno objekt) koristeći new Date() */
x = new Date();
console.log(x, typeof x);

// Ako ga trebamo u string formatu, možemo pozvati toString metodu kako bi ga pretvorili u string
x = x.toString();
console.log(x, typeof x);

// Par načina kako možemo definirati fiksno vrijeme kako nama odgovara
x = new Date("2022-01-10T10:20:30");
x = new Date("01/10/2022 10:20:30");

console.log(x);

x = x.getTime();
x = x.valueOf();

console.log(x, typeof x);

y = new Date();

// dovhvaćanje i zapisivanje trenutne godine varijablu
x = y.getFullYear();

// dohvaćanje i zapisivanje trenutnog mjeseca u varijablu
x = y.getMonth() + 1;

// dohvaćanje i zapisivanje trenutnog dana u varijablu (nedjelja je 0 i brojimo do subote koja je 6)
x = y.getDay();

// dohvaćanje i zapisivanje trenutnog sata u varijablu
x = y.getHours();

// dohvaćanje i zapisivanje trenutne minute u varijablu
x = y.getMinutes();

// dohvaćanje i zapisivanje trenutnih sekundi u varijablu
x = y.getSeconds();
console.log(x, typeof x);

// Internacionalni način pozivanja datuma (putem API-a) za HR...
x = Intl.DateTimeFormat("hr-HR").format(y);

console.log(x, typeof x);

/* ZADAĆA
Dohvatite div element sa ID-em vrijeme i u njega pomoću Date objekta ispišite trenutno vrijeme na ekranu
*/
