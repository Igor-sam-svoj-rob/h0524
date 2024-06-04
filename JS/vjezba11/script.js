"use strict";

// Primjer kako bi koristeći listu definirali nekakvog usera i njegove podatke
const user = ["Ivan", "Horvat", 2024 - 2000, "Poštar", ["Marko", "Marija", "Ivana"]];

console.log(user);

// 1 način definiranja objekta - literalno. Koristimo vitičaste zagrade.

/* Najveća razlika između liste i objekta je što je za pozivanje objekta nebitan raspored i sadržaj unutar 
objekta ima ključeve sa pripadajućom vrijednosti. Stvari iz liste pozivamo indexnim brojem, dok kod objekata
zovemo po ključu kojeg smo definirali za određenu vrijednost. Objektni podaci će se poredati po abecedi ključa. */
const objektniUser = {
  firstName: "Ivan",
  secondName: "Horvat",
  godine: 2024 - 2000,
  zanimanje: "Poštar",
  listaPrijatelja: ["Marko", "Marija", "Ivana"],
};

console.log(objektniUser);

// Načini dohvaćanja vrijednosti objekta - dot notacija i bracket notacija

// 1 dot notacija

console.log(objektniUser.zanimanje);
console.log(objektniUser.listaPrijatelja[0]);

// 2 bracket notacija
console.log(objektniUser["zanimanje"]);

// Dodavanje novih elemenata u objekt
objektniUser.lokacija = "Hrvatska";
console.log(objektniUser);

// Mijenjanje vrijednosti objekta pomoću ključa
objektniUser.zanimanje = "Prodavač";

console.log(objektniUser);
