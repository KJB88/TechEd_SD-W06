export default function StoreItem(data) {
  return (
    <div>
      <span>{data.itemName}</span>
      <img src={data.itemSrc}></img>
      <p>{data.itemDesc}</p>
    </div>
  );
}
