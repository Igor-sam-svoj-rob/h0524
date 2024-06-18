"use strict";

/* insertAdjacentElement metoda - ubacuje HTML element sa sadržajem kojeg postavimo... */

function ubaciElement() {
  const filter = document.querySelector(".filter"); // dohvaćanje elementa na kojem je filter klasa

  // Idemo napraviti HTML element i u njemu definirati sadržaj.

  const p = document.createElement("p");
  p.textContent = "Tekst koji ubacujemo pomoću insertAdjacentElement metode.";

  /* BeforeBegin će ubaciti paragraf element kojeg smo spremili u p varijablu prije nego se u HTML-u pojavi
  sami filter na kojem je metoda BeforeBegin pozvala... */
  /*  filter.insertAdjacentElement("beforebegin", p); */

  /* AfterBegin će ubaciti paragraf element kojeg smo spremili u p varijablu kao prvi element unutar elementa
  na kojem je postavljena filter klasa koju smo spremili u varijablu filter. */
  /* filter.insertAdjacentElement("afterbegin", p); */

  /* BeforeEnd će ubaciti paragraf element kojeg smo spremili u p varijablu kao zadnji element unutar elementa
  na kojeg je postavljena filter klasa koju smo spremili u varijablu filter. */
  /*   filter.insertAdjacentElement("beforeend", p); */

  /* AfterEnd će ubaciti paragraf element kojeg smo spremili u p varijablu kao prvi element nakon elementa
  na kojeg je postavljena filter klasa koju smo spremili u varijablu filter. */
  /* filter.insertAdjacentElement("afterend", p); */
}

/* ubaciElement(); */

/* Idemo vidjeti kako zamijeniti postojeće elemente... */

// replace metoda

function zamijeniZadatak() {
  const zadatak = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.innerText = "Zamijenili smo prvi zadatak";

  // I sada ćemo koristeći replace metodu zamijeniti ovaj selektirani i novokreirani list item.

  zadatak.replaceWith(li);
}

// zamijeniZadatak();

// outerHtml metoda - za razliku od innerHTML-a mijenja cijeli element

function outer() {
  const zadatak = document.querySelector("li:last-child");
  zadatak.outerHTML = "<li>Zamijenili smo zadnji zadatak</li>";
}

// outer();

/* Mali zadatak - kreirajte funkciju skupa u kojoj će te koristeći for petlju proći sve članove zadatak(ovih u HTML-u)
i zamijeniti sve njih sa sadržajem tipa "Zamijenili smo sve zadatke..." */

function zamijeniSve() {
  const lista = document.querySelectorAll(".pojedinacni-zadatak");
  lista.forEach((zadatak, index) => {
    if (index === 0) {
      zadatak.outerHTML = "<li>Zamijenili smo prvi zadatak</li>";
    } else {
      zadatak.outerHTML = "<li>Zamijenili smo zadatke</li>";
    }
  });
}

/* zamijeniSve(); */

/* Brisanje elemenata možemo raditi remove metodom - nakon što dohvatimo element odmah možemo
// pozvati remove metodu i ukloniti ga.
*/

function ukloniButton() {
  document.getElementById("clear").remove();
}

/* ukloniButton(); */

/* Brisanje prvog člana koristeći removeChild metodu */

function ukloniZadatak() {
  const ul = document.querySelector("#zadatak-list");
  const prviClan = document.querySelector(".pojedinacni-zadatak:first-child");
  ul.removeChild(prviClan);
}

/* ukloniZadatak(); */

/* Idemo još vidjeti kako se možemo igrati sa promjenama stilizacije koristeći razne metode... */

const naslov = document.querySelector("h1");
const listaZadataka = document.querySelector("#zadatak-list");
const sviZadaci = document.querySelectorAll(".pojedinacni-zadatak");

function pokreni() {
  // className = dodavanje nove klase na postojeći element
  naslov.className = "promjena";
  // classList.add = dodavanje nove klase na postojeću listu klasa
  listaZadataka.classList.add("promjena");
  // classList.remove = uklanjanje određene klase iz postojeće liste klasa
  listaZadataka.classList.remove("zadatak");
  // classList.replace - ova metoda zamjenjuje jednu klasu za drugu
  naslov.classList.replace("promjena", "promjena2");
}

function togglaj() {
  // toggle metoda funkcionira kao prekidač za svijetlo - ubaci/izbaci klasu
  naslov.classList.toggle("promjena");

  // Možemo npr. i stilizaciju mijenjati direktno
  listaZadataka.style.color = "red";
}

// document.querySelector("#clear").onclick = pokreni;
document.querySelector("#clear").onclick = togglaj;
