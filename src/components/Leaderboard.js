import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLeaderboard } from "../firebaseApp";
import "../style/leaderboard.scss";
import Header from "./Header";
import Footer from "./Footer";

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
    <>
      <Header />
      <main id="leaderboard">
        <div id="lb-info">
          <Link to="/">Main menu</Link>
          <h2>
            {board[0].toUpperCase()}
            {board.slice(1)} level
          </h2>
          <h3>Leaderboard</h3>
        </div>
        <ol>
          {leaderboard &&
            leaderboard.map((x, i) => (
              <li key={i}>
                <span>{x.name}</span>
                <span>{x.time}</span>
              </li>
            ))}
        </ol>
      </main>
      <Footer />
    </>
  );
};

export default Leaderboard;
