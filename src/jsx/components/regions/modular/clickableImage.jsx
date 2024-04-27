import "../../../../css/bodyMain.css";

export default function ClickableImage(data) {
  return (
    <img
      src={data.src}
      alt={data.alt}
      onClick={data.onClick}
      className="clickableImage"
    ></img>
  );
}
