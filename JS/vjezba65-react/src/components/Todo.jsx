import { observer } from "mobx-react-lite";
import { useState } from "react";

const Todo = ({ store }) => {
  const [inputUpis, setInputUpis] = useState("");

  const handleInput = (e) => {
    setInputUpis(e.target.value);
  };

  const handleTodo = (e) => {
    e.preventDefault();
    if (inputUpis.trim()) {
      store.dodaj(inputUpis);
      setInputUpis("");
    }
  };
  return (
    <>
      <form action="#">
        <input type="text" value={inputUpis} onChange={handleInput} />
        <button onClick={handleTodo}>Pošalji</button>
      </form>
      {store.lista.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </>
  );
};

export default observer(Todo);
