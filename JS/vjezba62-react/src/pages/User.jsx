import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GithubContext from "../context/GithubContext";
import Spinner from "../shared/Spinner";

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const { name, login, bio, avatar_url, html_url } = user;
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="my-4">
          <Link to="/">Nazad</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8">
          <div className="rounded-lg shadow-xl">
            <figure>
              <img src={avatar_url} alt={login} />
            </figure>
            <div className="flex flex-col align-items ps-4 pt-4">
              <p>{login}</p>
            </div>
            <div className="col-span-2 ps-4">
              <div className="mb-6">
                <h2 className="text-3xl">{name}</h2>
                <p>{bio}</p>
                <a
                  href={html_url}
                  target="_blank"
                  className="bg-indigo-600 text-white py-4 px-2 inline-block mt-4 rounded-md"
                >
                  GitHub stranica
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
