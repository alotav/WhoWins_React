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
  const [finalPlayersList, setFinalPlayersList] = useState([]);
  const [winner, setWinner] = useState("");

  const fnPlayersListedOk = (bool) => {
    if (bool) {
      setPlayersListedOk(true);
    } else {
      setPlayersListedOk(false);
    }
    console.log(`Listado de jugadores: ${playersListedOk}`);
  };

  // create random int
  const createRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const getWinner = () => {
    let winnerNumber = createRandom(0, finalPlayersList.length -1)
    let rdmWinner = finalPlayersList[winnerNumber];
    console.log(`Ganador: ${rdmWinner}`)
    console.log(winnerNumber)
    console.log(typeof(finalPlayersList))
    // setWinner(rdmWinner);
    // console.log(winner)
  };

  useEffect(() => {
    console.log(`Lista Final: ${finalPlayersList}`);
  }, [finalPlayersList]);

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
    <LotteryContext.Provider
      value={{
        fnPlayersListedOk,
        playersListedOk,
        setWinner,
        setFinalPlayersList,
        finalPlayersList
      }}
    >
      <div className="lotteryContainer">
        <button
          className={`newLotteryBtn ${showTitle ? "show" : "message"}`}
          onClick={fnShowAddPlayers}
        >
          <h1>Nuevo Sorteo</h1>
        </button>

        <Players className={`${showAddPlayers ? "show" : "message"}`} />

        <button
          type="submit"
          className={`lotteryBtn ${showBtnLottery ? "show" : "message"}`}
          disabled={!playersListedOk}
          onClick={getWinner}
        >
          <h3>Sortear!</h3>
        </button>
      </div>
    </LotteryContext.Provider>
  );
};

export default Lottery;
