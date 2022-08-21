import React from "react";
import LinkItemProps from "./LinkItemProps";

function LinkItem(props: LinkItemProps) {
  return (
    <a href={props.url} className="LinkItem">
      <span className="circleImage">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`}
          alt={props.name}
        />
      </span>
      <p>{props.name}</p>
    </a>
  );
}

export default LinkItem;
