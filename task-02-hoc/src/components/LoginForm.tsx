import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  // handle login form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      username === import.meta.env.VITE_USERNAME &&
      password === import.meta.env.VITE_PASSWORD
    ) {
      setIsError(false);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/workspace");
    }
    setIsError(true);
  };

  return (
    <div className=" w-[512px] h-max flex flex-col items-center gap-6 border-2 border-slate-600 rounded-md p-8">
      <h1 className=" text-2xl font-bold">Login</h1>

      {/* error message */}
      {isError && (
        <p className=" text-red-900">Invalid username or password.</p>
      )}

      {/* form */}
      <form
        method="post"
        className=" w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {/* username */}
        <div className=" w-full">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full bg-gray-700 h-12 rounded pl-2 border-2 border-transparent focus:outline-none focus:border-white"
            placeholder="aaryn098"
            required
          />
        </div>

        {/* password */}
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full bg-gray-700 h-12 rounded pl-2 border-2 border-transparent focus:outline-none focus:border-white"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-fuchsia-900 text-center py-3 rounded hover:bg-fuchsia-700 transition-colors ease-in duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
