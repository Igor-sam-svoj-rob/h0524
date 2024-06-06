"use strict";

// Objektne metode - funkcije zapisane u objektu

const user = {
  ime: "Ivan",
  prezime: "Horvat",
  godRodjenja: 2001,
  zanimanje: "Kuhar",
  prijatelji: ["Marko", "Stjepan", "Ivo"],
  vozackaDozvola: true,
  starost() {
    this.dob = 2024 - this.godRodjenja;
    return this.dob;
  },
  login() {
    console.log(this.ime, "je logiran");
  },
  logout() {
    console.log(this.ime, "se odlogirao");
  },
  zadatak() {
    return `${this.ime} je ${this.starost()}-godišnji ${this.zanimanje} i ${
      this.vozackaDozvola ? "ima" : "nema"
    } vozačku dozvolu.`;
  },
};

//dot notacija
console.log(user.starost());
//bracket notacija
console.log(user["starost"]());

user.login();
user.logout();

console.log(user.zadatak());

/* VAŽNO - dok god ne pozovemo objektnu metod-funkciju vrijednost dob ne postoji. Tek kada se odvrti funkcija starost, kreirat će se novi
key-value par u objektu. */

// Destrukturiranje objekta

const ime = "Igor";
const prezime = "Jevremović";
const zanimanje = "Predavač";

const osoba = {
  ime,
  prezime,
  zanimanje,
};

console.log(osoba);

// Možemo destrukturirati liste i objekte

// 1 destrukturiranje liste

const brojevi = [1, 2, 3, 4];

const [num1, , , num2] = brojevi;

console.log(num1, num2, brojevi);

// 2 destrukturiranje objekta

const task = {
  id: 1,
  zadatak: "Kupi namirnice",
  adresa: {
    ulica: "Trg Ivana Horvata",
    grad: "Biograd",
  },
};

// Jednostavan način spremanja podatka iz objekta u varijablu
const noviId = task.id;

console.log(noviId);

// Destrukturirajući način spremanja više podataka odjednom iz objekta u varijable
const { id, zadatak, adresa } = task;

console.log(id, zadatak, adresa);

// Idemo napraviti rješenje sa preimenovanjem podatka i spremanje podobjektnog podatka u varijablu

const {
  id: taskID,
  adresa: { ulica: taskUlica },
} = task;

console.log(taskID, taskUlica);
