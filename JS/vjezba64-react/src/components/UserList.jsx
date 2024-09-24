import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/UserSlice";

const UserList = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const removeUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => (
      <div key={user.id}>
        <p>{user.ime}</p>
        <p>{user.email}</p>
        <div>
          <Link to={`edit-user/${user.id}`}>
            <FaEdit />
          </Link>

          <FaTrash onClick={() => removeUser(user.id)} />
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
