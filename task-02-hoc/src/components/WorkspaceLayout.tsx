import withProtectRoute from "./hoc/withProtectRoute";
import { Outlet, useNavigate } from "react-router-dom";

import HomeLink from "./HomeLink";

const WorkspaceLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    navigate("/");
  };

  return (
    <div>
      <div className=" flex items-center justify-between py-4 px-8 border-b-2 border-b-slate-600">
        <HomeLink />
        <button
          onClick={handleLogout}
          className="w-max h-max bg-fuchsia-900 text-center py-2 px-4 rounded hover:bg-fuchsia-700 transition-colors ease-in duration-200"
        >
          Logout
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default withProtectRoute(WorkspaceLayout);
