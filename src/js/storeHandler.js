import { addItem, addTPS, addTPC, getItemCount } from "./playerHandler";

class Item {
  constructor(
    itemID,
    itemName,
    itemCost,
    itemSrc,
    itemSrcAlt,
    itemDesc,
    itemFluff,
    itemEffect
  ) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.itemCost = itemCost;
    this.itemBaseCost = itemCost;
    this.itemSrc = itemSrc;
    this.itemSrcAlt = itemSrcAlt;
    this.itemDesc = itemDesc;
    this.itemFluff = itemFluff;
    this.itemEffect = itemEffect;
  }
}

const itemStore = [
  new Item(
    0,
    "Caffeinated Beverage",
    20,
    "",
    "",
    "+1 more Tims per sec.",
    "They say a programmer turns coffee into code. Well, Tim needs a lot more coffee in that case. Ko-fi him a cup, why don'tcha?",
    () => {
      addTPS(1);
    }
  ),
  new Item(
    1,
    "More Fist",
    100,
    "",
    "",
    "+1 more Tims per click.",
    "How do you improve on the perfect technique? You add more fist. The beatings will continue until coding improves. ",
    () => {
      addTPC(1);
    }
  ),
  new Item(
    2,
    "Suspicious White Powder",
    1000,
    "",
    "",
    "+5 more Tims per sec.",
    "It's sugar, okay. Stop looking at me like that.",
    () => {
      addTPS(5);
    }
  ),
  new Item(
    3,
    "Flying Elbow",
    1000,
    "",
    "",
    "+5 more Tims per click",
    "We've tried everything to keep Tim focused, but it's not helping. Time to enlist Manny to help from the top rope.",
    () => {
      addTPC(5);
    }
  ),
  new Item(
    4,
    "Hire Joe(s)",
    2500,
    "",
    "",
    "+10 more Tims per click & per sec.",
    "When in doubt, hire Joe. Although, his rate is a bit pricy and he insists to be paid in pogs. Whatever those are...",
    () => {
      addTPS(10), addTPC(10);
    }
  ),
];

export function getItemsLength() {
  return itemStore.length;
}

export function getItem(itemID) {
  return itemStore[itemID];
}

export function getItemList() {
  return itemStore;
}

export function getItemCost(itemID) {
  return itemStore[itemID].itemCost;
}

export function buyItem(itemID) {
  addItem(itemStore[itemID]);
  updateCost(itemID);
}

export function updateCost(itemID) {
  itemStore[itemID].itemCost =
    itemStore[itemID].itemBaseCost * (getItemCount(itemID) + 1);
}

export function resetStore() {
  for (let i = 0; i < itemStore.length; i++) {
    itemStore[i].itemCost = itemStore[i].itemBaseCost;
  }
}
