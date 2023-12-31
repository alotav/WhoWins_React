import "./Lottery.css";
import Players from "./Players";

const Lottery = () => {
  return (
    <div className="lotteryContainer">
      <button>
        <h1>Nuevo Sorteo</h1>
      </button>

      <Players />

      <button className="lotteryBtn">
        <h3>Sortear!</h3>
      </button>
    </div>
  );
};

export default Lottery;
