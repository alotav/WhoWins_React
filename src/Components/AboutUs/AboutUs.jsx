import { useEffect, useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timerShowTitle = setTimeout(() => {
      setShowTitle(true);
    }, 100);
    const timerShowMessage = setTimeout(() => {
      setShowMessage(true);
    }, 200);

    return () => clearTimeout(timerShowTitle, timerShowMessage)
  });

  return (
    <div className="aboutUsContainer">
      <h1 className={`${showTitle ? "show" : "message"}`}>Who Wins?</h1>
      <p className={`${showMessage ? "show" : "message"}`}>
        WhoWins es tu plataforma confiable para organizar sorteos de manera
        sencilla. Con solo unos clics, puedes crear sorteos y darle a tus amigos, familiares o seguidores la
        oportunidad de ganar premios increíbles.
      </p>
    </div>
  );
};

export default AboutUs;
