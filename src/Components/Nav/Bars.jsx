import { Link } from "react-router-dom";
import "./Bars.css";

const Bars = () => {
  return (
    <div className="barsContainer">
      <i className="fa-solid fa-angles-right"></i>
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

export default Bars;
