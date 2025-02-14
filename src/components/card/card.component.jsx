import React from "react";
import "./card.styles.css";

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt={`monster-image-${monster.id}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h4>{monster.name}</h4>
      <h6>{monster.email}</h6>
    </div>
  );
};
