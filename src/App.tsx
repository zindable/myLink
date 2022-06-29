import React from "react";
import "./normalize.css";
import "./App.css";
import LinkItem from "./components/LinkItem";
import Bio from "./components/Bio";

import linkedin from "./icons/LinkedIn.png";
import github from "./icons/GitHub.png";
import instagram from "./icons/Instagram.webp";
import twitter from "./icons/Twitter.png";

function App() {
  return (
    <div className="App">
      <Bio></Bio>
      <div className="LinkContainer">
        <LinkItem
          name={"LinkedIn"}
          url={"https://www.linkedin.com/in/marius-zindel/"}
          image={linkedin}
        ></LinkItem>
        <LinkItem
          name={"GitHub"}
          url={"https://github.com/zindable"}
          image={github}
        ></LinkItem>
        <LinkItem
          name={"Instagram"}
          url={"https://www.instagram.com/mariuszindel/"}
          image={instagram}
        ></LinkItem>
        <LinkItem
          name={"Twitter"}
          url={"https://twitter.com/zindable"}
          image={twitter}
        ></LinkItem>
        {/* <LinkItem name={"Webpage"} url={url} image={logo}></LinkItem>
        <LinkItem name={"Blog"} url={url} image={logo}></LinkItem>
        <LinkItem name={"mail"} url={url} image={logo}></LinkItem>
        <LinkItem name={"xyz"} url={url} image={logo}></LinkItem>
        <LinkItem name={"NFT"} url={url} image={logo}></LinkItem>
        <LinkItem name={"gugus"} url={url} image={logo}></LinkItem> */}
      </div>
    </div>
  );
}

export default App;
