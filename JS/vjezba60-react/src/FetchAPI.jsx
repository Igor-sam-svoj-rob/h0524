import { useReducer } from "react";
import { POCETNO_STANJE, postReducer } from "./components/PostReducer";

const FetchAPI = () => {
  const [state, dispatch] = useReducer(postReducer, POCETNO_STANJE);
  const postFetch = () => {
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_USPJEH", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  return (
    <div>
      <button onClick={postFetch}>{state.loading ? "Dohvati usere" : "Učitavamo..."}</button>
      <p>{state.post.title}</p>
      <p>{state.error && "Došlo je do pogreške"}</p>
    </div>
  );
};

export default FetchAPI;
