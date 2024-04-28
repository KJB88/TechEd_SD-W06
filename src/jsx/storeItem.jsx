import { useFloating, useInteractions } from "@floating-ui/react";
import { useHover } from "@floating-ui/react";
import { useState } from "react";
import useTimer from "../js/useTimer.js";
import { getTotalTims } from "../js/playerHandler.js";

export default function StoreItem(data) {
  const [isOpen, setIsOpen] = useState(false); // Tooltip state
  const [isAffordable, setIsAffordable] = useState(false); // Highlight/greyout state

  // Check if we can afford the current item
  useTimer(500, () => {
    if (getTotalTims() >= data.itemCost) setIsAffordable(true);
    else setIsAffordable(false);
  });

  // Floating UI / Tooltip config
  const { refs, floatingStyles, context } = useFloating({
    placement: "right",
    strategy: "absolute",
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  // Floating UI / Tooltip Hover-interactions
  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  return (
    <>
      {isAffordable ? (
        <div
          className="item-panel item-panel-active"
          onClick={() => {
            data.onClick(data.itemName);
          }}
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          <span>{data.itemCount}</span>
          <span>{data.itemName}</span>
          <span>Costs: {data.itemCost}</span>
          <img src={data.itemSrc} alt={data.itemSrcAlt}></img>
          <span>{data.itemDesc}</span>
        </div>
      ) : (
        <div
          className="item-panel item-panel-inactive"
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          <span>{data.itemCount}</span>
          <span>{data.itemName}</span>
          <span>Costs: {data.itemCost}</span>
          <img src={data.itemSrc} alt={data.itemSrcAlt}></img>
          <span>{data.itemDesc}</span>
        </div>
      )}
      {isOpen && (
        <span
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="item-panel-fluff"
        >
          {data.itemFluff}
        </span>
      )}
    </>
  );
}
