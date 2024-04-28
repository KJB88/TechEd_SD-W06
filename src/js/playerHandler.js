import { generateAdjectiveNoun } from "./wordlibs";

const playerData = {
  playerName: "DEFAULT",
  totalTims: 0,
  TPS: 1,
  TPC: 1,
  items: [0, 0, 0, 0, 0],
};

/* Total Tims */
// Get
export function getTotalTims() {
  return playerData.totalTims;
}

// Add
export function addTotalTims(value) {
  playerData.totalTims += value;
}

// Set
export function setTotalTims(value) {
  playerData.totalTims = value;
}

// Reset
export function resetTotalTims() {
  setTotalTims(0);
}

/* Tims per Sec */
// Get
export function getTPS() {
  return playerData.TPS;
}

// Add
export function addTPS(value) {
  playerData.TPS += value;
}

// Set
export function setTPS(value) {
  playerData.TPS = value;
}

// Reset
export function resetTPS() {
  setTPS(0);
}

/* Tims per Click*/
// Get
export function getTPC() {
  return playerData.TPC;
}

// Add
export function addTPC(value) {
  playerData.TPC += value;
}

// Set
export function setTPC(value) {
  playerData.TPC = value;
}

// Reset
export function resetTPC() {
  setTPC(1);
}

/* Tim Items */
// Get
export function getItems() {
  return playerData.items;
}

// Get Count of an Item
export function getItemCount(index) {
  return playerData.items[index];
}

// Add
export function addItem(item) {
  playerData.items.push(item);
}

// Reset
export function resetItems() {
  // TODO:
}

/* Player Name */
// Get
export function getPlayerName() {
  return playerData.playerName;
}

// Set
export function setPlayerName(value) {
  playerData.playerName = value;
}

// Reset
export function resetPlayerName() {
  setPlayerName(generateAdjectiveNoun());
}

/* All */
// Reset
export function resetAllPlayerData() {
  resetPlayerName();
  resetTotalTims();
  resetTPC();
  resetTPS();
  resetItems();
}
