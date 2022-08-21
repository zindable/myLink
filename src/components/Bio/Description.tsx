import React from "react";

function Description() {
  return (
    <div className="descripttion">
      <p>{process.env.REACT_APP_DESCRIPTION}</p>
    </div>
  );
}

export default Description;
