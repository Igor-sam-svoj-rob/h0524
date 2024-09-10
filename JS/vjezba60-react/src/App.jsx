import { useReducer } from "react";
import FetchAPI from "./FetchAPI";
import Counter from "./Counter";

const reducer = (state, action) => {
  switch (action.type) {
    case "UVECAJ":
      return { brojac: state.brojac + 1 };
    case "UMANJI":
      return { brojac: state.brojac - 1 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { brojac: 0 });

  return (
    <div>
      <p>Brojac:{state.brojac}</p>
      <button onClick={() => dispatch({ type: "UVECAJ" })}>Uvećaj</button>
      <button onClick={() => dispatch({ type: "UMANJI" })}>Umanji</button>
      <FetchAPI />
      <Counter korak={5} />
    </div>
  );
};

export default App;
