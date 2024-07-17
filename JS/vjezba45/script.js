"use strict";

const user1 = {
  id: 1,
  ime: "Igor",
  povecaj() {
    this.id++;
  },
};

console.log(user1);

user1.povecaj();
console.log(user1);

// drugi način kreiranja objekta

const user2 = {};

user2.id = 2;
user2.ime = "Ivan";
user2.povecaj = function () {
  this.id++;
};

user2.povecaj();
console.log(user2);

// treći način kreiranja objekta

const user3 = Object.create(null);

user3.id = 3;
user3.ime = "Maja";
user3.povecaj = function () {
  this.id++;
};

// Idemo napraviti drukčiji način/pristup kreiranju objekata

/* function kreirajUsera(id, ime) {
  const korisnik = Object.create(blueprint);
  korisnik.id = id;
  korisnik.ime = ime;
  return korisnik;
}

const blueprint = {
  povecaj() {
    this.id++;
  },
  login() {
    console.log(`${this.ime} se logirao`);
  },
  logout() {
    console.log(`${this.ime} se odlogirao`);
  },
};

const user4 = kreirajUsera(4, "Iva");
const user5 = kreirajUsera(5, "Josip");

console.log(user4, user5); */

/* 
Zašto ne bi, npr. umjesto da moramo kreirati novog usera svaki put i onda returnat tog usera, kreirali objekt unutar naše funkcije,
kreirali id i ime a funkciju pretvoriti u constructor funkciju i metode ubaciti pomoću prototype objekta koji je naravno dostupan svakoj
funkciji jer se nalazi u JS engineu. I onda u biti unutar tog prototipa definirati objektne metode.
*/

/* function kreirajUsera(id, ime) {
  this.id = id;
  this.ime = ime;
}

kreirajUsera.prototype.povecaj = function () {
  this.id++;
};

kreirajUsera.prototype.login = function () {
  console.log(`${this.ime} se logirao`);
};

kreirajUsera.prototype.logout = function () {
  console.log(`${this.ime} se odlogirao`);
};

const user4 = new kreirajUsera(4, "Iva");
const user5 = new kreirajUsera(5, "Josip");

console.log(user4, user5); */

// Idemo ovo pretvoriti u klasu...

/* class KreirajUsera {
  constructor(id, ime) {
    this.id = id;
    this.ime = ime;
  }
  povecaj() {
    this.id++;
    return this;
  }
  login() {
    console.log(`${this.ime} se logirao`);
    return this;
  }
  logout() {
    console.log(`${this.ime} se odlogirao`);
    return this;
  }
}

const user4 = new KreirajUsera(4, "Iva");
const user5 = new KreirajUsera(5, "Josip");

user4.povecaj().login().logout();
console.log(user4, user5); */

// Nasljeđivanje u klasama

class KreirajUsera {
  constructor(id, ime) {
    this.id = id;
    this.ime = ime;
  }
  povecaj() {
    this.id++;
    return this;
  }
  login() {
    console.log(`${this.ime} se logirao`);
    return this;
  }
  logout() {
    console.log(`${this.ime} se odlogirao`);
    return this;
  }
}

const user4 = new KreirajUsera(4, "Iva");
const user5 = new KreirajUsera(5, "Josip");

let listaUsera = [];
listaUsera.push(user1, user2, user3, user4, user5);

class Admin extends KreirajUsera {
  obrisiUsera(user) {
    listaUsera = listaUsera.filter((userLista) => {
      return userLista.ime != user.ime;
    });
  }
}

const admin = new Admin(6, "Admin");

admin.obrisiUsera(user5);

console.log(listaUsera);
