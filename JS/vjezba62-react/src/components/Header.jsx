import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-700 py-2 px-6 text-neutral-100 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaGithub />
        <Link to="/">Github tražilica</Link>
      </div>
      <nav>
        <div className="flex justify-end gap-2">
          <Link to="/">Početna</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
