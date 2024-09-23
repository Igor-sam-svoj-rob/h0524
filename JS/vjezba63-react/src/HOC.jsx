import { useState, useEffect } from "react";

const HOC = (Komponenta, ekstenzija) => {
  return () => {
    const [podaci, setPodaci] = useState([]);
    const [upit, setUpit] = useState("");

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${ekstenzija}`)
        .then((res) => res.json())
        .then((data) => setPodaci(data));
    }, [ekstenzija]);

    const handleChange = (event) => {
      setUpit(event.target.value);
    };

    let filterPodaci = podaci;

    if (ekstenzija === "todos") {
      filterPodaci = podaci.slice(0, 10);
    }

    filterPodaci = filterPodaci.filter((podatak) => {
      if (ekstenzija === "users") {
        const { name } = podatak;
        return name.toLowerCase().indexOf(upit.toLowerCase()) >= 0;
      }
      if (ekstenzija === "todos") {
        return podatak.title.toLowerCase().indexOf(upit.toLowerCase()) >= 0;
      }
      return true; // Ako ekstenzija nije "posts" ili "todos" vratimo sve podatke...
    });

    return (
      <>
        <input type="text" value={upit} onChange={handleChange} />
        <Komponenta podaci={filterPodaci} />
      </>
    );
  };
};

export default HOC;
