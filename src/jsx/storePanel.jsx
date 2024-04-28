import { buyItem, getItemList } from "../js/storeHandler";
import { getItemCount, getTotalTims, setTotalTims } from "../js/playerHandler";
import StoreItem from "./storeItem";

/* The panel that holds the Store and Items */
export default function StorePanel() {
  const items = getItemList();

  // Time for some data....cartography?
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

// Check if we can afford purchase, deduct (or cancel) then send to handlers
function onClick(itemID, itemCost) {
  const currentTims = getTotalTims();
  if (currentTims <= itemCost) return;

  setTotalTims(currentTims - itemCost);
  buyItem(itemID);
}
