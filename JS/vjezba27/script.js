"use strict";

/* Postoji lokalno i sesijsko spremanje podataka. Oba koriste isti API i dozvoljavaju nam pristup objektu za
spremanje u našem windowu. Podaci se spremaju kao ključ-vrijednost par i zapisani su kao stringovi.(ne mogu
biti spremljeni kao objekti).

Sesijsko spremanje traje sve dok ne refreshamo/zatvorimo stranicu, dok je lokalno spremanje zapisano u browseru
i neće nestati nakon što se stranica refresha/zatvori. Ovo je naravno individualno i bit će zapisano u tom browseru
kod klijenta koji je otvorio aplikaciju.

Nama malu komplikaciju stvara taj pristup jer lokalni spremnik ne može spremati objekte, samo stringove. Stoga,
da bi spremili objekt moramo ga prvo stringify metodom pretvoriti u stringove, a kada ga želimo povući nazad
iz lokalnog spremnika i prikazati na ekranu onda ga moramo sa parse metodom pretvoriti nazad u objekt.*/

// Metode kojima možemo manipulirati LS:

/* localStorage.setItem("kljuc", "vrijednost"); // sprema vrijednost sa ključem
localStorage.getItem("kljuc"); // dohvaća vrijednost zapisanu na traženom ključu
localStorage.removeItem("kljuc"); // briše ključ i vrijednost na traženom ključu
localStorage.clear(); // briše sve zapisano u lokalnom spremniku */

// GLOBALNE VARIJABLE

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// FUNKCIJE

// FUNKCIJA KOJA ĆE POVUĆI PODATKE IZ LS-a I ISPISATI IH
const prikaziZadatkeLS = () => {
  const zadaciSpremiste = dohvatiLocalStorage();
  zadaciSpremiste.forEach((zadatak) => kreirajZadatak(zadatak));
  provjeriListu();
};

// FUNKCIJA ZA KREIRANJE ZADATKA
const dodajZadatak = (e) => {
  e.preventDefault();

  const noviZadatak = zadatakInput.value;

  if (noviZadatak.trim() === "") {
    alert("Molimo Vas unesite zadatak");
    return;
  }

  /* Morat ćemo ovdje inicijalizirati varijablu da nam bude dostupna u ovoj provjeri pa na dalje. Znači jednostavno ćemo kreirati novu
  varijablu koja će uzimati zadatakInput.value i upotrijebit ćemo provjeru umjesto sa zadatakInput.value sa tom varijablom */

  kreirajZadatak(noviZadatak);

  provjeriListu();
  /* Ovdje ćemo pozvati funkciju za dodavanje u LS, a kao parametar ćemo postaviti vrijednost iz inputa. */
  dodajLocalStorage(noviZadatak);
  zadatakInput.value = "";
};

// FUNKCIJA ZA KREIRANJE IZGLEDA NAŠIH ZADATAKA
const kreirajZadatak = (noviZadatak) => {
  const li = document.createElement("li");
  li.className = "pojedinacni-zadatak";
  li.appendChild(document.createTextNode(noviZadatak));

  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);
  listaZadataka.appendChild(li);
};

// DODAVANJE ZADATKA U LOCAL STORAGE
/* 
Prvo ćemo kreirati našu varijablu u kojoj ćemo držati zadatke. Ako u lokalnom spremniku nema zadataka (if provjera)
onda ćemo definirati varijablu zadaciSpremiste kao praznu listu. S druge strane ako imamo nešto u spremištu, onda
ćemo prvfo spremiti ono što se nalazi unutra u našu varijablu zadaciSpremiste i pomoću JSON.parse metode zapisati
to kao objekt, umjesto string vrstu podatka jer u lokalnom spremištu, kao što smo već rekli podaci se zapisuju
kao stringovi, ne mogu biti objekti.
*/
const dodajLocalStorage = (zadatakInput) => {
  const zadaciSpremiste = dohvatiLocalStorage();

  /* Kada smo pripremili našu varijablu zadaciSpremiste sa ažuriranim stanjem iz lokalnog spremnika, onda možemo
  push metodom na tu listu zadataka ubaciti novog člana liste (točnije, novi zadatak koji je korisnik upisao i 
  kojeg smo ubacili u ovu funkciju putem parametra zadatakInput). Nakon toga možemo novu, ažuriranu listu zadataka
  proslijediti nazad u lokalni spremnik sa setItem metodom koja mora pozvati po ključevima i sa JSON.stringify
  metodom pretvoriti te naše zadatke u string vrstu podataka jer lokalni spremnik može sadržavati samo stringove. */
  zadaciSpremiste.push(zadatakInput);
  localStorage.setItem("kljuc", JSON.stringify(zadaciSpremiste));
};

// DOHVAĆANJE PODATAKA IZ LOKALNOG SPREMNIKA
const dohvatiLocalStorage = () => {
  let zadaciSpremiste;

  if (localStorage.getItem("kljuc") === null) {
    zadaciSpremiste = [];
  } else {
    zadaciSpremiste = JSON.parse(localStorage.getItem("kljuc"));
  }

  return zadaciSpremiste;
};

// BRISANJE ZADATKA
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    ukloniZadatak(e.target.parentElement.parentElement);
  }
};

// UKLANJANJE ZADATKA IZ DOM-A - ovdje ćemo prebaciti svu logiku brisanja iz DOM-a i povezati sa brisanjem iz LS
const ukloniZadatak = (zadatakIzDOM) => {
  zadatakIzDOM.remove();
  obrisiIzLS(zadatakIzDOM.textContent);
  provjeriListu();
};

// FUNKCIJA ZA BRISANJE ZADATKA IZ LS - proći ćemo kroz listu zadatak i sa filter metodom izbaciti onoga kojeg brišemo a ostalo spremiti nazad
const obrisiIzLS = (zadatakRemove) => {
  // dohvaćamo sve zadatke iz ls-a i zapisujemo u varijablu
  let zadatakIzStoragea = dohvatiLocalStorage();
  // idemo to isfiltrirati
  zadatakIzStoragea = zadatakIzStoragea.filter((zadatak) => zadatak !== zadatakRemove);
  // i sad ćemo vratiti nazad u LS novu listu bez obrisanog člana
  localStorage.setItem("kljuc", JSON.stringify(zadatakIzStoragea));
};

const obrisiZadatke = (e) => {
  while (listaZadataka.firstChild) {
    listaZadataka.removeChild(listaZadataka.firstChild);
  }
  localStorage.removeItem("kljuc");
  provjeriListu();
};

const filtrirajZadatke = (e) => {
  const zadaci = listaZadataka.querySelectorAll("li");
  const tekst = e.target.value.toLowerCase();

  zadaci.forEach((zadatak) => {
    const ListaZadatka = zadatak.firstChild.textContent.toLowerCase();
    if (ListaZadatka.indexOf(tekst) != -1) {
      zadatak.style.display = "flex";
    } else {
      zadatak.style.display = "none";
    }
  });
};

// PROVJERA IMA LI ZADATAKA / PRIKAZ FILTERA I BRISI SVE BUTTONA
const provjeriListu = () => {
  const zadaci = listaZadataka.querySelectorAll("li");
  if (zadaci.length === 0) {
    filter.style.display = "none";
    brisiSve.style.display = "none";
  } else {
    filter.style.display = "block";
    brisiSve.style.display = "block";
  }
};

// EVENT LISTENERI
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);
/* Napravit ćemo event listener koji će prilikom učitavanja DOM-a u browseru, pokrenuti (odmah kad se DOM učita)
funkciju koja će provjeriti lokalni spremnik i vidjeti ima li zadataka u njemu i ispisati ih na ekranu. */
document.addEventListener("DOMContentLoaded", prikaziZadatkeLS);
provjeriListu();
