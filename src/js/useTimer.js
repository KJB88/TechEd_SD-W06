import { useEffect } from "react";

// setInterval - but Reactive!
export default function useTimer(duration = 1000, countCallback) {
  useEffect(() => {
    const interval = setInterval(() => {
      countCallback();
    }, duration);

    return () => {
      clearInterval(interval);
    };
  });
}
