"use strict";

/* Napisat ćemo IIFE ("IFI") - Immediately Invoked Function Expression - funkcija koja će se izvršiti odmah nakon
što se definira.  */

(function () {
  const user = "Igor";
  console.log(user);
})();

// Možemo i unutar te IFI funkcije pozvati drugu funkciju, ali će se isto tako morati pokrenuti unutar IFI-ija

(function () {
  const user = "Stjepan";
  console.log(user);
  const ifi = () => console.log("Ovo je iz arrow funkcije unutar ifija");
  ifi();
})();

// Možemo čak napraviti i poziv IFI funkcije sa parametrima

(function (ime) {
  console.log(`User je ${ime}`);
})("Ivana");
