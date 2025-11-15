import { Link } from "react-router";

const HomePage = () => {
  return (
    <>
      HomePage
      <Link to={"/login"}>Login page</Link>
    </>
  );
};

export default HomePage;
