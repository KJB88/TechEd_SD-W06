import "../css/footer.css";
import { resetPlayerAndGame } from "../js/gameStateHandler";

export default function Footer() {
  return (
    <footer>
      <p>Send help. Im losing my mind.</p>
      <button id="clear-data" onClick={onClick}>
        Clear Data
      </button>
    </footer>
  );
}

function onClick() {
  resetPlayerAndGame();
}
