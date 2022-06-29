import React from "react";
// import logo from "../logo.svg";

interface LinkItemProps {
  name: string;
  url: string;
  image: string;
}

function LinkItem(props: LinkItemProps) {
  return (
    <a href={props.url}>
      <div className="LinkItemContainer">
        <span className="circleImage">
          <img src={props.image} alt="" />
        </span>
        <p>{props.name}</p>
      </div>
    </a>
  );
}

export default LinkItem;
