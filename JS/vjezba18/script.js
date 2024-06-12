"use strict";

// PRISTUP RJEŠAVANJU ZADATKA

/* Radimo za kompaniju koja izrađuje pametne termometre. Trebamo izračunati iz liste temperatura amplitude 
vrijednosti u danu. S time da se može dogoditi da umjesto mjerenja u listi bude error. */

/* 1. stvar koju treba razriješiti:
Što je to amplituda? - to je razlika između najviše i najniže temperature.

2. stvar kako izračunati min i max temperaturu u listi. 
Kako će izgledati error. I što napraviti kada naletimo na error.

3. stvar napraviti funkciju koja će izračunati max - min temperatura kako bi dobili i returnali amplitudu iz liste.*/

const temperatura = [-1, 0, 3, 5, "error", 7, 10, 14, 17];

const calcAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 1; i < temp.length; ++i) {
    if (typeof temp[i] !== "number") continue;
    if (temp[i] > max) {
      max = temp[i];
    }
    if (temp[i] < min) {
      min = temp[i];
    }
  }
  console.log(max, min);
  return max - min;
};

const rezultat1 = calcAmplitude([3, 12, 4, 6, 78]);
console.log(rezultat1);

const amplituda = calcAmplitude(temperatura);
console.log(amplituda);

const temperatura2 = [1, 4, 5, "error", 9, 15, "error", 20];

/* const amplituda2 = calcAmplitude(temperatura2); */

// problem je u tome kako izračunati amplitude oba dana zajedno?

const spojenaLista = temperatura.concat(temperatura2);
const amplitudaSpojenihListi = calcAmplitude(spojenaLista);
console.log(amplitudaSpojenihListi);
