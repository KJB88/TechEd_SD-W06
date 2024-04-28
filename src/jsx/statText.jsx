import "../css/bodyMain.css";
import { useEffect } from "react";

export default function StatText(data) {
  useEffect(() => {});
  return (
    <>
      <span className="stat-text">
        {data.innerText} {data.stat}
      </span>
    </>
  );
}
