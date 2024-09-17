import { Link } from "react-router-dom";

const UserKartica = ({ user }) => {
  return (
    <div className="text-center bg-slate-200 flex items-center gap-4 p-5">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="h-24 w-24 rounded-full ring-2 ring-black"
      />
      <div>
        <h2 className="uppercase">{user.login}</h2>
        <Link to={`/user/${user.login}`} className="underline py-4">
          Idi na profil
        </Link>
      </div>
    </div>
  );
};

export default UserKartica;
