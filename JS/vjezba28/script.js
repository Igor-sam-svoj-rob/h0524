"use strict";

/* 
JSON (Javascript Object Notation) - standardni format razmjene podataka temeljen na objektnoj sintaksi JS-e.
API (Application Programming Interface) - omogućava nam komunikaciju sa serverom/drugim računalom.
*/

const post = {
  id: 1,
  naslov: "Prvi post",
  sadrzaj: "Ovo je sadrzaj posta",
  autor: "Igor",
};

const jsonFile = JSON.stringify(post);
console.log(jsonFile);

const objektFile = JSON.parse(jsonFile);
console.log(objektFile);

// setTimeout - asinkrona funkcija koja prvo definira funkciju koja se mora izvršiti a onda definira timer nakon koliko ms se ona mora izvršiti

setTimeout(() => {
  console.log("Pozz iz setTimeouta");
}, 0);

console.log("Pozz izvan setTimeouta");

// primjer hoistinga i razlike između obične i arrow funkcije

/* setTimeout(promijeniText, 1000);

function promijeniText() {
  document.getElementById("naslov").textContent = "Pozz iz callback funkcije";
}

const promijeniText = () => {
  document.getElementById("naslov").textContent = "Pozz iz callback funkcije";
};

setTimeout(promijeniText, 1000);
 */

// clearTimeout služi tome da spriječi izvršavanje setTimeout funkcije

const promijeniText = () => {
  document.getElementById("naslov").textContent = "Pozz iz callback funkcije";
};

const promjena = setTimeout(promijeniText, 1000);

document.getElementById("stop").addEventListener("click", () => {
  clearTimeout(promjena);
  console.log("Otkazana promjena");
});

// setInterval je naravno asinkrona funkcija koja će izvršavati kod konstatno umjesto jednom

/* const bojaCallback = () => {
  console.log("boja");
};

const interval = setInterval(bojaCallback, 1000);

document.getElementById("zaustavi").addEventListener("click", () => {
  clearInterval(interval);
}); */

/* ------------------------------------------------------ */

// primjer setInterval

let intervalBoja;

let promijeniBoju = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

document.getElementById("pokreni").addEventListener("click", () => {
  if (!intervalBoja) {
    intervalBoja = setInterval(promijeniBoju, 1000);
  }
});

document.getElementById("zaustavi").addEventListener("click", () => {
  clearInterval(intervalBoja);
  intervalBoja = undefined;
});
