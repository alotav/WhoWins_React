import { useEffect, useState } from "react";
import "./Lottery.css";
import Players from "./Players";

const Lottery = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showAddPlayers, setShowAddPlayers] = useState(false);
  const [showBtnLottery, setBtnLottery] = useState(false);

  const fnShowAddPlayers = () => {
    const addPlayersTimer = setTimeout(() => {
      setShowAddPlayers(true);
    }, 100);
    const addBtnLotteryTimer = setTimeout(() => {
      setBtnLottery(true);
    }, 300);
    return () => clearTimeout(addPlayersTimer, addBtnLotteryTimer);
  };

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 100);

    return () => clearTimeout(titleTimer);
  }, []);


  return (
    <div className="lotteryContainer">
      <button
        className={`newLotteryBtn ${showTitle ? "show" : "message"}`}
        onClick={fnShowAddPlayers}
      >
        <h1>Nuevo Sorteo</h1>
      </button>

      <Players className={`${showAddPlayers ? "show" : "message"}`} />

      <button className={`lotteryBtn ${showBtnLottery ? "show" : "message"}`}>
        <h3>Sortear!</h3>
      </button>
    </div>
  );
};

export default Lottery;
