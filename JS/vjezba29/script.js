"use strict";

// do sada smo ovako koristili callback funkcije - funkcije koje se pokreću na neki event
const izmjena = (e) => {
  e.target.classList.toggle("crvena");
};

document.querySelector("button").addEventListener("click", izmjena);

// idemo napraviti simulaciju API poziva

const imena = [
  { ime: "Ivan", prezime: "Horvat" },
  { ime: "Jura", prezime: "Jurić" },
];

// Idemo kreirati funkciju koja će ispisati imena i prezimena objekata iz liste imena u unutar div elementa u div-u sa ID-em imena

const kreirajIme = (ime, cb) => {
  setTimeout(() => {
    imena.push(ime);
    cb();
  }, 2000);
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((person) => {
      const div = document.createElement("div");
      div.innerHTML = `${person.ime} ${person.prezime}`;
      document.getElementById("imena").appendChild(div);
    });
  }, 1000);
};

kreirajIme({ ime: "Maja", prezime: "Majić" }, getImena);
