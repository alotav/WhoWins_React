import { Link } from "react-router-dom";
import logo from "./img/whowinsimg.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navContainer">
      <img src={logo} alt="logo" />
      <ul>
        <Link to={"/"}>
          <li>Como funciona?</li>
        </Link>
        <Link to={"/lottery"}>
          <li>Realizar Sorteo</li>
        </Link>
        <Link to={"/about"}>
          <li>Conocenos</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
