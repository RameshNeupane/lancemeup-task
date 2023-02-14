import { Link } from "react-router-dom";

const HomeLink = () => {
  return (
    <Link
      to={"/"}
      className=" font-medium text-2xl hover:text-gray-300"
      title="Home"
    >
      Lancemeup
    </Link>
  );
};

export default HomeLink;
