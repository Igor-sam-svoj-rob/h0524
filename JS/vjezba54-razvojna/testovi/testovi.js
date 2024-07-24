const axios = require("axios");

const funkcije = {
  zbroj: (broj1, broj2) => broj1 + broj2,
  isNull: () => null,
  provjeri: (x) => x,
  kreiraj: () => {
    const osoba = { ime: "Ivan", prezime: "Ivić" };
    return osoba;
  },
  fetchOsoba: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((error) => error);
  },
};

module.exports = funkcije;
