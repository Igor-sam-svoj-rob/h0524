"use strict";

/* FUNKCIJE - objektni podatak, definiramo ih na donekle sličan način kao varijable, ali ideja je da 
kod definiran u funkciji, pokrećemo pozivanjem te funkcije. */

function logger() {
  console.log("Hello World");
}

// ovo je pokretanje funkcije - calling / invoking / running / executing funkcije
logger();
logger();
logger();
logger();
logger();

/* sok2 poziv funkcije će raditi iako je pozvana prije nego smo uopće funkciju deklarirali, jer se funkcije
hoistaju na vrh JS scripte bez obzira gdje se nalaze u JS kodu, stoga će ovo uvijek raditi. */
const sok2 = nutriBullet(7, 8);
console.log(sok2);
// unutar zagrada stavljamo parametre funkcije koje prosljeđujemo prilikom pokretanja funkcije
function nutriBullet(jabuke, narance) {
  console.log(jabuke, narance);
  const sok = `Sok od ${jabuke} jabuka i ${narance} naranci`;
  return sok; // return završava izvršavanje funkcije i specificira vrijednost koju ta funkcija vraća van.
  console.log("Ovo je nakon returna funkcije"); // nakon returna, ništa se ne izvodi, stoga se ni ovo ne ispisuje
}

/* Funkcija vraća vrijednost, koju možemo odmah prilikom pokretanja funkcije vratiti i zapisati u neku varijablu.
Prilikom pozivanja funkcije, ako funkcija očekuje parametre, možemo ih definirati u zagradama, ovisno o tome
što funkcija očekuje. Kada bi ponovno pozvali tu funkciju sa drugim ili istim parametrima, to ne bi bio problem,
jer se funkcija može više puta pozvati i neće doći do konflikta što se koriste druge vrijednosti parametara. */
const sok = nutriBullet(3, 5);
console.log(sok);

// Primjer funkcije

function izracunGod(godRodjenja) {
  return 2024 - godRodjenja;
}

console.log(izracunGod(1999));
console.log(izracunGod(2012));

function izracunGod2(godRodjenja) {
  const dob = 2024 - godRodjenja;
  return dob;
}

console.log(izracunGod2(2000));

/* ARROW FUNKCIJE - i dalje je izraz funkcije kao i ove gore, međutim brže ju je napisati bez zagrada.
Ne događaju se eksplicitno, nego implicitno (drugim riječima, ne morate napisati return) */

const regularFunction = function () {
  console.log("Hello World");
};

regularFunction();

// Kako bi ovo napisao kao Arrow funkciju?

const arrowFunction = () => console.log("Hello World");

arrowFunction();

const pasRodjen = (godRodjenja) => 2024 - godRodjenja;

console.log(pasRodjen(2022));

// Međutim ako imamo više linija koda za izvršiti, onda moramo definirati blok i return u našoj arrow funkciji

const godDoMirovine = (godRodjenja, imePrezime) => {
  const godine = 2024 - godRodjenja;
  const mirovina = 65 - godine;
  if (mirovina > 0) {
    console.log(`${imePrezime} će se umiroviti za ${mirovina} godina`);
    return mirovina;
  } else {
    return -1;
  }
};

console.log(godDoMirovine(1995, "Ivan Horvat"));
console.log(godDoMirovine(1940, "Stjepan Stjepić"));
