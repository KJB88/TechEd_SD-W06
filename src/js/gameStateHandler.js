import {
  resetAllPlayerData,
  savePlayerData,
  setAllPlayerData,
} from "./playerHandler";
import { resetStore } from "./storeHandler";
// TODO: STYLING
// TODO: Animation on click
// TODO: Reading background
initialize();
setInterval(save, 1000);
export function initialize() {
  resetGame();
  load();
}

export function save() {
  savePlayerData();
}

export function load() {
  let player = JSON.parse(localStorage.getItem("player"));

  // No player data
  if (player == null) {
    resetAllPlayerData();
    save();
  }
  // Player data found
  else {
    setAllPlayerData(
      player.playerName,
      player.totalTims,
      player.TPS,
      player.TPC,
      player.items
    );
  }
}

export function resetGame() {
  resetStore();
}
