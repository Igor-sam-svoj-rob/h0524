"use strict";

const prijatelji = ["Stjepan", "Ivan", "Marko"];

// Zadatak 1: dodajte Luku na početak liste i Matiju na kraj liste.

prijatelji.unshift("Luka");
prijatelji.push("Matija");

console.log(prijatelji);

// Zadatak 2: maknite prvog i zadnjeg člana liste

prijatelji.shift();
prijatelji.pop();

console.log(prijatelji);

/* 
indexOf nam može također poslužiti da provjerimo postoji li netko sa tom vrijednosti u listi.
Ako tražene vrijednosti nema, rezultat će uvijek biti -1, inače će biti indexna vrijednost traženog pojma.
 */
console.log(prijatelji.indexOf("Josip"));
console.log(prijatelji.indexOf("Stjepan"));

/* includes nam u biti treba poslužiti za provjeru postoji li netko sa traženom vrijednosti u listi.
Rezultat će uvijek biti Boolean vrijednost. */

console.log(prijatelji.includes("Josip"));
console.log(prijatelji.includes("Stjepan"));

if (prijatelji.includes("Stjepan")) {
  console.log("Imate prijatelja po imenu Stjepan");
}

if (prijatelji.indexOf("Josip") == -1) {
  console.log("Nemate prijatelja po imenu Josip");
}

// NAČINI SPAJANJA LISTI

// 1 metoda - Nestanje listi (postavljanje liste unutar liste)

let x;

const voce = ["jabuke", "kruške", "trešnje"];
const bobice = ["kupine", "borovnice", "maline"];

/* voce.push(bobice);

console.log(voce);
console.log(voce[3][2]); */

x = [voce, bobice];
const novaListaVoca = x.flat();
console.log(novaListaVoca);

// 2 metoda - Konkateniranje listi, spajanje listi u novu listu

x = bobice.concat(voce);

console.log(x);

// 3 metoda - Spread operator : služi za expandiranje listi/objekata/stringova u jednu varijablu.

const brojevi = [1, 2, 3];
const noviBrojevi = [0, ...brojevi, 4, 5, 6];
console.log(noviBrojevi);

const svoVoce = [...voce, ...bobice];
console.log(svoVoce);

// Par statičnih metoda listi

let y;

y = Array.isArray(voce); // koristeći Array i metodu isArray na njoj, možemo provjeriti da li je nešto lista
console.log(y);

y = Array.from("12345"); // koristeći Array i from metodu, kreiramo listu pojedinačnih članova iz stringa
console.log(y);

const a = 1;
const b = 2;
const c = 3;

y = Array.of(a, b, c); // koristeći Array i of metodu, kreiramo novu listu od varijabli
console.log(y);
