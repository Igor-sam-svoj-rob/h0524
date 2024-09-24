import { useState } from "react";
import Button from "../shared/Button";
import TextInput from "../shared/TextInput";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { editUser } from "../redux/UserSlice";
import { useDispatch } from "react-redux";

const UserEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const selectedUser = users.filter((user) => user.id === params.id);
  const { ime, email } = selectedUser[0];
  const [podaci, setPodaci] = useState({
    ime,
    email,
  });

  const handleEditUser = () => {
    setPodaci({ ime: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        ime: podaci.ime,
        email: podaci.email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <TextInput
        label="ime"
        value={podaci.ime}
        inputProps={{ type: "text", placeholder: "Ime" }}
        onChange={(e) => setPodaci({ ...podaci, ime: e.target.value })}
      />
      <TextInput
        label="email"
        value={podaci.email}
        inputProps={{ type: "email", placeholder: "E-mail" }}
        onChange={(e) => setPodaci({ ...podaci, email: e.target.value })}
      />
      <Button onClick={handleEditUser} />
    </div>
  );
};

export default UserEdit;
