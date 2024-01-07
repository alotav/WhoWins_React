/* eslint-disable no-unused-vars */
import Confetti from "react-dom-confetti";
import "./Celebration.css";
import { useEffect, useState } from "react";

const Celebration = () => {
  const [active, setActive] = useState(false);

  const handleConfeti = () => {
    console.log("Lanzando confeti...");
    const timer = setInterval(() => {
      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, 499);
    }, 500);

    setTimeout(() => {
      clearInterval(timer);
    }, 3000);
  };

  useEffect(() => {
    handleConfeti();
  }, []);

  const config = {
    angle: "189",
    spread: "360",
    startVelocity: "58",
    elementCount: "200",
    dragFriction: "0.13",
    duration: "6840",
    stagger: "7",
    width: "15px",
    height: "15px",
    perspective: "499px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div className="celebrationContainer">
      <div className="confeti">
        <Confetti active={active} config={config} />
      </div>
    </div>
  );
};

export default Celebration;
