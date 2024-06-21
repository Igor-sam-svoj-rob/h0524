"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatak = document.getElementById("zadatak-input");

const onSubmit = (e) => {
  e.preventDefault();
  console.log("Poslano");
  // Zadatkić - kako napraviti na submit forme provjeru našeg input polja u formi i ako je polje neispunjeno da se izbaci alert
  if (zadatak.value.trim() === "") {
    alert("Niste ispunili input polje");
    return;
  }
  console.log(zadatak.value);
};

forma.addEventListener("submit", onSubmit);

// EVENT BUBBLING

/* Recimo da imamo postavljene onClick event listenere na više razina a na elementima koji se preklapaju... */

const gumb = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");

gumb.addEventListener("click", (e) => {
  alert("gumb je kliknut");
  e.stopPropagation(); // stopPropagation će zaustaviti event bubbling. To će spriječiti da slučajno okinemo neki event koji nismo htjeli.
});

div.addEventListener("click", () => {
  alert("div je kliknut");
});

forma.addEventListener("click", () => {
  alert("forma je kliknuta");
});

// Brisanje određenog elementa

const lista = document.getElementById("zadatak-list");

lista.addEventListener("click", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.remove();
  }
});

// na sličan način promijenite boju teksta zadatka preko kojeg pređemo mišem

lista.addEventListener("mouseover", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "#ff0000";
  }
});

lista.addEventListener("mouseout", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "#000";
  }
});
