import React from "react";
import LinkItem from "./LinkItem";
import itemConfig from "./itemConfig";
import LinkItemProps from "./LinkItemProps";

function generateItems(itemConfig: LinkItemProps[]) {
  let result : LinkItemProps[] = []
  itemConfig.forEach(element => {
    if (process.env[element.env]) {
      //@ts-ignore
      element.url = process.env[element.env];
      result.push(element)
    } 
  });
  return result;
}


function Items() {
  
  let items : LinkItemProps[] = generateItems(itemConfig)

  return (
    <div className="ItemsContainer">
      {items.map(({ name, url, image, env }) => (
        <LinkItem name={name} url={url} image={image} env={env}></LinkItem>
      ))}
    </div>
  );
  
}

export default Items;
