export default function ClickableImage(data) {
  return <img src={data.src} alt={data.alt onclick={data.onClick}></img>;
}
