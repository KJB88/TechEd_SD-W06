//import { useState, useEffect } from "react";
import Header from "./components/regions/header/header.jsx";
import Main from "./components/regions/main/bodyMain.jsx";
import Footer from "./components/regions/footer/footer.jsx";
import "../css/App.css";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
/*
  const [tims, setTims] = useState(0); // Total
  const [tps, setTPS] = useState(1); // Passive

  useEffect(() => {
    // Set Timing
    const myInterval = setInterval(() => {
      increaseTims();
    }, 1000 / tps);

    // Stop Timing
    return () => {
      clearInterval(myInterval);
    };
  }, [tps]);

  function increaseTims() {
    setTims((currentTims) => {
      // Local Storage here?
      return currentTims + tps;
    });
  }

  function buyUpgrade() {
    setTPS((currentTPS) => {
      return currentTPS + 1;
    });
  }

  return (
    <div>
      <h1>Tim Clicker</h1>
      <button onClick={increaseTims}>I am a Tim.</button>
      <p>I have {tims} tims.</p>
      <button onClick={buyUpgrade}>I am a Tim v2.</button>
      <p>I have {tps} Tims per sec.</p>
    </div>
  );
}
*/
