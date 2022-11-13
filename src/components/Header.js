import { Link } from "react-router-dom";
import "../style/header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>r/Place Tag</h1>
      </Link>
    </header>
  );
};

export default Header;
