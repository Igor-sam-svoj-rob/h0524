import HelloFn from "./components/HelloFn";
import HelloCl from "./components/HelloCl";
import { Hello } from "./components/Hello";
import Counter from "./components/Counter";
import MessageCl from "./components/MessageCl";

function App() {
  return (
    <>
      <div>Div element</div>
      <p>Ovo nije greška</p>
      <HelloFn ime="Igor" prezime="Jevremović">
        <p>Učimo React...</p>
      </HelloFn>
      <HelloCl ime="Darko" prezime="Horvat">
        I mi učimo React...
      </HelloCl>
      <Hello zemlja="Hrvatska" />
      <MessageCl />
      <Counter />
    </>
  );
}

export default App;
