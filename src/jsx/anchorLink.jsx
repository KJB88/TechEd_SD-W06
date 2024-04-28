import "../css/common.css";

export default function AnchorLink(data) {
  return (
    <a href={data.url} className="drop-shadow-2px" aria-label={data.ariaLabel}>
      {data.innerText}
    </a>
  );
}
