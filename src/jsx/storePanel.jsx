import { getItemList } from "../js/storeHandler";
import { getItemCount } from "../js/playerHandler";
import StoreItem from "./storeItem";

export default function StorePanel() {
  const ticker = useTimer(0, 1000, onTick);
  const items = getItemList();

  const htmlItems = items.map((item) => (
    <StoreItem
      key={item.itemName}
      itemCount={getItemCount(item.itemName)}
      itemName={item.itemName}
      itemSrc={item.itemSrc}
      itemDesc={item.itemDesc}
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
