import React from "react";

function Face() {
  return (
    <div className="face">
      <span className="circle">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/face.png`}
          alt="Profile Photo"
        />
      </span>
    </div>
  );
}

export default Face;
