import { updateCost } from "./storeHandler";
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
  setTPS(1);
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

// Set
export function setItem(itemID, quantity) {
  playerData.items[itemID] = quantity;
}

// Add
export function addItem(item) {
  playerData.items[item.itemID] += 1;

  item.itemEffect();
}

// Reset
export function resetItems() {
  for (let i = 0; i < playerData.items.length; i++) playerData.items[i] = 0;
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
// Save
export function savePlayerData() {
  localStorage.setItem("player", JSON.stringify(playerData));
}
// Set
export function setAllPlayerData(
  playerName,
  playerTims,
  playerTPS,
  playerTPC,
  playerItems
) {
  setPlayerName(playerName);
  setTotalTims(playerTims);
  setTPS(playerTPS);
  setTPC(playerTPC);

  for (let i = 0; i < playerItems.length; i++) {
    if (playerItems[i] == 0) continue;

    setItem(i, playerItems[i]);
    if (playerItems[i] > 0) updateCost(i);
  }
}

// Reset
export function resetAllPlayerData() {
  resetPlayerName();
  resetTotalTims();
  resetTPC();
  resetTPS();
  resetItems();
}
