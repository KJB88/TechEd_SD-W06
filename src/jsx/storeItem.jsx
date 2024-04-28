export default function StoreItem(data) {
  return (
    <div className="item-panel">
      <span>{data.itemCount}</span>
      <span>{data.itemName}</span>
      <img src={data.itemSrc}></img>
      <span>{data.itemDesc}</span>
    </div>
  );
}
