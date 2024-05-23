// STRICT/STROGA provjera

const godina = 18;

/* Kada koristimo === znaka jednakosti to znači da ćemo uspoređivati da li je broj iz 
varijable godina jednak broju 18. To će biti prva provjera. Nakon toga će se odraditi druga provjera,
koja će usporediti da li su vrste podataka iz varijable i broj 18 ista vrsta podatka. */
if (godina === 18) {
  console.log("punoljetna ste osoba (stroga provjera)");
}

//LOOSE/BLAGA provjera

/* Kada koristimo == znaka jednakosti, to znači da ćemo uspoređivati da li je broj u stringu jednak
broju. To će biti jedina provjera. Neće se provjeravati tip podatka. */
if ("18" == 18) {
  console.log("punoljetna ste osoba");
}

// Primjer 1

const broj = Number(prompt("Koji ti je najdraži broj"));
console.log(typeof broj, broj);

if (broj === 7) {
  console.log("Broj 7 je i moj najdraži broj");
} else if (broj === 15) {
  console.log("Broj 15 nije najdraži, al je ok");
} else {
  console.log("Baš nemaš dobrih brojeva");
}
