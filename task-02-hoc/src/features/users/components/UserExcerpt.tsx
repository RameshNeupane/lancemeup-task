import React from "react";

import User from "@/components/icons/User";
import { UserExcerptProps } from "@/types/users";

const UserExcerpt: React.FC<UserExcerptProps> = ({ user }) => {
  return (
    <div className="sm:w-full md:w-[450px] h-max flex justify-start items-center gap-4 p-4 border-2 border-slate-600 rounded-md hover:bg-slate-800 transition-colors ease-in duration-150">
      {/* profile image */}
      <div className=" w-40 h-40 rounded-full border border-slate-600 overflow-hidden p-4">
        <User />
      </div>

      {/* username and name */}
      <div className=" flex flex-col h-full items-start justify-end gap-2">
        <span className=" text-2xl font-medium">{user.username}</span>
        <span className=" text-sm">{user.name}</span>
      </div>
    </div>
  );
};

export default UserExcerpt;
