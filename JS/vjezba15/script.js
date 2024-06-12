"use strict";

for (let i = 1; i <= 10; i++) {
  console.log(`Dižemo uteg ${i} puta`);
}

// while petlja/loop

let i = 1;
while (i <= 10) {
  console.log(`Dižemo uteg ${i} puta`);
  i++;
}

/* Primjer zašto postoji while petlja, kada može sve isto što i for petlja.
Klasičan primjer : BACANJE KOCKICE DOK NE DOBIJEMO ODREĐENI BROJ*/

let kocka = Math.floor(Math.random() * 6 + 1);
console.log(kocka);

while (kocka !== 6) {
  console.log(`Dobio si ${kocka}`);
  kocka = Math.floor(Math.random() * 6 + 1);
  if (kocka === 6) {
    console.log(`Napokon si dobio ${kocka}`);
  }
}
