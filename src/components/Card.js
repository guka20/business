import React from "react";

export const Card = ({ name, title, text }) => {
  
  return (
    <div className="card">
      <img src={require(`../assets/${name}.png`)} alt="card_image" />
      <h2>{title}</h2>
      <p>{text}</p>
      <a href="/">Learn more</a>
    </div>
  );
};
