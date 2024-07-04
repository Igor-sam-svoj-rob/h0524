"use strict";

import dohvatiUsera from "./modules/gituser.js";
import { dodajKosarica, kosarica } from "./modules/cart.js";

dohvatiUsera();
dodajKosarica("pašteta", 5);
dodajKosarica("kruh", 2);
dodajKosarica("mlijeko", 1);
console.log(kosarica);

// ZADATAK - koristeći reduce metodu prođite proizvode u kosarica listi i izračunajte sumu proizvoda

const pocetnaVrijednost = 0;
const suma = kosarica.reduce((prije, sad) => prije + sad.kolicina, pocetnaVrijednost);
console.log(suma);
