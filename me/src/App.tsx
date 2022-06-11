import React from "react";
import logo from "./icons/Instagram.webp";
import "./normalize.css";
import "./App.css";
import LinkItem from "./components/LinkItem";
import Bio from "./components/Bio";

function App() {
  const name = "Instagram";
  const url = "https://me.zice.ch";

  return (
    <div className="App">
      <Bio></Bio>
      <LinkItem name={name} url={url} image={logo}></LinkItem>
    </div>
  );
}

export default App;
