import { getItemsLength } from "../js/storeHandler";

export default function StorePanel() {
  const noOfItems = getItemsLength();
  return (
    <>
      <div className="store-panel"> BIG OLD STORE</div>
    </>
  );
}
