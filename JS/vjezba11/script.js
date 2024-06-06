"use strict";

// Primjer kako bi koristeći listu definirali nekakvog usera i njegove podatke
const user = ["Ivan", "Horvat", 2024 - 2000, "Poštar", ["Marko", "Marija", "Ivana"]];

console.log(user);

// 1 način definiranja objekta - literalno. Koristimo vitičaste zagrade.

/* Najveća razlika između liste i objekta je što je za pozivanje objekta nebitan raspored i sadržaj unutar 
objekta ima ključeve sa pripadajućom vrijednosti. Stvari iz liste pozivamo indexnim brojem, dok kod objekata
zovemo po ključu kojeg smo definirali za određenu vrijednost. Objektni podaci će se poredati po abecedi ključa. */
const objektniUser = {
  firstName: "Ivan",
  secondName: "Horvat",
  godine: 2024 - 2000,
  zanimanje: "Poštar",
  listaPrijatelja: ["Marko", "Marija", "Ivana"],
};

console.log(objektniUser);

// Načini dohvaćanja vrijednosti objekta - dot notacija i bracket notacija

// 1 dot notacija

console.log(objektniUser.zanimanje);
console.log(objektniUser.listaPrijatelja[0]);

// 2 bracket notacija
console.log(objektniUser["zanimanje"]);

// Dodavanje novih elemenata u objekt
objektniUser.lokacija = "Hrvatska";
console.log(objektniUser);

// Mijenjanje vrijednosti objekta pomoću ključa
objektniUser.zanimanje = "Prodavač";

console.log(objektniUser);

// Primjer razlike između bracket i dot notacije

// dot notacija - ispis prezimena
console.log(objektniUser.secondName);

// bracket notacija - ispis prezimena
console.log(objektniUser["secondName"]);

const nameKey = "Name";

console.log(objektniUser["first" + nameKey]);
console.log(objektniUser["second" + nameKey]);

/* const upitnik = prompt(
  "Što Vas zanima o korisniku? Izaberi između firstName, secondName, godine, zanimanje..."
); */

// ovo ne možemo izvući koristeći dot notaciju
console.log(objektniUser.upitnik);

// bracket notacija ovo može ispisati jer umjesto vrijednosti varijable ubacuje string koji smo upisali i samim time možemo dohvatiti info.
/* console.log(objektniUser[upitnik]); */

let osoba1 = {
  ime: "Igor",
  prezime: "Jevremović",
  zanimanje: "predavač",
  listaPrijatelja: ["Marko", "Luka", "Josip"],
};

const osoba2 = {
  ...osoba1,
  ime: "Ivan",
  prezime: "Horvat",
};

console.log(osoba1, osoba2);
osoba1.prezime = "Ivić";
console.log(osoba1, osoba2);

/* Ako su podaci višeslojeviti, ovaj pristup će samo od top lvl podataka napraviti kopiju, ali ako u objektu postoji ugniježđeni objekt i
dalje će to biti samo referenca/adresa na stari objekt u heap memoriji... */
osoba1.listaPrijatelja.shift();
console.log(osoba1, osoba2);

// još jedan jednostavniji primjer ovog problema

const stariObj = {
  a: { b: 10 },
  c: 2,
};

const noviObj = {
  ...stariObj,
};

stariObj.c = 5;
stariObj.a.b = 5;

console.log(stariObj, noviObj);

// Deep copy objekta se može raditi od 2022 pomoću structuredClone metode

const oldObj = {
  a: { b: 10 },
  c: 2,
};

const newObj = structuredClone(oldObj);

oldObj.c = 5;
oldObj.a.b = 5;
newObj.vozackaDozvola = true;

console.log(oldObj, newObj);
