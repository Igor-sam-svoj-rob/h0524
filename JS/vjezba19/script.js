"use strict";

// innerHTML dohvaća HTML elemente unutar selektiranog elementa
console.log(document.body.innerHTML);
// innerText dohvaća sadržaj unutar selektiranog elementa
console.log(document.body.innerText);

/* document.body.innerHTML = "<h1>Hello World!</h1>"; */

/* 1 metoda na document objektu kojom možemo utjecati na izmjene u DOM-u: GETELEMENTBYID.
Pomoću getElementById metode možemo dohvatiti što želimo pomoći ID-a.
 */

console.log(document.getElementById("header"));

/* Da ne pišemo kobasice osobito ako dolazi do višestrukog pozivanja ovog elementa, možemo
pomoću selektora zapisati element u varijablu za daljnje lakše manipuliranje. */
const header = document.getElementById("header");

header.innerHTML = "<h1>Hello World!</h1>";
