import { useState } from "react";
import Header from "./components/Header";
import KarticaData from "./data/KarticaData";
import ListaKartica from "./components/ListaKartica";
import Stats from "./components/Stats";
import KarticaForma from "./components/KarticaForma";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";

const App = () => {
  const [kartica, setKartica] = useState(KarticaData);
  const handleFeedback = (unos) => {
    unos.id = uuidv4();
    setKartica([unos, ...kartica]);
  };
  const handleDelete = (id) => {
    setKartica(kartica.filter((item) => item.id != id));
  };

  return (
    <Router>
      <Header text="Novi Logo" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <KarticaForma handleFeedback={handleFeedback} />
              <Stats kartica={kartica} />
              <ListaKartica kartica={kartica} handleDelete={handleDelete} />
              <Link to="/about">About stranica</Link>
            </>
          }
        ></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
