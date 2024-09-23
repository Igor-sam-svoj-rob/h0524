import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    {
      id: "1",
      ime: "Igor",
      email: "example@example.com",
    },
    {
      id: "2",
      ime: "Ivan",
      email: "test@test.com",
    },
  ];

  const renderCard = () =>
    users.map((user) => (
      <div key={user.id}>
        <p>{user.ime}</p>
        <p>{user.email}</p>
        <div>
          <Link to={`edit-user/${user.id}`}>
            <FaEdit />
          </Link>

          <FaTrash />
        </div>
      </div>
    ));

  return (
    <>
      <div>
        <Link to="/add-user">
          <Button />
        </Link>
      </div>
      {users.length ? renderCard() : <p>Nema korisnika</p>}
    </>
  );
};

export default UserList;
