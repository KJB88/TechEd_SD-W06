const itemStore = [
  {
    itemName: "Caffeinated Beverage",
    itemCost: 20,
    itemIncrease: 50,
    itemSrc: "",
    itemSrcAlt: "",
    itemDesc: "Increases passive Tims gained per second by 1.",
    itemFluff:
      "They say a programmer turns coffee into code. Well, Tim needs a lot more coffee in that case. Ko-fi him a cup, why don'tcha?",
  },
  {
    itemName: "Suspicious White Powder",
    itemCost: 1000,
    itemIncrease: 500,
    itemSrc: "",
    itemSrcAlt: "",
    itemDesc: "Increases passive Tims gained per second by 5.",
    itemFluff: "It's sugar, okay. Stop looking at me like that.",
  },
  {
    itemName: "More Fist",
    itemCost: 100,
    itemIncrease: 500,
    itemSrc: "",
    itemSrcAlt: "",
    itemDesc: "Increases Tims gained on click by 1",
    itemFluff:
      "How do you improve on the perfect technique? You add more fist. The beatings will continue until coding improves. ",
  },
  {
    itemName: "Flying Elbow",
    itemCost: 1000,
    itemIncrease: 1000,
    itemSrc: "",
    itemSrcAlt: "",
    itemDesc: "Increases Tims gained on click by 5.",
    itemFluff:
      "We've tried everything to keep Tim focused, but it's not helping. Time to enlist Manny to help from the top rope.",
  },
  {
    itemName: "Hire Joe(s)",
    itemCost: 5000,
    itemIncrease: 5000,
    itemSrc: "",
    itemSrcAlt: "",
    itemDesc: "Increases Tims gained on click by 10.",
    itemFluff:
      "When in doubt, hire Joe. Although, his rate is a bit pricy and he insists to be paid in pogs. Whatever those are...",
  },
];

export function getItemsLength() {
  return itemStore.length;
}

// TODO: handle undefined
export function getItem(itemName) {
  return itemStore.find((item) => (item.itemName = itemName));
}

export function getItemList() {
  return itemStore;
}
