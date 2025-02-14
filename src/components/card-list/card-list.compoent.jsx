import React from "react";
import "./card-list.styles.css";

export const CardList = ({ monsters }) => {
  return (
    <>
      <ul className="card-list">
        {monsters.map((monster) => (
          <li key={monster.id}>{monster.name}</li>
        ))}
      </ul>
    </>
  );
};
