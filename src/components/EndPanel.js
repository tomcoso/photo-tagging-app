import { useState } from "react";

const EndPanel = (props) => {
  const [name, setName] = useState("");

  const time =
    Number.parseInt(props.time / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (props.time % 60).toString().padStart(2, "0");

  return (
    <div>
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
        ></input>
      </div>
      <button type="button">Add to Leaderboard</button>
    </div>
  );
};

export default EndPanel;
