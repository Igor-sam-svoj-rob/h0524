"use strict";

/* Zadatak 1 - Funkcija pozvana unutar druge funkcije

Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10, Kina 3441 i USA 332. 
Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače i onda ih i ispišite, 
na način da definirate dvije funkcije, 
prvu koja će računati postotak i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - 
zemlja i populacija.

Nakon toga ispišite sve 3 vrijednosti koristeći console.log:
`${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`. */

// funkcija za izračun postotka
const postotakSvijeta = function (populacija) {
  return (populacija / 100000) * 100;
};

// funkcija za ispis koja zove funkciju postotakSvijeta
const ispisFunkcija = function (zemlja, populacija) {
  const postotak = postotakSvijeta(populacija);
  const ispis = `${zemlja} ima ${populacija} tenisača što je ${postotak}% svijeta`;
  console.log(ispis);
};

ispisFunkcija("Hrvatska", 10);
ispisFunkcija("Kina", 3441);
ispisFunkcija("USA", 332);

/* 
Zadatak 2 - Funkcija

Imamo 2 tima, koji su igrali međusobno 6 puta. 
Želimo izračunati prosjek golova u svih 6 utakmica za svaku ekipu koristeći arrow funkciju. 
Tim pobjeđuje jedino ako im je prosjek duplo veći od protivnika.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka. 
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa 
sa ispisom prosjeka golova obje ekipe npr. Real je u prosjeku zabio 4 gola, a Barcelona 1.

primjer 1: 
Barca : 2, 3, 1, 3, 4, 7
Real : 1, 4, 1, 5, 0, 5
primjer 2: 
1, 2, 1, 1, 3, 5
Real : 1, 1, 3, 0, 2, 4

hint: kako bi provjerili da li je jedan tim pobijedio drugi sa barem duplo bodova, 
možete napraviti provjeru koristeći formulu A >= B * 2. Primjenite to na prosječne rezultate

*/

const calcProsjek = (a, b, c, d, e, f) => (a + b + c + d + e + f) / 6;
const scoreBarca = calcProsjek(2, 3, 1, 3, 4, 7);
const scoreReal = calcProsjek(1, 4, 1, 5, 0, 5);
console.log(scoreBarca, scoreReal);

const checkWinner = function (avgReal, avgBarca) {
  if (avgReal >= avgBarca * 2) {
    console.log(`Real pobjeđuje sa rezultatom ${avgReal} : ${avgBarca}`);
  } else if (avgBarca >= avgReal * 2) {
    console.log(`Barca pobjeđuje sa rezultatom ${avgBarca} : ${avgReal}`);
  } else {
    console.log("Nema pobjednika");
  }
};

checkWinner(scoreReal, scoreBarca);
checkWinner(10, 1);

/* 
Zadatak 3 - Liste

Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je dati 15% za 
napojnicu ako je račun između 50 i 300. 
Ako je vrijednost drugačija onda je napojnica 20%..

Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.

Napravite Listu koja će koristiti testne podatke dolje.

Napravite listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje ste dobili 
koristeći funkciju za izračun napojnica (ona prva gore).

Napravi listu sa ukupnim iznosima, znači račun + napojnica (total).


testni podaci:

račun 125
račun 555
račun 44
*/

/* function izracun(racun) {
  if (racun >= 50 && racun <= 300) {
    return racun * 0.15;
  } else {
    return racun * 0.2;
  }
} */

const napojnica = function (racun) {
  return racun >= 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;
};

const racuni = [125, 555, 44];

/* const napojnice = [
    napojnica(racuni[0]),
    napojnica(racuni[1]),
    napojnica(racuni[2]),
]; */

let napojnice = racuni.map((racun) => napojnica(racun));
let total = [];

for (let i = 0; i < racuni.length; i++) {
  total.push(napojnice[i] + racuni[i]);
}

console.log(racuni, napojnice, total);

/* 
Zadatak 4 - Objekti

Idemo opet do Marka i Josipa i njihovog ITM-a.
Ovaj put idemo koristiti objekte kako bi implementirali kalkulacije.
Zapamtite ITM = masa/visina ** 2

Za svakog od njih, kreiraj objekt sa vrijednostima : ime, težina, visina.
Kreiraj calcITM metodu u svakom objektu koja će izračunati ITM (ista metoda na oba).

Spremi ITM izračun u vrijednost objekta i vrati ga iz metode (return).
Logiraj u konzolu tko ima viši ITM, skupa sa imenom i ITM vrijednosti.

NPR: Josipov ITM (28.3) je veći od Markovog (23.9)!

Test data: 
Marko : 78 kg i 1.69 cm
Josip : 92 kg i 1.95 cm
 */

const marko = {
  ime: "Marko",
  tezina: 78,
  visina: 1.69,
  calcITM() {
    this.itm = this.tezina / this.visina ** 2;
    return this.itm;
  },
};

const josip = {
  ime: "Josip",
  tezina: 92,
  visina: 1.95,
  calcITM() {
    this.itm = this.tezina / this.visina ** 2;
    return this.itm;
  },
};

marko.calcITM();
josip.calcITM();

if (marko.itm > josip.itm) {
  console.log(
    `${marko.ime}-ov ITM ${marko.itm} veći je od ${josip.ime}-ovog ITM-a od ${josip.itm}`
  );
} else if (josip.itm > marko.itm) {
  console.log(
    `${josip.ime}-ov ITM ${josip.itm} veći je od ${marko.ime}-ovog ITM-a od ${marko.itm}`
  );
} else {
  console.log(`${marko.ime} i ${josip.ime} imaju isti ITM...`);
}

/* 
Zadatak 5 - Objekti i Liste

Imamo listu album u kojoj se nalazi objekt kao član liste. Napravi novi objekt i dodaj ga u listu kao drugog
člana liste (ali isto kao objekt).

*/

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];

const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,
  format: ["8T", "LP"],
};

album.push(noviAlbum);

/* 
Zadatak 6 - For petlja

Koristeći in ili of metodu ispiši u konzoli članove ove liste:

*/

const boje = ["crvena", "plava", "žuta", "zelena", "smeđa"];

for (const boja of boje) {
  console.log(boja);
}

/* 
Zadatak 7 - For petlja

Imamo 2 liste, listu računa i listu napojnica. 
Trebamo koristeći funkciju i for petlju napraviti izračun sume članova obje liste 
(prvi član prve liste sa prvim članom druge liste, i tako član po član).

Rezultat trebamo zapisati u novu listu koju možemo nazvati total.

hint 1 : članove obje liste u funkciju ubacite putem pripadajućih parametara.
hint 2 : Postavite početno stanje izračuna koje će ići u returnu na 0.
hint 3 : Prođite for petljom članove obje liste i zbrojite ih, te koristeći push metodu ubacite
u novu listu.
*/

const listaRacuna = [125, 555, 44];
const listaNapojnica = [44, 105, 14];

function suma(lista) {
  let total = 0;

  for (let broj of lista) {
    total += broj;
  }

  return Number(total);
}

const sumaRacuna = suma(listaRacuna);
const sumaNapojnica = suma(listaNapojnica);

console.log(sumaRacuna, sumaNapojnica);

let fLista = [];

fLista.push(sumaRacuna);
fLista.push(sumaNapojnica);

console.log(fLista);
