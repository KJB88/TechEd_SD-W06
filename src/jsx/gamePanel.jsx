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
  getPlayerName,
} from "../js/playerHandler.js";

/* The panel which holds the clickable TIM face and stat counters */
export default function GamePanel() {
  const [count, setCount] = useState(getTotalTims());
  const [tpc, setTPC] = useState(getTPC());
  const [tps, setTPS] = useState(getTPS());

  // Update stats every second
  useTimer(1000, () => {
    setCount(onTick());
    setTPS(getTPS());
    setTPC(getTPC());
  });

  return (
    <div className="panel">
      <span className="name-span">{getPlayerName()}</span>
      <ClickableImage
        src={"tim_circle.png"}
        alt=""
        onClick={() => {
          onClick();
        }}
      />
      <div className="stat-panel">
        <StatText innerText="TPC: " stat={tpc} />
        <StatText innerText="Tims: " stat={count} />
        <StatText innerText="TPS: " stat={tps} />
      </div>
    </div>
  );
}

// On click, add to the total tims
function onClick() {
  addTotalTims(getTPC());
}

// On tick, add to the totalTims
function onTick() {
  const tims = getTotalTims();
  const tps = getTPS();
  const result = tims + tps;
  setTotalTims(result);

  return result;
}
