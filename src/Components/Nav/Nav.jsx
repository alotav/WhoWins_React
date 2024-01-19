import { Link } from "react-router-dom";
import logo from "./img/whowinsimg.png";
import "./Nav.css";
import { useState } from "react";
import Bars from "./Bars";


const Nav = () => {
  // eslint-disable-next-line no-unused-vars
  const [showBars, setShowBars] = useState(false);

  const SetBars = () => {
      setShowBars(!showBars)
    }  

  return (
    
    <div className="navContainer">
      <Bars className={ `${showBars ? "show" : "" }`} fnSetBars = {SetBars}/>
      <img src={logo} alt="logo" />
      <button onClick={SetBars}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className="navMenu">
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
