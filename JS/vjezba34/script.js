"use strict";

// umjesto tog console loga, dohvatite element sa ID-em ispis, ubacite onda ovaj sadržaj u taj element (ispišite ga u DOM-u na ekran)
const button = document.getElementById("povuci");
button.addEventListener("click", () => {
  fetch("./uzorak.txt")
    .then((res) => res.text())
    .then((data) => (document.querySelector("#ispis").innerHTML = data))
    .catch((greska) => console.error("Greska:", greska));
});

/* dohvatite na button "Učitaj lokalni JSON" users.json i unutar funkcije kreirajte listu za sve elemente u json fileu i ispišite ih na klik
u div elementu sa ID-em ispis. */
const buttonlokalniUser = document.getElementById("lokalni_json");
buttonlokalniUser.addEventListener("click", () => {
  fetch("./users.json")
    .then((res) => res.json())
    .then((data) => {
      const ispisDiv = document.getElementById("ispis");
      ispisDiv.innerHTML = "";
      const ul = document.createElement("ul");
      data.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `Id: ${user.id} Ime: ${user.ime}, Prezime: ${user.prezime}`;
        ul.appendChild(li);
      });
      ispisDiv.appendChild(ul);
    })
    .catch((greska) => console.error("Greska:", greska));
});

/* Dohvatite na button "Učitaj vanjski JSON" podatke sa vanjskog API-a (https://jsonplaceholder.typicode.com/posts) i naravno ispišite ih na klik
u div elementu sa ID-em ispis...  */
const buttonVanjskiUser = document.getElementById("vanjski_json");
buttonVanjskiUser.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const ispisDiv = document.getElementById("ispis");
      ispisDiv.innerHTML = "";

      const ul = document.createElement("ul");

      data.forEach((post) => {
        const li = document.createElement("li");
        li.textContent = `Id: ${post.id} naslov: ${post.title}, sadržaj: ${post.body}`;
        ul.appendChild(li);
      });

      ispisDiv.appendChild(ul);
    })
    .catch((error) => console.error("Greska", error));
});

/* Ajmo sad još metodom POST ubaciti novog člana u naš API,
pomoću forme sa ID-em post. Znači unest naslov i sadržaj u input
polja i na submit ih poslati metodom post na naš typicode kao
novi post... ispišite tog novog člana na kraju u konzoli.. */

document.getElementById("post").addEventListener("submit", dodajPost);

function dodajPost(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Novi post:", data);
    })
    .catch((greska) => console.error("Greska:", greska));
}

/* ZADAĆA/VJEŽBA

na linku https://jsonplaceholder.typicode.com/users imamo 10 usera. Složi kartice za ispis tih usera i ispiši ime i email
i napravi search formu koja će filtrirati po imenu usere iz tog fetcha. Na način da naravno funkcionira kada se ukuca
nešto u search da search updatea na svako novo slovo listu i da naravno na brisanje slova liste vraća usere koji spadaju
pod prethodni kriterij.
*/
