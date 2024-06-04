"use strict";

function podijelaJabuke(jabuke) {
  return jabuke * 4;
}

function podijelaNaranci(naranca) {
  return naranca * 10;
}

function nutriBullet(jabuke, naranca) {
  debugger;
  const komadiJabuke = podijelaJabuke(jabuke);
  const komadiNarance = podijelaNaranci(naranca);
  const sok = `Sok od ${komadiJabuke} komada jabuke i ${komadiNarance} komada naranče`;
  return sok;
}

console.log(nutriBullet(4, 4));
console.log(nutriBullet(2, 3));
