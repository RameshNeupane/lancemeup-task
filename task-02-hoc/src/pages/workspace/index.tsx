import withProtectRoute from "../../components/hoc/withProtectRoute";

const Workspace = () => {
  return (
    <div className="px-8 py-4">
      <h1 className=" text-3xl font-medium">
        Welcome, {import.meta.env.VITE_USERNAME}!!!
      </h1>
    </div>
  );
};

export default withProtectRoute(Workspace);
