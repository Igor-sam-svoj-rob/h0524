"use strict";
/* use strict nam omogućuje pisanje sigurnijeg koda, lakše je izbjeći određene greške. 
Javit će vam neke greške koje vam sami Intelisense od VSC-a također bude podcrtao, ali bez use stricta ih
ne bi vidjeli u konzoli. */

/* 
3 + 4 je npr. izraz(expression) jer će proizvesti određenu vrijednost.
2005 je također izraz.
true && false && !false je također izraz.
if/else, switch su deklaracije. One u biti same po sebi ne proizvode novu vrijednost.
Deklaracije kao kompletne rečenice, a izrazi riječi koje čine rečenicu...
Deklaracije su sekvence akcija...
*/

const godine = 23;

if (godine >= 18) {
  console.log("Možeš polagati vozački");
} else {
  console.log("Ne možeš polagati vozački");
}

/* Trojni (Ternary) operator je još jedan način pisanja if-else petlje u jednoj liniji.
Možete to gledati na način da je sa lijeve strane upitnika provjera koju bi napravili kod IF statementa u
zagradi. Prva stvar koja dolazi nakon ? će se odvrtiti ako je upit istinit(true), a nakon toga dolazi dvotočka
iza koje će biti kod koji će se odvrtiti ako je upit neistinit(false). */

godine >= 18 ? console.log("Može") : console.log("Ne može");

// Rezultat ove provjere kod trojnog operatora možemo odmah upisati u varijablu

const punoljetan = godine >= 18 ? "Može" : "Ne može";
console.log(punoljetan);

// Kako bi ovo isto napisali koristeći if-else pristup?

let punoljetan2;
if (godine >= 18) {
  punoljetan2 = "Može";
} else {
  punoljetan2 = "Ne može";
}

console.log(punoljetan2);

/* Još jedan primjer, autorizacija, ideja je da napravimo provjeru da li je korisnička autorizacija true/false
i što će se dogoditi u ta 2 slučaja...
*/
const auth = true;
let redirect;

if (auth) {
  console.log("Autorizacija je prošla");
  redirect = "/dashboard";
} else {
  console.log("Autorizacija nije prošla");
  redirect = "/login";
}

console.log(redirect);

// Kako će te ovo napisati koristeći trojni operator?
console.log(auth ? "Autorizacija je prošla" : "Autorizacija nije prošla");
redirect = auth ? "/dashboard" : "/login";
console.log(redirect);
