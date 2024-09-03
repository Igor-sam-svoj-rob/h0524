import { FaPlusSquare } from "react-icons/fa";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const handleInputText = (event) => {
    const inputText = event.target.value;
    setInputText(inputText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputText.trim() === "") {
      alert("Polje ne smije biti prazno");
      return;
    }

    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);

    setInputText("");
  };

  return (
    <form>
      <input type="text" value={inputText} className="todo-input" onChange={handleInputText} />
      <button className="todo-button" type="submit" onClick={handleSubmit}>
        <FaPlusSquare />
      </button>
    </form>
  );
};

export default Form;
