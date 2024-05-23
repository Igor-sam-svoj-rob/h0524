// NAČINI DEKLARIRANJA VARIJABLI

/* Const način deklariranja varijable zahtijeva i dodjeljivanje vrijednosti. */
const js = "JS je super";
console.log(js);
console.log(23);
console.log("Hello World");
console.log(2 + 4 + 8);

/* Const (konstanta) je način definiranja varijable koji ne dozvoljava, upotrebu
istog imena i redeklariranja te varijable. */
// const js = "Js je opet super";

/* Const ne dozvoljava promjenu vrijednosti varijable zadane na taj način. */
// js = "Hello JS";

/* Let je način definiravanja varijable koja dozvoljava deklariranje bez dodijeljivanja
vrijednosti. Tako definiranoj varijabli možemo naknadno dodijeliti vrijednost. */
let brojPrisutnih;
console.log(brojPrisutnih);
brojPrisutnih = 22;
console.log(brojPrisutnih);
brojPrisutnih = 40;
console.log(brojPrisutnih);

/* Var (Varijabla/Variable) je "stari" način definiranja varijable koji dozvoljava
deklariranje bez dodijeljivanja vrijednosti, ali i redeklariranje varijable.
Također nam je zbog principa hoistinga deklariranje varijable prebačeno na vrh
JS skripte. Iz tih svih razloga ćemo izbjegavati deklariranje varijable sa var pristupom. */
console.log(varx);
var varx = 5;
varx = 6;
var varx = true;
console.log(varx);

/* Varijable ne smijete deklarirati sa razmakom, ne smije varijabla startati sa brojem.
varijabla može sadržavati broj, slova, donju crtu i znak dolara */
// const function = "Ovo nije dozvoljeno";
// const new = "Ovo također nije dozvoljeno, jer se radi o JS funkcijskoj naredbi";

// VRSTE VARIJABLI

// 1. String - tekstualne sekvence koje se stavljaju u dvostruke ili jednostruke navodnike.

const imePrezime = "Igor Jevremović";

// 2. Broj - brojevi, mogu biti decimalni ili cijeli brojevi.
const broj = 7;

// 3. Boolean - vrijednost koja je true ili false.
const istina = true;
const laz = false;

// 4. Undefined - prazna vrijednost,
// najčešće će se naći za vrijednost neinicijalizirane varijable.

let nedefinirano;

// 5. Null - slično undefinedu, ali nije nedefinirana, nego je prazna vrijednost.

console.log(typeof broj);
console.log(typeof istina);
console.log(typeof nedefinirano);

let godine;
godine = 50;
console.log(typeof godine);
godine = true;
console.log(typeof godine);

// MATEMATIČKI OPERATORI

const trenutnaGodina = 2024;
const izracunGodinaMaja = trenutnaGodina - 2001;
const izracunGodinaJosip = trenutnaGodina - 1999;

console.log(izracunGodinaMaja, izracunGodinaJosip);
console.log(izracunGodinaMaja * 2, izracunGodinaJosip / 5);

// USPOREDNI OPERATORI

let y = 10 + 5;
y += 10; // isto kao da sam napisao y = y + 10;
y *= 4; // isto kao da sam napisao y = y * 4;
y++; // isto kao da sam napisao y = y + 1;
y--; // isto kao da sam napisao y = y - 1;
console.log(y);

// možemo provjeravati >, <, >= , <=
console.log(izracunGodinaJosip >= izracunGodinaMaja);
console.log(izracunGodinaMaja > izracunGodinaJosip);

// Idemo koristeći mat. op. spojiti 2 varijable čije vrijednosti su stringovi.

const ime = "Igor";
const prezime = "Jevremović";

console.log(ime + " " + prezime);

//STRING LITERAL

const godina = 2024;
const zanimanje = "učitelj";

const algebra =
  "Ja sam " + ime + " " + prezime + ", radim kao " + zanimanje + " u godini " + godina + ".";

console.log(algebra);

// TEMPLATE LITERAL

const algebra2 = `Ja sam ${ime} ${prezime}, radim kao ${zanimanje} u godini ${godina}.`;
console.log(algebra2);

// MATEMATIČKE METODE sa brojevima i varijablama

let z;

// korijen
z = Math.sqrt(16);

// absolutne vrijednosti
z = Math.abs(-5);

// zaokruživanje - do pola broja na nižu, preko na višu
z = Math.round(4.4);

// prisilno zaokruživanje na gore
z = Math.ceil(5.2);

// prisilno zaokruživanje za dolje
z = Math.floor(5.8);

// uklanjanje decimalnih brojeva
z = Math.trunc(5.2);

// min broj iz niza brojeva
z = Math.min(4, 6, 8, 9, 2);

// max broj iz niza brojeva
z = Math.max(2, 6, 8, 10);

// random broj
z = Math.random();

// random broj ako pomnožimo sa 10, dobit ćemo broj između 0 i 9
z = Math.random() * 10;

// random broj koji ne bi imao decimale i bio bi između 1 i 10
z = Math.trunc(Math.random() * 10 + 1);
z = Math.floor(Math.random() * 10 + 1);

console.log(z);
