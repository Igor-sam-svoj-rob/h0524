import { useState, useContext } from "react";
import GithubContext from "../context/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, fetchUsers, clearUsers } = useContext(GithubContext);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text === "") {
      alert("Molimo unesite nešto u polje");
    } else {
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <>
      <div className="flex gap-8 justify-center my-8">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-end">
            <input
              type="text"
              className="bg-gray-200 text-black"
              placeholder="Pretraži usere"
              value={text}
              onChange={handleChange}
            />
            <button className="bg-indigo-600 text-white py-4 px-2 rounded-md">Pretraži</button>
          </div>
        </form>
        {users.length > 0 && (
          <div className="flex justify-start">
            <button className="bg-red-900 text-white py-4 px-2 rounded-md" onClick={clearUsers}>
              Resetiraj
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserSearch;
