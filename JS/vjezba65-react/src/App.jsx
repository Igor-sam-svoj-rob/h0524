import Todo from "./components/Todo";
import TodoStore from "./store/store";

const App = () => {
  const store = new TodoStore();
  return <Todo store={store} />;
};

export default App;
