import "../css/bodyMain.css";
import { useEffect } from "react";

/* Text that displays a given statistic */
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
