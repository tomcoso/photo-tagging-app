import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getBoard } from "../firebaseApp";
import "../style/board.scss";
import Target from "./Target";
import Timer from "./Timer";
import EndPanel from "./EndPanel";
import Header from "./Header";
import Footer from "./Footer";

const Board = () => {
  const navigate = useNavigate();
  const searchParams = useSearchParams()[0];
  const [drag, setDrag] = useState("");
  const [board, setBoard] = useState();
  const [targets, setTargets] = useState();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const fetchGame = async (val) => {
      const board = await getBoard(val);
      setBoard(board.get("imgURL"));
      setTargets(board.get("targets"));
    };
    const val = searchParams.get("board");
    fetchGame(val);
  }, [searchParams]);

  useEffect(() => {
    console.log(searchParams.get("board"));
    const arr = [
      "first",
      "second",
      "third",
      "fourth",
      "first/leaderboard",
      "second/leaderboard",
      "third/leaderboard",
      "fourth/leaderboard",
    ];
    if (!arr.includes(searchParams.get("board"))) navigate("/");
  }, [navigate, searchParams]);

  const [found, setFound] = useState([]);
  const handleClick = (e) => {
    const clickY = e.nativeEvent.offsetY;
    const clickX = e.nativeEvent.offsetX;
    for (let each of targets) {
      if (
        clickX > each.xstart &&
        clickX < each.xend &&
        clickY > each.ystart &&
        clickY < each.yend
      ) {
        if (found.find((x) => x === each)) return;
        console.log("FOUND!");
        setFound((x) => x.concat(each));
        return;
      }
    }
    console.log("X: " + clickX, "Y: " + clickY);
  };

  const [status, setStatus] = useState(-1);
  useEffect(() => {
    if (found.length === 3) {
      setStatus(1);
    }
  }, [found]);

  const handleDrag = (e) => {
    const el = document.getElementById("board-main");
    if (e.clientX === 0 || e.clientY === 0) return;
    const difX = drag.x - e.nativeEvent.offsetX;
    const difY = drag.y - e.nativeEvent.offsetY;
    el.scrollBy(difX, difY);
  };

  useEffect(() => {
    if (status !== 0) return;
    const main = document.getElementById("board-main");
    const val = document.querySelector("#board-main img").clientWidth / 2;
    main.scroll({ left: val, top: val });
  }, [board, status]);

  return (
    <>
      <Header />
      <section id="info-panel">
        <h2>
          {searchParams.get("board")[0].toLocaleUpperCase()}
          {searchParams.get("board").slice(1)} level
        </h2>
        <Link to="/">Main menu</Link>
        <Timer status={status} time={time} setTime={setTime} />
      </section>
      <aside id="targets">
        <h3>Find these to win!</h3>
        <div>
          {targets &&
            targets.map((x, i) => (
              <div
                className={
                  "target-img" + (found.find((j) => j === x) ? " found" : "")
                }
                key={i}
              >
                <img src={x.imgURL} alt={"target" + i} />
              </div>
            ))}
        </div>
      </aside>
      <section id="board-wrapper">
        <div
          id="board-main"
          onClick={handleClick}
          onDragStart={(e) =>
            setDrag({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
          }
          onDragEnd={() => setDrag("")}
          onDrag={handleDrag}
        >
          {status !== 0 ? (
            status !== 1 ? (
              <div id="start-button">
                <p>Click on the targets to mark them</p>
                <p>Find all to win</p>
                <button onClick={() => setStatus(0)}>Start</button>
              </div>
            ) : (
              <EndPanel time={time} board={searchParams.get("board")} />
            )
          ) : (
            <div id="game-img">
              <img src={board} alt="board" />
            </div>
          )}
        </div>
      </section>
      <div id="to-lb">
        <Link to={"/leaderboard/" + searchParams.get("board")}>
          Leaderboard
        </Link>
      </div>
      <Footer />
      {found && found.map((x, i) => <Target key={i} target={x} />)}
    </>
  );
};

export default Board;
