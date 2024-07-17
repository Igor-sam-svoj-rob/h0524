"use strict";

/* Svaki objekt u JS ima ugrađeno svojstvo koje se naziva prototipom.
Prototip je u biti objekt/osnovni prototip od kojeg svi drugi objekti naslijeđuju metode i svojstva. */

const user = {
  ime: "Igor",
};

console.log(user);
console.log(user.__proto__);

console.log(user.__proto__ === Object.prototype);

// Idemo se podsjetiti constructor funkcije

/* function korisnik(ime) {
  this.ime = ime;
  this.login = function () {
    console.log(`${this.ime} se ulogirao.`);
  };
}

const korisnik1 = new korisnik("Igor");
const korisnik2 = new korisnik("Marko");

console.log(korisnik1, korisnik2); */

// 2. korak - idemo izvući ovu metodu van iz ove constructor funkcije i od nje napraviti objektnu metodu na našem Object.prototypeu

function korisnik(ime) {
  this.ime = ime;
}

korisnik.prototype.login = function () {
  console.log(`${this.ime} se ulogirao.`);
};

const korisnik1 = new korisnik("Igor");
const korisnik2 = new korisnik("Marko");

console.log(korisnik1, korisnik2);

console.log(korisnik1.__proto__ === korisnik2.__proto__);

// idemo još vidjeti kako izgleda prototype naslijeđivanje

function auto() {
  this.model = "";
  this.getModel = function () {
    return this.model;
  };
}

function bmw() {
  this.model = "M5";
  this.potrosnja = function () {
    console.log("Potrošnja je 9l/100km");
  };
}

bmw.prototype = new auto();
bmw.prototype.constructor = bmw;

const objekt = new bmw();
console.log(objekt.getModel());
console.log(objekt);
