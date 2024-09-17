import { useContext } from "react";
import GithubContext from "../context/GithubContext";
import UserKartica from "./UserKartica";

const IspisUsera = () => {
  const { users, loading } = useContext(GithubContext);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {users.map((user) => (
          <UserKartica key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h3>Učitavanje...</h3>;
  }
};

export default IspisUsera;
