// STRICT/STROGA provjera

const godina = 18;

/* Kada koristimo === znaka jednakosti to znači da ćemo uspoređivati da li je broj iz 
varijable godina jednak broju 18. To će biti prva provjera. Nakon toga će se odraditi druga provjera,
koja će usporediti da li su vrste podataka iz varijable i broj 18 ista vrsta podatka. */
if (godina === 18) {
  console.log("punoljetna ste osoba (stroga provjera)");
}

//LOOSE/BLAGA provjera

/* Kada koristimo == znaka jednakosti, to znači da ćemo uspoređivati da li je broj u stringu jednak
broju. To će biti jedina provjera. Neće se provjeravati tip podatka. */
if ("18" == 18) {
  console.log("punoljetna ste osoba");
}

// Primjer 1

/* const broj = Number(prompt("Koji ti je najdraži broj"));
console.log(typeof broj, broj);

if (broj === 7) {
  console.log("Broj 7 je i moj najdraži broj");
} else if (broj === 15) {
  console.log("Broj 15 nije najdraži, al je ok");
} else {
  console.log("Baš nemaš dobrih brojeva");
} */

// LOGIČKI OPERATORI - &&, ||, !

const imaVozackuDozvolu = true;
const dobarVid = false;

/* I operator koji se piše sa && - kod njega čim je jedna od vrijednosti koja se provjerava false, cijeli izraz
je false. Svi moraju biti true, da bi rezultat provjere bio true. */
console.log(imaVozackuDozvolu && dobarVid);

/* Ili operator koji se sa || - kod njega moraju sve vrijednosti koje se provjeravaju biti false kako bi cijeli
izraz bio false. Čim je jedna od vrijednosti koje se provjeravaju true, rezultat provjere će biti true. */
console.log(imaVozackuDozvolu || dobarVid);

// Praktičan primjer

const mozeVoziti = imaVozackuDozvolu && dobarVid;

if (mozeVoziti) {
  console.log("Osoba može voziti");
} else {
  console.log("Osoba ne može voziti");
}

const umoran = true;

console.log(imaVozackuDozvolu && !umoran);

const ribickaDozvola = true;
const lijepoVrijeme = true;
const padaKisa = true;

if (ribickaDozvola || lijepoVrijeme || !padaKisa) {
  console.log("Idemo na pecanje");
} else {
  console.log("Nejdemo na pecanje");
}

/* Zgodna primjena ovih operatora se može vidjeti koristeći truthy i falsy vrijednosti.
I operator (&&) će ako ga primjenimo ovako prilikom inicijalizacije varijable, vratit će prvu falsy vrijednost
ili zadnju truthy vrijednost. */

let x;

x = 10 && 20 && 30;
x = 10 && 0 && 20;
x = 10 && "" && 0 && 20;

console.log(x);

let y = [];

console.log(y[0]);

y.length > 0 && console.log(y[0]); // ovako korisnik neće dobiti ispis undefined ako je lista prazna...

y = [1, 2];
y.length > 0 && console.log(y[0]); // ovo će nam dati vrijednost prvog člana liste (1)

/* ILI operator (||) će vratiti prvu truthy vrijednost ili ako su sve falsy, izbacit će zadnju vrijednost */

let z;

z = 10 || 20;
z = 0 || 10 || 20;
z = "" || undefined || null || 0;

console.log(z);

/* Nullish coalesing operator (nulti operator spajanja) (??)- on će vam vratit operand sa desne strane ako je sa 
lijeve strane operand null ili undefined, inače će vratiti lijevog operanda. Za razliku od truthy i falsy stroge
provjere ovaj operand će vratiti 0 ili prazan string */

let nullish;

nullish = 10 ?? 20;
nullish = "Lijeva" ?? "Desna";
nullish = "" ?? "Desna";
nullish = null ?? "Desna";
nullish = undefined ?? "Desna";
nullish = false ?? "DESNA";

console.log(nullish);

// Praktičan primjer log operatora 1.
let a = false;

/* if (!a) {
  a = 10;
} */

// Kako bi ovu if petlju i njezin rezultat napisao koristeći || operator?
a = a || 10;
a ||= 10; // shorthand način pisanja linije 122...

console.log(a);

// Praktičan primjer log operatora 2

let b = 20;

/* if (b) {
  b = 30;
} */

b = b && 30;
b &&= 30; // shorthand način pisanja linije 137

// Kako bi ovu if petlju i njezin rezultat napisali koristeći && operator?

console.log(b);

// Praktičan primjer log operatora 3

let c = null;

/* if (c === null || c === undefined) {
  c = 20;
} */

c = c ?? 20;
c ??= 20; // shorthand način pisanja linije 152

console.log(c);

// Kako bi ovu if petlju i njezin rezultat napisali koristeći ?? operator?

// SWITCH - alternativa za situaciju gdje imamo puno if-else provjera

const dan = prompt("Koji je danas dan?");

switch (dan) {
  case "ponedjeljak": // Kao da sam napravio provjeru dan === ponedjeljak
    console.log("Danas je taj dan, kreće tjedna robija");
    break; // kada ne bi bilo breaka, odvrtio bi se i idući case, i svaki iza njega koji nema definiran break
  case "utorak":
    console.log("Danas je utorak, vikend je daleko");
    break;
  case "srijeda":
  case "cetvrtak":
    console.log("Ni danas nije još petak");
    break;
  case "petak":
    console.log("Napokon je petak");
    break;
  case "subota":
  case "nedjelja":
    console.log("Napokon vikend");
    break;

  default:
    console.log("Niste unesli niti jedan dan u tjednu");
}
