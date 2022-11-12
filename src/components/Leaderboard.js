import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLeaderboard } from "../firebaseApp";

const Leaderboard = () => {
  const { board } = useParams();
  const [leaderboard, setLeaderboard] = useState();

  useEffect(() => {
    const fetchLeaderboard = async (board) => {
      const data = await getLeaderboard(board);
      setLeaderboard(data);
    };
    fetchLeaderboard(board);
  }, [board]);

  return (
    <div>
      <p>Leaderboard</p>
      <Link to="/">Main menu</Link>
      {leaderboard &&
        leaderboard.map((x, i) => (
          <div key={i}>
            {x.name} / {x.time}
          </div>
        ))}
    </div>
  );
};

export default Leaderboard;
