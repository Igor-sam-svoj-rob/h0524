import Ispis from "./components/Ispis";
import UserStore from "./store/store";

const App = () => {
  const store = new UserStore();
  return <Ispis store={store} />;
};

export default App;
