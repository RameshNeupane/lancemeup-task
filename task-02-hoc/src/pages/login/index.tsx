import HomeLink from "../../components/HomeLink";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-6 gap-8">
      <HomeLink />
      <LoginForm />
    </div>
  );
};

export default Login;
