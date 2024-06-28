"use strict";
/* Promise (obećanje) je objekt koji će rezultirati jednom vrijednosti koja može biti rješena ili nerješena (odbačena).
Sastoji se od egzekutor funkcije koja mora napraviti provjeru uspješnosti (resolve) ili neuspješno (reject). Nakon toga možemo slagati lančano
.then metodu koja dobiva podatke koji se dohvate kada je promise uspješan (resolve) i .catch metode s kojom ćemo definirati što će se 
dogoditi ako dobijemo neuspjeh (reject). */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async zadatak je uspješno dovršen");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("Promise je uspješno dovršen");
});

promise.catch(() => {
  console.log("Nešto je pošlo po krivu");
});

console.log("Pozz iz globalnog scopea");

// Idemo napraviti ovu priču putem anonimne funkcije, to možemo pomoću lančanog povezivanja metoda (chainanja metoda)

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ ime: "Maja", dob: 30 });
  }, 1000);
}).then((osoba) => console.log(`${osoba.ime} ima ${osoba.dob} godina`));

// Idemo još vidjeti kako riješiti error stanje

const dohvatiUsera = new Promise((resolve, reject) => {
  setTimeout(() => {
    let greska = false;

    if (!greska) {
      resolve({ ime: "Maja", dob: 30 });
    } else {
      reject("Nešto je pošlo po krivu");
    }
  }, 1000);
});

dohvatiUsera
  .then((osoba) => console.log(`${osoba.ime} ima ${osoba.dob} godina`))
  .catch((error) => console.log(error))
  .finally(() =>
    console.log("Obećanje prošlo sa resolve ili reject, finally će se uvijek izvrtiti")
  );

// Idemo se malo igrati sa kodom iz vježbe 29

const imena = [
  { ime: "Ivan", prezime: "Horvat" },
  { ime: "Jura", prezime: "Jurić" },
];

const kreirajIme = (ime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;

      if (!error) {
        imena.push(ime);
        resolve();
      } else {
        reject("Nešto je pošlo po krivu");
      }
    }, 2000);
  });
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((person) => {
      const div = document.createElement("div");
      div.innerHTML = `${person.ime} ${person.prezime}`;
      document.getElementById("imena").appendChild(div);
    });
  }, 1000);
};

const prikaziError = (error) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${error}</strong>`;
  document.getElementById("imena").appendChild(p);
};

kreirajIme({ ime: "Maja", prezime: "Majić" }).then(getImena).catch(prikaziError);

// Idemo složiti promise chaining

const promiseChaining = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ ime: "Marko", prezime: "Markić" });
    } else {
      reject("Greška, nešto je pošlo po krivu");
    }
  }, 1000);
});

/* Recimo da trebamo napraviti nešto nakon što se odvrti prvi .then sa podacima koji su nam dostupni u prvoj iteraciji.
Ovaj prvi .then nam može napraviti return i vrijednost zapisanu u tom returnu možemo koristiti putem parametra u idućem .thenu kojeg ćemo
jednostavno nastaviti nakon prvog .thena. 

To se zove promise chaining i osigurava nam da podatke iz različitih izvora kao što bi nam se dogodilo sa callback hellom možemo
puno bolje i preglednije odraditi...
*/

promiseChaining
  .then((korisnik) => {
    console.log(korisnik);
    return korisnik.ime;
  })
  .then((ime) => {
    console.log(ime);
    return ime.length;
  })
  .then((duzina) => {
    console.log(duzina);
  })
  .catch((greska) => {
    console.log(greska);
  });
