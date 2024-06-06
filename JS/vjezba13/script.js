"use strict";

console.log("gol 1 ⚽");
console.log("gol 2 ⚽");
console.log("gol 3 ⚽");
console.log("gol 4 ⚽");
console.log("gol 5 ⚽");
console.log("gol 6 ⚽");
console.log("gol 7 ⚽");
console.log("gol 8 ⚽");
console.log("gol 9 ⚽");
console.log("gol 10 ⚽");

/* Rješavanje ovakvog problema ćemo skoro uvijek raditi sa for petljom, ali možemo ju napraviti i na druge načine.
Prvi način je rekurzija iliti ponavljanje izvođenja dok se određeni ovjet ne ispuni. 
Kako funkcionira rekurzija? :
1. Definiramo uvjet kada se rekurzija završava.
2. Definiramo operaciju koja će samu sebe na kraju pozivati iznova dok se uvjet iz prvog koraka ne ispuni. */

function golovi(gol) {
  // 1. uvjet
  if (gol > 10) return;
  // 2 operacija - rekurzivni poziv
  else console.log(`gol ${gol} ⚽`);
  return golovi(gol + 1);
}

golovi(1);

/* 
For petlja se sastoji od 4 dijela:

1. postavljamo inicijalnu vrijednost
2. postavljamo uvjet koji se mora ispuniti da bi petlja završila (ili dok ne postane false)
3. postavlja se način na koji ćemo mijenjati inicijalnu vrijednost kroz svaku iteraciju petlje dok ne ispunimo uvjete iz druge stavke.
4. operacija/kod koji se će odvrtiti pri svakoj iteraciji petlje.
*/

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++) {
  console.log(`gol ${ponavljanje} ⚽`);
}

// for petlja na klasičan/starinski način

const predmeti = ["stol", "stolica", "stoljnjak", "vaza"];

for (let i = 0; i < predmeti.length; i++) {
  console.log(predmeti[i]);
}

// noviji način je korištenjem of metode. Na ovaj način definiramo da je npr. predmet jedan član liste predmeti i da prođemo kroz sve članove

for (const predmet of predmeti) {
  console.log(predmet);
}

const korisnici = [{ ime: "Igor" }, { ime: "Ivana" }, { ime: "Iva" }, { ime: "Ivan" }];

for (const korisnik of korisnici) {
  console.log(korisnik.ime);
}

// možemo čak i kroz String podatak proći

const rijec = "Algebra";

for (const slovo of rijec) {
  console.log(slovo);
}

// prolazak kroz objekt

const brojevi = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

for (const broj of Object.values(brojevi)) {
  console.log(broj);
}

/* Za prolazak kroz objekt postoji i bolja "in" metoda. Ona funkcionira na način da prvo izbacuje po glavnoj varijabli ključ
(ako je objekt onda ključ, ako je lista onda je indexni broj člana liste), a vrijednost dobijemo pozivajući list i ključ unutar [] zagrada */

for (const kljuc in brojevi) {
  console.log(kljuc, brojevi[kljuc]);
}

// primjeri...

// Primjer 1 : Recimo da imamo listu i želimo znati kakve vrste podataka imamo u toj listi

const igorLista = [
  "Igor",
  "Jevremović",
  10,
  "Predavač",
  ["Marko", "Ivan", "Luka"],
  true,
  {
    adresa: "Kutina",
    država: "Hrvatska",
  },
];

const tipovi = [];

for (let i = 0; i < igorLista.length; i++) {
  tipovi[i] = typeof igorLista[i];
}

console.log(tipovi);

// Primjer 2 : Ugniježđena for petlja

for (let i = 1; i <= 2; i++) {
  console.log(`broj ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

/* Zadatak. Napravite listu imena (do 5 komada), neka jedno ime bude vaše ime. Napravite for petlju koja će za vaše ime
ispisati "Ime je super", dok će ostala imena samo ispisati...
*/

const imena = ["Ivan", "Luka", "Stjepan", "Hrvoje", "Igor"];

for (let i = 0; i < imena.length; i++) {
  if (imena[i] === "Igor") {
    console.log(`${imena[i]} je super`);
  } else {
    console.log(imena[i]);
  }
}
