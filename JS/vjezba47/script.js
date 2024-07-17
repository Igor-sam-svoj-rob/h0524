"use strict";

class Zivotinja {
  constructor(ime) {
    this.ime = ime;
  }
  kljun() {
    console.log("Ima crni kljun");
  }
}

const zivina1 = new Zivotinja("Svraka");
console.log(zivina1);

class Ptica extends Zivotinja {
  constructor(ime) {
    super(ime);
  }
  kljun() {
    super.kljun(); // preuzeto iz nadklase
    console.log("Ima žuti kljun");
  }
}

const zivina2 = new Ptica("Papiga");
console.log(zivina2);
zivina1.kljun();
zivina2.kljun();
