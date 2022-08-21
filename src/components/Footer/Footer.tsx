import React from "react";

let today = new Date();
let year = today.getFullYear();

function Footer() {
  return (
    <div className="FooterContainer">
      <p>{process.env.REACT_APP_USERNAME} © {year}</p>
    </div>
  );
}

export default Footer;
