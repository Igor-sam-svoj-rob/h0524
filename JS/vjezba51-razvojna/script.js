$(document).ready(function () {});

// isto ovo možemo napisati skraćeno

/* $(function () {
  $("#btn1").hide(2000);
  $("#btn2").hide(2000).show(2000);
  $("#btn3").slideUp(2000).slideDown(2000);
}); */

// Još neke popularnije metode : delay, fadeIn, fadeOut, toggle, može i fadeToggle...

// Idemo manipulirati CSS-om

$(function () {
  $(".col-sm-3:first-child").css({ fontWeight: "bold" });
});

// Idemo manipulirati HTML-om

$(function () {
  $("#btn3").html("gumbić 3");
});

// Event listeneri

// funkcija koja će na klik prvog buttona togglat prikaz prvog retka
/* $(document).ready(function () {
  $("#btn1").click(function () {
    $(".row").first().toggle();
  });
}); */

// funkcija koja će na klik drugog buttona togglat prikaz drugog retka
/* $(document).ready(function () {
  $("#btn2").click(function () {
    $(".row").eq(1).toggle();
  });
}); */

// funkcija koja će na klik trećeg buttona togglat prikaz trećeg retka
/* $(document).ready(function () {
  $("#btn3").click(function () {
    $(".row").eq(2).toggle();
  });
}); */

/* 
Možemo upotrijebiti i data varijablu i koristeći this reći, ne znam koji gumb je stisnut ali koji god se stisne uzmi vrijednost nastavka
tog data elementa i konkatenacijom spoji njegov atribut i klasu kako bi togglao ciljani element.
*/

$(document).ready(function () {
  $(".btn-info").click(function () {
    const panelClass = $(this).data("panel-class");
    $("." + panelClass).toggle();
  });
});
