import "./HowItWorks.css";
import Message1 from "./Message1";
import Message2 from "./Message2";
import Message3 from "./Message3";
import { useEffect, useState } from "react";

const HowItWorks = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setShowMessages(true);
    }, 200);
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 100);
    return () => clearTimeout(messageTimer, titleTimer);
  }, []);

  return (
    <div className="howItWorksContainer">
      <h1 className={` ${showTitle ? "show" : "message"} `}>¿Cómo Funciona?</h1>
      <Message1 className={` ${showMessages ? "show" : "message"} `} />
      <Message2 className={` ${showMessages ? "show" : "message"} `} />
      <Message3 className={` ${showMessages ? "show" : "message"} `} />
    </div>
  );
};

export default HowItWorks;
