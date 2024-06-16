"use strict";

// možemo dohvatiti elemente po TAG-u ali nije najsretnije rješenje
console.log(document.getElementsByTagName("div")[0].innerHTML);

/* 
Idemo dohvatiti h1 pomoću ID-a i dodati mu novi atribut.
Pomoću setAttribute metode dodajemo novi atribut i vrijednost za taj atribut. */

document.getElementById("naslov").setAttribute("class", "naslov_h1");

// Zadatak - dohvatite naslov i promijenite njegov sadržaj u neki paragraf sa sadržajem po vašoj volji
const naslov = document.getElementById("naslov");
naslov.innerHTML = "<p>Ovo je novi naslov</p>";

/* Možemo osim samog HTML-a i njegovih atributa mijenjati i sami CSS. */
naslov.style.color = "#ff0000";
naslov.style.backgroundColor = "#eee";
naslov.style.padding = "2rem";
naslov.style.borderRadius = "5px";

/* QUERYSELECTOR
Uz getElementById imamo i QuerySelector. S njim možemo odabrati što god hoćemo pomoću atributa, na isti način
kako bi to napravili u CSS-u. */

console.log(document.querySelector("h1"));
console.log(document.querySelector("#naslov"));
console.log(document.querySelector(".form-control"));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector("li:nth-child(2)"));

/* QUERYSELECTORALL
Funkcionira isto kao i QuerySelector, ali selektira sve elemente sa traženim atributom. */

const lista = document.querySelectorAll("ul li");

console.log(lista);
console.log(lista[2]);

// ne možemo na node listi mijenjati stilizaciju kao kada imamo selektiran pojedinačni element
// lista.style.color = "#ff0000"; // - ovo neće raditi

// Ali možemo naravno koristiti metode listi da bi promijenili stilizaciju članovima liste.
lista.forEach((clan_liste, index) => {
  clan_liste.style.color = "#ff0000";

  if (index === 1) {
    clan_liste.innerHTML = `Ovom članu liste smo promijenili <mark>sadržaj</mark>`;
  }
});

/* 
GETELEMENTBYCLASSNAME - dohvaća elemente po klasi
 */

let dijete = document.getElementsByClassName("dijete");
console.log(dijete);

/* 
NodeList - može sadržavati bilo koji tip DOM čvora (bilo kakve elemente, tekstualne, komentare itd).
HTMLCollection - može sadržavati samo HTML elemente.
*/

/* Idemo se upoznati sa children svojstvom. Npr. selektirat ćemo roditelj element koji ima podelemente. */

const roditelj = document.querySelector(".roditelj");

// Spremanje HTML kolekcije u varijablu
let podaci = roditelj.children;

// dohvaćanje sadržaja drugog djeteta u HTML kolekciji
podaci = roditelj.children[1].innerHTML;

// dohvaćanje klase postavljene na drugom djetetu u HTML kolekciji
podaci = roditelj.children[1].className;

// dohvaćanjje node čvora drugog djeteta u HTML kolekciji
podaci = roditelj.children[1].nodeName;

console.log(podaci);

// Možemo pomoću roditelj elementa mijenjati sadržaj podelemenata

roditelj.firstElementChild.innerText = "Ovako mijenjamo prvog člana HTML kolekcije";
roditelj.lastElementChild.innerText = "Ovako mijenjamo zadnjeg člana HTML kolekcije";

// Možemo isto tako pomoću selektiranog podelementa mijenjati roditeljski element

dijete = document.querySelector(".dijete");

podaci = dijete.parentElement;
console.log(podaci);

dijete.parentElement.style.backgroundColor = "#eee";
dijete.parentElement.style.border = "1px solid black";
dijete.parentElement.style.padding = "1rem";

// Možemo također selektirati jednog člana liste i pomoću njega dohvaćati elemente koji dolaze prije/poslije njega

const drugoDijete = document.querySelector(".dijete:nth-child(2)");

drugoDijete.nextElementSibling.style.fontSize = "2rem";
drugoDijete.previousElementSibling.style.fontSize = "2rem";
