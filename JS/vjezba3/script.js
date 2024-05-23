// KONVERZIJA VRSTE PODATKA - TYPE CONVERSION

const inputGodina = "2000";
const decBroj = "10.5";
console.log(inputGodina + 18);

// Trebamo napraviti konverziju stringa u broj

let brojGodina;
let cijeliBroj;

// 1 način pomoću parseInt metode
brojGodina = parseInt(inputGodina);
cijeliBroj = parseFloat(decBroj); // ako radimo sa dec brojevima onda treba upotrijebiti parseFloat
console.log(cijeliBroj);

// 2 način pomoću Number metode
brojGodina = Number(inputGodina);
cijeliBroj = Number(decBroj);
console.log(cijeliBroj);

// 3 način pomoću plusića
brojGodina = +inputGodina;
cijeliBroj = +decBroj;
console.log(cijeliBroj);

console.log(typeof brojGodina, brojGodina, brojGodina + 18);

console.log(Number("Igor")); // Ako nešto što nije broj pokušamo pretvoriti u broj, dobit ćemo NaN kao rezultat
console.log(String(23)); // Naravno, možemo i broj pretvoriti u string

// PRISILNA KONVERZIJA VRSTE PODATKA - TYPE COERCION

console.log("Ja imam " + 2 + " bicikla");

// Kada ne bi imali tu prisilnu/automatsku konverziju broja u string, morali bi to ovako pisati:
console.log("Ja imam " + String(2) + " bicikla");

// Ajmo napisati par primjera

// Ovo funkcionira jer oduzimanje u ovoj varijanti prepoznaje da se u stringovima nalaze brojevi i odradit će mat. radnju
console.log("23" - "10" - 3);

// u ovoj varijanti ne funkcionira jer se zbrajanje dodaju brojevi u string
console.log("23" + "10" + 3);

console.log(5 + true); // ovo će biti 6, jer se true smatra jedinicom kada se prebaci u broj
console.log(5 + false); // ovo će biti 5, jer se false smatra nulom kada se prebaci u broj
console.log(5 + undefined);

let x = "1" + 1; // zbrajanje sa stringom će od ovoga napraviti string vrijednosti 11
x = x - 1; // oduzimanje će od stringa napraviti broj stoga će ovo biti 10

// ovo će biti 95 jer se operacije gledaju sa lijeva na desno i tek kad nalete na string će pretvorit broj u string
console.log(2 + 3 + 4 + "5");

console.log("10" - "4" - "3" - 2 + "5");

/* TRUTHY I FALSY VRIJEDNOSTI - vrijednosti koje nisu eksplicitno definirane kao Boolean vrijednosti, ali
kada se pretvore u Boolean, dobit će truthy ili falsy vrijednost */

// Falsy vrijednost : 0, "", undefined, null, NaN - vrijednosti koje nisu netočne, ali će postati kada se pretvore u Boolean

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean(5));
console.log(Boolean({}));

const novac = 0;

if (novac) {
  console.log("Nemojte potrošiti sve");
} else {
  console.log("Nemaš novaca");
}

let visina;

if (visina) {
  console.log("Visina je definirana");
} else {
  console.log("Visina je nedefinirana");
}
