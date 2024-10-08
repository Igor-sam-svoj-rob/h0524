import Header from "./components/Header";
import ListaKartica from "./components/ListaKartica";
import Stats from "./components/Stats";
import KarticaForma from "./components/KarticaForma";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import { FeedbackProvider } from "./Context/Context";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Novi Logo" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <KarticaForma />
                <Stats />
                <ListaKartica />
                <Link to="/about">About stranica</Link>
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
