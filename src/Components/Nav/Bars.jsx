/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Bars.css";

const Bars = ({className, fnSetBars}) => {
  return (
    <div className={`barsContainer ${className}`}>
      {/* <i className="fa-solid fa-angles-right"></i> */}
      <ul className="barsMenu">
        <Link to={"/"} onClick={fnSetBars}>
          <li>Como funciona?</li>
        </Link>
        <Link to={"/lottery"} onClick={fnSetBars}>
          <li>Realizar Sorteo</li>
        </Link>
        <Link to={"/about"} onClick={fnSetBars}>
          <li>Conocenos</li>
        </Link>
      </ul>
    </div>
  );
};

export default Bars;
