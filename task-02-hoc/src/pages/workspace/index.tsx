import withProtectRoute from "../../components/hoc/withProtectRoute";

const Workspace = () => {
  return (
    <div>
      <h1 className=" text-3xl font-medium">
        Welcome, {import.meta.env.VITE_USERNAME}!!!
      </h1>
    </div>
  );
};

export default withProtectRoute(Workspace);
