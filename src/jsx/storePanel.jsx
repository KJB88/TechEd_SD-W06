import { getItemList } from "../js/storeHandler";
import { getItemCount } from "../js/playerHandler";
import StoreItem from "./storeItem";

export default function StorePanel() {
  const items = getItemList();

  const htmlItems = items.map((item) => (
    <StoreItem
      key={item.itemName}
      itemCount={getItemCount(item.itemName)}
      itemCost={item.itemCost}
      itemName={item.itemName}
      itemSrc={item.itemSrc}
      itemAlt={item.itemSrcAlt}
      itemDesc={item.itemDesc}
      itemFluff={item.itemFluff}
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

function onTick() {}
function onClick(itemName) {
  //TODO: Check Tims
  // TODO: DEduct Tims
  // TODO: Add Item
  // TODO: Apply effect
}
