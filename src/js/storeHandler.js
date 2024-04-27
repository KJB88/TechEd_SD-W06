const itemStore = [
  {
    itemName: "",
    itemSrc: "",
    itemSrcAlt: "",
    itemDesc: "",
  },
];

export function getItemsLength() {
  return itemStore.length;
}

// TODO: handle undefined
export function getItem(itemName) {
  return itemStore.find((item) => (item.itemName = itemName));
}
