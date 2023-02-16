import { useSelector } from "react-redux";

import UserExcerpt from "./UserExcerpt";
import withProtectRoute from "@/components/hoc/withProtectRoute";
import { getAllUsers, getUsersError, getUsersStatus } from "../usersSlice";

const UsersList = () => {
  const users = useSelector(getAllUsers);
  const usersStatus = useSelector(getUsersStatus);
  const usersError = useSelector(getUsersError);

  let content;
  if (usersStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (usersStatus === "failed") {
    content = <p>Error: {usersError}</p>;
  } else if (usersStatus === "succeeded") {
    content = users.map((user) => <UserExcerpt key={user.id} user={user} />);
  }

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-wrap gap-6">
      {content}
    </div>
  );
};

export default withProtectRoute(UsersList);
