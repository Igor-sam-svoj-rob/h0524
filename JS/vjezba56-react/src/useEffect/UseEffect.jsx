import { useState, useEffect } from "react";

const UseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ime, setIme] = useState("");

  /* Ovakav pristup bez liste zavisnosti će pokretati ovaj useEffect pri svakoj promjeni širine prozora što će 
  promijeniti vrijednost statea, a svaka promjena statea pokreće novi render. Samim time će pri svakom pozivu
  setter funkcije ovaj useEffect biti pokrenut. */
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    console.log("Učitavam se pri svakoj promjeni širine prozora....");
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  /* Ako deklariramo listu zavisnosti, a ostavimo ju praznu, ovaj useEffect e se pokrenuti samo jednom,
  prilikom učitavanja/mountanja komponente. Ono što je ComponentDidMount u klasnom pristupu... */
  useEffect(() => {
    console.log("Učitavam se samo prilikom mountanja komponente...");
  }, []);

  /* Ovaj useEffect će se pokrenuti prilikom učitavanja, ali i svaki put kada se promijeni vrijednost
  varijable ime koja je zapisana pomoću useState hooka... */
  useEffect(() => {
    console.log(`Promijenilo se ime, ime je sada ${ime}`);
  }, [ime]);

  /* Ovaj useEffect će se pokrenuti prilikom učitavanja s time da kada se završi izvršavanje, on će se unmountat
  a to ćemo napraviti tako što ćemo returnat funkciju iz useEffecta, tzv. cleanup funkciju.
  Pri svakoj izmjeni komponente ta clean funkcija će unmountat komponentu kako bi mogao izrenderirat novu, to
  nećemo mi naravno okom niti vidjeti jer se radi o milisekundama... */

  useEffect(() => {
    console.log(`ime je sada ${ime}`);
    return () => {
      console.log("Ovim returnom smo odmontirali komponentu prije novog rendera");
    };
  }, [ime]);

  return (
    <>
      <p>Širina prozora: {windowWidth}</p>
      <input type="text" value={ime} onChange={(event) => setIme(event.target.value)} />
    </>
  );
};

export default UseEffect;
