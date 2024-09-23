import ListaUsera from "./components/ListaUsera";
import ListaTodo from "./components/ListaTodo";

const App = () => {
  return (
    <div className="flex">
      <div>
        <ListaUsera />
      </div>

      <div>
        <ListaTodo />
      </div>
    </div>
  );
};

export default App;
