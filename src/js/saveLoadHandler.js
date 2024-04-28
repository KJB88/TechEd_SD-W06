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
  console.log("init");
  resetGame();
  load();
}

export function save() {
  console.log("saving");
  savePlayerData();
}

export function load() {
  let player = JSON.parse(localStorage.getItem("player"));

  // No player data
  if (player == null) {
    console.log("new player");
    resetAllPlayerData();
    save();
  }
  // Player data found
  else {
    console.log("existing player");
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
