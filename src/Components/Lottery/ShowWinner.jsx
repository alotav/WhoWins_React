/* eslint-disable react/prop-types */
import "./ShowWinner.css";

const ShowWinner = ({ winName }) => {
  return (
    <div className="showWinnerContainer">
      <div className="winnerMessage">
        <h3>GANADOR</h3>
        <p>Felicitaciones {winName}, disfruta tu premio!</p>
      </div>
    </div>
  );
};

export default ShowWinner;
