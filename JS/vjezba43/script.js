"use strict";

// Idemo kreirati 2 funkcije - jednu funkciju pozvati kao parametar druge funkcije

const a = (fn) => {
  fn();
};

const b = () => {
  console.log("Hello World");
};

a(b);

/* Funkcija koja kao parametar dobiva drugu funkciju je HOF (Higher Order Function) - funkcija višeg reda. A funkcija koju smo proslijedili
je u ovom slučaju callback funkcija. */

// Idemo složiti 2 funkcije za množenje i zbrajanje...

/* const brojevi = [10, 20, 30, 40];

const mnozenje = () => {
  const umnozak = brojevi.map((broj) => broj * 2);
  return umnozak;
};

const zbrajanje = () => {
  const suma = brojevi.map((broj) => broj + 1);
  return suma;
};

console.log(mnozenje());
console.log(zbrajanje()); */

// Idemo izvući logiku koja nije ista u ove 2 funkcije i presložiti funkcije na način da ne dupliramo identičan kod

/* const brojevi = [10, 20, 30, 40];

const mnozenje = (x) => {
  return x * 2;
};

const zbrajanje = (x) => {
  return x + 1;
};

const umnozak = () => {
  const y = brojevi.map((broj) => mnozenje(broj));
  return y;
};

const suma = () => {
  const y = brojevi.map((broj) => zbrajanje(broj));
  return y;
};

console.log(umnozak());
console.log(suma()); */

// Idemo kreirati HOF

/* const brojevi = [10, 20, 30, 40];

const mnozenje = (x) => {
  return x * 2;
};

const zbrajanje = (x) => {
  return x + 1;
};

const izracun = (fn) => {
  const rezultat = brojevi.map((broj) => fn(broj));
  return rezultat;
};

console.log(izracun(mnozenje));
console.log(izracun(zbrajanje)); */

// Idemo napraviti pomoću HOF-a custom metodu liste

const brojevi = [10, 20, 30, 40];
const brojevi2 = [5, 15, 25, 35];

const mnozenje = (x) => {
  return x * 2;
};

const zbrajanje = (x) => {
  return x + 1;
};

Array.prototype.izracun = function (fn) {
  const rezultat = this.map((broj) => fn(broj));
  return rezultat;
};

console.log(brojevi.izracun(mnozenje));
console.log(brojevi2.izracun(mnozenje));
console.log(brojevi.izracun(zbrajanje));
