import React from "react";

function Location() {
  return (
    <div className="location">
      {process.env.REACT_APP_LOCATION_URL ? (
        <a href={process.env.REACT_APP_LOCATION_URL}>
          {process.env.REACT_APP_LOCATION_NAME}
        </a>
      ) : (
        <p>{process.env.REACT_APP_LOCATION_NAME}</p>
      )}
    </div>
  );
}

export default Location;
