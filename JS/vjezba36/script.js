"use-strict";

/* Treba znati razlikovati Network i errore na adresi koju dohvaćamo...
Za provjere u takvim situacijama možemo koristiti status, ok i statusText na našem res objektu. */

/* fetch("https://httpstat.us/404")
  .then((res) => {
    console.log(res.status);
    console.log(res.ok);
    console.log(res.statusText);
    return res;
  })
  .then(() => console.log("uspjeh"))
  .catch((error) => console.log(error)); */

// Idemo napraviti provjere kako dohvatiti errore iz responsa

/* fetch("https://httpstat.us/404")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Zahtjev je neuspješan");
    }
  })
  .then(() => console.log("uspjeh"))
  .catch((error) => console.log(error)); */

/* Idemo iskoristiti i status za provjeru errora */

fetch("https://httpstat.us/404")
  .then((res) => {
    if (res.status === 404) {
      throw new Error("Error 404, stranica nije nađena");
    } else if (res.status === 500) {
      throw new Error("Error 500, server nije dostupan");
    } else if (res.status !== 200) {
      throw new Error("Zahtjev je neuspješan");
    }
    return res;
  })
  .then(() => console.log("uspjeh"))
  .catch((error) => console.log(error));
