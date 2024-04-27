//import { useState, useEffect } from "react";
import Nav from "./nav.jsx";
import HeadingTitle from "./headingTitle.jsx";
import "../../../../css/header.css";

export default function Header() {
  return (
    <header>
      <HeadingTitle />
      <Nav />
    </header>
  );
}
