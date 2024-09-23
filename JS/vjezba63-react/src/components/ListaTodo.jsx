import HOC from "../HOC";

const ListaTodo = ({ podaci }) => {
  let ispis = podaci.map((todo) => <p key={todo.id}>{todo.title}</p>);

  return (
    <>
      <div>{ispis}</div>
    </>
  );
};

const SearchTodos = HOC(ListaTodo, "todos");
export default SearchTodos;
