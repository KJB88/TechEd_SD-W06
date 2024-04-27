import "../../../../css/bodyMain.css";
import ClickableImage from "../modular/clickableImage";
import StatText from "../modular/statText";
import useTimer from "../../../../js/useTimer.js";
import {
  getTotalTims,
  addTotalTims,
  getTPC,
  getTPS,
  setTotalTims,
} from "../../../../js/playerHandler.js";

export default function GamePanel() {
  const theTimerval = useTimer(getTotalTims(), 1000, onTick);

  return (
    <div className="panel">
      <ClickableImage src={"tim_circle.png"} alt="" onClick={() => onClick()} />
      <div className="stat-panel">
        <StatText innerText="TPC: " stat={getTPC()} />
        <StatText innerText="Tims: " stat={theTimerval} />
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
