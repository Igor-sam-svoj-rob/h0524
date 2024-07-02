"use strict";

// fetch metoda za dohvaćanje sa URL-a

const url = "https://jsonplaceholder.typicode.com/todos/1";

function dohvatiPodatke() {
  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

dohvatiPodatke();

// fetch metoda za dohvaćanje iz txt filea

fetch("./tekst.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));

// fetch metoda za dohvaćanje iz json filea

fetch("./filmovi.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Zadatčić - dohvatite ovaj jedan todos zadatak i zamijenite sadržaj njegovog titlea sa sadržajem naslova iz HTML-a
function dohvatiPodatke2() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const naslov = document.querySelector("h1").textContent;
      data.title = naslov;
    })
    .catch((greska) => console.greska("Greska:", greska));
}

dohvatiPodatke2();

/* 
GET metoda je defaultna metoda kod fetcha, pa ju ne moramo definirati. Međutim, što ako želimo upotrijebiti neku od 3 ostale metode.
Npr. POST metoda se mora definirati i osim što se mora definirati, moramo ubaciti još 2 stvari : body i headers.
Body: podaci koje želimo poslati
Headers. Bilo kakav HTTP header koji želimo koristiti i podaci koji nam pomažu pri autorizaciji kod server (npr. access tokeni)
*/

function kreirajPost(post) {
  fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

kreirajPost({ title: "Moj post", body: "Ovo je sadržaj mog posta" });
