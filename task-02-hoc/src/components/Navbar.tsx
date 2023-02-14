import { Link } from "react-router-dom";

import HomeLink from "./HomeLink";

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <nav className=" flex items-center justify-between py-4 px-8 border-b-2 border-b-slate-600">
      <HomeLink />

      <div className="flex item-center justify-center gap-4">
        <Link to={"/explore"} className="hover:text-gray-300 text-base">
          Explore
        </Link>
        {isAuthenticated !== "true" && (
          <Link to={"/login"} className="hover:text-gray-300 text-base">
            Login
          </Link>
        )}
        <Link to={"/workspace"} className="hover:text-gray-300 text-base">
          Workspace
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
