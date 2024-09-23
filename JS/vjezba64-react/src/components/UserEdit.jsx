import { useState } from "react";
import Button from "../shared/Button";
import TextInput from "../shared/TextInput";
import { useNavigate } from "react-router-dom";

const UserEdit = () => {
  const navigate = useNavigate();
  const [podaci, setPodaci] = useState({
    ime: "",
    email: "",
  });

  const handleEditUser = () => {
    setPodaci({ ime: "", email: "" });
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
