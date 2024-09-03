import SearchPolje from "./components/SearchPolje";
import ListaKartica from "./components/ListaKartica";
import { useState, useEffect } from "react";

const App = () => {
  const [osobe, setOsobe] = useState([]);
  const [searchPolje, setSearchPolje] = useState("");
  const [filter, setFilter] = useState(osobe);

  useEffect(() => {
    fetch("https://reqres.in/api/users/")
      .then((res) => res.json())
      .then((data) => setOsobe(data.data));
  }, []);

  useEffect(() => {
    const noviFilter = osobe.filter((osoba) => {
      return osoba.first_name.toLowerCase().includes(searchPolje);
    });
    setFilter(noviFilter);
  }, [osobe, searchPolje]);

  const handleFilterChange = (event) => {
    const searchPoljeString = event.target.value.toLowerCase();
    setSearchPolje(searchPoljeString);
  };

  return (
    <div className="app">
      <SearchPolje handleFilterChange={handleFilterChange} />
      <ListaKartica filter={filter} />
    </div>
  );
};

export default App;
