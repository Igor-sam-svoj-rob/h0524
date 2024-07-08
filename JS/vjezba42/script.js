"use strict";

// Idemo napisati funkciju unutar funkcije

function vanjskaFunkcija() {
  function pomnoziFunkcija(broj) {
    return broj * 2;
  }
  return pomnoziFunkcija;
}

const pomnozi = vanjskaFunkcija();
console.log(pomnozi);

console.log(pomnozi(2));

// idemo napraviti malo kompleksniji primjer
function vanjskaFunkcija2() {
  let brojac = 0;
  function suma() {
    brojac++;
    console.log(brojac);
  }
  return suma;
}

const suma = vanjskaFunkcija2();
suma();
suma();
suma();
suma();
suma();

// još jedan primjer closurea

function dodajVanjska(vanjskiBroj) {
  function dodajUnutarnja(unutarnjiBroj) {
    return vanjskiBroj + unutarnjiBroj;
  }
  return dodajUnutarnja;
}

const zbroj = dodajVanjska(5);
console.log(zbroj(1));

const zbroj1 = dodajVanjska(10);
console.log(zbroj1(5));

// CLOSURE - funkcije sa sačuvanim podacima

// Praktičan primjer sa buttonima

function updateKlik() {
  let klikovi = {};
  let button;

  function reportKlik(klik) {
    button = klik.id;
    klikovi[button] = klikovi[button] + 1 || 1;
    console.log(klikovi);
  }
  return reportKlik;
}

const report = updateKlik();

document.querySelectorAll(".klikovi").forEach((x) => {
  x.addEventListener("click", (event) => {
    report(event.target);
  });
});

// Idemo kreirati funkciju koja će imati 2 podfunkcije....

function covjek(x) {
  const ime = x;
  function pozdrav() {
    console.log(`Pozz, ja sam ${ime}`);
  }
  function kakoSi() {
    console.log(`Kako se osjećaš ${ime}`);
  }

  return { pozdrav, kakoSi };
}

const osoba1 = covjek("Igor");
const osoba2 = covjek("Marko");

osoba2.kakoSi();

// Idemo napraviti još jedan matematički primjer...

function roditelj() {
  let x = 1;
  let y = 2;
  console.log(x, y);

  function dijete() {
    console.log((x += 2));
    console.log((y += 4));
  }
  return dijete;
}

const zbrajanje = roditelj();
zbrajanje();
zbrajanje();
zbrajanje();
zbrajanje();
