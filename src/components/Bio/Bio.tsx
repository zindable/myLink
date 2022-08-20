import React from "react";

import Description from "./Description";
import Face from "./Face";
import Location from "./Location";
import Username from "./Username";

function Bio() {
  return (
    <div className="BioContainer">
      <Face></Face>
      <Username></Username>
      <Location></Location>
      <Description></Description>
    </div>
  );
}

export default Bio;
