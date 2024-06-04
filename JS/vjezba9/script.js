"use strict";

const frend1 = "Ivan";
const frend2 = "Josip";
const frend3 = "Petar";

// Literalni način definiranja liste
const prijatelji = ["Ivan", "Josip", "Petar"];

// Način definiranja liste koristeći "new" ključnu JS riječ
const godine = new Array(2014, 2003, 2020, 2012);

console.log(prijatelji, godine);

// Kada želimo dohvatiti određenog člana iz liste, onda ga pomoću indexnog broja u uglatim zagradama nađemo.
console.log(prijatelji[2]);
// Kada želimo znati koliko članova liste ima, možemo to saznati koristeći length
console.log(prijatelji.length);
// Kada želimo npr. dobiti zadnjeg člana liste onda to možemo napraviti na slijedeći način:
console.log(prijatelji[prijatelji.length - 1]);

/* Varijabla definirana sa const se ne može mijenjati na primitivnim vrijednostima.
Lista nije primitivna vrijednost, ona je objektna vrijednost, stoga se njena vrijednost zapisuje u HEAP memoriji
dok se u dijelu memorije gdje se zapisuju varijable i primitivne vrijednost nalazi samo adresa podataka te liste
u HEAP memoriji. Stoga možemo mijenjati vrijednosti članova liste ali ne možemo pod istim imenom varijable
definirati novu listu... */
prijatelji[2] = "Marko";
console.log(prijatelji);

prijatelji.unshift("Slavko"); // unshift metodom dodajemo novog člana na početak liste
prijatelji.push("Hrvoje"); // push metodom dodajemo novog člana na kraj liste
prijatelji.shift(); // shift metodom mičemo prvog člana liste
prijatelji.pop(); // pop metodom mičemo zadnjeg člana liste
prijatelji.reverse(); // mijenjamo slijed liste

console.log(prijatelji);

// metode lista koje se odnose na brojevne liste
let x;

x = godine.includes(2005); // Boolean provjera imamo li određenu vrijednost u listi
x = godine.indexOf(2020); // Provjera na kojem indexnom broju u listi se nalazi tražena vrijednost
x = godine.slice(0, 2); // slice metoda nam prikazuje dio liste (od/do po indexu)
x = godine.splice(0, 1); // splice metodom možemo iz postojeće liste izrezati i spremiti vrijednosti u novu listu
console.log(x, godine);

const izracunGodina = function (godPoznanstva) {
  return 2024 - godPoznanstva;
};

const starostPoznanstva = [
  izracunGodina(godine[0]),
  izracunGodina(godine[1]),
  izracunGodina(godine[godine.length - 1]),
];

console.log(starostPoznanstva);
