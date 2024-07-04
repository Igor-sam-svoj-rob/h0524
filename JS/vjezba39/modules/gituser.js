"use strict";

const dohvatiUsera = async () => {
  const res = await fetch("https://api.github.com/users/Igor-sam-svoj-rob");
  const data = await res.json();
  console.log(data.name);
};

export default dohvatiUsera;
