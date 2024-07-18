$(document).ready(function () {
  fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(error);
      }
    })
    .then(function (data) {
      const source = $("#pokemon-list").html();
      const template = Handlebars.compile(source);
      const context = {
        pokemon: data.pokemon_species.slice(0, 20),
        tableClass: "table",
      };
      const html = template(context);

      $("#result").html(html);

      afterRender();
    })
    .catch(function (error) {
      console.error("Error", error);
    });

  function addStripes() {
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  function afterRender() {
    $('[data-bs-toggle="popover"]').popover();
    $("table th").css("color", "darkBlue");
    addStripes();
  }
});
