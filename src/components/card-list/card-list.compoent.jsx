import React from "react";
import "./card-list.styles.css";

import { Card } from "../card/card.component";

export const CardList = ({ monsters }) => {
  return (
    <>
      <p className="card-list-title">List of Users</p>
      <ul className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </ul>
    </>
  );
};
