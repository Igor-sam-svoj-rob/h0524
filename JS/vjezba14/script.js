"use strict";

// Continue i Break liste

/* Primjer breaka - napravit ćemo for petlju koja ide do npr. 20, ali želimo napraviti prekid izvršenja petlje ako dođe do toga 
da se neki uvjet ispuni. Ako se taj uvjet ispuni, ispisat ćemo nešto i napraviti break petlje.
*/

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("BREAK");
    break;
  } else {
    console.log(i);
  }
}

/* Primjer continuea - napravit ćemo opet for petlju koja ide do 20, ali želimo na određenom mjestu umjesto ispisa onoga što bi
po principu koji smo zadali ispisalo određenu vrijednost, postaviti da se odradi nešto drugo i nakon toga nastavi izvršavanje petlje. */

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("Umjesto 10, napiši deset");
    continue;
  } else {
    console.log(i);
  }
}

const user = [
  "Ivan",
  "Horvat",
  2001,
  "SamSvojRob",
  ["Marko", "Luka", "Stjepan"],
  true,
  false,
  { drzava: "Hrvatska" },
];

// break petlja koja će kada naleti na broj zaustaviti for petlju

for (let i = 0; i <= user.length; i++) {
  if (typeof user[i] === "number") {
    console.log("Zaustavi petlju");
    break;
  } else {
    console.log(user[i]);
  }
}

// continue petlja koja će ispisati nešto umjesto broja kada naleti na broj

for (let i = 0; i <= user.length; i++) {
  if (typeof user[i] === "number") {
    console.log("Produži bez broja");
    continue;
  } else {
    console.log(user[i]);
  }
}

// Ispišite članove liste od zadnjeg prema prvom
