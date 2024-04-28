/* Libs */
import { useFloating, useInteractions } from "@floating-ui/react";
import { useHover } from "@floating-ui/react";
import { useState } from "react";

/* Custom Code*/
import useTimer from "../js/useTimer.js";
import { getTotalTims } from "../js/playerHandler.js";
import { getItemCost } from "../js/storeHandler.js";

/* Component that handles displaying an Item within the Store.
It also maintains the tooltip state (open, closed) as well as checking if an Item
is currently affordable (for greying out / highlighting).*/
export default function StoreItem(data) {
  const [isOpen, setIsOpen] = useState(false); // Tooltip state
  const [itemCost, setItemCost] = useState(data.itemCost);
  const [isAffordable, setIsAffordable] = useState(false); // Highlight/greyout state

  // Check if we can afford the current item
  useTimer(100, () => {
    if (getTotalTims() >= itemCost) setIsAffordable(true);
    else setIsAffordable(false);

    setItemCost(getItemCost(data.itemID));
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
    // TODO: Find a way to only conditionally wrap the div with the required className swap
    <>
      {isAffordable ? (
        <div
          className="item-panel item-panel-active"
          onClick={() => {
            data.onClick(data.itemID, itemCost);
            setItemCost(getItemCost(data.itemID));
          }}
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          <span>{data.itemCount}</span>
          <span>{data.itemName}</span>
          <span>Costs: {itemCost}</span>
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
          <span>Costs: {itemCost}</span>
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
