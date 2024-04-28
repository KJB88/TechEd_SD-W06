import { getItemList } from "../js/storeHandler";
import StoreItem from "./storeItem";

export default function StorePanel() {
  const items = getItemList();

  const htmlItems = items.map((item) => (
    <StoreItem
      key={item.itemName}
      itemName={item.itemName}
      itemSrc={item.itemSrc}
      itemDesc={item.itemDesc}
    />
  ));
  return (
    <>
      <div className="store-panel">
        BIG OLD STORE
        <ul>{htmlItems}</ul>
      </div>
    </>
  );
}
