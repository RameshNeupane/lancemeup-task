import { Link } from "react-router-dom";

const Home = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 pt-12 text-center">
      <h1 className="text-2xl font-medium">Task: HOC for route protection</h1>

      {/* login info */}
      {isAuthenticated !== "true" && (
        <div>
          <h2 className=" text-xl font-medium underline">Login Info</h2>
          <p>Username: {import.meta.env.VITE_USERNAME}</p>
          <p>Password: {import.meta.env.VITE_PASSWORD}</p>
        </div>
      )}

      {/* workspace link */}
      <Link
        to={"/workspace"}
        className="w-max h-max px-6 py-4 bg-fuchsia-900 rounded hover:bg-fuchsia-700 transition-colors ease-in duration-200"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
