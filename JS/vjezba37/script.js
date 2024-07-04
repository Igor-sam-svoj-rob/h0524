"use strict";

/* Do sad smo radili sa .then metodom kako bi dohvatili informacije u asinkronim uvjetima, po slijedećem principu. */

const obecanje = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ ime: "Marko", godine: 30 });
  }, 1000);
});

obecanje.then((data) => console.log(data));

/* Idemo sada vidjeti kako bi ovo napisali sa Async/Await metodom. Async/Await metoda je naravno funkcija. */

async function getPromise() {
  const response = await obecanje;
  console.log(response);
}

getPromise();

/* Kod Async/Await metode prvo definiramo asinkronu funkciju koja će u response spremiti (sa prefixom await) podatke. Nakon toga te podatke
možemo koristiti za našu aplikaciju. */

async function dohvatiUsera() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

dohvatiUsera();

// Zadatak - napišite identičnu funkciju koristeći .then metodu

function dohvatiUsera1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Greška prilikom dohvaćanja korisnika:", error);
    });
}

dohvatiUsera1();

// Arrow funkcija sa Async/Await metodom

const dohvatiPostove = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};

dohvatiPostove();

// Kako rješavati errore u Async/Await funkcijama

let imena = [];

const useri = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    imena = data.map((ime) => ime.name);
    console.log(imena);
  } catch (error) {
    console.log(error);
  }
};

useri();

console.log(imena);

/* S obzirom na asinkronu narav imena nam neće biti dostupna na sinkronom globalnom opsegu (scopeu), ali recimo možemo dohvatiti sa
console logom te podatke koristeći asinkronu IIFE funkciju. */

(async () => {
  await useri();
  console.log(imena);
})();

// Finalni kod

let users = [];

const podaciAPI = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data.map((ime) => ime.name); // vrati listu kao return
  } catch (error) {
    console.log(error);
    return []; // vrati praznu listu u slučaju errora
  }
};

const ispisPodataka = async () => {
  users = await podaciAPI(); // spremanje liste u varijablu users
  console.log(users);
};

ispisPodataka();
