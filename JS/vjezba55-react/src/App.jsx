import HelloFn from "./components/HelloFn";
import HelloCl from "./components/HelloCl";
import { Hello } from "./components/Hello";

function App() {
  return (
    <>
      <div>Div element</div>
      <p>Ovo nije greška</p>
      <HelloFn />
      <HelloCl />
      <Hello />
    </>
  );
}

export default App;
