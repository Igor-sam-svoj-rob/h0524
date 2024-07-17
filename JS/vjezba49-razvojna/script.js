"use strict";

Handlebars.registerHelper("indexPlusJedan", function (options) {
  return options.data.index + 1;
});

fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
  .then((res) => res.json())
  .then((data) => {
    const source = document.getElementById("pokemon-list").innerHTML;
    const template = Handlebars.compile(source);
    const context = { pokemon: data.pokemon_species };
    const html = template(context);
    document.getElementById("ispis").innerHTML = html;
  })
  .catch((error) => {
    console.log("Error", error);
  });
