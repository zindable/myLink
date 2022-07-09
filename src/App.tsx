import React from "react";
import "./normalize.css";
import "./App.css";
import LinkItem from "./components/LinkItem";
import Bio from "./components/Bio";
// import ReactGA from "react-ga";
import GA4React from "ga-4-react";

import linkedin from "./icons/LinkedIn.png";
import github from "./icons/GitHub.png";
import instagram from "./icons/Instagram.webp";
import twitter from "./icons/Twitter.png";
import spotify from "./icons/spotify.png";

function App() {
  const ga4react = new GA4React("G-CF8XQV8CXS");
  ga4react
    .initialize()
    .then()
    .catch();
  // ReactGA.initialize("G-88BY56ZF36");
  // ReactGA.event({
  //   category: "VISIT",
  //   action: "VISIT",
  //   label: "MyLink",
  // });
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
          name={"Instagram"}
          url={"https://www.instagram.com/mariuszindel/"}
          image={instagram}
        ></LinkItem>
        <LinkItem
          name={"GitHub"}
          url={"https://github.com/zindable"}
          image={github}
        ></LinkItem>
        <LinkItem
          name={"Twitter"}
          url={"https://twitter.com/zindable"}
          image={twitter}
        ></LinkItem>
        {/* <LinkItem
          name={"Spotify"}
          url={"https://open.spotify.com/user/1122129947?si=3e1f234a4eef4cc0"}
          image={spotify}
        ></LinkItem> */}
      </div>
    </div>
  );
}

export default App;
