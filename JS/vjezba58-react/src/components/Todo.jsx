import { FaCheck, FaTrash } from "react-icons/fa";

const Todo = ({ text }) => {
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <FaCheck />
      </button>
      <button className="trash-btn">
        <FaTrash />
      </button>
    </div>
  );
};

export default Todo;
