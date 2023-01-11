import React from "react";

export const PopularCard = ({ image, title, description }) => {
  return (
    <div className="popular-card">
      <div className="image-place">
        <img src={require(`../assets/${image}.png`)} alt="populararticles" />
      </div>
      <p>November 15, 2023</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <span className="read-more">Read More</span>
    </div>
  );
};
