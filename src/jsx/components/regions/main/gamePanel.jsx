import "../../../../css/bodyMain.css";
import ClickableImage from "../modular/clickableImage";
export default function GamePanel() {
  return (
    <div className="panel">
      <ClickableImage src={"tim_circle.png"} alt="" onClick={() => Log()} />
    </div>
  );
}

function Log() {
  console.log("Ey up, loggin' m8");
}
