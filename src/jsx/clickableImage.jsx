import "../css/bodyMain.css";

/* The container for Tim's lovely head. */
export default function ClickableImage(data) {
  return (
    <img
      src={data.src}
      alt={data.alt}
      onClick={() => {
        data.onClick();
      }}
      className="clickableImage"
    ></img>
  );
}
