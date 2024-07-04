"use strict";

// NAMED EXPORT

export let kosarica = [];

export const dodajKosarica = (proizvod, kolicina) => {
  kosarica.push({ proizvod, kolicina });
  console.log(`${kolicina} ${proizvod} je dodano u košaricu`);
};
