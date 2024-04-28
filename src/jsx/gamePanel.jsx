import "../css/bodyMain.css";
import ClickableImage from "./clickableImage.jsx";
import StatText from "./statText.jsx";
import useTimer from "../js/useTimer.js";
import { useState } from "react";
import {
  getTotalTims,
  addTotalTims,
  getTPC,
  getTPS,
  setTotalTims,
} from "../js/playerHandler.js";

export default function GamePanel() {
  useTimer(1000, () => {
    setCount(onTick());
  });
  const [count, setCount] = useState(getTotalTims());

  return (
    <div className="panel">
      <ClickableImage src={"tim_circle.png"} alt="" onClick={() => onClick()} />
      <div className="stat-panel">
        <StatText innerText="TPC: " stat={getTPC()} />
        <StatText innerText="Tims: " stat={count} />
        <StatText innerText="TPS: " stat={getTPS()} />
      </div>
    </div>
  );
}

function onClick() {
  addTotalTims(getTPC());
  console.log(getTotalTims());
}

function onTick() {
  const tims = getTotalTims();
  const tps = getTPS();
  const result = tims + tps;
  setTotalTims(result);

  return result;
}
