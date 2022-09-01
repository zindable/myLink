import React from "react";

function Username() {
  return (
    <div className="username">
      <h1>{process.env.REACT_APP_USERNAME}</h1>
    </div>
  );
}

export default Username;
