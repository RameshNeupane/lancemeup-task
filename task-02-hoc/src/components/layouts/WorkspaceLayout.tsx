import withProtectRoute from "../hoc/withProtectRoute";
import { Outlet, useNavigate } from "react-router-dom";

import HomeLink from "../links/HomeLink";
import WorkspaceSidebarLink from "../links/WorkspaceSidebarLink";

const WorkspaceLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex">
      {/* workspace sidebar */}
      <div className=" w-60 h-full border-r-2 border-r-slate-600 flex flex-col justify-start items-center gap-8 py-4">
        <HomeLink />
        <div className=" flex flex-col items-center justify-center w-full gap-2 py-4 border-y-2 border-y-slate-600">
          <WorkspaceSidebarLink url="/workspace">
            Dashboard
          </WorkspaceSidebarLink>
          <WorkspaceSidebarLink url="/workspace/users">
            Users
          </WorkspaceSidebarLink>
        </div>
        <button
          onClick={handleLogout}
          className="w-max h-max bg-fuchsia-900 text-center py-2 px-4 rounded hover:bg-fuchsia-700 transition-colors ease-in duration-200"
        >
          Logout
        </button>
      </div>

      {/* workspace outlet */}
      <div className="w-full p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default withProtectRoute(WorkspaceLayout);
