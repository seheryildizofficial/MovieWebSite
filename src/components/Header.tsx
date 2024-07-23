import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="text-3xl font-bold">
      <Link to={"/"}>
        <img className="max-w-40 " src="/src/assets/img/logo.png" />
      </Link>
    </header>
  );
};
export default Header;
