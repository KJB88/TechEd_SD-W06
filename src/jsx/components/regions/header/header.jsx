//import { useState, useEffect } from "react";
import Nav from "./nav.jsx";

export default function Header() {
  return (
    <header>
      <div className="title-div">
        <h1>Teach Tim</h1>
        <h2 className="subtitle">The Totally Original Clicker!</h2>
      </div>
      <Nav />
    </header>
  );
}
