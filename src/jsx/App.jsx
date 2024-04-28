//import { useState, useEffect } from "react";
import Header from "./header.jsx";
import Main from "./bodyMain.jsx";
import Footer from "./footer.jsx";
import "../css/App.css";
//import { initialize } from "../js/saveLoadHandler.js";

export default function App() {
  return (
    <>
      <div className="sliding-background"></div>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
