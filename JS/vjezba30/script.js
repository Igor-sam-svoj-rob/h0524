"use strict";

/* 
HTTP - HyperText Transfer Protocol je protokol za spanje i primanje podataka na webu. On je klijent/server protokol.
Zahtjev inicijalizirate vi (klijent) a server će reagirati sa odgovorom. Odgovor može biti HTML/CSS/JS file, slike ili neki drugi resurs kao
i podaci u obliku JSON-a i XML-a.
AJAX - Asyncronous JavaScript and XML. 

AJAX/XMLHttpRequest je objekt koji se prvotno koristi za komunakciju sa serverom iako ćemo u današnje vrijeme puno više raditi sa Fetch API-em
koji nam je dostupan u našem browseru.

HTTP metode:

Imamo GET, POST, PUT (PATCH/EDIT), DELETE zahtjeve.

GET - traži podatke sa servera
POST - šalje podatke na server
PUT - updatea podatke na serveru
DELETE - briše podatke sa servera

HTTP status kodove:

100 - continue

200 - uspjeh
201 - uspjeh (kreirali ste nešto)
204 - upsjeh (ali nema sadržaja)

300 - redirect
301 - trajni redirecti
302 - privremeni redirecti

400 - Error kod klijenta (Bad request)
401 - neautoriziran zahtjev
403 - zabranjeni zahtjev
404 - zahtjev za nečim što ne postoji (Not Found)

500 - greške na serveru
*/

// idemo kreirati http request kako bi ispisali imena iz našeg JSON filea

const xhr = new XMLHttpRequest();
const metoda = "GET";
const url = "./imena.json";

// open metoda inicijalizira naš HTTP zahtjev i prima 2 parametra - metodu i lokaciju kao stringove

/* xhr.open(metoda, url);

xhr.onreadystatechange = function () {
  console.log(this.readyState);
  console.log(this.status);
};

xhr.send(); */

/* 
Postoji 5 mogućih rješenja za readyState:
0: Zahtjev nije inicijaliziran
1: Server konekcija je uspostavljena
2: Zahtjev je zaprimljen
3: Procesuiranje zahtjeva
4: Zahtjev je završio i odgovor je spreman
*/

// --------------------------------------------------------------------------

xhr.open(metoda, url);

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    data.forEach((osoba) => {
      const li = document.createElement("li");
      li.innerHTML = `${osoba.ime} ${osoba.prezime} ima ${osoba.godine}`;
      document.getElementById("imena").appendChild(li);
    });
  }
};

xhr.send();

/* API poziv sa online resursa je sličan, samo moramo promijeniti url i onda naravno
isčitati što dobijemo od podataka kako bi ih i ispisali... */

const xhr2 = new XMLHttpRequest();
const metoda2 = "GET";
const url2 = "https://api.github.com/users/igor-sam-svoj-rob/repos";

xhr2.open(metoda2, url2);

xhr2.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `${repo.name}`;
      document.getElementById("repos").appendChild(li);
    });
  }
};

xhr2.send();
