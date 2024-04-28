import { buyItem, getItemList } from "../js/storeHandler";
import { getItemCount, getTotalTims, setTotalTims } from "../js/playerHandler";
import StoreItem from "./storeItem";

export default function StorePanel() {
  const items = getItemList();

  const htmlItems = items.map((item) => (
    <StoreItem
      key={item.itemID}
      itemID={item.itemID}
      itemCount={getItemCount(item.itemID)}
      itemCost={item.itemCost}
      itemName={item.itemName}
      itemSrc={item.itemSrc}
      itemAlt={item.itemSrcAlt}
      itemDesc={item.itemDesc}
      itemFluff={item.itemFluff}
      onClick={onClick}
    />
  ));

  return (
    <>
      <div className="store-panel">
        <span className="store-title">Store</span>
        {htmlItems}
      </div>
    </>
  );
}

function onClick(itemID, itemCost) {
  console.log(itemID);
  const currentTims = getTotalTims();
  if (currentTims <= itemCost) return;

  setTotalTims(currentTims - itemCost);
  buyItem(itemID);
}
