"use strict";

// REDUCE METODA

/* 
Reduce metoda izvršava tzv. "reducer" funkciju kojoj je svrha da sve članove liste svede i zapiše u jednu vrijednost.
Kako bi to lakše shvatili uzet ćemo primjer košarice proizvoda. Svaki proizvod u našoj košarici ima svoju vrijednost,
a nas zanima npr. samo suma svih tih stavki (bez obzira koliko ih ima).
*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* const suma = lista.reduce(
  (prijasnjaVrijednost, sadasnjaVrijednost) => prijasnjaVrijednost + sadasnjaVrijednost,
  0
);
console.log(suma); */

const pocetnaVrijednost = 0;
const suma = lista.reduce((prije, sad) => prije + sad, pocetnaVrijednost);
console.log(suma);

// Zadatak 1 - koristeći for petlju, napravite isto što i ova reduce metoda

const kosarica = [
  { id: 1, proizvod: "kruh", cijena: 1.5 },
  { id: 2, proizvod: "mlijeko", cijena: 1.9 },
  { id: 3, proizvod: "salama", cijena: 6 },
  { id: 4, proizvod: "majoneza", cijena: 3 },
  { id: 5, proizvod: "čips", cijena: 3 },
  { id: 6, proizvod: "sir", cijena: 5 },
];

// Koristeći reduce metodu, izračunajte ukupni zbroj cijena u listi kosarica

const total = kosarica.reduce((prije, sad) => prije + sad.cijena, 0);

console.log(total);
