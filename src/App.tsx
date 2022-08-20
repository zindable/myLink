import React from "react";
import "./normalize.css";
import "./App.css";
import Bio from "./components/Bio/Bio";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";

function App() {
  return (
    <div className="App">
      <Bio></Bio>
      <Items></Items>
      <Footer></Footer>
    </div>
  );
}

export default App;
