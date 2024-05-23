/* IF ELSE petlja :
 u IF petlji, provjeravamo u zagradama istinitost tvrdnje, i ako je tvrdnja true/istina
 onda će se odvrtiti kod koji se nalazi u bloku kojeg smo definirali uz IF provjeru.
 */

if (true) {
  console.log("Hello World");
}

if (false) {
  console.log("Hello False");
}

// Primjer 1 - idemo provjeriti jesi li punoljetan
const godina = 19;
const punoljetan = godina >= 18;

if (punoljetan) {
  console.log("Punoljetan si, možeš polagati vozački ispit");
}

if (godina >= 18) {
  console.log("Punoljetan si, možeš polagati vozački ispit");
}

const maloljetan = 15;

if (maloljetan >= 18) {
  console.log("Punoljetan si, možeš polagati vozački ispit");
} else {
  console.log("Nisi punoljetan, ne možeš polagati vozački ispit");
}

// Primjer 2 - malo složeniji ispis

if (maloljetan >= 18) {
  console.log("Punoljetan si, možeš polagati vozački ispit");
} else {
  console.log(`Niste dovoljno stari za vozačku. Trebate čekati još ${18 - maloljetan} godine`);
}

// Primjer 3 - izračun stoljeća rođenja
/* Const i Let su za razliku od Var-a BLOCK LVL varijable. Nisu dostupne (ne postoje) van tih blokova i ne 
kose se jedna sa drugom ako ih deklariramo istim imenom ili reinicijaliziramo sa drugom vrijednosti. */

const godRodjenja = 2000;

if (godRodjenja <= 2000) {
  const stoljece = 20;
  console.log(stoljece);
} else {
  const stoljece = 21;
  console.log(stoljece);
}

// Rješenje kako dohvatiti i ispisati vrijednost varijable stoljece

let stoljece;
if (godRodjenja <= 2000) {
  stoljece = 20;
} else {
  stoljece = 21;
}

console.log(stoljece);
