const suma = require("./suma");

test("Zbraja 1 + 2 da budu 3", () => {
  expect(suma(1, 2)).toBe(3);
});
