/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Lottery.css";
import Players from "./Players";
import LotteryContext from "./../../Context/LotteryContext.jsx";

const Lottery = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showAddPlayers, setShowAddPlayers] = useState(false);
  const [showBtnLottery, setBtnLottery] = useState(false);

  // const [players, setPlayers] = useState()
  const [playersListedOk, setPlayersListedOk] = useState(false);
  const [winner, setWinner] = useState("");

  const fnPlayersListedOk = (bool) => {
    if (bool) {
      setPlayersListedOk(true);
    } else {
      setPlayersListedOk(false);
    }
    console.log(`Listado de jugadores: ${playersListedOk}`);
  };

  const fmWinnerName = (name) => {
    console.log(name);
  };

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
    <LotteryContext.Provider value={{ fnPlayersListedOk, fmWinnerName, playersListedOk }}>
      <div className="lotteryContainer">
        <button
          className={`newLotteryBtn ${showTitle ? "show" : "message"}`}
          onClick={fnShowAddPlayers}
        >
          <h1>Nuevo Sorteo</h1>
        </button>

        <Players className={`${showAddPlayers ? "show" : "message"}`} />

        <button type="submit" className={`lotteryBtn ${showBtnLottery ? "show" : "message"}`} 
        disabled = {!playersListedOk}>
          <h3>Sortear!</h3>
        </button>
      </div>
    </LotteryContext.Provider>
  );
};

export default Lottery;
