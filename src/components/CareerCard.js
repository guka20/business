import React from "react";

const CareerCard = ({ header, location, type, description }) => {
  return (
    <div className="career-card">
      <h1>{header}</h1>
      <span>
        {location} <b></b> <span>{type}</span>
      </span>
      <p>{description}</p>
      <button className="apply">Apply Now</button>
    </div>
  );
};

export default CareerCard;
