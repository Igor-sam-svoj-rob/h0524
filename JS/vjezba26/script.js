"use strict";

// GLOBALNE VARIJABLE

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// FUNKCIJE

// FUNKCIJA ZA KREIRANJE ZADATKA
const dodajZadatak = (e) => {
  e.preventDefault();

  if (zadatakInput.value.trim() === "") {
    alert("Molimo Vas unesite zadatak");
    return;
  }

  /* Kreiramo novi element i u njega postavljamo vrijednost iz našeg input polja pomoću createTextNode metode. Ona za razliku od innerTexta
  kreira novi element, dok innerText samo mijenja postojeći sadržaj iz postojećeg elementa. */
  const li = document.createElement("li");
  li.className = "pojedinacni-zadatak";
  li.appendChild(document.createTextNode(zadatakInput.value));

  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  // Dodajte ikonicu u gumb i gumb u li...
  delGumb.appendChild(ikona);
  li.appendChild(delGumb);

  listaZadataka.appendChild(li);

  provjeriListu();
  zadatakInput.value = "";
};

// BRISANJE ZADATKA
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
    provjeriListu();
  }
};

const obrisiZadatke = (e) => {
  /* listaZadataka.innerHTML = ""; // mogli bi i ovako...*/
  while (listaZadataka.firstChild) {
    listaZadataka.removeChild(listaZadataka.firstChild);
  }
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
  const zadaci = listaZadataka.querySelectorAll("li"); // dohvaćanje svih zadataka iz listeZadataka
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
provjeriListu();
