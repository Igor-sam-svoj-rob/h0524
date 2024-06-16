"use strict";

// Idemo vidjet kako kreirati novi element na stranici. Npr. div element

const noviZadatak = document.createElement("div");

// Idemo ovom elementu dodati klasu i ID

noviZadatak.className = "novi-element";
noviZadatak.id = "id-novog-elementa";

// Dodajte tom novom zadatku neki atribut

noviZadatak.setAttribute("naslov", "ovo je vjezba");

noviZadatak.innerHTML = "Ja sam novi zadatak";

console.log(noviZadatak);

// Dodavanje tog novokreiranog elementa u naš HTML DOM najčešće ide korištenjem appendChild metode.

// document.getElementById("zadatak-list").appendChild(noviZadatak);

// Kako složiti zadatak da izgleda identično kao drugi i kako to složiti da se može višestruko koristiti?

// 1. ovo je brži ali neuredniji način kreiranja tog elementa...
function kreirajZadatak(zadatak) {
  const li = document.createElement("li");

  li.innerHTML = `${zadatak}
  <button class="ukloni-zadatak btn-link">
   <i class="fa-solid fa-xmark"></i>
  </button>`;

  document.getElementById("zadatak-list").appendChild(li);
}

kreirajZadatak("Plati račune");
kreirajZadatak("Kupi novine");

// 2 uredniji ali dulji način kreiranja tog elementa...

function kreirajZadatak2(zadatak) {
  const li = document.createElement("li");
  li.innerText = zadatak;

  const button = document.createElement("button");
  button.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  button.appendChild(ikona);
  li.appendChild(button);

  document.getElementById("zadatak-list").appendChild(li);
}

kreirajZadatak2("Kupi loptu");

/* 
Zadaća - ovaj pristup možemo još refaktorirati. Što kada bi kreiranje ovih elemenata (buttona i ikonica) bilo
korisno prebaciti u svoje funkcije kako bi mogle biti reusane/pozivane na drugim mjestima. Stoga, napravite
funkciju za svaku kreaciju (buttona/ikone/list itema) i onda kreirajte novi zadatak koristeći višefunkcijski pristup.
*/
