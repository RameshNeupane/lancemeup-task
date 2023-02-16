import HomeLink from "@/components/links/HomeLink";
import LoginForm from "@/components/forms/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-6 gap-8">
      <HomeLink />
      <LoginForm />
    </div>
  );
};

export default Login;
