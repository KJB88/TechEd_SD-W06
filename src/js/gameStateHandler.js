import {
  resetAllPlayerData,
  savePlayerData,
  setAllPlayerData,
} from "./playerHandler";
import { resetStore } from "./storeHandler";

// Init
initialize();
const autosave = setInterval(save, 1000);
export function initialize() {
  resetGame();
  load();
}

// Saving
export function save() {
  savePlayerData();
}

// Loading
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

// Reset
export function resetGame() {
  resetStore();
}

export function resetPlayerAndGame() {
  clearInterval(autosave);
  resetGame();
  resetAllPlayerData();
  localStorage.clear();
  location.reload();
}
