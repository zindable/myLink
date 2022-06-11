import React from "react";
import face from "../icons/Marius.jpeg";

function Bio() {
  return (
    <div className="BioContainer">
      <div className="face">
        <span className="circle">
          <img src={face} alt="" />
        </span>
      </div>
      <div className="name">
        <h1>MARIUS ZINDEL</h1>
      </div>
      <div className="descripttion">
        <p>IT student, currently doing absolutely nothing 🙃</p>
      </div>
    </div>
  );
}

export default Bio;
