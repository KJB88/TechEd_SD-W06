import { useState, useEffect } from "react";

export default function useTimer(
  startVal = 0,
  duration = 1000,
  countCallback = null
) {
  const [count, setCount] = useState(startVal);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(countCallback());
    }, duration);

    return () => {
      clearInterval(interval);
    };
  });

  return count;
}
