"use strict";

/* EVENT LISTENERI - addEventListener metoda...
addEventListener metodu postavljamo na element koji (obično) smo spremili iz DOM-a u varijablu i na njega
postavljamo 2 parametra - prvi je vrsta eventa koji želimo da pokrene funkciju koja se nalazi na drugom parametru.
Ta funkcija koja se nalazi na drugom parametru je callback funkcija koja se pokreće tek kada se događaj koji 
EventListener "osluškuje" tj. čeka da se dogodi...
 */

const clearBtn = document.getElementById("clear");

/* clearBtn.addEventListener("click", function () {
  alert("Event Listener se dogodio...");
}); */

// Idemo ovo napisati kao arrow funkciju

/* clearBtn.addEventListener("click", () => {
  alert("Event Listener se dogodio...");
}); */

// A možemo i posebno definirati funkciju i onda ju pozvati kao callback funkciju addEventListener metode

function cb() {
  console.log("CallBack funkcija je pozvana na click event");
}

/* clearBtn.addEventListener("click", cb); */

// Ajmo sad koristeći ovaj pristup, obrisati sve zadatke iz naše ToDo aplikacije

const pocisti = () => {
  const zadaci = document.querySelectorAll(".pojedinacni-zadatak");
  zadaci.forEach((zadatak) => {
    zadatak.remove();
  });
};

clearBtn.addEventListener("click", pocisti);

// MOUSE EVENTI

const naslov = document.getElementById("naslov");

naslov.addEventListener("click", () => console.log("lijevi klik, običan klik mišem"));
naslov.addEventListener("dblclick", () => console.log("dupli lijevi klik mišem"));
naslov.addEventListener("mousedown", () => console.log("klikni i drži lijevu tipku miša"));
naslov.addEventListener("mouseup", () => console.log("odvrti se kada pustim klik miša"));
naslov.addEventListener("mouseover", () => console.log("kao hover u css-u, hover-in mišem"));
naslov.addEventListener("mouseout", () => console.log("kao hover u css-u, hover-out mišem"));
