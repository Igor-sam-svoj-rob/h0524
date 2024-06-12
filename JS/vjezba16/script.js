"use strict";

const brojevi = [10, 20, 30, 40, 50];

// FOR EACH METODA

/* 
    ForEach metoda prolazi listu član po član (svaki član ulazi u funkciju kao parametar) i na njemu radi
    određenu izmjenu. Može adaptirati listu i spremiti imjenjene članove u neku novu listu koju složimo
    za input tih adaptiranih članova.
*/
brojevi.forEach(function (pojedinacni_clan_liste, redno_mjesto_u_listi, cijela_ista) {
  console.log(pojedinacni_clan_liste);
  console.log(redno_mjesto_u_listi);
  console.log(cijela_ista);
});

// Ovo možemo napisati kao arrow funkciju

brojevi.forEach((broj, index) => console.log(broj, index));

// primjer - kako koristeći arrow funkciju ispisati sve brojeve, ključeve i cijelu listu koristeći forEach metodu

brojevi.forEach((broj, index, cijela_lista) => {
  console.log(broj);
  console.log(index);
  console.log(cijela_lista);
});

// Ajmo vidjeti primjer sa listom objekata

const useri = [
  {
    ime: "Ivan",
    prezime: "Horvat",
    godine: 30,
  },
  {
    ime: "Maja",
    prezime: "Majić",
    godine: 31,
  },
  {
    ime: "Jura",
    prezime: "Jurić",
    godine: 32,
  },
];

useri.forEach((user) => {
  console.log(user);
  console.log(user.ime);
  console.log(user.prezime);
});

// FILTER METODA

/* 
  Filter metoda za za razliku od forEach metode vraća određenu vrijednost. Ta vrijednost koja se vraća je 
  kopija DIJELA liste filtrirana na način da uključuje u tu novu listu samo one elemente koji zadovolje
  tražene parametre filtera.
*/

const rijeci = ["prozor", "apartman", "autocesta", "lopata", "zvrk", "cjepanica"];

const rezultat = rijeci.filter((rijec) => rijec.length > 6);

console.log(rijeci);
console.log(rezultat);

const filterBrojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parniBrojevi = filterBrojevi.filter((broj) => broj % 2 === 0);
/* % modulo - će napravit true/false provjeru da li je varijabla dijeljiva sa 2. Modulo u biti provjerava postoji li
 ostatak kada se podatak podijeli sa zadanim brojem. */
console.log(parniBrojevi);

// Ovo isto možemo napisati koristeći forEach metodu

const parniBrojevi2 = [];

filterBrojevi.forEach((broj) => {
  if (broj % 2 === 0) {
    parniBrojevi2.push(broj);
  }
});

console.log(parniBrojevi2);

/* Koristeći neku od ove 2 metode, rješite sljedeći primjer. 
Iz postojeće liste objekata izvadite limuzine u novu listu */

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godProizvodnje: 2014 },
  { ime: "Ford", kategorija: "karavan", godProizvodnje: 2016 },
  { ime: "BMW", kategorija: "coupe", godProizvodnje: 2018 },
  { ime: "Volvo", kategorija: "limuzina", godProizvodnje: 2014 },
  { ime: "Range Rover", kategorija: "jeep", godProizvodnje: 2016 },
  { ime: "Peugeot", kategorija: "limuzina", godProizvodnje: 2013 },
];

const limuzine = auti.filter((auto) => auto.kategorija === "limuzina");
console.log(limuzine);

// podzadatak: kako bi napisali funkciju koja će isfiltrirati aute proizvodene između 2015 i 2017?

const godProizvodnje = auti.filter(
  (auto) => auto.godProizvodnje >= 2015 && auto.godProizvodnje <= 2017
);

console.log(godProizvodnje);

// MAP METODA

/* 
Map metoda može kreirati novu listu populiranu rezultatima koje nam proizvede funkija na svakom elementu liste.
Drugim riječima na postojećoj listi ćemo odraditi određene operacije i kao rezultat ćemo dobiti novu listu.
*/

const lista = [1, 5, 6, 7, 9, 13];

const umnozak = lista.map((broj) => broj * 2);

console.log(umnozak);

// idemo isto ovo napraviti forEach metodom

const dupli = [];

lista.forEach((broj) => {
  dupli.push(broj * 2);
});

console.log(dupli);

// Koristeći map metodu, idemo kreirati iz liste auta, listu marki auta

const marka = auti.map((auto) => auto.ime);

console.log(marka);

/* Ajmo sad probat koristeći map metodu kreirati objekt koji će imati samo marku i kategoriju.
Podzadatak : dodajte u novu listu stavku starost umjesto god proizvodnje.
*/

const markaKat = auti.map((auto) => {
  return {
    ime: auto.ime,
    kategorija: auto.kategorija,
    starost: 2024 - auto.godProizvodnje,
  };
});

console.log(markaKat);

// Možemo i povezivati metode listi u tzv. lanac (chain methods).
// Npr. napravit ćemo korijen od članova liste i nakon toga pomnožiti sa 2.

const duplo = lista.map((broj) => Math.sqrt(broj)).map((broj) => broj * 2);

console.log(duplo);

// Možemo kombinirati i različite metode listi u lanac
// Npr. iz liste brojeva naći parne brojeve i nakon toga ih pomnožiti sa 2

const parni = filterBrojevi.filter((broj) => broj % 2 === 0).map((broj) => broj * 2);
console.log(parni);
