import React, { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

type WorkspaceSidebarLinkProps = {
  url: string;
  children: ReactNode;
};

const WorkspaceSidebarLink: React.FC<WorkspaceSidebarLinkProps> = ({
  url,
  children,
}) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={url}
      state="workspace"
      className={` w-40 text-center p-2 rounded transition-colors ease-in duration-150 ${
        pathname === url
          ? "bg-slate-400 text-black"
          : " hover:bg-slate-600 hover:text-black bg-none text-white"
      }`}
    >
      {children}
    </NavLink>
  );
};

export default WorkspaceSidebarLink;
