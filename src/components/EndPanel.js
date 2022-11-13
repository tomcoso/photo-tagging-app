import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToLeaderboard } from "../firebaseApp";
import "../style/endpanel.scss";

const EndPanel = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const time =
    Number.parseInt(props.time / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (props.time % 60).toString().padStart(2, "0");

  const add = () => {
    if (name.length === 0) return;
    const board = props.board;
    addToLeaderboard({ name, time, board });
    navigate(`/leaderboard/${board}`);
  };

  return (
    <div id="leaderboard-panel">
      <p>Congratulations!</p>
      <p>You found them all in </p>
      <span>{time}</span>
      <div>
        <label htmlFor="lb-name-input">What's your name?</label>
        <input
          id="lb-name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Joe M"
        ></input>
      </div>
      <button type="button" onClick={add}>
        Add to Leaderboard
      </button>
    </div>
  );
};

export default EndPanel;
