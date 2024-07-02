"use strict";

/* function getData(putanja, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", putanja);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.response));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 2000) + 100);
}

getData("./filmovi.json", (filmovi) => {
  console.log(filmovi);
  getData("./glumci.json", (glumci) => {
    console.log(glumci);
    getData("./redatelji.json", (redatelji) => {
      console.log(redatelji);
    });
  });
}); */

// Idemo ovaj Callback Hell napisati pomoću promisea

/* function getData(putanja) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", putanja);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject("Dogodila se greška");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 2000) + 100);
  });
}

getData("./filmovi.json")
  .then((filmovi) => {
    console.log(filmovi);
    return getData("./glumci.json");
  })
  .then((glumci) => {
    console.log(glumci);
    return getData("./redatelji.json");
  })
  .then((redatelji) => {
    console.log(redatelji);
  })
  .catch((error) => {
    console.log(error);
  }); */

//-----------------------------------------------------------------------------------

function getData(putanja) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", putanja);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject("Dogodila se greška");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 2000) + 100);
  });
}

const filmovi = getData("./filmovi.json");
const glumci = getData("./glumci.json");
const redatelji = getData("./redatelji.json");

const ispis = new Promise((resolve, reject) => {
  resolve("Hello World");
});

/* 
Promise all metoda nam omogućava da napravimo listu obećanja sa njihovim podacima. ispis i njenu vrijednost smo ododali na kraju...
*/

Promise.all([filmovi, glumci, redatelji, ispis])
  .then((podaci) => {
    console.log(podaci);
  })
  .catch((greska) => {
    console.log(greska);
  });
