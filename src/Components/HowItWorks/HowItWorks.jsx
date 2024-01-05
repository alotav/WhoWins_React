/* eslint-disable no-unused-vars */
import "./HowItWorks.css";
import Message1 from "./Message1";
import Message2 from "./Message2";
import Message3 from "./Message3";
import { useEffect, useState } from "react";

const HowItWorks = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 100);
    const message1Timer = setTimeout(() => {
      setShowMessage1(true);
    }, 200);
    const message2Timer = setTimeout(() => {
      setShowMessage2(true);
    }, 300);
    const message3Timer = setTimeout(() => {
      setShowMessage3(true);
    }, 400);

    return () => clearTimeout(message1Timer, titleTimer);
  }, []);

  return (
    <div className="howItWorksContainer">
      <h1 className={` ${showTitle ? "show" : "message"} `}>¿Cómo Funciona?</h1>
      <Message1 className={` ${showMessage1 ? "show" : "message"} `} />
      <Message2 className={` ${showMessage2 ? "show" : "message"} `} />
      <Message3 className={` ${showMessage3 ? "show" : "message"} `} />
    </div>
  );
};

export default HowItWorks;
