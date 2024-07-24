const funkcija = require("./testovi");

test("Zbroji 2 + 2 da dobiješ 4", () => {
  expect(funkcija.zbroj(2, 2)).toEqual(4);
});

test("Zbroji 2 + 2 da nije 5", () => {
  expect(funkcija.zbroj(2, 2)).not.toBe(5);
});

// toBeNull
test("Trebao bi dobiti null", () => {
  expect(funkcija.isNull()).toBeNull();
});

// toBeFalsy
test("Hoću dobit Falsy vrijednost", () => {
  expect(funkcija.provjeri(undefined)).toBeFalsy();
});

// S obzirom da se radi o provjeri objekta koristimo toStrictEqual
test("Osoba bi trebala biti Ivan Ivić", () => {
  expect(funkcija.kreiraj()).toStrictEqual({
    ime: "Ivan",
    prezime: "Ivić",
  });
});

// testove možete pisati bez provjere nekog koda
test("Treba biti manje od 10", () => {
  const a = 4;
  const b = 5;
  expect(a + b).toBeLessThan(10);
});

// toContain - provjera imamo li vrijednost u listi
test("Ivan mora biti u listi", () => {
  listaImena = ["Marija", "Luka", "Maja"];
  expect(listaImena).toContain("Luka");
});

test("Korisnik mora biti Leanne Graham", () => {
  expect.assertions(1);
  return funkcija.fetchOsoba().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// async/await pristup

test("Korisnik mora biti Leanne Graham", async () => {
  expect.assertions(1);
  const data = await funkcija.fetchOsoba();
  expect(data.name).toEqual("Leanne Graham");
});
