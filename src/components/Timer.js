import { useEffect } from "react";

const Timer = ({ status, time, setTime }) => {
  useEffect(() => {
    if (status !== 0) return;
    const tick = () => {
      setTime((x) => x + 1);
    };
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [status, setTime]);

  return (
    <div id="timer">
      {Number.parseInt(time / 60)
        .toString()
        .padStart(2, "0")}
      :{(time % 60).toString().padStart(2, "0")}
    </div>
  );
};

export default Timer;
