import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Explore from "./pages/explore";
import Workspace from "./pages/workspace";
import HomeLayout from "./components/layouts/HomeLayout";
import UsersList from "./features/users/components/UsersList";
import WorkspaceLayout from "./components/layouts/WorkspaceLayout";

const App = () => {
  return (
    <div className=" font-rubik text-white bg-gray-900 w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/workspace" element={<WorkspaceLayout />}>
            <Route index element={<Workspace />} />
            <Route path="users" element={<UsersList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
