"use-strict";

/* 
Zadatak - dohvatite button i na njega postavite funkciju kao event on click. gdje će te dohvatiti usere sa typcodea i provjeriti prvo
da li je res.ok i ovisno o tome ispisati uspjeh u konzoli ili errore u konzoli.
*/

/* const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Neuspjeh");
      }
    })
    .then((data) => {
      console.log("Uspjeh:", data);
    })
    .catch((error) => {
      console.error("Greška prilikom dohvaćanja korisnika:", error);
    });
}); */

// NAPIŠITE OVO KAO ASYNC/AWAIT funkciju. Kako bi dodali novog usera na ovu listu koristeći POST metodu prilikom fetcha.

const button = document.querySelector("button");
const noviUser = {
  name: "Marko",
  email: "mail@email.com",
};

button.addEventListener("click", async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("Greška prilikom dohvaćanja korisnika");
    }
    const data = await res.json();
    console.log("Uspjeh pri dohvaćanju:", data);

    const postRes = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noviUser),
    });
    if (!postRes.ok) {
      throw new Error("Greška prilikom dodavanja korisnika");
    }
    const postData = await postRes.json();
    console.log("Novi korisnik je dodan:", postData);
  } catch (error) {
    console.error("Error:", error);
  }
});

/* Zadaća - umjesto ispisa u konzoli, složite ispis imena ispod buttona, naravno na klik buttona. */
