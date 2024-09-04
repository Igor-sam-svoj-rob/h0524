import { useState } from "react";
import Header from "./components/Header";
import KarticaData from "./data/KarticaData";
import ListaKartica from "./components/ListaKartica";

const App = () => {
  const [kartica, setKartica] = useState(KarticaData);
  const handleDelete = (id) => {
    setKartica(kartica.filter((item) => item.id != id));
  };

  return (
    <>
      <Header text="Novi Logo" />
      <ListaKartica kartica={kartica} handleDelete={handleDelete} />
    </>
  );
};

export default App;
