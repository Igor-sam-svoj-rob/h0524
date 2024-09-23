import HOC from "../HOC";

const ListaUsera = ({ podaci }) => {
  let ispis = podaci.map((user) => <p key={user.id}>{user.name}</p>);

  return (
    <>
      <div>{ispis}</div>
    </>
  );
};

const SearchUsers = HOC(ListaUsera, "users");
export default SearchUsers;
