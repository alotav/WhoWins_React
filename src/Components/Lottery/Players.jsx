/* eslint-disable no-unused-vars */
import "./Players.css";
import { useContext, useEffect, useRef, useState } from "react";
import LotteryContext from "../../Context/LotteryContext";

// eslint-disable-next-line react/prop-types
const Players = ({ className }) => {
  const players = useRef("");

  const { fnPlayersListedOk, playersListedOk, setFinalPlayersList, finalPlayersList } =
    useContext(LotteryContext);
  let { setWinner } = useContext(LotteryContext);

  const handleInput = () => {
    // console.log(players.current.value);
    let playersList = players.current.value;
    playersList = playersList.split(",").map((nombre) => {
      // verificacion para nombre < 2 caracteres y cadena de espacios
      if (nombre.length < 2 || nombre.trim().length === 0) {
        fnPlayersListedOk(false);
        // console.log(`Hay un error con el nombre`);
      } else {
        fnPlayersListedOk(true);
        return nombre.trim();
      }
    });
    // console.log(`Lista: ${playersList}`);
    setFinalPlayersList(playersList);
    // console.log(finalPlayersList)
  };

  

  return (
    <div className={`playersContainer ${className}`}>
      <h3>Instrucciones</h3>
      <p>Ingrese los nombres de los participantes separados por coma.</p>
      <p>Haga click en &quot;Sortear!&quot; y espere el resultado.</p>
      <textarea
        name="players"
        id="players"
        cols="30"
        rows="10"
        spellCheck="false"
        placeholder="Ingrese participantes"
        ref={players}
        onInput={handleInput}
      />
    </div>
  );
};

export default Players;
