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

// POINTER EVENTI

const forma = document.getElementById("zadatak-forma");

const pointerEvent = (event) => {
  console.log(event); // na eventu šemo vidjeti sve moguće pointer evente koji su nam bitni
  console.log(event.target); // daje nam HTML element kojeg smo kliknuli
  console.log(event.target.value); // daje vrijednosti upisane u tom elementu
  console.log(event.type); // dat će nam vrstu eventa koji je aktiviran
  console.log(event.clientX); // daje nam vrijednost po horizontali relativnom prema prozoru
  console.log(event.clientY); // daje nam vrijednost po vertikali relativno prema prozoru
  console.log(event.offsetX); // daje nam vrijednost po horizontali relativno prema elementu
  console.log(event.offsetY); // daje nam vrijednost po vertikali relativno prema elementu
  console.log(event.pageX); // daje nam vrijednost po horizontali relativno prema stranici
  console.log(event.pageY); // daje nam vrijednost po vertikali relativno prema stranici
  console.log(event.screenX); // daje nam vrijednost po horiznotali relativno prema ekranu monitora
  console.log(event.screenY); // daje nam vrijednost po vertikali relativno prema ekranu monitora
};

/* preventDefault metoda - ona spriječava defaultno ponašanje određenog HTML elementa. 
  Konkretno primjera radi, spriječava refresh stranice prilikom npr. submitanja forme ili npr. klik na link
*/

forma.addEventListener("click", pointerEvent);

// KEYBOARD EVENTI

/* const inputKey = document.getElementById("filter"); */

/* Imamo najčešće keypress i keydown. */

const onKeyPress = () => {
  console.log("keypress");
};

const keyUp = () => {
  console.log("keyup");
};

const keyDown = (e) => {
  if (e.key === "Enter") {
    alert("Stisnuo si enter");
  }
  // Možete napraviti i provjeru da li je korisnik "sjeo" na tipku
  if (e.repeat) {
    alert(`Pusti tipku ${e.key}`);
  }
};

/* inputKey.addEventListener("keypress", onKeyPress); */ // svaki klik tipkovnice (bilo što da kliknem), će aktivirati ovaj eventListener
/* inputKey.addEventListener("keyup", keyUp); */ // kada stisnete i maknete prst sa tipke, onda će se odraditi funkcija keyUp
/* inputKey.addEventListener("keydown", keyDown); */ // čim stisnete tipku ova funkcija će se pokrenuti

// INPUT EVENTI
const inputForma = document.getElementById("zadatak-input");

const naInput = (e) => {
  console.log(e.target.value); // e.target.value će nam dati sve ono što je upisano u input polju
  naslov.textContent = e.target.value; // s ovim ćemo ažurirati sadržaj naslova s onim što upisujemo u input polju
};

inputForma.addEventListener("input", naInput);
inputForma.addEventListener("focus", naFocus); // provjerava da li smo kliknuli na input polje
inputForma.addEventListener("blur", naBlur); // provjerava jesmo li kliknuli van input polja
