"use strict";

/* 
Getters and Setters

Getteri nam služe da dohvatimo svojstvo iz klase
Setteri nam služe da promijenimo svojstvo iz klase (na način da mijenjamo svojstvo iz klase van klase)

Imamo i statične metode u klasama.
*/

class User {
  constructor(id, ime, prezime) {
    this.id = id;
    this.ime = ime;
    this.prezime = prezime;
  }
  static provjera(x, y) {
    return x.ime === y.ime && x.prezime === y.prezime;
  }
  get punoIme() {
    return `${this.ime} ${this.prezime}`;
  }
  set punoIme(input) {
    const razdvoji = input.split(" ");
    console.log(razdvoji);
    this.ime = razdvoji[0];
    this.prezime = razdvoji[1];
  }
}

const user1 = new User(1, "Maja", "Majić");
const user2 = new User(2, "Ivana", "Ivić");
user1.punoIme = "Ivan Ivić";
console.log(user1.punoIme);
console.log(User.provjera(user1, user2));
